import React from "react";
import { LiveLink } from "../LiveLink";
import { WorkTile } from "../WorkTile";
import { recentWorks, studioStills, type Work as WorkItem } from "../../data/works";
import { home } from "../../data/copy";

/**
 * Nine cells stacked as three bento rows on a 4-column grid. Each row tiles
 * exactly to four columns, with the wide cell moving across the rows so the
 * block reads as one composition rather than a repeated pattern:
 *   row one   1 + 2 + 1
 *   row two   1 + 1 + 2
 *   row three 2 + 1 + 1
 *
 * `film` cells take the next project with real media (16:9 thumbnails sit
 * best in the wide cells); `still` cells take the next studio photograph.
 * The mix gives the "combination of all projects" the deck asks for.
 */
const layout: { span: string; kind: "film" | "still" }[] = [
  { span: "md:col-span-1", kind: "still" },
  { span: "md:col-span-2", kind: "film" },
  { span: "md:col-span-1", kind: "still" },

  { span: "md:col-span-1", kind: "film" },
  { span: "md:col-span-1", kind: "still" },
  { span: "md:col-span-2", kind: "film" },

  { span: "md:col-span-2", kind: "film" },
  { span: "md:col-span-1", kind: "still" },
  { span: "md:col-span-1", kind: "still" },
];

export function Work() {
  let film = 0;
  let still = 0;
  const tiles = layout.map(({ span, kind }, i) => {
    const work: WorkItem =
      kind === "film" && recentWorks.length > 0
        ? recentWorks[film++ % recentWorks.length]
        : studioStills[still++ % studioStills.length];
    return { work, span, key: i };
  });

  return (
    <section id="work" className="px-4 py-8 md:px-6 md:py-12" aria-labelledby="work-heading">
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-2">
        <h2 id="work-heading" className="headline flex items-center gap-3 text-2xl md:text-3xl">
          <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-accent" />
          {home.work.title}
        </h2>
        <p className="max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {home.work.intro}
        </p>
      </div>

      {/* Full-width bento: each row is a quarter of the viewport tall, so a
          single cell is square and a double cell is 2:1 */}
      <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:auto-rows-[24vw] md:grid-cols-4 md:gap-4">
        {tiles.map(({ work, span, key }) => (
          <div
            key={key}
            className={`aspect-square md:aspect-auto ${span}`}
          >
            <WorkTile
              work={work}
              fill
              sizes="(max-width: 768px) 50vw, 50vw"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 empty:hidden">
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
    </section>
  );
}
