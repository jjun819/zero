import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroEvCharging from "@/assets/hero-ev-charging.jpg";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC]">
      <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-12 px-5 py-20 md:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:gap-16">
        <div className="max-w-3xl">
          <h1
            className={`max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 transition-all duration-1000 md:text-6xl lg:text-7xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            EV charging.{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(to right, #2D865B, #0f766e, #1EDDC7)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientFlow 4s ease infinite",
              }}
            >
              Zero cost.
            </span>{" "}
            
          </h1>

          <p
            className={`mt-6 max-w-xl text-lg leading-relaxed text-slate-600 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            UbiqPower handles design, equipment, and installation at no upfront
            cost. You provide EV-ready stalls and electrical capacity. Property
            owners earn 10% of monthly charging revenue.
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center gap-3 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <a
              href="#apply"
              className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-md bg-[#2D865B] px-6 text-sm font-semibold text-white shadow-lg shadow-emerald-900/15 transition-all hover:scale-105 hover:bg-[#24724d] hover:shadow-xl hover:shadow-emerald-900/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply Now{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-all duration-500 group-hover:translate-x-full group-hover:opacity-20" />
            </a>
            <a
              href="#how-it-works"
              className="group inline-flex h-12 items-center rounded-md border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-800 shadow-sm transition-all hover:border-[#2D865B]/50 hover:text-[#2D865B] hover:shadow-md"
            >
              Learn How It Works
            </a>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/12">
            <img
              src={heroEvCharging}
              alt="Electric vehicle charging at a commercial property"
              className="h-[360px] w-full object-cover md:h-[480px] lg:h-[560px]"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes gradientFlow {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }
      `}</style>
    </section>
  );
}
