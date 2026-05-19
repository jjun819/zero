import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, PlugZap } from "lucide-react";

import productL3 from "@/assets/product-l3.png";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";

const specs = [
  "L3 DC Fast EV Charger",
  "OCPP 1.6 compliant: allows charger to be managed through cloud services",
  "Wired/Wireless Connection for Central Management System",
  "Support for pricing rules and monetization (optional cloud plan required).",
  "Support for load management between multiple chargers (optional cloud plan required).",
  "Charging Interface: CCS 1 and NACS (Tesla)",
  "Input: 480 Vac",
  "IP55 Rated for Outdoor Applications, NEMA 3R",
];

export const Route = createFileRoute("/products/l3-fast-dc-ev-charger")({
  head: () => ({
    meta: [
      { title: "L3 DC Fast EV Charger | UbiqPower" },
      {
        name: "description",
        content:
          "Explore UbiqPower's L3 DC Fast EV Charger, including OCPP 1.6 support, central management connectivity, CCS 1 and NACS charging interfaces, and 480 Vac input.",
      },
    ],
  }),
  component: L3FastDcEvChargerPage,
});

function L3FastDcEvChargerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)] md:px-8">
            <div className="flex flex-col justify-center">
              <div className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                <PlugZap className="h-4 w-4" />
                DC Fast Charging Hardware
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                L3 DC Fast EV Charger
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                A high-speed DC charging solution designed for outdoor,
                high-traffic locations where drivers need faster charging and
                reliable access.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#apply"
                  className="inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
                >
                  Apply Now
                </a>
                <a
                  href="/#products"
                  className="inline-flex h-11 items-center rounded-md border border-neutral-300 bg-white px-5 text-sm font-semibold text-neutral-900 transition-colors hover:bg-secondary"
                >
                  View Products
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50 p-8">
              <img
                src={productL3}
                alt="L3 DC Fast EV Charger"
                className="max-h-[420px] w-full object-contain"
              />
            </div>
          </div>
        </section>

        <section className="bg-[#F5F8F6] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Charger specifications
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                Core features and technical details for the L3 DC Fast EV
                Charger.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {specs.map((spec) => (
                <div
                  key={spec}
                  className="flex gap-3 rounded-xl border border-neutral-200 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
                    {spec}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
