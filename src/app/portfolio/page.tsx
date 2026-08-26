import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Work — TFA Studios",
  description:
    "Explore TFA Studios' portfolio — video & film production, photography, design, and creative direction projects that showcase our craft and creativity.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
