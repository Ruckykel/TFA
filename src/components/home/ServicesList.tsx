import React from "react";
import { LiveLink } from "../LiveLink";
import { home } from "../../data/copy";

/**
 * Square bordered blocks, one brand colour each. Black type and a black
 * border on every fill, so each block clears contrast on its own ground.
 */
const blockColor: Record<string, string> = {
  accent: "bg-accent",
  custard: "bg-custard",
  mauve: "bg-mauve",
  cream: "bg-cream",
};

export function ServicesList() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="services-heading">
      <div className="container-wide">
        {/* Heading left, note right */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-center md:gap-16">
          <h2
            id="services-heading"
            className="headline max-w-lg text-4xl md:text-5xl lg:text-6xl"
          >
            <span className="font-light text-mauve">Every story </span>
            <span className="font-bold text-accent">needs the right hands</span>
          </h2>

          {/* Stacked colour rules instead of corner brackets */}
          <div className="max-w-xs self-center md:self-end md:pb-2">
            <span aria-hidden="true" className="mb-4 flex gap-1">
              <span className="h-1.5 w-8 bg-accent" />
              <span className="h-1.5 w-4 bg-custard" />
              <span className="h-1.5 w-2 bg-mauve" />
            </span>
            <p className="text-[11px] uppercase leading-relaxed tracking-[0.15em] text-muted">
              {home.services.note}
            </p>
          </div>
        </div>

        {/* Square blocks */}
        <ul className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 md:mt-16 md:gap-6">
          {home.services.items.map((s) => (
            <li key={s.title}>
              <LiveLink
                href={s.href}
                gated="text"
                className={`flex min-h-[88px] items-center justify-center border-2 border-black px-8 py-6 text-center text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1 md:text-base ${
                  blockColor[s.color] ?? "bg-elevated"
                }`}
              >
                {s.title}
              </LiveLink>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center empty:hidden">
          <LiveLink
            href={home.services.cta.href}
            className="group inline-flex items-center gap-3 border-2 border-black px-8 py-4 text-xs uppercase tracking-[0.2em] text-text transition-colors hover:bg-accent"
          >
            {home.services.cta.label}
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </LiveLink>
        </div>
      </div>
    </section>
  );
}
