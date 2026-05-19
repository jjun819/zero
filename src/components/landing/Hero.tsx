import { ArrowRight } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";

const MapBackground = lazy(() =>
  import("./MapBackground").then((m) => ({ default: m.MapBackground }))
);

const MAP_PULSES = [
  { id: 1,  x: 55, y: 22, size: 6, color: "#1eddc7", delay: 0,   driftAnim: "drift-a", pulseDur: 2.8 },
  { id: 2,  x: 68, y: 38, size: 5, color: "#6ee7b7", delay: 1.2, driftAnim: "drift-b", pulseDur: 3.2 },
  { id: 3,  x: 80, y: 18, size: 7, color: "#1eddc7", delay: 0.6, driftAnim: "drift-c", pulseDur: 2.5 },
  { id: 4,  x: 60, y: 62, size: 5, color: "#6ee7b7", delay: 2.0, driftAnim: "drift-d", pulseDur: 3.5 },
  { id: 5,  x: 74, y: 74, size: 6, color: "#1eddc7", delay: 0.4, driftAnim: "drift-a", pulseDur: 2.8 },
  { id: 6,  x: 87, y: 48, size: 4, color: "#6ee7b7", delay: 1.8, driftAnim: "drift-b", pulseDur: 4.0 },
  { id: 7,  x: 93, y: 28, size: 5, color: "#1eddc7", delay: 3.0, driftAnim: "drift-c", pulseDur: 3.0 },
  { id: 8,  x: 57, y: 48, size: 7, color: "#6ee7b7", delay: 1.4, driftAnim: "drift-d", pulseDur: 2.6 },
  { id: 9,  x: 76, y: 57, size: 5, color: "#1eddc7", delay: 0.2, driftAnim: "drift-a", pulseDur: 3.8 },
  { id: 10, x: 89, y: 68, size: 6, color: "#6ee7b7", delay: 2.6, driftAnim: "drift-b", pulseDur: 2.8 },
  { id: 11, x: 64, y: 83, size: 4, color: "#1eddc7", delay: 1.0, driftAnim: "drift-c", pulseDur: 4.2 },
  { id: 12, x: 50, y: 33, size: 5, color: "#6ee7b7", delay: 3.4, driftAnim: "drift-d", pulseDur: 3.2 },
];

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Real Vancouver Map Background — lazy-loaded to avoid SSR window errors */}
      <div className="absolute inset-0 z-0">
        {isVisible && (
          <Suspense fallback={null}>
            <MapBackground />
          </Suspense>
        )}

        {/* Darkening overlay so map fades into background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, rgba(15, 47, 40, 0.58) 0%, rgba(10, 26, 31, 0.68) 50%, rgba(15, 47, 40, 0.58) 100%)",
          }}
        />

        {/* Additional dark vignette on edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.6) 100%)",
          }}
        />
      </div>

      {/* Animated map pulses */}
      <div className="absolute inset-0 z-[5] pointer-events-none overflow-hidden">
        {MAP_PULSES.map((pulse) => (
          <div
            key={pulse.id}
            className="absolute"
            style={{
              left: `${pulse.x}%`,
              top: `${pulse.y}%`,
              animation: `${pulse.driftAnim} ${16 + pulse.id * 1.5}s ease-in-out infinite`,
              animationDelay: `${-pulse.delay * 3}s`,
            }}
          >
            {/* Ripple rings */}
            <div
              style={{
                position: "absolute",
                width: pulse.size,
                height: pulse.size,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                border: `1.5px solid ${pulse.color}`,
                animation: `pulse-ring ${pulse.pulseDur}s ease-out infinite`,
                animationDelay: `${pulse.delay}s`,
              }}
            />
            <div
              style={{
                position: "absolute",
                width: pulse.size,
                height: pulse.size,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                borderRadius: "50%",
                border: `1px solid ${pulse.color}60`,
                animation: `pulse-ring ${pulse.pulseDur}s ease-out infinite`,
                animationDelay: `${pulse.delay + pulse.pulseDur * 0.45}s`,
              }}
            />
            {/* Core dot */}
            <div
              style={{
                width: pulse.size,
                height: pulse.size,
                borderRadius: "50%",
                backgroundColor: pulse.color,
                boxShadow: `0 0 ${pulse.size * 2}px ${pulse.color}, 0 0 ${pulse.size * 5}px ${pulse.color}50`,
                opacity: 0.85,
              }}
            />
          </div>
        ))}
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

        @keyframes pulse-ring {
          0%   { transform: translate(-50%, -50%) scale(1);   opacity: 0.85; }
          100% { transform: translate(-50%, -50%) scale(4.5); opacity: 0; }
        }

        @keyframes drift-a {
          0%,  100% { transform: translate(0px,   0px);  }
          25%        { transform: translate(18px, -12px); }
          50%        { transform: translate(8px,   20px); }
          75%        { transform: translate(-14px,  8px); }
        }
        @keyframes drift-b {
          0%,  100% { transform: translate(0px,   0px);  }
          25%        { transform: translate(-20px, 10px); }
          50%        { transform: translate(-5px, -18px); }
          75%        { transform: translate(12px,  -8px); }
        }
        @keyframes drift-c {
          0%,  100% { transform: translate(0px,  0px);  }
          33%        { transform: translate(14px, 16px); }
          66%        { transform: translate(-12px,-10px); }
        }
        @keyframes drift-d {
          0%,  100% { transform: translate(0px,   0px);  }
          30%        { transform: translate(-18px,-14px); }
          60%        { transform: translate(10px,  12px); }
          80%        { transform: translate(20px,  -8px); }
        }

        /* Hide leaflet's default controls/attribution since we disabled them */
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
