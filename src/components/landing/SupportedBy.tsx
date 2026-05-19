import foreseesonLogo from "@/assets/foreseeson-logo.png";

export function SupportedBy() {
  return (
    <section
      className="relative overflow-hidden py-10 md:py-14"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.06 0.008 160) 0%, oklch(0.14 0.012 160) 35%, var(--secondary) 100%)",
      }}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-emerald-400/90">
          Supported by
        </span>
        <img
          src={foreseesonLogo}
          alt="Foreseeson"
          className="mt-4 h-10 w-auto md:h-12"
          loading="lazy"
        />
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
          Backed by 10+ years of experience in EV infrastructure, deployment, and support.
        </p>
      </div>
    </section>
  );
}
