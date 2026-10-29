import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { about, collective, serviceDetails } from "../../data/copy";
import { ContactButton } from "../../components/ContactButton";
import { CtaEmail } from "../../components/CtaEmail";
import { ClientLogos } from "../../components/ClientLogos";

export const metadata: Metadata = {
  title: "Who We Are | TFA Studios",
  description:
    "TFA Studios is a Lagos creative agency with an ecosystem of talents dedicated to one goal: connecting hearts and minds through storytelling.",
};

/**
 * Shared section shell: number + label on the left, content on the right.
 * Every section uses it, with the same rhythm, so the page reads as one
 * continuous column rather than a run of separate layouts.
 */
function Section({
  number,
  label,
  aside,
  children,
  after,
}: {
  number: string;
  label: string;
  /** Optional content kept with the heading in the left column. */
  aside?: React.ReactNode;
  children: React.ReactNode;
  /** Full-bleed content under the grid, still inside the section. */
  after?: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-12 md:py-16">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-28">
              <h2 className="headline text-2xl md:text-3xl">
                <span className="text-accent">{number}</span>
                <span className="text-muted"> / </span>
                {label}
              </h2>
              {aside}
            </div>
          </div>
          <div className="md:col-span-8">{children}</div>
        </div>
      </div>
      {after}
    </section>
  );
}

export default function AboutPage() {
  const { punchline, story, services, clients } = about;

  return (
    <main>
      {/* Punchline — statement and photograph share one row */}
      <section className="pt-32 pb-12 md:pt-36 md:pb-16">
        <div className="container-wide grid grid-cols-1 items-end gap-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              {punchline.eyebrow}
            </p>
            <h1 className="rise-in mt-5 font-serif-editorial text-[clamp(2rem,4vw,3.75rem)] leading-[1.08] text-text">
              {punchline.lead}{" "}
              <em className="text-accent">{punchline.emphasis}</em>
            </h1>
            {punchline.body.map((para, i) => (
              <p
                key={i}
                className="rise-in mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
                style={{ animationDelay: "160ms" }}
              >
                {para}
              </p>
            ))}
          </div>
          <div className="md:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden border-2 border-black bg-elevated">
              <Image
                src={punchline.image.src}
                alt={punchline.image.alt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Our Story: the founder's letter */}
      <Section
        number={story.number}
        label={story.label}
        aside={
          <figure className="mt-6 max-w-[16rem]">
            <div className="relative aspect-[2/3] w-full overflow-hidden border-2 border-black bg-elevated">
              <Image
                src={story.portrait.src}
                alt={story.portrait.alt}
                fill
                sizes="(max-width: 768px) 70vw, 256px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-muted">
              {story.signature.name}, Founder
            </figcaption>
          </figure>
        }
      >
        <p className="font-serif-editorial text-2xl leading-snug text-text md:text-3xl">
          {story.lead}
        </p>
        <div className="mt-8 max-w-2xl">
          {story.body.map((para, i) => (
            <p
              key={i}
              className="mt-4 text-base leading-relaxed text-muted first:mt-0"
            >
              {para}
            </p>
          ))}
        </div>

        <blockquote className="my-10 border-l-4 border-accent py-1 pl-6 md:pl-8">
          <p className="font-serif-editorial text-3xl italic leading-tight text-text md:text-4xl">
            {story.question}
          </p>
        </blockquote>

        <div className="max-w-2xl">
          {story.close.map((para, i) => (
            <p
              key={i}
              className="mt-4 text-base leading-relaxed text-muted first:mt-0"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="mt-8 border-t border-border pt-5">
          <p className="font-serif-editorial text-2xl italic text-text">
            {story.signature.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
            {story.signature.role}
          </p>
        </div>
      </Section>

      {/* 02 — What We Do: each row opens that service's work */}
      <Section number={services.number} label={services.label}>
        <ul>
          {serviceDetails.map((s, i) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-border py-4 first:border-t md:gap-6"
              >
                <div className="relative h-16 w-24 shrink-0 overflow-hidden border-2 border-black bg-elevated md:h-20 md:w-32">
                  <Image
                    src={s.image.src}
                    alt=""
                    fill
                    sizes="128px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="text-lg transition-colors group-hover:text-accent md:text-xl">
                    <span className="mr-3 text-xs tabular-nums text-muted">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </p>
                  <p className="mt-1 hidden max-w-lg text-sm leading-relaxed text-muted sm:block">
                    {s.intro}
                  </p>
                </div>
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
      </Section>

      {/* 03 — Our Clients */}
      <Section number={clients.number} label={clients.label}>
        <ClientLogos narrow className="-mx-3" />
      </Section>

      {/* 04 — Our Collective: heading in the shell, photographs run full-bleed */}
      <Section
        number={about.collective.number}
        label={about.collective.label}
        after={
          <div className="mt-10 overflow-hidden md:mt-12">
            {/* The list runs twice so the loop seams invisibly */}
            <ul className="flex w-max animate-[marquee_80s_linear_infinite] gap-3 md:gap-4">
              {[...collective, ...collective].map((photo, i) => (
                <li
                  key={`${photo.src}-${i}`}
                  aria-hidden={i >= collective.length}
                  className="relative h-56 w-44 shrink-0 overflow-hidden bg-elevated md:h-80 md:w-60"
                >
                  <Image
                    src={photo.src}
                    alt={i < collective.length ? photo.alt : ""}
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </li>
              ))}
            </ul>
          </div>
        }
      >
        <h3 className="font-serif-editorial text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-text">
          {about.collective.title}
        </h3>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {about.collective.intro}
        </p>
      </Section>

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
