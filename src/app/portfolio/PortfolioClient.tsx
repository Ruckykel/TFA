"use client";
import React, { useMemo, useState } from "react";
import { WorkTile } from "../../components/WorkTile";
import {
  works,
  categoryLabels,
  categoryOrder,
  type Category,
} from "../../data/works";
import { portfolio } from "../../data/copy";

type Filter = Category | "all";

/** Staggered ratios so the grid keeps the wall rhythm rather than a flat table. */
const aspects = [
  "aspect-[3/4]",
  "aspect-[16/10]",
  "aspect-square",
  "aspect-[9/16]",
  "aspect-[16/10]",
  "aspect-[3/4]",
];

export default function PortfolioClient() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(
    () => (filter === "all" ? works : works.filter((w) => w.category === filter)),
    [filter]
  );

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    ...categoryOrder.map((c) => ({ key: c as Filter, label: categoryLabels[c] })),
  ];

  return (
    <main>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-wide">
          <h1 className="headline text-[clamp(2.5rem,8vw,8rem)] font-medium">
            {portfolio.title}
          </h1>
          <p className="mt-8 max-w-xl border-t border-border pt-8 text-base leading-relaxed text-muted md:text-lg">
            {portfolio.intro}
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[68px] z-30 border-y border-border bg-bg/90 backdrop-blur-md">
        <div className="container-wide">
          <div className="flex gap-6 overflow-x-auto py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`shrink-0 text-xs uppercase tracking-[0.2em] transition-colors ${
                  filter === f.key
                    ? "text-accent"
                    : "text-muted hover:text-text"
                }`}
                aria-pressed={filter === f.key}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 md:py-20">
        <div className="container-wide">
          <div className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
            {filtered.map((work, i) => (
              <WorkTile
                key={`${work.category}-${work.title}-${i}`}
                work={work}
                aspect={aspects[i % aspects.length]}
                className="mb-3 break-inside-avoid md:mb-4"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            ))}
          </div>

          <p className="mt-12 text-sm text-muted">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}
          </p>
        </div>
      </section>
    </main>
  );
}
