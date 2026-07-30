import type { Metadata } from "next";
import { Hero } from "../components/home/Hero";
import { Services } from "../components/home/Services";
import { Featured } from "../components/home/Featured";
import { Why } from "../components/home/Why";
import { CTA } from "../components/home/CTA";
import { Partners } from "../components/home/Partners";
import { Stats } from "../components/home/Stats";

export const metadata: Metadata = {
  title: "TFA Studios — Creative Agency & Media Production",
  description:
    "TFA Studios is a creative agency and media production house built on vision, precision, and the belief that great work changes everything.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Why />
      <Stats />
      <section>
        <Services />
      </section>
      <Featured />
      <Partners />
      <CTA />
    </main>
  );
}
