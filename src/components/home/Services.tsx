"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState, useCallback, useEffect } from "react";
import { Container } from "../../components/Container";

export const services = [
  {
    title: "Video & Film Production",
    desc: "Commercials, brand films, documentaries, and cinematic content that commands attention.",
    href: "/services#video-film",
  },
  {
    title: "Photography",
    desc: "Editorial, product, and portrait photography crafted to elevate your visual identity.",
    href: "/services#photography",
  },
  {
    title: "Design",
    desc: "Brand identity, visual systems, motion graphics, and print that make ideas tangible.",
    href: "/services#design",
  },
  {
    title: "Creative Direction & Marketing",
    desc: "Strategy, concept development, art direction, and campaign planning that unify every element of your brand story.",
    href: "/services#creative-direction",
  },
];

export function Services() {
  const [index, setIndex] = useState(0);
  const total = services.length;
  const current = useMemo(() => services[index % total], [index, total]);
  const [expanded, setExpanded] = useState(0);

  const goPrev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const goNext = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  useEffect(() => {
    setExpanded(0);
  }, [index]);

  const featureItems = useMemo(() => {
    const m: Record<string, { title: string; desc: string }[]> = {
      "Video & Film Production": [
        { title: "Cinematic visuals that tell a story", desc: "End‑to‑end production — scripting, directing, shooting, editing, and color." },
        { title: "Commercials & brand films", desc: "High-impact content for brands that want to be remembered." },
        { title: "Documentary & narrative", desc: "Real stories brought to life through world-class filmmaking." },
      ],
      "Photography": [
        { title: "Editorial & portrait photography", desc: "Crafted images that capture personality, emotion, and brand essence." },
        { title: "Product & commercial shoots", desc: "Clean, compelling product imagery that elevates your visual identity." },
        { title: "Event & lifestyle coverage", desc: "Candid, authentic moments captured with a cinematic eye." },
      ],
      "Design": [
        { title: "Distinctive visual identity", desc: "Logo, type, color, and system rules that scale across touchpoints." },
        { title: "Motion graphics & animation", desc: "Logo stingers, lower thirds, and animated titles that elevate your content." },
        { title: "Print & digital assets", desc: "Shareable brand kits, layouts, and collateral that keep teams aligned." },
      ],
      "Creative Direction & Marketing": [
        { title: "Strategy & concept development", desc: "Art direction and creative strategy that unify every element of your brand." },
        { title: "Campaign planning & execution", desc: "From creatives to deployment and analytics — we close the loop." },
        { title: "Social content & growth", desc: "Content calendars, social strategy, and marketing that drives real results." },
      ],
    };
    return m[current.title] ?? [];
  }, [current.title]);

  return (
    <section id="services" className="py-10 md:py-14">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Header row — text takes full width, arrows below on mobile */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold">Full-Spectrum Creative Services</h2>
            <p className="mt-2 text-muted text-base">We cover every dimension of creative production &mdash; from the initial concept to the final frame. Each discipline informs the others, giving every project a rare cohesion.</p>
          </div>
          <div className="mt-4 flex items-center gap-2">
            <button aria-label="Previous service" onClick={goPrev} className="h-9 w-9 rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/10 text-[#00F0FF] hover:bg-[#00F0FF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto">
                <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button aria-label="Next service" onClick={goNext} className="h-9 w-9 rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/10 text-[#00F0FF] hover:bg-[#00F0FF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF] transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto">
                <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Carousel item */}
          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Left: media */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 ring-1 ring-[#00F0FF]/10 shadow-[0_0_24px_rgba(0,240,255,0.08)]">
              <Image src={index % 2 === 0 ? "/sample1.webp" : "/sample2.webp"} alt={current.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>

            {/* Right: text + tabs */}
            <div className="flex flex-col justify-center">
              <h3 className="text-xl md:text-2xl font-extrabold">{current.title}</h3>
              <p className="mt-3 text-sm md:text-base text-muted">{current.desc}</p>

              {/* Feature tabs */}
              <ul role="list" className="mt-6 space-y-3">
                {featureItems.map((item, i) => (
                  <li key={item.title} className="rounded-lg border border-white/10 bg-white/5">
                    <button
                      type="button"
                      onClick={() => setExpanded((e) => (e === i ? -1 : i))}
                      className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left"
                      aria-expanded={expanded === i}
                    >
                      <span className="inline-flex items-center gap-2">
                        <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_12px_rgba(0,240,255,0.8)]" />
                        <span className="text-sm font-semibold">{item.title}</span>
                      </span>
                      <svg
                        className={`transition-transform ${expanded === i ? "rotate-180" : "rotate-0"}`}
                        width="18" height="18" viewBox="0 0 24 24" fill="none"
                      >
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {expanded === i && (
                      <div className="px-4 pb-4 text-sm text-white/70">
                        {item.desc}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex justify-center md:justify-start">
                <Link href="/services" className="inline-flex items-center rounded-full bg-[#00F0FF] px-4 py-2 text-sm font-semibold text-black hover:brightness-110">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
