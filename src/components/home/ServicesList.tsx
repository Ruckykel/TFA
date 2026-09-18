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
    <section className="py-10 md:py-14" aria-labelledby="services-heading">
      <div className="container-wide">
        <div className="text-center">
          <h2 id="services-heading" className="headline flex items-center justify-center gap-3 text-2xl md:text-3xl">
            <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-accent" />
            <span className="font-light text-mauve">What </span>
            <span className="font-bold text-accent">we do</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {home.services.note}
          </p>
        </div>

        {/* Square blocks. h-full on both the cell and the block: the grid row
            stretches the <li>, but the block only matches that height if it is
            also told to fill its own cell. */}
        <ul className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 md:mt-10 md:gap-6">
          {home.services.items.map((s) => (
            <li key={s.title} className="h-full">
              <LiveLink
                href={s.href}
                gated="text"
                className={`flex h-full min-h-[96px] items-center justify-center border-2 border-black px-8 py-6 text-center text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1 md:text-base ${
                  blockColor[s.color] ?? "bg-elevated"
                }`}
              >
                {s.title}
              </LiveLink>
            </li>
          ))}
        </ul>

        <div className="mt-8 text-center empty:hidden">
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
