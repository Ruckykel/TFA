import type { Metadata } from "next";
import { ServiceDetail } from "../../../components/services/ServiceDetail";
import { serviceDetails } from "../../../data/copy";

const service = serviceDetails.find((s) => s.slug === "creative-direction")!;

export const metadata: Metadata = {
  title: `${service.title} — TFA Studios`,
  description: service.intro,
};

export default function Page() {
  return <ServiceDetail slug="creative-direction" />;
}
