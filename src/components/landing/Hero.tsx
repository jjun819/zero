import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #1a4d3e 0%, #0f2f28 50%, #1a4d3e 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, #04BBA6 1px, transparent 1px), radial-gradient(circle at 80% 80%, #1EDDC7 1px, transparent 1px), radial-gradient(circle at 40% 20%, #2D865B 1px, transparent 1px)",
          backgroundSize: "200px 200px",
        }}
      />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-5 py-20 md:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            The zero-cost program
          </div>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            EV charging.{" "}
            <span
              style={{
                background:
                  "linear-gradient(to right, #6ee7b7, #1eddc7)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Zero cost.
            </span>{" "}
            Monthly revenue.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70">
            UbiqPower handles design, equipment, and installation at no upfront
            cost. You provide EV-ready stalls and electrical capacity. Property
            owners earn 10% of monthly charging revenue.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#apply"
            className="inline-flex h-12 items-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-black shadow-lg shadow-black/30 transition-colors hover:bg-white/90"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-12 items-center rounded-md border border-white/40 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
          >
            Learn How It Works
          </a>
        </div>
      </div>
    </section>
  );
}