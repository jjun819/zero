import { useEffect, useRef, useState } from "react";

const TEST_CARDS = [
  {
    value: "$0",
    title: "Zero upfront cost",
    text: "UbiqPower covers design, equipment, and installation so properties can add EV charging without an upfront investment.",
  },
  {
    value: "10%",
    title: "Monthly profit share",
    text: "Property owners receive 10% of monthly net profit from charging activity, creating a recurring revenue opportunity.",
  },
  {
    value: "Value",
    title: "Stronger property appeal",
    text: "EV-ready amenities can help modernize the property experience and support long-term property value.",
  },
];

export function Test() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    let animationFrameId = 0;

    const updateBackground = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionTriggerPoint = rect.top + rect.height * 0.35;
      const viewportMiddle = window.innerHeight / 2;

      setIsDark(sectionTriggerPoint <= viewportMiddle);
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateBackground);
    };

    updateBackground();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="test"
      className={`pb-32 pt-48 transition-colors duration-700 md:pb-48 md:pt-64 ${
        isDark ? "bg-[#141414]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <h2
          className={`mx-auto max-w-5xl text-center text-3xl font-semibold leading-tight transition-colors duration-700 md:text-4xl lg:text-5xl ${
            isDark ? "text-white" : "text-slate-950"
          }`}
        >
          As North America&apos;s #1 EV adoption market, BC requires 90% of new vehicles to be zero
          emission by 2030.
        </h2>

        <div
          className={`mt-28 grid gap-6 transition-all duration-700 md:grid-cols-3 lg:mt-36 ${
            isDark ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {TEST_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[360px] flex-col rounded-xl border border-black/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:min-h-[420px] md:p-10"
            >
              <p className="text-5xl font-semibold leading-none text-[#2D865B] md:text-6xl">
                {card.value}
              </p>
              <h3 className="mt-6 text-2xl font-semibold leading-tight text-slate-950">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
