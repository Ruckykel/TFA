import type { Metadata } from "next";
import { ContactForm } from "../../components/ContactForm";
import { contactPage, footer } from "../../data/copy";

export const metadata: Metadata = {
  title: "Start a Project — TFA Studios",
  description: contactPage.intro,
};

export default function ContactPage() {
  return (
    <main>
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-wide">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {contactPage.eyebrow}
          </p>
          <h1 className="headline rise-in mt-6 text-[clamp(2.25rem,7vw,6.5rem)] font-medium">
            {contactPage.title}
          </h1>
          <p className="mt-10 max-w-2xl border-t border-border pt-8 text-base leading-relaxed text-muted md:text-lg">
            {contactPage.intro}
          </p>
        </div>
      </section>

      <section className="border-t border-border py-16 md:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
            {/* Details */}
            <div className="md:col-span-4">
              <dl>
                {contactPage.details.map((d) => (
                  <div key={d.label} className="border-t border-border py-5">
                    <dt className="text-[10px] uppercase tracking-[0.3em] text-muted">
                      {d.label}
                    </dt>
                    <dd className="mt-2 text-lg">
                      {d.href ? (
                        <a
                          href={d.href}
                          className="underline-offset-4 transition-colors hover:text-accent hover:underline"
                        >
                          {d.value}
                        </a>
                      ) : (
                        d.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted">
                  Follow
                </p>
                <ul className="mt-4 space-y-2">
                  {footer.social.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm transition-colors hover:text-accent"
                      >
                        {s.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
