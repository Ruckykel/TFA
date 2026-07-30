"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useState, useRef, useCallback } from "react";
import { Container } from "../../components/Container";

const videoFilm = [
  { title: "Mara Mania", href: "https://youtu.be/N2t_YyIgiQ8", img: "https://img.youtube.com/vi/N2t_YyIgiQ8/maxresdefault.jpg", tag: "Documentary" },
  { title: "Sounds Of Nollywood", href: "https://youtu.be/CDJulHBPYxE", img: "https://img.youtube.com/vi/CDJulHBPYxE/maxresdefault.jpg", tag: "Documentary" },
  { title: "GOOGLE", href: "https://youtu.be/8fiNlWEeQuI", img: "https://img.youtube.com/vi/8fiNlWEeQuI/maxresdefault.jpg", tag: "Campaign" },
  { title: "Uber", href: "https://youtu.be/VXY2kKBuDcA", img: "https://img.youtube.com/vi/VXY2kKBuDcA/maxresdefault.jpg", tag: "Commercial" },
  { title: "DELYORKE", href: "https://youtu.be/2q6PZJUGeKc", img: "https://img.youtube.com/vi/2q6PZJUGeKc/maxresdefault.jpg", tag: "Campaign" },
];

const photography = [
  { title: "Editorial Shoot", href: "#", img: "/sample2.webp", tag: "Photography" },
  { title: "Product Campaign", href: "#", img: "/sample1.webp", tag: "Photography" },
  { title: "Event Coverage", href: "#", img: "/sample2.webp", tag: "Photography" },
  { title: "Lifestyle Portraits", href: "#", img: "/sample1.webp", tag: "Photography" },
];

const design = [
  { title: "Brand Identity", href: "#", img: "/sample1.webp", tag: "Design" },
  { title: "UI/UX Design", href: "#", img: "/sample2.webp", tag: "Design" },
  { title: "Motion Graphics", href: "#", img: "/sample1.webp", tag: "Design" },
  { title: "Print Collateral", href: "#", img: "/sample2.webp", tag: "Design" },
];

const marketing = [
  { title: "Social Campaign", href: "#", img: "/sample2.webp", tag: "Marketing" },
  { title: "Content Strategy", href: "#", img: "/sample1.webp", tag: "Marketing" },
  { title: "Brand Activation", href: "#", img: "/sample2.webp", tag: "Marketing" },
];

export function Featured() {
  const tabs = useMemo(() => [
    { key: "video", label: "Video & Film Production", items: videoFilm },
    { key: "photography", label: "Photography", items: photography },
    { key: "design", label: "Design", items: design },
    { key: "marketing", label: "Creative Direction & Marketing", items: marketing },
  ], []);
  const [active, setActive] = useState("video");
  const activeItems = tabs.find(t => t.key === active)?.items ?? videoFilm;
  const listRef = useRef<HTMLDivElement>(null);
  const scrollByViewport = useCallback((direction: "prev" | "next") => {
    const el = listRef.current;
    if (!el) return;
    const amount = el.clientWidth;
    el.scrollBy({ left: direction === "next" ? amount : -amount, behavior: "smooth" });
  }, []);

  // Accent function removed (no colored borders needed)

  const websiteDesc: Record<string, string> = {
    "Mara Mania": "Exploring the sound of Lagos' underground Mara movement.",
    "Sounds Of Nollywood": "Spotlighting the sonic storytellers shaping Nollywood.",
    "GOOGLE": "A promotional campaign featuring Layi Wasabi.",
    "Uber": "A narrative-driven commercial campaign created for Uber.",
    "DELYORKE": "Highlighting the experiences of Del-York Creative Academy participants."
  };

  return (
    <section className="py-10 md:py-14" id="works">
      <Container>
        {/* Center the header & subtext */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold">See what we&apos;ve created.</h2>
          <p className="mt-2 text-muted">Browse by category to explore work we&apos;ve delivered.</p>
        </div>

        {/* Sliding segmented control */}
        <div className="mt-8">
          {/* Mobile: simple button row that wraps; Desktop: pill slider */}
          <div className="flex md:hidden flex-wrap gap-2 justify-center">
            {tabs.map((t) => (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${active === t.key ? "bg-[#00F0FF] text-black" : "bg-white/5 text-white ring-1 ring-white/10"}`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="hidden md:block relative mx-auto w-full max-w-4xl rounded-full bg-white/5 ring-1 ring-white/10 shadow-card px-1 py-1">
            {/* Sliding highlight */}
            <div
              className="pointer-events-none absolute inset-y-1 left-1 w-1/4 rounded-full bg-[#00F0FF] transition-transform duration-200"
              style={{ transform: `translateX(${(tabs.findIndex(t => t.key === active)) * 100}%)` }}
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-4">
              {tabs.map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActive(t.key)}
                  className={`z-10 flex items-center justify-center rounded-full px-2 py-2 text-sm font-semibold transition-colors text-center ${active === t.key ? "text-black" : "text-white"}`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel controls */}
        <div className="mt-6 flex items-center justify-end gap-2">
          <button aria-label="Previous projects" onClick={() => scrollByViewport("prev")} className="h-9 w-9 rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/10 text-[#00F0FF] hover:bg-[#00F0FF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto"><path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button aria-label="Next projects" onClick={() => scrollByViewport("next")} className="h-9 w-9 rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/10 text-[#00F0FF] hover:bg-[#00F0FF]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>

        <div ref={listRef} className="mt-6 flex gap-6 overflow-x-auto pb-2 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {activeItems.map((item, idx) => {
            const description = websiteDesc[item.title] ?? `${item.tag} showcase`;
            return (
              <Link
                key={idx}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-start shrink-0 w-[260px] sm:w-[320px] lg:w-[360px] group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-card hover:shadow-elevated transition-shadow"
              >
                {/* Layered image stack */}
                <div className="p-4">
                  <div className="relative">
                    <div className="absolute inset-0 translate-y-10 scale-[0.92] rounded-2xl bg-white/5" aria-hidden="true" />
                    <div className="absolute inset-0 translate-y-6 scale-[0.96] rounded-2xl bg-white/5" aria-hidden="true" />
                    <div className="relative overflow-hidden rounded-2xl">
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <Image src={item.img} alt={item.title} fill sizes="(max-width: 640px) 260px, (max-width: 1024px) 320px, 360px" className="object-cover" />
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <h3 className="text-base font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-white/70">{description}</p>
                    </div>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#00F0FF] text-black shadow-[0_8px_24px_rgba(0,240,255,0.25)]">
                      ↗
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View Portfolio button — always visible, styled as a proper button */}
        <div className="mt-8 text-center">
          <Link href="/portfolio" className="inline-flex items-center justify-center rounded-full border border-[#00F0FF]/50 bg-[#00F0FF]/10 px-6 py-3 text-sm font-semibold text-[#00F0FF] hover:bg-[#00F0FF]/20 transition-colors">
            View Full Portfolio
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-2">
              <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9 7H17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}
