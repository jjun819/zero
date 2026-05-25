import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Test } from "@/components/landing/Test";
import { WhyChoose } from "@/components/landing/WhyChoose";
import { Value } from "@/components/landing/Value";

import { HowItWorks } from "@/components/landing/HowItWorks";
import { Qualifications } from "@/components/landing/Qualifications";
import { Products } from "@/components/landing/Products";
import { Application } from "@/components/landing/Application";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "UbiqPower Zero Cost EV Charger Program | Turnkey EV Charging for Properties",
      },
      {
        name: "description",
        content:
          "Install EV chargers at zero upfront cost. UbiqPower delivers design, installation, and equipment for strata, multi-family, commercial, and retail properties — with 10% monthly net profit share.",
      },
      { property: "og:title", content: "UbiqPower Zero Cost EV Charger Program" },
      {
        property: "og:description",
        content:
          "Turnkey EV charging at zero upfront cost. 11+ years of experience, 4,000+ chargers installed.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Divider = () => (
  <div className="mx-auto max-w-[1380px] px-5 md:px-8">
    <hr className="border-t border-black/20" />
  </div>
);

const FullDivider = () => <hr className="border-t border-black/20" />;

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Test />
        <WhyChoose />
        <Divider />
        <Value />
        <Divider />
        <HowItWorks />
        <Divider />
        <Products />
        <Divider />
        <Qualifications />
        <Divider />
        <Application />
        <FullDivider />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
