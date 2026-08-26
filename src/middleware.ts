import { NextResponse, type NextRequest } from "next/server";
import { HOMEPAGE_ONLY, ALWAYS_ALLOWED } from "./lib/routes";

/** Anything with a file extension is a static asset, never a page. */
const STATIC_FILE = /\.[a-zA-Z0-9]+$/;

/**
 * Redirects every non-homepage route to `/` while the pre-launch gate is on.
 * Development is exempt so the finished pages can still be reviewed locally.
 *
 * Static assets must pass through untouched — redirecting `/vid1.jpg` hands
 * the browser HTML where it expected image bytes, which breaks every image
 * served from /public.
 */
export function middleware(request: NextRequest) {
  if (!HOMEPAGE_ONLY) return NextResponse.next();
  if (process.env.NODE_ENV === "development") return NextResponse.next();

  const { pathname } = request.nextUrl;

  if (pathname === "/") return NextResponse.next();
  if (STATIC_FILE.test(pathname)) return NextResponse.next();
  if (ALWAYS_ALLOWED.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.search = "";
  return NextResponse.redirect(url);
}

export const config = {
  /*
   * Kept deliberately simple. An escaped dot in the matcher is stripped
   * during the build, leaving `.*..*` — where the unescaped dot matches any
   * character, so the lookahead rejects every path and the middleware stops
   * running at all. The static-asset check lives in the handler above
   * instead, where it is not subject to that rewriting.
   */
  matcher: ["/((?!_next/static|_next/image|_next/data|favicon.ico).*)"],
};
