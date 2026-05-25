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

  const titleFade = fadeRange(scrollProgress, 0.04, 0.17);
  const solutionIn = fadeRange(scrollProgress, 0.19, 0.28);
  const solutionOut = fadeRange(scrollProgress, 0.32, 0.44);
  const zeroCostIn = fadeRange(scrollProgress, 0.44, 0.56);
  const numberProgress = fadeRange(scrollProgress, 0.52, 0.72);
  const titleOpacity = 1 - titleFade;
  const solutionOpacity = solutionIn * (1 - solutionOut);
  const zeroCostOut = fadeRange(scrollProgress, 0.94, 1);
  const zeroCostOpacity = zeroCostIn * (1 - zeroCostOut);
  const animatedValue = Math.round(1000 - 1000 * numberProgress);

  return (
    <section ref={sectionRef} id="test" className="relative min-h-[420vh] bg-white">
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
                ${animatedValue.toLocaleString("en-US")}
              </p>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-2xl">
                No capital investment. No project risk. We handle everything from
                start to finish
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
