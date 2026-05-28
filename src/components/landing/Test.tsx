import { useEffect, useRef, useState } from "react";

const clamp = (value: number, min = 0, max = 1) => {
  return Math.min(Math.max(value, min), max);
};

const fadeRange = (progress: number, start: number, end: number) => {
  return clamp((progress - start) / (end - start));
};

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

const gradientTextStyle = {
  background: "linear-gradient(to right, #2D865B, #0f766e, #1EDDC7)",
  backgroundSize: "200% 200%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  animation: "gradientFlow 4s ease infinite",
};

const stats = [
  {
    value: "4000+",
    label: "Chargers sold and installed",
  },
  {
    value: "2000+",
    label: "Customers served",
  },
  {
    value: "10+",
    label: "Years of experience",
  },
];

const titleFadeStart = 0.08;
const titleFadeEnd = 0.28;
const finalFadeStart = 0.86;
const finalFadeEnd = 1;

export function Test() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const smoothedRef = useRef(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const updateTarget = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      const distanceScrolled = -rect.top;
      targetRef.current = clamp(distanceScrolled / scrollableDistance);
    };

    const animate = () => {
      smoothedRef.current = lerp(smoothedRef.current, targetRef.current, 0.12);
      setScrollProgress(smoothedRef.current);
      rafRef.current = requestAnimationFrame(animate);
    };

    updateTarget();
    rafRef.current = requestAnimationFrame(animate);
    window.addEventListener("scroll", updateTarget, { passive: true });
    window.addEventListener("resize", updateTarget);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("scroll", updateTarget);
      window.removeEventListener("resize", updateTarget);
    };
  }, []);

  const titleFade = fadeRange(scrollProgress, titleFadeStart, titleFadeEnd);
  const solutionIn = fadeRange(scrollProgress, 0.22, 0.37);
  const solutionOut = fadeRange(scrollProgress, 0.48, 0.68);
  const zeroCostIn = fadeRange(scrollProgress, 0.56, 0.70);
  const titleOpacity = 1 - titleFade;
  const solutionOpacity = solutionIn * (1 - solutionOut);
  const zeroCostOut = fadeRange(scrollProgress, finalFadeStart, finalFadeEnd);
  const zeroCostOpacity = zeroCostIn * (1 - zeroCostOut);
  const statsOut = fadeRange(scrollProgress, finalFadeStart, finalFadeEnd);
  const statsOpacity = zeroCostIn * (1 - statsOut);

  return (
    <section ref={sectionRef} id="test" className="relative min-h-[300vh] bg-white">
      <div className="sticky top-0 flex h-screen items-center">
        <div className="mx-auto w-full max-w-[1380px] px-5 md:px-8">
          <div className="relative mx-auto min-h-[16rem] max-w-5xl md:min-h-[18rem]">
            <h2
              className="absolute inset-0 flex items-center justify-center text-center text-4xl font-semibold leading-tight text-slate-950 md:text-5xl lg:text-6xl"
              style={{
                opacity: titleOpacity,
                transform: `translateY(${-20 * titleFade}px)`,
                willChange: "opacity, transform",
              }}
            >
              BC requires 90% of new vehicles to be zero emission by 2030.
            </h2>

            <h2
              className="absolute inset-0 flex items-center justify-center text-center text-4xl font-semibold leading-tight text-slate-950 md:text-5xl lg:text-6xl"
              style={{
                opacity: solutionOpacity,
                transform: `translateY(${20 * (1 - solutionIn) - 20 * solutionOut}px)`,
                willChange: "opacity, transform",
              }}
            >
              Here is our solution
            </h2>

            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
              style={{
                opacity: zeroCostOpacity,
                transform: `translateY(${22 * (1 - zeroCostIn) - 18 * zeroCostOut}px)`,
                willChange: "opacity, transform",
              }}
            >
              <h2 className="text-4xl font-semibold leading-tight text-slate-950 md:text-5xl lg:text-6xl">
                When we say{" "}
                <span className="inline" style={gradientTextStyle}>
                  Zero Cost
                </span>
                , we mean it.
              </h2>
              <p className="mt-8 text-7xl font-semibold leading-none tracking-tight text-[#2D865B] md:text-8xl lg:text-9xl">
                $0
              </p>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-2xl">
                No capital investment. No project risk. We handle everything from start to finish
              </p>
            </div>

            <div
              className="absolute inset-x-0 top-[calc(50%+13rem)] mx-auto grid max-w-6xl gap-6 md:grid-cols-3 md:gap-0 lg:top-[calc(50%+15rem)]"
              style={{
                opacity: statsOpacity,
                transform: `translateY(${24 * (1 - statsOpacity)}px)`,
                willChange: "opacity, transform",
              }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="flex justify-center">
                  <div className="w-fit min-w-[14rem] border-l-2 border-[#2D865B] pl-7 text-left md:min-w-[16rem] md:pl-10">
                    <p className="text-5xl font-semibold leading-none tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                      {stat.value}
                    </p>
                    <p className="mt-4 text-lg leading-relaxed text-[#56617D] md:text-xl">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
