import stepCharging from "@/assets/step-charging.jpg";
import stepContact from "@/assets/step-contact.jpg";
import stepClipboard from "@/assets/step-clipboard.jpg";
import officeBuilding from "@/assets/office-building.jpg";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    img: stepContact,
    title: "Contact an EVSE Sales Specialist",
    text: "Apply online or contact the UbiqPower team to begin the Zero Cost EV Charger Program review.",
  },
  {
    n: "02",
    img: stepClipboard,
    title: "Site Visit & Qualification Review",
    text: "UbiqPower reviews the property, including electrical capacity, site accessibility, and other program criteria.",
  },
  {
    n: "03",
    img: officeBuilding,
    title: "Agreement & Installation Schedule",
    text: "Once approved, UbiqPower coordinates the final agreement, installation timeline, training, and onboarding.",
  },
  {
    n: "04",
    img: stepCharging,
    title: "Go Live & Earn",
    text: "Chargers go live, EV drivers pay per charging session, and the property owner receives 10% of monthly net profit.",
  },
];

const APPLY_HREF = "#apply";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Four simple steps
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            From application to charging in four steps.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
            Acceptance is subject to site qualification and agreement approval.
          </p>
        </div>

        <div className="relative">
          <div className="absolute bottom-8 left-6 top-8 w-0.5 bg-[#2D865B] md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const imageFirst = index % 2 === 0;
              const image = (
                <div className="relative min-h-[260px] overflow-hidden rounded-2xl border border-neutral-200 shadow-sm md:min-h-[320px]">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              );
              const content = (
                <div className="flex h-full flex-col justify-center">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2D865B]">
                    Step {step.n}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                    {step.text}
                  </p>
                </div>
              );

              return (
                <div
                  key={step.n}
                  className="relative grid gap-6 pl-16 md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] md:gap-8 md:pl-0"
                >
                  <div className={imageFirst ? "md:order-1" : "md:order-3"}>
                    {imageFirst ? image : content}
                  </div>

                  <div className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#2D865B] bg-white text-base font-bold text-[#2D865B] shadow-sm md:static md:order-2 md:mx-auto">
                    {index + 1}
                  </div>

                  <div className={imageFirst ? "md:order-3" : "md:order-1"}>
                    {imageFirst ? content : image}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <a
            href={APPLY_HREF}
            className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
