import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import heroBackground from "@/assets/hero.png";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#F8FAFC] bg-cover bg-[70%_center] bg-no-repeat md:bg-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
    >
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-5 py-24 md:px-8 md:py-28">
        <div className="max-w-3xl">
          <h1
            className={`max-w-[44rem] text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-slate-950 transition-all duration-1000 md:text-[3.25rem] lg:text-[4.3rem] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            EV charging stations, now with{" "}
            <span
              className="inline"
              style={{
                background: "linear-gradient(to right, #2D865B, #0f766e, #1EDDC7)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientFlow 4s ease infinite",
              }}
            >
              Zero Cost.
            </span>{" "}
          </h1>

          <p
            className={`mt-5 text-[1rem] leading-relaxed text-slate-950 transition-all duration-1000 md:text-[1.125rem] lg:text-[1.27rem] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <span className="block max-w-[33rem]">
              UbiqPower handles everything from design to installation,
            </span>
            <span className="block max-w-[29rem]">
              so your property can offer modern EV charging without any upfront investment.
            </span>
          </p>

          <div
            className={`mt-10 flex flex-wrap items-center gap-8 transition-all duration-1000 ${
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
