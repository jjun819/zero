const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function WhyChoose() {
  return (
    <section id="overview" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* ── Section heading (unchanged) ── */}
        <div className="max-w-5xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl lg:text-4xl">
            <span className="text-foreground">A zero-cost program for property owners.</span>{" "}
            <span className="text-foreground/50">
              UbiqPower brings EV charging infrastructure without upfront investment,
              while you earn a monthly net revenue share.
            </span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            UbiqPower Technology Inc. makes it easy for strata corporations,
            multi-unit residential developers, commercial property owners, and retail
            property owners to offer turnkey EV charging. With over 11 years of EV
            charging experience, UbiqPower helps remove the cost and complexity of
            getting started.
          </p>
        </div>

        {/* ── Two numbers, let them breathe ── */}
        <div className="mt-14 border-t border-foreground">
          <div className="grid grid-cols-1 divide-y divide-neutral-300 md:grid-cols-2 md:divide-x md:divide-y-0">

            {/* $0 */}
            <div className="py-10 pr-0 md:pr-14">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Your investment
              </p>
              <p className="mt-3 text-[110px] font-semibold leading-none tracking-tight text-foreground md:text-[130px]">
                $0
              </p>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                UbiqPower owns the chargers and pays for design, equipment, and
                installation. The property contributes EV-ready stalls and electrical
                capacity — nothing more.
              </p>
            </div>

            {/* 10% */}
            <div className="py-10 pl-0 md:pl-14">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Your monthly share
              </p>
              <p className="mt-3 text-[110px] font-semibold leading-none tracking-tight text-primary md:text-[130px]">
                10%
              </p>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Ten percent of monthly net profit is paid automatically to the
                property owner or agreement holder. No session minimums, no
                setup fees.
              </p>
            </div>
          </div>
        </div>

        {/* ── What's included ── */}
        <div className="mt-0 border-t border-border">
          <div className="grid grid-cols-1 divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { heading: "Design included",       sub: "Site survey + engineering plan" },
              { heading: "Equipment included",    sub: "L2 + L3 hardware, fully networked" },
              { heading: "Installation included", sub: "Trade-licensed crew, end to end" },
            ].map((item) => (
              <div key={item.heading} className="px-0 py-7 sm:px-8 first:pl-0 last:pr-0">
                <p className="text-base font-semibold text-foreground">{item.heading}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Credibility strip (unchanged) ── */}
        <div className="mt-6 flex items-center justify-between rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
          <span className="text-sm text-muted-foreground">
            <b className="text-foreground">11+ years</b> EV charging experience ·{" "}
            <b className="text-foreground">4,000+</b> chargers managed ·{" "}
            <b className="text-foreground">OCPP 1.6</b> open standard
          </span>
          <a
            href="#apply"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            See if you qualify <ArrowIcon />
          </a>
        </div>

      </div>
    </section>
  );
}
