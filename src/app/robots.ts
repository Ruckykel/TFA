import type { MetadataRoute } from "next";
import { HOMEPAGE_ONLY } from "../lib/routes";

/** While the pre-launch gate is on, only the homepage should be indexed. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: HOMEPAGE_ONLY
      ? { userAgent: "*", allow: "/$", disallow: "/" }
      : { userAgent: "*", allow: "/" },
  };
}
