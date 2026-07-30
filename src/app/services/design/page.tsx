import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { FaPalette, FaPenRuler, FaMobileScreen, FaImage } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Design | TFA Studios",
  description: "Brand identity, visual systems, motion graphics, and print that make ideas tangible.",
};

const services = [
  {
    icon: FaPalette,
    title: "Brand & Identity Design",
    description: "Create a memorable brand identity that stands out. From logos to complete brand systems, we design visuals that define your brand.",
    features: ["Logo Design & Iconography", "Brand Guidelines", "Visual Identity Systems", "Brand Collateral"],
    gradient: "from-violet-500/20 to-purple-500/20",
  },
  {
    icon: FaImage,
    title: "Print & Marketing Design",
    description: "Eye-catching print materials that make an impact. From business cards to large-format prints, we deliver quality at every scale.",
    features: ["Business Cards & Stationery", "Brochures & Catalogs", "Posters & Banners", "Packaging Design"],
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    icon: FaPenRuler,
    title: "Digital & Social Design",
    description: "Scroll-stopping digital content designed for engagement. We create visuals optimized for every platform and screen size.",
    features: ["Social Media Graphics", "Digital Ads & Banners", "Email Templates", "Infographics"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: FaMobileScreen,
    title: "UI/UX & Product Design",
    description: "User-centered design that looks stunning and works beautifully. We create intuitive interfaces for web and mobile applications.",
    features: ["Web & Mobile UI Design", "Wireframes & Prototypes", "User Experience Design", "Design Systems"],
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

export default function DesignPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample2.webp" alt="Graphic design" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-bg))] via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 left-0 w-48 h-48 md:w-72 md:h-72 bg-violet-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-0 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-500 animate-pulse" />
              <span className="text-sm text-violet-400 font-medium">Design</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
              Design That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">
                Inspires & Converts
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              From stunning brand identities to scroll-stopping digital content, we create designs that leave lasting impressions and drive results.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white font-semibold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(139,92,246,0.3)]"
              >
                Start Your Design
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-violet-400 font-semibold text-sm tracking-wider uppercase">Our Services</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              Full-Spectrum Design Services
            </h2>
            <p className="mt-4 text-white/70">
              Whatever your design needs, we have the expertise and creativity to bring your vision to life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 mb-6">
                  <service.icon className="w-6 h-6 text-violet-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-violet-900/50 to-purple-900/50 border border-white/10">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-violet-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-72 md:h-72 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 p-6 py-10 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Ready to Create Something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">Beautiful?</span>
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Let&apos;s design visuals that captivate your audience and elevate your brand.
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 text-white font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_40px_rgba(139,92,246,0.4)]"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
