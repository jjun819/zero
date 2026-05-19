import { Building2, CircleDollarSign, TrendingUp } from "lucide-react";

const cards = [
  {
    icon: CircleDollarSign,
    highlight: "$0",
    highlightLabel: "upfront cost",
    title: "Zero upfront cost",
    body: "No capital expenditure. UbiqPower handles design, equipment, and installation for qualified properties.",
  },
  {
    icon: TrendingUp,
    highlight: "10%",
    highlightLabel: "of monthly net profit",
    title: "New revenue opportunity",
    body: "Property owners receive a share of every charging session — hands-free, every month.",
  },
  {
    icon: Building2,
    highlight: "Better value",
    highlightLabel: "for your property",
    title: "Improved property appeal",
    body: "Offer residents, visitors, and employees convenient EV charging while boosting long-term property value.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative bg-white py-24 md:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-5xl md:mb-20">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-5xl">
            A zero-cost program for property owners.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-500 md:text-xl">
            UbiqPower brings EV charging infrastructure without upfront investment, while you earn a monthly net revenue share.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.title}
                className="group relative rounded-2xl border border-neutral-300 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
              >
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50"
                  style={{ color: "#2D865B" }}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="mt-6">
                  <div
                    className="text-4xl font-semibold tracking-tight"
                    style={{ color: "#2D865B" }}
                  >
                    {c.highlight}
                  </div>
                  <div className="mt-1 text-sm text-neutral-500">
                    {c.highlightLabel}
                  </div>
                </div>
                <div className="my-6 h-px w-full bg-neutral-200" />
                <h3 className="text-base font-semibold tracking-tight text-neutral-900">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                  {c.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
