import React from "react";
import { studio } from "../data/copy";

/**
 * Studio email set as a display line under a CTA: italic serif with a short
 * accent rule that lengthens on hover.
 */
export function CtaEmail() {
  return (
    <a
      href={`mailto:${studio.email}`}
      className="group inline-flex flex-col items-center"
    >
      <span className="font-serif-editorial text-2xl italic text-text transition-colors group-hover:text-accent md:text-3xl">
        {studio.email}
      </span>
      <span
        aria-hidden="true"
        className="mt-3 h-0.5 w-16 bg-accent transition-all duration-300 group-hover:w-28"
      />
    </a>
  );
}
