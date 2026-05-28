import { createFileRoute } from "@tanstack/react-router";
import { useState, type MouseEvent } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";

import productL3 from "@/assets/l3.png";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";

const specs = [
  {
    title: "L3 DC Fast EV Charger",
    detail: "Built for high-traffic locations where drivers need faster charging sessions.",
  },
  {
    title: "OCPP 1.6 compliant",
    detail: "Allows the charger to be monitored and managed through compatible cloud services.",
  },
  {
    title: "Wired/Wireless Connection",
    detail: "Supports central management system connectivity for operations and reporting.",
  },
  {
    title: "Pricing rules and monetization",
    detail: "Optional cloud plans can enable paid charging sessions and custom pricing rules.",
  },
  {
    title: "Load management support",
    detail: "Optional cloud plans can help coordinate power use between multiple chargers.",
  },
  {
    title: "Charging Interface: CCS 1 and NACS",
    detail: "Supports common fast-charging connector options, including Tesla-compatible NACS.",
  },
  {
    title: "Input: 480 Vac",
    detail: "Designed for commercial fast-charging electrical service requirements.",
  },
  {
    title: "IP55 Rated, NEMA 3R",
    detail: "Rated for outdoor applications with protection against dust and water ingress.",
  },
];

const goToApplicationForm = (event: MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault();
  window.location.assign("/#apply");
};

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
  const [openSpec, setOpenSpec] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[minmax(0,1fr)_minmax(320px,0.85fr)] md:px-8">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
                L3 DC Fast EV Charger
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
                A high-speed DC charging solution designed for outdoor, high-traffic locations where
                drivers need faster charging and reliable access.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#apply"
                  onClick={goToApplicationForm}
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

            <div className="flex items-center justify-center overflow-hidden rounded-2xl bg-white p-8">
              <img
                src={productL3}
                alt="L3 DC Fast EV Charger"
                className="max-h-[350px] w-full scale-110 object-contain"
              />
            </div>
          </div>
        </section>

        <hr className="border-t border-black/20" />

        <section className="bg-[#F5F8F6] py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-10 max-w-3xl">
              <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
                Charger specifications
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
                Core features and technical details for the L3 DC Fast EV Charger.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {specs.map((spec) => (
                <button
                  key={spec.title}
                  type="button"
                  aria-expanded={openSpec === spec.title}
                  onClick={() => setOpenSpec((current) => (current === spec.title ? null : spec.title))}
                  className="group rounded-xl border border-neutral-200 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <span className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="flex-1">
                      <span className="block text-sm font-semibold leading-relaxed text-neutral-800 md:text-base">
                        {spec.title}
                      </span>
                      {openSpec === spec.title && (
                        <span className="mt-3 block text-sm leading-relaxed text-neutral-600">
                          {spec.detail}
                        </span>
                      )}
                    </span>
                    <ChevronDown
                      className={`mt-1 h-4 w-4 shrink-0 text-primary transition-transform ${
                        openSpec === spec.title ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
