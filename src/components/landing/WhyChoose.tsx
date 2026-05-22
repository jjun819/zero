import { useEffect, useRef, useState } from "react";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CountUpPercent = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplayValue(value);
      return;
    }

    let animationFrameId = 0;
    let startTime = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / 1600, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setDisplayValue(Math.round(easedProgress * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        animationFrameId = requestAnimationFrame(animate);
        observer.disconnect();
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [value]);

  return <span ref={ref}>{displayValue}%</span>;
};

export function WhyChoose() {
  return (
    <section id="overview" className="bg-[#EFF2FB] py-20 md:py-28">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">

        {/* ── Section heading (unchanged) ── */}
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-foreground">A zero-cost program for property owners.</span>{" "}
          </h2>
          <p className="mt-5 text-base text-foreground md:text-lg">
            UbiqPower delivers turnkey EV charging solutions at Zero upfront cost, turning parking spaces into monthly net profit for strata corporations, commercial, and retail property owners
          </p>
        </div>

        {/* ── Two numbers, let them breathe ── */}
        <div className="mt-14">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">

            {/* $0 */}
            <div className="rounded-xl border border-black/20 bg-white/70 p-7 shadow-[0_16px_45px_rgba(15,23,42,0.06)] md:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Your investment
              </p>
              <p className="mt-3 text-[110px] font-semibold leading-none tracking-tight text-primary md:text-[130px]">
                $0
              </p>
              <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                UbiqPower owns the chargers and pays for design, equipment, and
                installation. The property contributes EV-ready stalls and electrical
                capacity — nothing more.
              </p>
            </div>

            {/* 10% */}
            <div className="rounded-xl border border-black/20 bg-white/70 p-7 shadow-[0_16px_45px_rgba(15,23,42,0.06)] md:p-9">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Your monthly share
              </p>
              <p className="mt-3 text-[110px] font-semibold leading-none tracking-tight text-primary md:text-[130px]">
                <CountUpPercent value={10} />
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
        <div className="mx-auto mt-6 max-w-5xl">
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
            Check Eligibility <ArrowIcon />
          </a>
        </div>

      </div>
    </section>
  );
}
