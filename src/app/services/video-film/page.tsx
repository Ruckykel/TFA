import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "../../../components/Container";
import { FaPlay, FaCamera, FaMicrophone, FaFilm } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Video & Film Production | TFA Studios",
  description: "Professional video and film production, commercial ads, and documentary filmmaking.",
};

const services = [
  {
    icon: FaFilm,
    title: "Video Production",
    description: "We create visually striking video content that tells your story with impact and intention. From scripting to editing, our process ensures every frame reflects your brand's essence.",
    features: ["Corporate & Brand Videos", "Product Promos & Ad Campaigns", "Event Highlights & Social Reels", "Documentary & Lifestyle Shoots"],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    icon: FaPlay,
    title: "Motion Graphics & Animation",
    description: "Dynamic motion brings your ideas to life. Our animation team crafts fluid, engaging visuals that make your message memorable — perfect for campaigns, apps, and digital platforms.",
    features: ["2D & 3D Animation", "Logo & Intro Animations", "Explainer Videos", "Visual Effects (VFX)"],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: FaCamera,
    title: "Photography & Post-Production",
    description: "Every image tells a story — and we make sure yours speaks volumes. From creative direction to post-production, our photography services capture moments that define your brand.",
    features: ["Event & Lifestyle Photography", "Product Shoots", "Editorial & Portrait Sessions", "Color Grading & Retouching"],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: FaMicrophone,
    title: "Podcast & Audio Production",
    description: "Sound shapes emotion. Our team produces professional audio content — from branded podcasts to immersive sound design — that connects with your audience on a deeper level.",
    features: ["Podcast Recording & Editing", "Voiceovers & Jingles", "Audio Storytelling & Mixing", "Studio Production"],
    gradient: "from-green-500/20 to-teal-500/20",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Brand Partners" },
  { value: "24/7", label: "Support" },
];

export default function DigitalMediaPage() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image src="/sample1.webp" alt="Digital media production" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[rgb(var(--color-bg))] via-transparent to-transparent" />
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-0 w-48 h-48 md:w-72 md:h-72 bg-[#00F0FF]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-0 w-48 h-48 md:w-96 md:h-96 bg-purple-500/10 rounded-full blur-3xl" />

        <Container className="relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00F0FF]/10 border border-[#00F0FF]/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="text-sm text-[#00F0FF] font-medium">Video & Film Production</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
              Transforming Ideas Into{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-purple-500">
                Visual Masterpieces
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl">
              From high-impact video productions to cinematic photography and immersive sound design, we bring stories to life across every frame and frequency.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact#contact-form"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00F0FF] text-black font-semibold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(0,240,255,0.3)]"
              >
                Start Your Project
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
              >
                <FaPlay className="w-4 h-4" />
                View Showreel
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-white/10 bg-white/[0.02]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#00F0FF]">{stat.value}</div>
                <div className="mt-2 text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#00F0FF] font-semibold text-sm tracking-wider uppercase">What We Offer</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              Cinematic Storytelling
            </h2>
            <p className="mt-4 text-white/70">
              Everything you need to create compelling visual and audio content that resonates with your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className={`group relative p-8 rounded-3xl border border-white/10 bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:border-[#00F0FF]/30 transition-all duration-300`}
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#00F0FF]/10 border border-[#00F0FF]/20 mb-6">
                  <service.icon className="w-6 h-6 text-[#00F0FF]" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
                      <span className="text-sm text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#00F0FF]/0 to-purple-500/0 group-hover:from-[#00F0FF]/5 group-hover:to-purple-500/5 transition-all duration-300" />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-transparent via-[#00F0FF]/5 to-transparent">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-[#00F0FF] font-semibold text-sm tracking-wider uppercase">Our Process</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">
              From Concept to Creation
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into your vision, goals, and audience to craft a tailored strategy." },
              { step: "02", title: "Pre-Production", desc: "Scripting, storyboarding, and planning every detail before we roll cameras." },
              { step: "03", title: "Production", desc: "Our expert crew brings your vision to life with cutting-edge equipment." },
              { step: "04", title: "Post & Delivery", desc: "Editing, color grading, and final touches to create polished content." },
            ].map((item, idx) => (
              <div key={item.step} className="relative">
                <div className="text-6xl font-extrabold text-[#00F0FF]/10">{item.step}</div>
                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/60">{item.desc}</p>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-[#00F0FF]/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="relative rounded-3xl overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
              <Image src="/sample2.webp" alt="CTA background" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70" />
            </div>

            {/* Glows */}
            <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-[#00F0FF]/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-36 h-36 md:w-72 md:h-72 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="relative z-10 p-6 py-10 md:p-20 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Ready to Create Something{" "}
                <span className="text-[#00F0FF]">Extraordinary?</span>
              </h2>
              <p className="mt-4 text-lg text-white/70 max-w-2xl mx-auto">
                Let&apos;s craft content that captivates your audience and elevates your brand to new heights.
              </p>
              <Link
                href="/contact#contact-form"
                className="mt-8 inline-flex items-center gap-2 px-10 py-4 rounded-full bg-[#00F0FF] text-black font-bold text-lg hover:brightness-110 transition-all shadow-[0_0_40px_rgba(0,240,255,0.4)]"
              >
                Start Your Project
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}