import React from "react";
import { LiveLink } from "../LiveLink";
import { WorkTile } from "../WorkTile";
import { recentWorks } from "../../data/works";
import { home } from "../../data/copy";

/**
 * Placeholder stills for the homepage grid until each project has its own
 * cut-down clip. Swap these for `/works/*.mp4` on the work items themselves
 * and the grid picks them up automatically.
 */
const placeholders = ["/vid1.jpg", "/vid2.jpg", "/vid3.jpg", "/vid4.jpg"];

/**
 * Ten cells packed into a 6x2 grid so the block reads as one clean rectangle
 * — no ragged bottom edge. Spans are chosen to tile exactly: row one is
 * 1+2+1+1+1, row two is 1+1+1+1+1, with the tall cell bridging both.
 */
const layout = [
  "md:col-span-1 md:row-span-1",
  "md:col-span-2 md:row-span-1",
  "md:col-span-1 md:row-span-2", // tall, bridges both rows
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
  "md:col-span-1 md:row-span-1",
];

export function Work() {
  const tiles = layout.map((span, i) => ({
    work: {
      ...recentWorks[i % recentWorks.length],
      poster: placeholders[i % placeholders.length],
    },
    span,
    key: i,
  }));

  return (
    <section id="work" className="pt-8 pb-14 md:py-24" aria-labelledby="work-heading">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-16">
          <div>
            <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent">
              <span aria-hidden="true" className="h-2.5 w-2.5 bg-accent" />
              {home.work.eyebrow}
            </p>
            <h2 id="work-heading" className="headline mt-4 text-5xl md:text-7xl">
              {home.work.title}
            </h2>
          </div>
          <p className="max-w-xl self-end text-base leading-relaxed text-muted md:text-lg">
            {home.work.intro}
          </p>
        </div>

        {/* Fixed grid: equal rows, flush edges, no masonry ragging */}
        <div className="mt-12 grid grid-cols-2 gap-3 md:mt-20 md:aspect-[3/1] md:grid-cols-6 md:grid-rows-2 md:gap-4">
          {tiles.map(({ work, span, key }) => (
            <div
              key={key}
              className={`aspect-square md:aspect-auto ${span}`}
            >
              <WorkTile
                work={work}
                fill
                sizes="(max-width: 768px) 50vw, 17vw"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 empty:hidden">
          <LiveLink
            href={home.work.cta.href}
            className="group inline-flex items-center gap-3 border border-border px-8 py-4 text-xs uppercase tracking-[0.2em] text-text transition-colors hover:border-accent hover:text-accent"
          >
            {home.work.cta.label}
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </LiveLink>
        </div>
      </div>
    </section>
  );
}
