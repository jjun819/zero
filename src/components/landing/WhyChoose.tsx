const CheckIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary shrink-0 mt-0.5">
    <circle cx="32" cy="32" r="22" />
    <path d="M22 32l8 8 14-16" />
  </svg>
);

const WalletIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-foreground">
    <rect x="8" y="18" width="48" height="32" rx="4" />
    <path d="M8 28h48" />
    <circle cx="32" cy="40" r="6" />
    <path d="M29 40h6M32 37v6" />
  </svg>
);

const ChartIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-white">
    <path d="M8 50h48" />
    <path d="M12 44l12-14 10 8 18-22" />
    <path d="M40 16h12v12" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export function WhyChoose() {
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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* $0 Card */}
          <div className="rounded-2xl border border-black/10 bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-black/20 flex items-stretch gap-6">
            {/* Left side */}
            <div className="flex flex-col justify-between min-w-fit">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <WalletIcon />
                  <span className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground ml-4">Your investment</span>
                </div>
                <div className="text-[140px] font-semibold leading-none text-foreground">$0</div>
              </div>
              <h3 className="text-lg font-semibold text-foreground">Zero upfront cost</h3>
            </div>

            {/* Right side - bullets */}
            <div className="flex-1 border-l border-black/10 pl-6 flex flex-col justify-between py-2">
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  <CheckIcon />
                  <span>Design included</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  <CheckIcon />
                  <span>Equipment included</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  <CheckIcon />
                  <span>Installation included</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 10% Card */}
          <div className="rounded-2xl bg-foreground p-7 shadow-sm text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg flex items-stretch gap-6">
            {/* Left side */}
            <div className="flex flex-col justify-between min-w-fit">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <ChartIcon />
                  <span className="text-[11px] uppercase tracking-[0.12em] text-white/55 ml-4">Your monthly share</span>
                </div>
                <div className="text-[140px] font-semibold leading-none">10%</div>
              </div>
              <h3 className="text-lg font-semibold text-white">Monthly revenue share</h3>
            </div>

            {/* Right side - bullets */}
            <div className="flex-1 border-l border-white/15 pl-6 flex flex-col justify-between py-2">
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-sm leading-relaxed text-white/80 md:text-base">
                  <CheckIcon />
                  <span>Of monthly net profit</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm leading-relaxed text-white/80 md:text-base">
                  <CheckIcon />
                  <span>Paid automatically every month</span>
                </li>
                <li className="flex items-start gap-2.5 text-sm leading-relaxed text-white/80 md:text-base">
                  <CheckIcon />
                  <span>No minimum session requirement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Credibility strip */}
        <div className="mt-6 rounded-2xl border border-black/10 bg-white p-5 shadow-sm flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            <b className="text-foreground">11+ years</b> EV charging experience · <b className="text-foreground">4,000+</b> chargers managed · <b className="text-foreground">OCPP 1.6</b> open standard
          </span>
          <a href="#apply" className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-brand transition-colors">
            See if you qualify <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
