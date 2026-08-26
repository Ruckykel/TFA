/**
 * Pre-launch gate.
 *
 * While `HOMEPAGE_ONLY` is true, the homepage is the only publicly reachable
 * page. Every other route redirects to `/` in production, and links pointing
 * at gated routes are hidden or flattened to plain text so nothing dead-ends.
 *
 * The pages themselves are fully built and still browsable in local dev, so
 * they can be reviewed before going live.
 *
 * TO LAUNCH THE FULL SITE: set this to false. Nothing else needs changing.
 */
export const HOMEPAGE_ONLY = true;

/** Routes that stay reachable while the gate is on. */
const LIVE_PATHS = ["/"];

/** Paths that must always pass through (assets, metadata, API). */
export const ALWAYS_ALLOWED = [
  "/_next",
  "/favicon.ico",
  "/robots.txt",
  "/sitemap.xml",
  "/api",
];

export function isRouteLive(path: string): boolean {
  if (!HOMEPAGE_ONLY) return true;
  const clean = path.split("?")[0].split("#")[0];
  // In-page anchors and mailto/tel links are never gated.
  if (clean === "" || clean.startsWith("mailto:") || clean.startsWith("tel:")) {
    return true;
  }
  if (/^https?:\/\//.test(clean)) return true;
  return LIVE_PATHS.includes(clean.replace(/\/$/, "") || "/");
}
