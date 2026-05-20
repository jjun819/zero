import { ArrowRight } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";

const MapBackground = lazy(() =>
  import("./MapBackground").then((m) => ({ default: m.MapBackground }))
);

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Map background — lazy-loaded to avoid SSR window errors */}
      <div className="absolute inset-0 z-0">
        {isVisible && (
          <Suspense fallback={null}>
            <MapBackground />
          </Suspense>
        )}

        {/* Darkening overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 47, 40, 0.58) 0%, rgba(10, 26, 31, 0.68) 50%, rgba(15, 47, 40, 0.58) 100%)",
          }}
        />

        {/* Dark vignette on edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%)",
          }}
        />
      </div>

      {/* Strong gradient overlay on left side for text readability */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.3) 60%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-5 py-20 md:px-8">
        <div className="max-w-3xl">
          <h1
            className={`max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            EV charging.{" "}
            <span
              className="inline-block"
              style={{
                background: "linear-gradient(to right, #6ee7b7, #1eddc7, #6ee7b7)",
                backgroundSize: "200% 200%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                animation: "gradientFlow 4s ease infinite",
              }}
            >
              Zero cost.
            </span>{" "}
            Monthly revenue.
          </h1>

          <p
            className={`mt-6 max-w-xl text-lg text-white/70 transition-all duration-1000 ${
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
              className="group relative inline-flex h-12 items-center gap-2 rounded-md bg-white px-6 text-sm font-semibold text-black overflow-hidden shadow-lg shadow-black/30 transition-all hover:shadow-xl hover:shadow-emerald-500/20 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Apply Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-20 transform -translate-x-full group-hover:translate-x-full transition-all duration-500" />
            </a>
            <a
              href="#how-it-works"
              className="group inline-flex h-12 items-center rounded-md border border-white/40 bg-white/5 px-6 text-sm font-semibold text-white backdrop-blur transition-all hover:border-emerald-400/60 hover:bg-white/10"
            >
              Learn How It Works
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

        .leaflet-container {
          background: #0a1a1f !important;
        }
        .leaflet-tile {
          border: 0 !important;
          outline: none !important;
          box-shadow: none !important;
        }
        .leaflet-control-attribution {
          display: none !important;
        }
      `}</style>
    </section>
  );
}
