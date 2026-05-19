import { useMemo, useState } from "react";
import { Calculator, PlugZap, TrendingUp } from "lucide-react";

import { Slider } from "@/components/ui/slider";

const PROFIT_SHARE = 0.1;
const ESTIMATED_SESSIONS_PER_CHARGER = 18;
const ESTIMATED_NET_PROFIT_PER_SESSION = 7;

const currency = new Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
  maximumFractionDigits: 0,
});

export function RoiCalculator() {
  const [chargers, setChargers] = useState(8);

  const monthlyRevenue = useMemo(
    () =>
      chargers *
      ESTIMATED_SESSIONS_PER_CHARGER *
      ESTIMATED_NET_PROFIT_PER_SESSION *
      PROFIT_SHARE,
    [chargers],
  );

  const annualRevenue = monthlyRevenue * 12;
  const monthlySessions = chargers * ESTIMATED_SESSIONS_PER_CHARGER;

  return (
    <section id="roi" className="bg-[#F5F8F6] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-10 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-3 py-1 text-sm font-medium text-primary">
            <Calculator className="h-4 w-4" />
            Revenue estimate
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Estimate your monthly charger revenue
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-600 md:text-lg">
            Move the bar to estimate the monthly property share based on the
            number of chargers installed at your location.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="rounded-2xl border border-neutral-300 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-neutral-500">
                  Chargers installed
                </p>
                <p className="mt-2 text-5xl font-semibold text-neutral-900">
                  {chargers}
                </p>
              </div>
              <div className="rounded-full bg-primary/10 p-3 text-primary">
                <PlugZap className="h-6 w-6" />
              </div>
            </div>

            <div className="mt-10">
              <Slider
                value={[chargers]}
                min={2}
                max={40}
                step={1}
                onValueChange={([value]) => setChargers(value ?? chargers)}
                aria-label="Number of chargers"
              />
              <div className="mt-3 flex justify-between text-sm text-neutral-500">
                <span>2 chargers</span>
                <span>40 chargers</span>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <Metric label="Monthly sessions" value={monthlySessions.toLocaleString("en-CA")} />
              <Metric label="Net profit/session" value={currency.format(ESTIMATED_NET_PROFIT_PER_SESSION)} />
              <Metric label="Property share" value="10%" />
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-neutral-900 p-6 text-white shadow-sm md:p-8">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium uppercase tracking-wide text-white/60">
                Estimated monthly revenue
              </p>
              <TrendingUp className="h-5 w-5 text-brand-accent-bright" />
            </div>
            <p className="mt-5 text-5xl font-semibold tracking-tight md:text-6xl">
              {currency.format(monthlyRevenue)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Estimated property revenue from UbiqPower's monthly net profit
              share.
            </p>

            <div className="mt-8 border-t border-white/15 pt-6">
              <p className="text-sm font-medium uppercase tracking-wide text-white/60">
                Estimated annual revenue
              </p>
              <p className="mt-2 text-2xl font-semibold">
                {currency.format(annualRevenue)}
              </p>
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm text-neutral-500">
          Estimates use 18 charging sessions per charger per month, $7 net
          profit per session, and a 10% property share. Actual revenue varies by
          site traffic, charger type, pricing, uptime, and agreement terms.
        </p>
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-4">
      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
        {label}
      </p>
      <p className="mt-2 text-xl font-semibold text-neutral-900">{value}</p>
    </div>
  );
}
