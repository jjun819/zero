import { useEffect, useRef, useState, type PointerEvent } from "react";
import stepCharging from "@/assets/step-charging.jpg";
import stepContact from "@/assets/step-contact.jpg";
import stepClipboard from "@/assets/step-clipboard.jpg";
import officeBuilding from "@/assets/office-building.jpg";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    n: "01",
    img: stepContact,
    title: "Contact an EVSE Sales Specialist",
    text: "Apply online or contact one of our EVSE Sales Specialists to begin the Zero Cost EV Charger Program review.",
  },
  {
    n: "02",
    img: stepClipboard,
    title: "Site Visit & Qualification Review",
    text: "UbiqPower reviews the property, including electrical capacity, site accessibility, and other program criteria.",
  },
  {
    n: "03",
    img: officeBuilding,
    title: "Agreement & Installation",
    text: "Once approved, UbiqPower coordinates the final agreement, installation timeline, training, and onboarding.",
  },
  {
    n: "04",
    img: stepCharging,
    title: "Go Live & Start Charging",
    text: "Chargers go live, EV drivers pay per charging session, and the property owner receives 10% of monthly net profit.",
  },
];

const APPLY_HREF = "#apply";

export function HowItWorks() {
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(
    () => steps.map(() => false)
  );

  const handleImagePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 8;
    const rotateX = ((0.5 - y / bounds.height) * 8);

    event.currentTarget.style.setProperty("--tilt-x", `${rotateX}deg`);
    event.currentTarget.style.setProperty("--tilt-y", `${rotateY}deg`);
  };

  const resetImageTilt = (event: PointerEvent<HTMLDivElement>) => {
    event.currentTarget.style.setProperty("--tilt-x", "0deg");
    event.currentTarget.style.setProperty("--tilt-y", "0deg");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const index = Number((entry.target as HTMLElement).dataset.stepIndex);

          setVisibleSteps((current) => {
            if (current[index]) return current;

            const next = [...current];
            next[index] = true;
            return next;
          });

          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.35,
      }
    );

    stepRefs.current.forEach((step) => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.12em] text-primary">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Four simple steps
          </span>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            From application to charging in four steps.
          </h2>
          <p className="mt-4 text-[1.1875rem] leading-relaxed text-foreground md:text-[1.375rem]">
            Acceptance is subject to site qualification and agreement approval.
          </p>
        </div>

        <div className="relative">
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const imageFirst = index % 2 === 0;
              const isVisible = visibleSteps[index];
              const hasNextStep = index < steps.length - 1;
              const isNextStepVisible = visibleSteps[index + 1];
              const imageHiddenClass = imageFirst ? "-translate-x-8" : "translate-x-8";
              const contentHiddenClass = imageFirst ? "translate-x-8" : "-translate-x-8";
              const revealImageClass = `transition-all duration-[450ms] ease-out will-change-transform ${
                isVisible ? "translate-x-0 opacity-100" : `${imageHiddenClass} opacity-0`
              }`;
              const revealContentClass = `transition-all duration-[450ms] ease-out will-change-transform ${
                isVisible ? "translate-x-0 opacity-100" : `${contentHiddenClass} opacity-0`
              }`;
              const revealNodeClass = `transition-all duration-[450ms] ease-out will-change-transform ${
                isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`;
              const revealLineClass = `transition-all duration-500 ease-out ${
                isNextStepVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
              }`;
              const image = (
                <div
                  className="group relative min-h-[260px] overflow-hidden rounded-2xl border border-neutral-200 shadow-sm transition-[box-shadow,transform] duration-300 ease-out hover:-translate-y-1 hover:shadow-xl md:min-h-[320px]"
                  onPointerMove={handleImagePointerMove}
                  onPointerLeave={resetImageTilt}
                  style={{
                    transform:
                      "perspective(900px) rotateX(var(--tilt-x, 0deg)) rotateY(var(--tilt-y, 0deg))",
                  }}
                >
                  <img
                    src={step.img}
                    alt={step.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              );
              const content = (
                <div
                  className={`flex h-full flex-col justify-center ${
                    index === 1 ? "md:-translate-y-4" : ""
                  }`}
                >
                  <span className="text-sm font-semibold uppercase tracking-[0.14em] text-[#2D865B]">
                    Step {step.n}
                  </span>
                  <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-[1.1875rem] leading-relaxed text-foreground">
                    {step.text}
                  </p>
                </div>
              );

              return (
                <div
                  key={step.n}
                  ref={(element) => {
                    stepRefs.current[index] = element;
                  }}
                  data-step-index={index}
                  className="relative grid gap-6 pl-16 md:grid-cols-[minmax(0,1fr)_64px_minmax(0,1fr)] md:gap-8 md:pl-0"
                >
                  {hasNextStep ? (
                    <div
                      className={`absolute left-6 top-6 z-0 h-[calc(100%+3rem)] w-0.5 origin-top bg-[#2D865B] md:left-1/2 md:h-[calc(100%+4rem)] md:-translate-x-1/2 ${revealLineClass}`}
                      style={{ transitionDelay: "180ms" }}
                    />
                  ) : null}

                  <div
                    className={`md:order-1 ${
                      imageFirst ? revealImageClass : revealContentClass
                    }`}
                    style={{ transitionDelay: imageFirst ? "0ms" : "100ms" }}
                  >
                    {imageFirst ? image : content}
                  </div>

                  <div
                    className={`absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#2D865B] bg-white text-lg font-bold text-[#2D865B] shadow-sm md:static md:order-2 md:mx-auto ${revealNodeClass}`}
                    style={{ transitionDelay: "50ms" }}
                  >
                    {index + 1}
                  </div>

                  <div
                    className={`md:order-3 ${
                      imageFirst ? revealContentClass : revealImageClass
                    }`}
                    style={{ transitionDelay: imageFirst ? "100ms" : "0ms" }}
                  >
                    {imageFirst ? content : image}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <a
            href={APPLY_HREF}
            className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Apply Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
