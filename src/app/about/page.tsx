import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { about, collective, studio } from "../../data/copy";
import { ContactButton } from "../../components/ContactButton";

export const metadata: Metadata = {
  title: "Who We Are — TFA Studios",
  description:
    "TFA Studios is a Lagos creative studio of filmmakers, photographers, designers, and creative directors, building work that connects.",
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
            <h2 className="headline text-3xl md:text-4xl">
              <span className="text-accent">{number}</span>
              <span className="text-muted"> — </span>
              {label}
            </h2>
          </div>
          <div className="md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <main>
      {/* Punchline */}
      <section className="flex min-h-[70vh] items-center pt-28 pb-16">
        <div className="container-wide">
          <h1 className="headline rise-in text-[clamp(2.25rem,7vw,7rem)] font-medium">
            {about.hero.title}
          </h1>
          <p
            className="rise-in mt-10 max-w-2xl border-t border-border pt-8 font-serif-editorial text-xl leading-snug text-muted md:text-2xl"
            style={{ animationDelay: "180ms" }}
          >
            {about.hero.intro}
          </p>
        </div>
      </section>

      <Section number={about.story.number} label={about.story.label}>
        {about.story.body.map((para, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "font-serif-editorial text-2xl leading-snug text-text md:text-3xl"
                : "mt-6 text-base leading-relaxed text-muted"
            }
          >
            {para}
          </p>
        ))}
      </Section>

      <Section number={about.think.number} label={about.think.label}>
        {about.think.body.map((para, i) => (
          <p
            key={i}
            className={
              i === 0
                ? "font-serif-editorial text-2xl leading-snug text-text md:text-3xl"
                : "mt-6 text-base leading-relaxed text-muted"
            }
          >
            {para}
          </p>
        ))}
      </Section>

      <Section number={about.services.number} label={about.services.label}>
        <ul>
          {about.services.items.map((item) => (
            <li
              key={item}
              className="border-b border-border py-5 text-xl first:border-t md:text-2xl"
            >
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

      <Section number={about.collective.number} label={about.collective.label}>
        <p className="font-serif-editorial text-2xl leading-snug text-text md:text-3xl">
          {about.collective.intro}
        </p>

        {collective.length > 0 && (
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
            {collective.map((m) => (
              <div key={m.name}>
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-elevated">
                  {m.img && (
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-cover"
                    />
                  )}
                </div>
                <p className="mt-3 text-sm font-medium">{m.name}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-muted">
                  {m.role}
                </p>
              </div>
            ))}
          </div>
        )}
      </Section>

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
