import productL2 from "@/assets/product-l2.png";
import productL3 from "@/assets/product-l3.png";

const products = [
  {
    name: "L2 EV Charger",
    image: productL2,
    href: "/products/l2-ev-charger",
    points: [
      "Ideal for residential, commercial, and workplace charging.",
      "Reliable everyday charging for longer parking durations.",
    ],
  },
  {
    name: "L3 DC Fast EV Charger",
    image: productL3,
    href: "/products/l3-fast-dc-ev-charger",
    points: [
      "High-speed charging designed for public and high-traffic locations.",
      "Helps support faster turnover for EV drivers.",
    ],
  },
];

export function Products() {
  return (
    <section id="products" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Products
          </h2>
          <p className="mt-4 text-base text-neutral-600 md:text-lg">
            Charging solutions designed for every property type — from everyday
            residential use to high-traffic public locations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-6 rounded-2xl border border-neutral-300 bg-white p-6 shadow-sm md:p-8"
            >
              <div className="flex h-36 w-36 shrink-0 items-center justify-center rounded-xl bg-neutral-50 md:h-44 md:w-44">
                <img
                  src={p.image}
                  alt={p.name}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-neutral-900 md:text-xl">
                  {p.name}
                </h3>
                <ul className="mt-3 space-y-2">
                  {p.points.map((pt) => (
                    <li
                      key={pt}
                      className="text-sm leading-relaxed text-neutral-600"
                    >
                      • {pt}
                    </li>
                  ))}
                </ul>
                <a
                  href={p.href}
                  className="mt-5 inline-flex h-10 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
