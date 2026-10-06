import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { about, collective, studio } from "../../data/copy";
import { ContactButton } from "../../components/ContactButton";
import { CtaEmail } from "../../components/CtaEmail";

export const metadata: Metadata = {
  title: "Who We Are | TFA Studios",
  description:
    "TFA Studios is a Lagos creative studio of filmmakers, photographers, designers, and creative thinkers, built on one belief: good ideas deserve to be felt.",
};

/** Shared section shell: number + label on the left, content on the right. */
function Section({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-border py-16 md:py-24">
      <div className="container-wide">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <h2 className="headline text-3xl md:sticky md:top-28 md:text-4xl">
              <span className="text-accent">{number}</span>
              <span className="text-muted"> / </span>
              {label}
            </h2>
          </div>
          <div className="md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

/**
 * Desktop positions for the photographs scattered around the collective
 * heading, after the "assembly" reference in the deck. Each frame sits in
 * the margin outside the centred copy column; on mobile they fall back to a
 * plain grid beneath it.
 */
const scatter = [
  "left-[2%] top-[4%] w-[17%] -rotate-2",
  "right-[4%] top-[10%] w-[14%] rotate-2",
  "left-[6%] bottom-[8%] w-[15%] rotate-1",
  "right-[2%] bottom-[4%] w-[18%] -rotate-1",
  "left-[24%] -top-[4%] w-[11%] rotate-3",
];

export default function AboutPage() {
  const { punchline, story, think, services, clients } = about;

  return (
    <main>
      {/* Punchline */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container-wide">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {punchline.eyebrow}
          </p>
          <h1 className="rise-in mt-6 max-w-5xl font-serif-editorial text-[clamp(2rem,4.6vw,4.25rem)] leading-[1.08] text-text">
            {punchline.lead}{" "}
            <em className="text-accent">{punchline.emphasis}</em>
          </h1>

          <div
            className="rise-in mt-12 grid grid-cols-1 gap-10 border-t border-border pt-10 md:grid-cols-12 md:gap-16"
            style={{ animationDelay: "180ms" }}
          >
            <div className="md:col-span-5">
              {punchline.body.map((para, i) => (
                <p
                  key={i}
                  className={`text-base leading-relaxed text-muted md:text-lg ${
                    i > 0 ? "mt-5" : ""
                  }`}
                >
                  {para}
                </p>
              ))}
            </div>
            <div className="md:col-span-7">
              <div className="relative aspect-[16/10] w-full overflow-hidden border-2 border-black bg-elevated">
                <Image
                  src={punchline.image.src}
                  alt={punchline.image.alt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 60vw"
                  className="object-cover object-[50%_35%]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 01 — Our Story: the founder's letter */}
      <Section number={story.number} label={story.label}>
        <p className="font-serif-editorial text-2xl leading-snug text-text md:text-4xl">
          {story.lead}
        </p>
        <div className="mt-10 max-w-2xl">
          {story.body.map((para, i) => (
            <p
              key={i}
              className="mt-5 text-base leading-relaxed text-muted first:mt-0 md:text-lg"
            >
              {para}
            </p>
          ))}
        </div>

        <blockquote className="my-12 border-l-4 border-accent py-2 pl-6 md:my-16 md:pl-10">
          <p className="font-serif-editorial text-3xl italic leading-tight text-text md:text-5xl">
            {story.question}
          </p>
        </blockquote>

        <div className="max-w-2xl">
          {story.close.map((para, i) => (
            <p
              key={i}
              className="mt-5 text-base leading-relaxed text-muted first:mt-0 md:text-lg"
            >
              {para}
            </p>
          ))}
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="font-serif-editorial text-2xl italic text-text">
            {story.signature.name}
          </p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted">
            {story.signature.role}
          </p>
        </div>
      </Section>

      {/* 02 — How We Think */}
      <Section number={think.number} label={think.label}>
        <h3 className="headline text-[clamp(2rem,5vw,4rem)]">{think.title}</h3>
        <div className="mt-8 max-w-2xl">
          {think.body.map((para, i) => (
            <p
              key={i}
              className="mt-5 text-base leading-relaxed text-muted first:mt-0 md:text-lg"
            >
              {para}
            </p>
          ))}
        </div>

        {/* Principles as linked stations on a single line, after the
            "How we think" reference: one belief leading into the next */}
        <ol className="relative mt-14">
          <span
            aria-hidden="true"
            className="absolute left-[1.375rem] top-6 bottom-6 w-px bg-border"
          />
          {think.principles.map((p, i) => (
            <li key={p.title} className="relative flex gap-6 pb-10 last:pb-0">
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-black bg-custard text-xs tabular-nums text-black">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="pt-1.5">
                <h4 className="text-xl font-medium md:text-2xl">{p.title}</h4>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-muted">
                  {p.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-14 border-t border-border pt-8 font-serif-editorial text-xl italic leading-snug text-text md:text-2xl">
          {think.close}
        </p>
      </Section>

      {/* 03 — What We Do */}
      <Section number={services.number} label={services.label}>
        <ul>
          {services.items.map((item, i) => (
            <li
              key={item}
              className="flex items-baseline gap-6 border-b border-border py-5 text-xl first:border-t md:text-2xl"
            >
              <span className="text-xs tabular-nums text-muted">
                {String(i + 1).padStart(2, "0")}
              </span>
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/services"
          className="group mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text transition-colors hover:text-accent"
        >
          Explore Our Services
          <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </Section>

      {/* 04 — Our Clients: names set as type until logos are supplied */}
      <Section number={clients.number} label={clients.label}>
        <ul className="flex flex-wrap items-baseline gap-x-3 gap-y-2 font-serif-editorial text-2xl leading-snug text-text md:text-4xl">
          {clients.items.map((name, i) => (
            <li key={name} className="flex items-baseline gap-3">
              <span className="transition-colors hover:text-accent">{name}</span>
              {i < clients.items.length - 1 && (
                <span aria-hidden="true" className="text-accent">
                  /
                </span>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* 05 — Our Collective */}
      <section
        className="overflow-hidden border-t border-border py-16 md:py-24"
        aria-labelledby="collective-heading"
      >
        <div className="container-wide">
          <p className="headline text-3xl md:text-4xl">
            <span className="text-accent">{about.collective.number}</span>
            <span className="text-muted"> / </span>
            {about.collective.label}
          </p>

          <div className="relative mt-12 md:mt-20 md:min-h-[720px]">
            {/* Scattered frames — desktop only */}
            {collective.featured.map((photo, i) => (
              <div
                key={photo.src}
                className={`absolute hidden border-2 border-black bg-elevated shadow-elevated md:block ${scatter[i % scatter.length]}`}
              >
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="20vw"
                    className="object-cover"
                  />
                </div>
              </div>
            ))}

            <div className="relative z-10 mx-auto flex max-w-xl flex-col items-center text-center md:min-h-[720px] md:justify-center">
              <span className="border-2 border-black bg-mauve px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-black">
                Inside {studio.name}
              </span>
              <h2
                id="collective-heading"
                className="mt-6 font-serif-editorial text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] text-text"
              >
                {about.collective.title}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                {about.collective.intro}
              </p>
            </div>

            {/* Mobile: the same frames as a grid */}
            <div className="mt-10 grid grid-cols-2 gap-3 md:hidden">
              {collective.featured.slice(0, 4).map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-[4/5] overflow-hidden border-2 border-black bg-elevated"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="50vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Film strip — the list runs twice so the loop seams invisibly */}
        <div className="mt-16 md:mt-20">
          <ul className="flex w-max animate-[marquee_70s_linear_infinite] gap-3 md:gap-4">
            {[...collective.strip, ...collective.strip].map((photo, i) => (
              <li
                key={`${photo.src}-${i}`}
                aria-hidden={i >= collective.strip.length}
                className="relative h-56 w-44 shrink-0 overflow-hidden bg-elevated md:h-80 md:w-60"
              >
                <Image
                  src={photo.src}
                  alt={i < collective.strip.length ? photo.alt : ""}
                  fill
                  sizes="240px"
                  className="object-cover"
                />
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
          <div className="mt-12 flex flex-col items-center justify-center gap-8">
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
