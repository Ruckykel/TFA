"use client";
import React from "react";
import { ContactButton } from "../ContactButton";
import { home, studio } from "../../data/copy";

export function CTA() {
  return (
    <section className="py-20 md:py-32" aria-labelledby="cta-heading">
      <div className="container-wide text-center">
        <h2
          id="cta-heading"
          className="headline mx-auto max-w-4xl text-[clamp(2rem,6vw,5rem)]"
        >
          {home.cta.title}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted">
          {home.cta.body}
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-8">
          <ContactButton className="border-2 border-black bg-accent px-12 py-5 text-xs uppercase tracking-[0.2em] text-black transition-all hover:-translate-y-1 hover:bg-cream">
            {home.cta.button}
          </ContactButton>

          {/* Email set as a display line rather than a plain link */}
          <a
            href={`mailto:${studio.email}`}
            className="group inline-flex flex-col items-center"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted">
              Or write to us
            </span>
            <span className="mt-2 font-serif-editorial text-2xl italic text-text decoration-accent decoration-2 underline-offset-8 transition-colors group-hover:text-accent group-hover:underline md:text-3xl">
              {studio.email}
            </span>
            <span
              aria-hidden="true"
              className="mt-3 h-0.5 w-16 bg-accent transition-all duration-300 group-hover:w-28"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
