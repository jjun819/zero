import stepContact from "@/assets/step-contact.jpg";
import stepClipboard from "@/assets/step-clipboard.jpg";
import stepCharging from "@/assets/step-charging.jpg";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "1",
    title: "Contact an EVSE Sales Specialist",
    text: "Apply online or contact the UbiqPower team to begin the Zero Cost EV Charger Program review.",
  },
  {
    n: "2",
    title: "Site Visit & Qualification Review",
    text: "UbiqPower reviews the property, including electrical capacity, site accessibility, and other program criteria.",
  },
  {
    n: "3",
    title: "Agreement & Installation Schedule",
    text: "Once approved, UbiqPower coordinates the final agreement, installation timeline, training, and onboarding.",
  },
  {
    n: "4",
    title: "Go Live & Earn",
    text: "Chargers go live, EV drivers pay per charging session, and the property owner or agreement holder receives 10% of monthly net profit.",
  },
];

const APPLY_HREF = "mailto:Zerocostapplication@foreseeson.com";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:gap-12 md:px-8 lg:gap-16">
        {/* ─── LEFT COLUMN: hero photo + supporting stats ─── */}
        <div className="flex flex-col gap-5">
          <div className="relative flex-1 overflow-hidden rounded-2xl border border-neutral-300 shadow-sm">
            <img
              src={stepCharging}
              alt="An EV charging at a UbiqPower installation"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            {/* gradient overlay for legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(18,20,26,0) 30%, rgba(18,20,26,0.85) 100%)",
              }}
            />
            <div className="relative z-10 flex min-h-[380px] flex-col justify-end p-7 md:p-9">
              <span
  
              >
                
              </span>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
               
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/70 md:text-base">
                
              </p>
            </div>
          </div>

          {/* two compact supporting stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-secondary p-5">
              <div
                className="text-3xl font-bold leading-none tracking-tight"
                style={{ color: "#2D865B" }}
              >
                8 wks
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Average time from apply to going live
              </div>
            </div>
            <div className="rounded-2xl bg-secondary p-5">
              <div
                className="text-3xl font-bold leading-none tracking-tight"
                style={{ color: "#2D865B" }}
              >
                11+ yrs
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                Operating EV charging infrastructure
              </div>
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: heading + step stack ─── */}
        <div className="flex flex-col gap-4">
          <div className="mb-2">
            <span
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em]"
              style={{ color: "#2D865B" }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: "#2D865B" }}
              />
              Four simple steps
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              How it works.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Acceptance is subject to site qualification and agreement
              approval.
            </p>
          </div>

          {steps.map((s) => (
            <div
              key={s.n}
              className="group flex items-start gap-4 rounded-2xl border border-neutral-300 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <div
                className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-lg font-bold"
                style={{
                  backgroundColor: "#ECFDF5",
                  color: "#2D865B",
                }}
              >
                {s.n}
              </div>
              <div className="min-w-0">
                <h4 className="text-base font-semibold tracking-tight text-foreground">
                  {s.title}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </div>
          ))}

          <div className="mt-2">
            <a
              href="#apply"
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
