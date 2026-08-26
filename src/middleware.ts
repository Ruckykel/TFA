import { NextResponse, type NextRequest } from "next/server";
import { HOMEPAGE_ONLY, ALWAYS_ALLOWED } from "./lib/routes";

/**
 * Redirects every non-homepage route to `/` while the pre-launch gate is on.
 * Development is exempt so the finished pages can still be reviewed locally.
 */
export function middleware(request: NextRequest) {
  if (!HOMEPAGE_ONLY) return NextResponse.next();
  if (process.env.NODE_ENV === "development") return NextResponse.next();

  const { pathname } = request.nextUrl;

  if (pathname === "/") return NextResponse.next();
  if (ALWAYS_ALLOWED.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
