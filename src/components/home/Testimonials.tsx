import React from "react";
import Image from "next/image";
import { Container } from "../../components/Container";

const testimonials = [
  {
    quote: "TFA Studios captured our wedding perfectly — the video still makes me tear up!",
    author: "Anita & Chuka",
    role: "Wedding Clients",
  },
  {
    quote: "We rented a full kit for a weekend shoot — gear was clean, reliable, and pickup was easy.",
    author: "Korede",
    role: "Videographer",
  },
  {
    quote: "Our brand launch visuals got massive engagement thanks to their design team.",
    author: "Tomi",
    role: "Brand Manager",
  },
];

export function Testimonials() {
  return (
    <section className="py-10">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold">What clients say</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <figure key={t.author} className="relative overflow-hidden rounded-lg border border-border/60 bg-elevated/60 p-6 shadow-card backdrop-blur">
                <div className="pointer-events-none absolute -left-10 -top-10 h-36 w-36 rounded-full bg-accent/10 blur-2xl" />
                <blockquote className="text-base">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-muted">— {t.author}, {t.role}</figcaption>
              </figure>
            ))}
          </div>
          <div className="md:col-span-1 relative rounded-lg overflow-hidden border border-border/60 bg-elevated/60 shadow-card backdrop-blur min-h-[260px]">
            <Image src="/sample1.webp" alt="What clients say" fill className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}


