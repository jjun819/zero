import { ArrowRight } from "lucide-react";
import heroVideo from "@/assets/hero-bg.mp4";

const APPLY_HREF = "mailto:Zerocostapplication@foreseeson.com";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-black text-white"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.8) 100%)",
        }}
      />
      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-5 py-20 md:px-8">
        <h1 className="max-w-5xl text-3xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
          Turn your property into a new revenue stream.
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-3">
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
