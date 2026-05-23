import { useEffect, useRef, useState } from "react";
import { PlugZap, Ruler, Wrench } from "lucide-react";

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

const CountDownCurrency = ({
  startValue,
  endValue,
}: {
  startValue: number;
  endValue: number;
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(startValue);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDisplayValue(endValue);
      return;
    }

    let animationFrameId = 0;
    let startTime = 0;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / 1600, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const nextValue = startValue - (startValue - endValue) * easedProgress;

      setDisplayValue(Math.round(nextValue));

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
  }, [endValue, startValue]);

  return <span ref={ref}>${displayValue.toLocaleString("en-US")}</span>;
};

export function WhyChoose() {
  return (
    <section id="overview" className="bg-[#EFF2FB] py-20 md:py-28">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
            <span className="text-foreground">
              A zero-cost program for property owners.
            </span>{" "}
          </h2>
          <p className="mt-5 text-base text-foreground md:text-lg">
            UbiqPower delivers turnkey EV charging solutions at Zero upfront
            cost, turning parking spaces into monthly net profit for strata
            corporations, commercial, and retail property owners
          </p>
        </div>

        <div className="mt-14">
          <div className="grid gap-6 lg:items-stretch xl:grid-cols-[800px_minmax(320px,1fr)]">
            <div className="relative rounded-xl border border-white/60 bg-white/45 shadow-[0_20px_60px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 bg-white/60 lg:block"
              />
              <div className="grid divide-y divide-white/60 lg:grid-cols-2 lg:divide-y-0">
                <div className="flex h-full flex-col items-center p-7 md:p-9">
                  <p className="text-center text-base font-bold uppercase tracking-[0.14em] text-black">
                    Your investment
                  </p>
                  <p className="mt-3 text-center text-[92px] font-semibold leading-none tracking-tight text-primary md:text-[112px]">
                    <CountDownCurrency startValue={2000} endValue={0} />
                  </p>
                  <p className="mx-auto mt-5 max-w-sm text-center text-base leading-relaxed text-black">
                    UbiqPower owns the chargers and pays for design, equipment,
                    and installation. The property contributes EV-ready stalls
                    and electrical capacity - nothing more.
                  </p>
                </div>

                <div className="flex items-center justify-center py-2 lg:absolute lg:inset-0 lg:z-10 lg:py-0 lg:pointer-events-none">
                  <span
                    aria-hidden="true"
                    className="text-4xl font-semibold leading-none text-black"
                  >
                    +
                  </span>
                </div>

                <div className="flex h-full flex-col items-center p-7 md:p-9">
                  <p className="text-center text-base font-bold uppercase tracking-[0.14em] text-black">
                    Your monthly share
                  </p>
                  <p className="mt-3 text-center text-[92px] font-semibold leading-none tracking-tight text-primary md:text-[112px]">
                    <CountUpPercent value={10} />
                  </p>
                  <p className="mx-auto mt-5 max-w-sm text-center text-base leading-relaxed text-black">
                    Ten percent of monthly net profit is paid automatically to
                    the property owner or agreement holder. No setup fees.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-white/60 bg-white/45 shadow-[0_20px_60px_rgba(15,23,42,0.10),inset_0_1px_0_rgba(255,255,255,0.65)] backdrop-blur-xl">
              <img
                src="/035854bc-e5fb-43b9-9f1a-2d62c35f1562.png"
                alt="EV charging program"
                className="h-full min-h-[320px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {[
            {
              heading: "Design included",
              sub: "Site survey + engineering plan",
              icon: Ruler,
            },
            {
              heading: "Equipment included",
              sub: "L2 + L3 hardware, fully networked",
              icon: PlugZap,
            },
            {
              heading: "Installation included",
              sub: "Trade-licensed crew, end to end",
              icon: Wrench,
            },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.heading}
                className="relative rounded-xl border border-black/15 bg-white/55 p-6 pr-16 shadow-[0_16px_45px_rgba(15,23,42,0.07),inset_0_1px_0_rgba(255,255,255,0.7)] backdrop-blur-xl"
              >
                <div className="absolute right-5 top-5 flex h-8 w-8 items-center justify-center rounded-lg border border-black/10 bg-white/60 text-[#2D865B]">
                  <Icon className="h-4 w-4" strokeWidth={1.7} aria-hidden="true" />
                </div>
                <p className="whitespace-nowrap text-lg font-semibold text-foreground">
                  {item.heading}
                </p>
                <p className="mt-2 whitespace-nowrap text-base leading-relaxed text-muted-foreground">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between rounded-2xl border border-black/10 bg-white p-6 shadow-sm md:p-8">
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
