import { CheckCircle2 } from "lucide-react";

const points = [
  "Property owner or authorized agreement holder",
  "Available parking spaces for charger installation",
  "Suitable electrical access or ability to complete a site review",
  "Interest in offering EV charging to residents, customers, employees, or the public",
  "Willingness to complete a site assessment with the UbiqPower team",
];

export function Qualifications() {
  return (
    <section className="bg-background pb-20 pt-10 md:pb-28 md:pt-14">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Eligibility
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            UbiqPower works with property owners and agreement holders who are ready to add EV charging infrastructure without upfront investment.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <li
              key={p}
              className="flex items-start gap-3 rounded-2xl border border-neutral-300 bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
            >
              <CheckCircle2
                className="mt-0.5 h-5 w-5 flex-shrink-0"
                style={{ color: "#2D865B" }}
              />
              <span className="text-sm leading-relaxed text-foreground">
                {p}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
