import { PlugZap, Ruler, Wrench } from "lucide-react";
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

export function WhyChoose() {
  return (
    <section id="overview" className="bg-[#EFF2FB] py-20 md:py-28">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-foreground">
              Our Zero-Cost Program.
            </span>{" "}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  {
                    heading: "Design",
                    sub: "Site review and engineering plan",
                    icon: Ruler,
                  },
                  {
                    heading: "Installation",
                    sub: "Trade-licensed setup from end to end",
                    icon: Wrench,
                  },
                  {
                    heading: "Electric Bill",
                    sub: "Managed charging costs and reporting",
                    icon: PlugZap,
                  },
                ].map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.heading}
                      className="relative rounded-lg border border-white/60 bg-white/85 p-5 pr-14 backdrop-blur-md"
                    >
                      <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-white/70 text-[#2D865B]">
                        <Icon
                          className="h-4 w-4"
                          strokeWidth={1.7}
                          aria-hidden="true"
                        />
                      </div>
                      <p className="text-lg font-semibold text-foreground">
                        {item.heading}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.sub}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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
