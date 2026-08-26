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
        {/* Heading left, bracketed note right */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-center md:gap-16">
          <h2 id="services-heading" className="headline text-5xl md:text-6xl">
            <span className="font-light text-mauve">What </span>
            <span className="font-bold text-accent">we do</span>
          </h2>

          <p className="relative max-w-xs self-center px-4 py-3 text-center text-[11px] uppercase leading-relaxed tracking-[0.1em] text-muted">
            <span aria-hidden="true" className="absolute left-0 top-0 h-2.5 w-2.5 border-l border-t border-accent" />
            <span aria-hidden="true" className="absolute right-0 top-0 h-2.5 w-2.5 border-r border-t border-accent" />
            <span aria-hidden="true" className="absolute bottom-0 left-0 h-2.5 w-2.5 border-b border-l border-accent" />
            <span aria-hidden="true" className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b border-r border-accent" />
            {home.services.note}
          </p>
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
