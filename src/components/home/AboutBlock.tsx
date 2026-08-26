import React from "react";
import { LiveLink } from "../LiveLink";
import { home, studio } from "../../data/copy";

/** Short about statement — the full story lives on /about. */
export function AboutBlock() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="about-heading">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent">
              <span aria-hidden="true" className="h-2.5 w-2.5 bg-mauve" />
              {home.about.eyebrow}
            </p>
            <h2 id="about-heading" className="headline mt-4 text-4xl md:text-5xl">
              {home.about.title}
            </h2>
            <span className="mt-6 inline-block border-2 border-black bg-custard px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-black">
              Est. {studio.founded} — Lagos
            </span>
          </div>

          <div className="md:col-span-8">
            {home.about.body.map((para, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-serif-editorial text-2xl leading-snug text-text md:text-3xl"
                    : "mt-6 text-base leading-relaxed text-muted"
                }
              >
                {para}
              </p>
            ))}

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
        </div>
      </div>
    </section>
  );
}
