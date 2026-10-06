import React from "react";
import Image from "next/image";
import { LiveLink } from "../LiveLink";
import { home, studio } from "../../data/copy";

/**
 * Short about statement — the full story lives on /about.
 *
 * Header row carries the badge alongside the title; beneath it the copy sits
 * beside a studio photograph, which keeps the line length readable at 1280px.
 */
export function AboutBlock() {
  const [lead, ...rest] = home.about.body;

  return (
    <section className="py-10 md:py-14" aria-labelledby="about-heading">
      <div className="container-wide">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <h2
            id="about-heading"
            className="headline flex items-center gap-3 text-2xl md:text-3xl"
          >
            <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-mauve" />
            {home.about.title}
          </h2>

          <span className="border-2 border-black bg-custard px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-black">
            Est. {studio.founded}, Lagos
          </span>
        </div>

        <div className="mt-6 grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            {/* The belief, set as the lead: it is the line the deck bolds */}
            <p className="font-serif-editorial text-2xl leading-snug text-text md:text-3xl">
              {lead}
            </p>

            <div className="mt-6">
              {rest.map((para, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-base leading-relaxed text-muted md:text-lg"
                      : "mt-4 text-base leading-relaxed text-muted md:text-lg"
                  }
                >
                  {para}
                </p>
              ))}
            </div>

            <LiveLink
              href={home.about.cta.href}
              className="group mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text transition-colors hover:text-accent"
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

          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-black bg-elevated">
              <Image
                src={home.about.image.src}
                alt={home.about.image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
