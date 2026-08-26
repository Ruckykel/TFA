import type { Metadata } from "next";
import { Hero } from "../components/home/Hero";
import { Work } from "../components/home/Work";
import { AboutBlock } from "../components/home/AboutBlock";
import { ServicesList } from "../components/home/ServicesList";
import { CTA } from "../components/home/CTA";

export const metadata: Metadata = {
  title: "TFA Studios — Connecting Hearts and Minds",
  description:
    "TFA Studios is a creative studio that uses film, photography, design, and creative strategy to tell stories, communicate ideas, and build brands.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Work />
      <AboutBlock />
      <ServicesList />
      <CTA />
    </main>
  );
}
