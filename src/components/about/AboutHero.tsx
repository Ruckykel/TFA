"use client";
import Image from "next/image";
import React from "react";
import { Container } from "../../components/Container";
import { ContactButton } from "../../components/ContactButton";

export function AboutHero() {
  return (
    <section aria-label="About TFA Studios" className="pt-10 md:pt-12 pb-8">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Centered copy */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[11px] tracking-widest text-white/60">ABOUT US</p>
            <h1 className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight">The Future of Digital Creativity, Built Today.</h1>
              At TFA Studios, we believe that creativity thrives at the intersection of imagination and innovation. We&apos;re a multidisciplinary creative agency creating timeless brand stories through design, film, and strategy.
            </p>
            <div className="mt-6">
              <ContactButton className="inline-flex items-center justify-center rounded-full bg-[#00F0FF] px-5 py-3 text-sm font-semibold text-black hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#00F0FF]">Contact Us</ContactButton>
            </div>
          </div>

          {/* Image below copy */}
          <div className="mt-8 relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5">
            <Image src="/sample1.webp" alt="TFA Studios creative workspace" fill className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}
