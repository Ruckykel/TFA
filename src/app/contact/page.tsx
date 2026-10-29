import type { Metadata } from "next";
import { ContactSentenceForm } from "../../components/ContactSentenceForm";
import { contactPage, footer } from "../../data/copy";

export const metadata: Metadata = {
  title: "Contact | TFA Studios",
  description:
    "Tell TFA Studios about your project: film, photography, design, or creative direction. Lagos, Nigeria.",
};

/**
 * Two parts, in the order the client asked for: room for the visitor's own
 * details first, then the studio's details for project enquiries.
 */
export default function ContactPage() {
  return (
    <main>
      {/* The visitor */}
      <section className="pt-32 pb-12 md:pt-40 md:pb-16">
        <div className="container-wide">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            {contactPage.eyebrow}
          </p>
          <h1 className="headline rise-in mt-5 text-[clamp(3rem,10vw,8rem)] font-medium">
            {contactPage.title}
          </h1>
          <div className="mt-10 max-w-4xl md:mt-12">
            <ContactSentenceForm />
          </div>
        </div>
      </section>

      {/* The studio */}
      <section className="border-t border-border py-10 md:py-14" aria-label="Studio details">
        <div className="container-wide">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {contactPage.details.map((d) => (
              <div key={d.label}>
                <dt className="text-[10px] uppercase tracking-[0.3em] text-muted">
                  {d.label}
                </dt>
                <dd className="mt-2 font-serif-editorial text-xl md:text-2xl">
                  {d.href ? (
                    <a
                      href={d.href}
                      className="italic underline-offset-4 transition-colors hover:text-accent hover:underline"
                    >
                      {d.value}
                    </a>
                  ) : (
                    d.value
                  )}
                </dd>
              </div>
            ))}
            <div>
              <dt className="text-[10px] uppercase tracking-[0.3em] text-muted">
                Follow
              </dt>
              <dd className="mt-3">
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
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
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
