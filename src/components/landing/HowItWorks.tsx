import stepCharging from "@/assets/step-charging.jpg";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Contact an EVSE Sales Specialist",
    text: "Apply online or contact the UbiqPower team to begin the Zero Cost EV Charger Program review.",
  },
  {
    n: "02",
    title: "Site Visit & Qualification Review",
    text: "UbiqPower reviews the property, including electrical capacity, site accessibility, and other program criteria.",
  },
  {
    n: "03",
    title: "Agreement & Installation Schedule",
    text: "Once approved, UbiqPower coordinates the final agreement, installation timeline, training, and onboarding.",
  },
  {
    n: "04",
    title: "Go Live & Earn",
    text: "Chargers go live, EV drivers pay per charging session, and the property owner receives 10% of monthly net profit.",
  },
];

const APPLY_HREF = "#apply";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:gap-12 md:px-8 lg:gap-16">

        {/* ── LEFT: photo only ── */}
        <div className="flex flex-col">
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
            <img
              src={stepCharging}
              alt="An EV charging at a UbiqPower installation"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            {/* Minimum scrim so the image doesn't blow out at the edges */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/10" />
            {/* Spacer so the column has height */}
            <div className="min-h-[380px] md:min-h-[460px]" />
          </div>
        </div>

        {/* ── RIGHT: heading + vertical timeline ── */}
        <div className="flex flex-col">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Four simple steps
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              How it works.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Acceptance is subject to site qualification and agreement approval.
            </p>
          </div>

          {/* Timeline */}
          <ol className="relative flex flex-col pl-8">
            {/* Vertical rail */}
            <div className="absolute left-[15px] top-4 bottom-4 w-px bg-neutral-400" />

            {steps.map((step, i) => {
              const isFirst = i === 0;
              return (
                <li key={step.n} className="relative mb-8 last:mb-0">
                  {/* Step dot */}
                  <div
                    className={`absolute -left-8 flex h-8 w-8 items-center justify-center rounded-full border text-xs font-bold tracking-wide
                      ${isFirst
                        ? "border-foreground bg-foreground text-background"
                        : "border-neutral-400 bg-card text-neutral-600"
                      }`}
                  >
                    {step.n}
                  </div>

                  {/* Content */}
                  <div className="pl-2 pt-0.5">
                    <h4 className="text-base font-semibold tracking-tight text-foreground">
                      {step.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {step.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="mt-8 pl-2">
            <a
              href={APPLY_HREF}
              className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
