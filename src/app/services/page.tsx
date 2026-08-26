import type { Metadata } from "next";
import Link from "next/link";
import { ContactButton } from "../../components/ContactButton";
import { Work } from "../../components/home/Work";
import { servicesPage, serviceDetails, studio } from "../../data/copy";

export const metadata: Metadata = {
  title: "Services — TFA Studios",
  description: servicesPage.intro,
};

export default function ServicesPage() {
  return (
    <main>
      <section className="flex min-h-[70vh] items-center pt-28 pb-16">
        <div className="container-wide">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {servicesPage.eyebrow}
          </p>
          <h1 className="headline rise-in mt-6 text-[clamp(2.25rem,7vw,7rem)] font-medium">
            {servicesPage.title}
          </h1>
          <p className="mt-10 max-w-2xl border-t border-border pt-8 text-base leading-relaxed text-muted md:text-lg">
            {servicesPage.intro}
          </p>
        </div>
      </section>

      {/* The four disciplines */}
      <section className="border-t border-border py-16 md:py-24">
        <div className="container-wide">
          <ul>
            {serviceDetails.map((s, i) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid grid-cols-1 items-baseline gap-3 border-b border-border py-10 md:grid-cols-12 md:gap-8"
                >
                  <span className="text-xs tabular-nums text-muted md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="headline text-3xl transition-colors group-hover:text-accent md:col-span-5 md:text-4xl">
                    {s.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted md:col-span-5">
                    {s.intro}
                  </p>
                  <span
                    aria-hidden="true"
                    className="hidden text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:col-span-1 md:block md:text-right"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Work />

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
