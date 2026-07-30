"use client";
import React from "react";
import { Container } from "../../components/Container";
import { ContactButton } from "../../components/ContactButton";

export function Why() {
  return (
    <section aria-label="A Creative Partner That Thinks Beyond Pixels" className="relative isolate py-10 md:py-14">
      <Container>
        <div className="mx-auto max-w-6xl">
          <div>
            <div className="min-w-0">
              <p className="text-[11px] tracking-widest text-white/60">WHY CHOOSE TFA STUDIOS</p>
              <h2 className="mt-2 text-2xl md:text-4xl font-extrabold">A Creative Partner That <span className="text-[#00F0FF]">Thinks</span> <span className="text-[#00F0FF]">Beyond Pixels</span></h2>
              <p className="mt-3 max-w-2xl text-sm md:text-base text-muted">We don&apos;t just deliver projects — we build long-term creative relationships. Our team blends artistry with strategy to create work that looks great and performs even better.</p>
            </div>
          </div>

          {/* Highlights only (no curve, dots, or numbers) */}
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur-md ring-1 ring-[#00F0FF]/10">
              <h3 className="text-sm font-semibold">Full-Service Production</h3>
              <p className="mt-1 text-xs text-white/70">Video, film, photography, design, and marketing under one roof.</p>
            </div>
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur-md ring-1 ring-[#00F0FF]/10">
              <h3 className="text-sm font-semibold">Collaborative Process</h3>
              <p className="mt-1 text-xs text-white/70">We co-create with you — transparent, aligned, and iterative.</p>
            </div>
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur-md ring-1 ring-[#00F0FF]/10">
              <h3 className="text-sm font-semibold">Data-Driven Creativity</h3>
              <p className="mt-1 text-xs text-white/70">Ideas powered by insights for work that performs.</p>
            </div>
            <div className="relative rounded-xl border border-white/10 bg-white/5 p-5 shadow-card backdrop-blur-md ring-1 ring-[#00F0FF]/10">
              <h3 className="text-sm font-semibold">Consistent Brand Evolution</h3>
              <p className="mt-1 text-xs text-white/70">We grow with you — ensuring relevance and impact over time.</p>
            </div>
          </div>
          <div className="mt-8">
            <ContactButton className="inline-flex items-center rounded-full bg-[#00F0FF] px-4 py-2 text-sm font-semibold text-black hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00F0FF]">Get Started</ContactButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
