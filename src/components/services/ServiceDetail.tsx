import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ContactButton } from "../ContactButton";
import { CtaEmail } from "../CtaEmail";
import { WorkTile } from "../WorkTile";
import { serviceDetails, type ServiceSlug } from "../../data/copy";
import { works } from "../../data/works";

/**
 * Shared template for the four service pages. Per the client meeting: a
 * cover image carrying only the essential text, then straight into the work
 * for that discipline. Tiles without media yet render as placeholders and
 * become links as soon as a project gets an `href` in data/works.ts.
 */
export function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const service = serviceDetails.find((s) => s.slug === slug);
  if (!service) return null;

  const projects = works.filter((w) => service.categories.includes(w.category));
  const others = serviceDetails.filter((s) => s.slug !== slug);

  return (
    <main>
      {/* Cover */}
      <section className="px-4 pt-24 md:px-6 md:pt-28">
        <div className="relative h-[62vh] min-h-[420px] w-full overflow-hidden border-2 border-black bg-elevated md:h-[72vh]">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/0" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              {service.title}
            </p>
            <h1 className="headline rise-in mt-4 max-w-4xl text-[clamp(2rem,5vw,4.5rem)] font-medium text-white">
              {service.headline}
            </h1>
          </div>
        </div>
      </section>

      {/* The essentials: one line and what's covered */}
      <section className="py-10 md:py-12">
        <div className="container-wide grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
          <p className="text-base leading-relaxed text-muted md:col-span-6 md:text-lg">
            {service.intro}
          </p>
          <ul className="flex flex-wrap content-start gap-2 md:col-span-6">
            {service.includes.map((item) => (
              <li
                key={item}
                className="border border-border px-3 py-1.5 text-xs uppercase tracking-[0.15em] text-text"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* The work */}
      <section className="border-t border-border py-10 md:py-14" aria-labelledby="service-work">
        <div className="container-wide">
          <div className="flex items-baseline justify-between gap-6">
            <h2 id="service-work" className="headline flex items-center gap-3 text-2xl md:text-3xl">
              <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-accent" />
              The Work
            </h2>
            <span className="text-xs tabular-nums text-muted">
              {projects.length} {projects.length === 1 ? "project" : "projects"}
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 md:mt-8 md:grid-cols-3 md:gap-4">
            {projects.map((work, i) => (
              <WorkTile
                key={`${work.category}-${work.title}-${i}`}
                work={work}
                aspect="aspect-[4/3]"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Other services, as covers */}
      <section className="border-t border-border py-10 md:py-14" aria-labelledby="other-services">
        <div className="container-wide">
          <h2 id="other-services" className="headline text-xl md:text-2xl">
            Also From the Studio
          </h2>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-black bg-elevated">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-sm font-medium text-white">
                      {s.title}
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container-wide text-center">
          <h2 className="headline mx-auto max-w-3xl text-[clamp(2rem,6vw,4.5rem)]">
            Let&apos;s Make Something Worth Remembering.
          </h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-8">
            <ContactButton className="border-2 border-black bg-accent px-10 py-5 text-xs uppercase tracking-[0.2em] text-black transition-all hover:-translate-y-1 hover:bg-cream">
              Start a Project
            </ContactButton>
            <CtaEmail />
          </div>
        </div>
      </section>
    </main>
  );
}
