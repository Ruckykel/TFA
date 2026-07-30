import React from "react";
import { Container } from "../../components/Container";

export function OurStory() {
  return (
    <section aria-label="Our Story" className="py-8">
      <Container>
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
          <div>
            <p className="text-[11px] tracking-widest text-white/60">OUR STORY</p>
            <h2 className="mt-2 text-2xl md:text-4xl font-extrabold">Born from Passion. <span className="text-[#00F0FF]">Driven by Purpose.</span></h2>
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-2xl">
              TFA Studios started as a vision — a belief that great content goes beyond aesthetics; it inspires connection.
              From our beginnings in creative media production to our expansion into branding, marketing, and web technology,
              we’ve grown into a collective of thinkers, storytellers, and digital architects who thrive on transforming ideas into experiences.
            </p>
          </div>
          <div>
            <figure className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-card">
              <blockquote className="text-lg md:text-xl font-semibold text-white/90">
                “We don’t just create visuals. We create impact — moments that stick, stories that spread, and brands that last.”
              </blockquote>
              <figcaption className="mt-3 text-xs text-white/60">The TFA Studios ethos</figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}


