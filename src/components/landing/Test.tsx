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
  return (
    <section id="test" className="bg-[#DCEFE8] py-32 md:py-48">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <h2 className="mx-auto max-w-5xl text-center text-3xl font-semibold leading-tight text-slate-950 md:text-4xl lg:text-5xl">
          As North America&apos;s #1 EV adoption market, BC requires 90% of new
          vehicles to be zero emission by 2030.
        </h2>

        <div className="mt-28 grid gap-6 md:grid-cols-3 lg:mt-36">
          {TEST_CARDS.map((card) => (
            <div
              key={card.title}
              className="flex min-h-[360px] flex-col rounded-xl border border-black/10 bg-white/75 p-8 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:min-h-[420px] md:p-10"
            >
              <p className="text-5xl font-semibold leading-none text-[#2D865B] md:text-6xl">
                {card.value}
              </p>
              <h3 className="mt-6 text-2xl font-semibold leading-tight text-slate-950">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
