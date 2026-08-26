import React from "react";
import Link from "next/link";
import { ContactButton } from "../ContactButton";
import { serviceDetails, studio, type ServiceSlug } from "../../data/copy";

/** Shared template for the four service detail pages. */
export function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) return null;

  const others = serviceDetails.filter((s) => s.slug !== slug);

  return (
    <main>
      {/* Hero */}
      <section className="flex min-h-[70vh] items-center pt-28 pb-16">
        <div className="container-wide">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {service.title}
          </p>
          <h1 className="headline rise-in mt-6 text-[clamp(2rem,6.5vw,6rem)] font-medium">
            {service.headline}
          </h1>
          <p className="mt-10 max-w-2xl border-t border-border pt-8 text-base leading-relaxed text-muted md:text-lg">
            {service.intro}
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
            <h2 className="headline text-3xl md:col-span-4 md:text-4xl">
              What&apos;s Included
            </h2>
            <ul className="md:col-span-8 md:grid md:grid-cols-2 md:gap-x-8">
              {service.includes.map((item) => (
                <li
                  key={item}
                  className="border-b border-border py-4 text-lg md:text-xl"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
            <h2 className="headline text-3xl md:col-span-4 md:text-4xl">
              How It Runs
            </h2>
            <div className="md:col-span-8">
              {service.process.map((p) => (
                <div
                  key={p.step}
                  className="grid grid-cols-1 gap-2 border-t border-border py-6 last:border-b md:grid-cols-12 md:gap-8"
                >
                  <span className="text-xs tabular-nums text-accent md:col-span-1">
                    {p.step}
                  </span>
                  <h3 className="text-xl md:col-span-4 md:text-2xl">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-muted md:col-span-7">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container-wide">
          <h2 className="headline text-3xl md:text-4xl">Also From the Studio</h2>
          <ul className="mt-10">
            {others.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between border-t border-border py-6 transition-colors last:border-b hover:text-accent"
                >
                  <span className="text-xl md:text-2xl">{s.title}</span>
                  <span
                    aria-hidden="true"
                    className="text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-20 md:py-32">
        <div className="container-wide text-center">
          <h2 className="headline mx-auto max-w-3xl text-[clamp(2rem,6vw,4.5rem)]">
            Let&apos;s Make Something Worth Remembering.
          </h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <ContactButton className="bg-accent px-10 py-5 text-xs uppercase tracking-[0.2em] text-bg transition-opacity hover:opacity-90">
              Start a Project
            </ContactButton>
            <a
              href={`mailto:${studio.email}`}
              className="text-sm text-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              {studio.email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
