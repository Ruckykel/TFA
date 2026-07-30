"use client";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "../../components/Container";

export function Stats() {
  const targets = { years: 7, projects: 120, clients: 45, awards: 12 };
  const [counts, setCounts] = useState({ years: 0, projects: 0, clients: 0, awards: 0 });
  const startedRef = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            animateNumbers();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(node);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animateNumbers = () => {
    const duration = 1800;
    const start = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setCounts({
        years: Math.round(targets.years * t),
        projects: Math.round(targets.projects * t),
        clients: Math.round(targets.clients * t),
        awards: Math.round(targets.awards * t),
      });
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  return (
    <section aria-label="Stats" className="-mt-6 md:-mt-10 pt-2 md:pt-3 pb-6 md:pb-8">
      <Container>
        <div ref={ref} className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">{counts.years}+</div>
            <p className="mt-1 text-white/70 text-sm">Years of Craft</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">{counts.projects}+</div>
            <p className="mt-1 text-white/70 text-sm">Projects Delivered</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">{counts.clients}+</div>
            <p className="mt-1 text-white/70 text-sm">Happy Clients</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-extrabold">{counts.awards}</div>
            <p className="mt-1 text-white/70 text-sm">Industry Awards</p>
          </div>
        </div>
      </Container>
    </section>
  );
}


