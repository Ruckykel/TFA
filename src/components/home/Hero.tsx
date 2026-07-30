"use client";
import React, { useCallback, useMemo, useState } from "react";
import { Container } from "../../components/Container";
import { Button } from "../../components/Button";
import { ContactButton } from "../../components/ContactButton";
import Image from "next/image";
import Link from "next/link";
import { services as servicesData } from "./Services";

export function Hero() {
  const [pageIndex, setPageIndex] = useState(0); // shows two cards per page

  const getBriefText = useCallback((text: string, maxLength: number = 90) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 1) + "…";
  }, []);

  const pages = useMemo(() => {
    const chunks: Array<typeof servicesData> = [] as Array<typeof servicesData>;
    for (let i = 0; i < servicesData.length; i += 2) {
      chunks.push(servicesData.slice(i, i + 2));
    }
    return chunks;
  }, []);

  const canPrev = pageIndex > 0;
  const canNext = pageIndex < pages.length - 1;
  const visibleServices = pages[pageIndex] ?? servicesData.slice(0, 2);

  return (
    <section className="relative isolate -mt-16 pt-24 md:pt-28 pb-8 md:pb-12 min-h-[100dvh] overflow-hidden" aria-label="Hero">
      {/* Ambient accent glow centered to preserve equal side margins */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 -z-10 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" aria-hidden="true" />

      <Container className="pt-6 pb-8 md:pt-8 md:pb-12">
        <div className="grid grid-cols-1 items-center gap-8 md:gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Copy left — centered on mobile */}
          <div className="max-w-3xl text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-text">
              We craft stories that <span className="text-[#00F0FF]">move people.</span>
            </h1>
            <p className="mt-6 text-base md:text-lg text-muted mx-auto lg:mx-0 max-w-xl">
              TFA Studios is a creative agency and media production house built on vision, precision, and the belief that great work changes everything.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 sm:gap-4">
              <Button href="#works" variant="ghost" className="!bg-[#00F0FF] !text-black hover:brightness-110 focus-visible:ring-[#00F0FF] group gap-2">
                <span>Explore Our Work</span>
                <span aria-hidden="true" className="inline-flex items-center transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  {/* Down arrow for scrolling */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer-events-none">
                    <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Button>
              <ContactButton className="inline-flex items-center justify-center rounded-full font-semibold transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:translate-y-[1px] px-5 py-3 text-sm border border-border text-text hover:bg-elevated/60">
                Book a Consultation
              </ContactButton>
            </div>

            {/* Carousel controls */}
            <div className="mt-6 flex items-center justify-center lg:justify-end gap-2">
              <button
                aria-label="Previous services"
                disabled={!canPrev}
                onClick={() => setPageIndex((p) => Math.max(0, p - 1))}
                className={`h-8 w-8 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-colors ${canPrev
                  ? "text-[#00F0FF] border border-[#00F0FF]/50 bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20"
                  : "border border-white/15 bg-white/5 text-white/60"
                  }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto">
                  <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                aria-label="Next services"
                disabled={!canNext}
                onClick={() => setPageIndex((p) => Math.min(pages.length - 1, p + 1))}
                className={`h-8 w-8 rounded-full disabled:opacity-40 disabled:cursor-not-allowed transition-colors ${canNext
                  ? "text-[#00F0FF] border border-[#00F0FF]/50 bg-[#00F0FF]/10 hover:bg-[#00F0FF]/20"
                  : "border border-white/15 bg-white/5 text-white/60"
                  }`}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mx-auto">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Services pager: single row of two cards */}
            <ul role="list" aria-label="TFA Studios services" className="mt-2 md:mt-3 grid grid-cols-2 w-full gap-3 pb-4 md:pb-6">
              {visibleServices.map((s) => (
                <li key={s.title}>
                  <Link href={s.href} className="group block h-[130px] w-full rounded-xl border border-white/10 bg-white/5 p-4 shadow-card backdrop-blur-md transition-all hover:border-white/20 ring-1 ring-[#00F0FF]/10 hover:ring-[#00F0FF]/30 shadow-[0_0_24px_rgba(0,240,255,0.10)] hover:shadow-[0_0_32px_rgba(0,240,255,0.18)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-semibold text-white/70">{/* number intentionally omitted on paged view */}</span>
                      <div className="flex items-center gap-1" aria-hidden="true">
                        <span className="h-2 w-2 rounded-full border border-accent/60" />
                        <span className="h-2 w-2 rounded-full bg-accent/40" />
                      </div>
                    </div>
                    <h3 className="mt-3 text-xs sm:text-sm font-semibold text-text leading-tight">{s.title}</h3>
                    <p className="mt-1 text-[11px] sm:text-xs text-white/70 line-clamp-2">{getBriefText(s.desc, 80)}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Media right: circular placeholder image until loop video is provided */}
          <div className="relative mx-auto overflow-hidden hidden lg:block">
            {/* Decorative ring */}
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-accent/25 via-transparent to-transparent blur-2xl" aria-hidden="true" />
            <div className="relative h-[220px] w-[220px] md:h-[340px] md:w-[340px] lg:h-[420px] lg:w-[420px] overflow-hidden rounded-full ring-1 ring-border/60 shadow-elevated">
              <Image src="/sample2.webp" alt="Showreel placeholder" fill priority sizes="(max-width: 768px) 220px, (max-width: 1024px) 340px, 420px" className="object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
