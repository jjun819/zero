import stepContact from "@/assets/step-contact.jpg";
import stepClipboard from "@/assets/step-clipboard.jpg";
import stepCharging from "@/assets/step-charging.jpg";

const steps = [
  {
    n: "01",
    title: "Contact an EVSE Sales Specialist",
    text: "Apply online or contact the UbiqPower team to begin the Zero Cost EV Charger Program review.",
    image: stepContact,
  },
  {
    n: "02",
    title: "Site Visit & Qualification Review",
    text: "UbiqPower reviews the property, including electrical capacity, site accessibility, and other program criteria.",
    image: stepClipboard,
  },
  {
    n: "03",
    title: "Agreement & Installation Schedule",
    text: "Once approved, UbiqPower coordinates the final agreement, installation timeline, training, and onboarding.",
    image: stepContact,
  },
  {
    n: "04",
    title: "Go Live & Earn",
    text: "Chargers go live, EV drivers pay per charging session, and the property owner or agreement holder receives 10% of monthly net profit.",
    image: stepCharging,
  },
];

const APPLY_HREF = "mailto:Zerocostapplication@foreseeson.com";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Four simple steps to get started
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            A guided process from first contact to going live. Acceptance is
            subject to site qualification and agreement approval.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.n}
              className="group relative overflow-hidden rounded-2xl border border-neutral-300 bg-card text-black shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <img
                src={s.image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.88) 55%, rgba(255,255,255,0.75) 100%)",
                }}
              />
              <div className="relative z-10 p-7">
                <div
                  className="text-4xl font-bold leading-none"
                  style={{ color: "#2D865B" }}
                >
                  {s.n}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <a
            href="#apply"
            className="inline-flex h-12 items-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
