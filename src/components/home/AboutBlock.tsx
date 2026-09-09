import React from "react";
import { LiveLink } from "../LiveLink";
import { home, studio } from "../../data/copy";

/**
 * Short about statement — the full story lives on /about.
 *
 * Header row carries the badge alongside the title; subtext and body then
 * run the full width of the container beneath it, the body split into two
 * columns so the line length stays readable at 1280px.
 */
export function AboutBlock() {
  const [lead, ...rest] = home.about.body;

  return (
    <section className="py-16 md:py-24" aria-labelledby="about-heading">
      <div className="container-wide">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <h2
            id="about-heading"
            className="headline flex items-center gap-3 text-4xl md:text-5xl"
          >
            <span aria-hidden="true" className="h-3 w-3 shrink-0 bg-mauve" />
            {home.about.title}
          </h2>

          <span className="border-2 border-black bg-custard px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-black">
            Est. {studio.founded}, Lagos
          </span>
        </div>

        <p className="mt-6 text-base leading-relaxed text-muted md:text-lg">
          {lead}
        </p>

        <div className="mt-8">
          {rest.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-base leading-relaxed text-muted md:text-lg"
                  : "mt-6 text-base leading-relaxed text-muted md:text-lg"
              }
            >
              {para}
            </p>
          ))}
        </div>

        <LiveLink
          href={home.about.cta.href}
          className="group mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text transition-colors hover:text-accent"
        >
          {home.about.cta.label}
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </LiveLink>
      </div>
    </section>
  );
}
