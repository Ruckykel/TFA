import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { FaPalette, FaPenNib, FaMobileScreen, FaArrowsRotate } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Creative Direction & Marketing | TFA Studios",
  description: "Strategy, concept development, art direction, and campaign planning that unify every element of your brand story.",
};

const services = [
  {
    icon: FaPenNib,
    title: "Brand Identity Development",
    description: "We help you shape how the world sees you. Through research, design, and strategy, we build cohesive identities that express your brand's core essence.",
    features: ["Logo Design & Iconography", "Color Palette & Typography", "Brand Guidelines & Voice", "Identity Launch Kits"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: FaPalette,
    title: "Visual Communication",
    description: "Every visual touchpoint matters. We design marketing materials that communicate clearly, convert effectively, and remain consistent with your brand.",
    features: ["Flyers, Posters & Brochures", "Corporate Decks & Presentations", "Social Media Design Systems", "Print & Digital Advertising"],
    gradient: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: FaMobileScreen,
    title: "UI/UX Design",
    description: "We craft digital interfaces that merge aesthetics with usability. Our UI/UX process ensures your website or app looks stunning and feels effortless.",
    features: ["Web & Mobile UI Design", "Interactive Prototypes", "User Experience Mapping", "Design Systems & Components"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: FaArrowsRotate,
    title: "Rebranding & Transformation",
    description: "Your brand evolves — and your identity should too. We help businesses modernize their presence and reintroduce themselves with clarity and confidence.",
    features: ["Brand Audits & Strategy", "Visual Refresh & Redesign", "Messaging & Tone Realignment", "Complete Brand Rollouts"],
    gradient: "from-green-500/20 to-teal-500/20",
  },
];

const portfolio = [
  { title: "Rekruuter", category: "Brand Identity", image: "/rekruuter.png" },
  { title: "Eduboosta", category: "Web Design", image: "/eduboosta.png" },
  { title: "BoxOutAfrica", category: "Visual Identity", image: "/boxoutafrica.png" },
];

export default function BrandingPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src="/sample2.webp" alt="Branding design" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-bg))] via-transparent to-transparent" />
        </div>

        <div className="absolute top-20 left-0 w-48 h-48 md:w-72 md:h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-0 w-48 h-48 md:w-96 md:h-96 bg-[#00F0FF]/10 rounded-full blur-3xl" />

        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-sm text-purple-400 font-medium">Creative Direction & Marketing</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
              Design That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Aligns & Connects
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              Your brand deserves to be unforgettable. We craft bold, strategic, and timeless identities that turn audiences into loyal believers.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              >
                Start Your Brand
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
            <p className="text-purple-400 font-semibold text-sm tracking-wider uppercase">Our Services</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              Comprehensive Creative Solutions
            </h2>
            <p className="mt-4 text-white/70">
              From logo design to complete brand transformations, we create visual experiences that go beyond beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300`}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-purple-500/10 border border-purple-500/20 mb-6">
                  <service.icon className="w-6 h-6 text-purple-400" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>

                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-purple-400 font-semibold text-sm tracking-wider uppercase">Our Work</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              Brands We&apos;ve Transformed
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {portfolio.map((item) => (
              <div key={item.title} className="group relative rounded-2xl overflow-hidden border border-white/10">
                <div className="relative aspect-[16/10]">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-sm text-purple-400">{item.category}</p>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-white/10">
            <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-72 md:h-72 bg-pink-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 p-6 py-10 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Your Brand.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Reimagined.</span>
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Let&apos;s design something extraordinary — built for the now, crafted to last.
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_40px_rgba(168,85,247,0.4)]"
              >
                Start Your Marketing Journey
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}