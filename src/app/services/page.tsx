import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ContactButton } from "../../components/ContactButton";
import { Work } from "../../components/home/Work";
import { CtaEmail } from "../../components/CtaEmail";
import { ClientLogos } from "../../components/ClientLogos";
import { servicesPage, serviceDetails } from "../../data/copy";

export const metadata: Metadata = {
  title: "Services | TFA Studios",
  description: servicesPage.intro,
};

export default function ServicesPage() {
  return (
    <main>
      <section className="pt-32 pb-10 md:pt-40 md:pb-14">
        <div className="container-wide">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {servicesPage.eyebrow}
          </p>
          <h1 className="headline rise-in mt-5 max-w-5xl text-[clamp(2rem,5vw,4.5rem)] font-medium">
            {servicesPage.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {servicesPage.intro}
          </p>
        </div>
      </section>

      {/* The four disciplines: each cover is the way into that service's work */}
      <section className="pb-12 md:pb-16" aria-label="Our services">
        <div className="container-wide">
          <ul className="grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-2">
            {serviceDetails.map((s, i) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden border-2 border-black bg-elevated">
                    <Image
                      src={s.image.src}
                      alt={s.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6">
                      <h2 className="headline text-2xl text-white md:text-3xl">
                        <span className="mr-3 text-sm tabular-nums text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {s.title}
                      </h2>
                      <span
                        aria-hidden="true"
                        className="text-xl text-white transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>
                  </div>
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    {s.intro}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="border-t border-border">
        <Work
          title={servicesPage.selected.title}
          intro={servicesPage.selected.intro}
          contained
        />
      </div>

      {/* Clients */}
      <section className="border-t border-border py-12 md:py-16" aria-labelledby="clients-heading">
        <div className="container-wide">
          <h2 id="clients-heading" className="headline flex items-center justify-center gap-3 text-2xl md:text-3xl">
            <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 bg-mauve" />
            {servicesPage.clients.title}
          </h2>
          <ClientLogos className="mx-auto mt-8 max-w-5xl" />
        </div>
      </section>

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
