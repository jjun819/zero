const cards = [
  {
    title: "Zero Upfront Cost",
    text: "UbiqPower covers design, equipment, and installation, so your property can offer EV charging without the upfront investment.",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14 text-foreground">
        <rect x="8" y="18" width="48" height="32" rx="4" />
        <path d="M8 28h48" />
        <circle cx="32" cy="40" r="6" />
        <path d="M29 40h6M32 37v6" />
      </svg>
    ),
  },
  {
    title: "Turnkey Support",
    text: "From site review to installation and onboarding, UbiqPower helps guide the process so property owners do not have to manage the technical complexity alone.",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14 text-foreground">
        <circle cx="14" cy="32" r="5" />
        <circle cx="50" cy="18" r="5" />
        <circle cx="50" cy="46" r="5" />
        <path d="M19 32l26-12M19 32l26 12" />
      </svg>
    ),
  },
  {
    title: "10% Monthly Net Profit Share",
    text: "EV drivers pay per charging session, and the property owner or agreement holder receives 10% of monthly net profit.",
    illustration: (
      <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-14 w-14 text-foreground">
        <path d="M8 50h48" />
        <path d="M12 44l12-14 10 8 18-22" />
        <path d="M40 16h12v12" />
      </svg>
    ),
  },
];

export function Overview() {
  return (
    <section id="overview" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
            <span className="text-foreground">A zero-cost program for property owners.</span>{" "}
            <span className="text-foreground/50">UbiqPower brings EV charging infrastructure without upfront investment, while you earn a monthly net revenue share.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            UbiqPower Technology Inc. makes it easy for strata corporations,
            multi-unit residential developers, commercial property owners, and
            retail property owners to offer turnkey EV charging. With over 11
            years of EV charging experience, UbiqPower helps remove the cost
            and complexity of getting started.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {cards.map((c) => (
            <div key={c.title} className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg hover:border-black/20">
              {c.illustration}
              <h3 className="mt-6 text-xl font-semibold text-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
