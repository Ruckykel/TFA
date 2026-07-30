import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "../../components/Container";
import { ServicesHero } from "../../components/services/ServicesHero";
import Image from "next/image";
import { services as servicesList } from "../../data/services";
import { Why } from "../../components/home/Why";
import { Featured } from "../../components/home/Featured";

export const metadata: Metadata = {
  title: "Services — TFA Studios",
  description: "Explore all creative services: Video & Film Production, Photography, Design, Creative Direction & Marketing.",
};

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      {/* Services overview grid (2x2) */}
      <section className="py-10 md:py-12">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-[11px] tracking-widest text-white/60">SERVICES</p>
            <h2 className="mt-2 text-2xl md:text-4xl font-extrabold">Our Core Services</h2>
            <p className="mt-2 text-sm md:text-base text-white/70">Explore our primary offerings across production, branding, marketing, and web.</p>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {servicesList.slice(0, 4).map((s, idx) => {
              const slugMap: Record<string, string> = {
                "Video & Film Production": "/services/video-film",
                "Photography": "/services/photography",
                "Design": "/services/design",
                "Creative Direction & Marketing": "/services/creative-direction",
              };
              const href = slugMap[s.title] ?? s.href;
              const img = idx % 2 === 0 ? "/sample1.webp" : "/sample2.webp";
              return (
                <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-card">
                  <div className="relative h-40 w-full overflow-hidden rounded-lg">
                    <Image src={img} alt={s.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-base md:text-lg font-bold">{s.title}</h3>
                      <p className="mt-1 text-xs md:text-sm text-white/70">{s.desc}</p>
                    </div>
                    <Link href={href} aria-label={`Open ${s.title}`} className="shrink-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#00F0FF] text-black hover:brightness-110">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9 7H17V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why section before CTA */}
      <Why />

      {/* Featured before CTA */}
      <Featured />

      {/* Bottom CTA */}
      <section className="py-16">
        <Container>
          <div className="relative text-center overflow-hidden rounded-2xl py-12 px-6">
            <div className="pointer-events-none absolute -left-12 -top-12 h-40 w-40 md:h-56 md:w-56 rounded-full bg-[#00F0FF]/10 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-12 -bottom-10 h-40 w-40 md:h-56 md:w-56 rounded-full bg-[#00F0FF]/10 blur-3xl" aria-hidden="true" />
            <h2 className="text-3xl md:text-4xl font-extrabold">Your Story Deserves a Cinematic Touch.</h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm md:text-base text-white/70">Let&apos;s craft something unforgettable — from concept to post-production.</p>
            <Link href="/contact#contact-form" className="mt-6 inline-flex items-center justify-center rounded-full bg-[#00F0FF] px-6 py-3 text-sm font-semibold text-black hover:brightness-110">Start Your Project</Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
