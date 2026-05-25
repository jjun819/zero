import { ClipboardCheck, ShieldCheck, Wrench } from "lucide-react";
import parkingLotImage from "@/assets/parking-lot.jpg";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M2 7h10M8 3l4 4-4 4"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const gradientTextStyle = {
  background: "linear-gradient(to right, #2D865B, #0f766e, #1EDDC7)",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "gradientFlow 4s ease infinite",
};

export function WhyChoose() {
  return (
    <section id="overview" className="bg-[#EFF2FB] py-20 md:py-28">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-foreground">Our </span>
            <span className="inline" style={gradientTextStyle}>
              Zero-Cost
            </span>
            <span className="text-foreground"> Program for Property Owners.</span>{" "}
          </h2>
          <p className="mt-5 text-base text-foreground md:text-lg">
            UbiqPower delivers turnkey EV charging solutions at Zero upfront
            cost, turning parking spaces into monthly net profit for strata
            corporations, commercial, and retail property owners
          </p>
        </div>

        <div className="mt-14">
          <div className="relative min-h-[520px] overflow-hidden rounded-xl border border-white/60 bg-white/45 backdrop-blur-xl">
            <img
              src={parkingLotImage}
              alt="Parking spaces prepared for EV charging"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {[
            {
              heading: "Design & Installation",
              sub: "We handle it all",
              body: "From the first site survey to the final trade-licensed install, we design, build and connect every charger. You don't lift a finger or sign a cheque - the entire setup is ours to deliver and ours to pay for.",
              link: "Get a Free Assesment",
              icon: Wrench,
            },
            {
              heading: "Maintenance & Operation",
              sub: "Covered for life",
              body: "Once the chargers are live, repairs, insurance, software and driver support stay on us - for as long as they're running. No service contracts, no surprise maintenance bills landing on your budget down the road.",
              link: "Learn More",
              icon: ClipboardCheck,
            },
            {
              heading: "Zero Risk",
              sub: "The downside is ours",
              body: "No capital investment and no project risk. If a charger sits unused in a slow month, that's our loss to absorb - never a shortfall billed to you. Your total cost, now and later, stays at $0.",
              link: "Learn More",
              icon: ShieldCheck,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.heading}
                className="flex min-h-[340px] flex-col rounded-xl border border-black/10 bg-white/70 p-8 backdrop-blur-xl md:p-10"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#E6F4EE] text-[#2D865B]">
                  <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </div>
                <p className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {item.heading}
                </p>
                <p className="mt-4 text-lg font-semibold leading-tight text-[#2D865B]">
                  {item.sub}
                </p>
                <p className="mt-5 text-base leading-relaxed text-black">
                  {item.body}
                </p>
                {"link" in item ? (
                  <a
                    href={item.link === "Get a Free Assesment" ? "#apply" : "#"}
                    className="mt-auto inline-flex items-center gap-2 pt-6 text-base font-semibold text-[#2D865B] transition-colors hover:text-[#359966]"
                  >
                    {item.link}
                    <ArrowIcon />
                  </a>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between rounded-2xl border border-black/10 bg-white p-6 md:p-8">
          <span className="text-base leading-relaxed text-muted-foreground md:text-lg">
            <b className="text-foreground">11+ years</b> EV charging experience ·{" "}
            <b className="text-foreground">4,000+</b> chargers managed ·{" "}
            <b className="text-foreground">OCPP 1.6</b> open standard
          </span>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-primary"
          >
            Check Eligibility <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
