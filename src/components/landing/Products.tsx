import { CheckCircle2 } from "lucide-react";
import l2ChargerImage from "@/assets/l2charger.webp";
import l3ChargerImage from "@/assets/ev_charger.png";

const PRODUCTS = {
  l2: {
    badge: "L2",
    label: "Everyday charging",
    name: "Level 2 EV Charger",
    image: l2ChargerImage,
    imageAlt: "Level 2 EV charger",
    href: "/products/l2-ev-charger",
    description:
      "Ideal for residential, commercial, and workplace charging. 8-12 hour sessions, perfect for overnight or workday parking.",
    specs: [
      "7.7 kW output",
      "OCPP 1.6 compatible",
      "Networked + local billing",
    ],
  },
  l3: {
    badge: "L3",
    label: "Fast charging",
    name: "Level 3 DC Fast Charger",
    image: l3ChargerImage,
    imageAlt: "Level 3 DC fast charger",
    href: "/products/l3-fast-dc-ev-charger",
    description:
      "High-speed charging for public and high-traffic locations. 20-45 minute sessions, ideal for retail plazas and highway corridors.",
    specs: [
      "180 kW output",
      "CCS + CHAdeMO connectors",
      "Premium revenue per session",
    ],
  },
};

function SpecItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2.5">
      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#2D865B]" />
      <span className="text-sm text-black">{text}</span>
    </li>
  );
}

function ProductCard({
  product,
}: {
  product: (typeof PRODUCTS)[keyof typeof PRODUCTS];
}) {
  const isBadgeEmerald = product.badge === "L2";
  const badgeBg = isBadgeEmerald ? "#ECFDF5" : "#EFF6FF";
  const badgeText = isBadgeEmerald ? "#065F46" : "#1E40AF";

  return (
    <div className="overflow-hidden rounded-2xl border border-neutral-300 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 px-4 text-center">
        <img
          src={product.image}
          alt={product.imageAlt}
          className="absolute inset-0 h-full w-full object-contain p-6"
        />
      </div>

      <div className="p-6 md:p-7">
        <div className="mb-3 flex items-center gap-2">
          <span
            className="inline-block rounded px-2.5 py-1 text-xs font-semibold uppercase tracking-wider"
            style={{ background: badgeBg, color: badgeText, borderRadius: 6 }}
          >
            {product.badge}
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-black">
            {product.label}
          </span>
        </div>

        <h3 className="mb-2 text-xl font-semibold leading-tight text-neutral-900 md:text-2xl">
          {product.name}
        </h3>

        <p className="mb-4 text-sm leading-relaxed text-black">
          {product.description}
        </p>

        <ul className="mb-6 space-y-2">
          {product.specs.map((spec) => (
            <SpecItem key={spec} text={spec} />
          ))}
        </ul>

        <a
          href={product.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D865B] transition-colors hover:text-[#1EDDC7]"
        >
          Learn more
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-[#2D865B]">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2D865B]" />
            Products
          </div>
          <h2 className="mb-2 text-3xl font-semibold tracking-tight text-neutral-900 md:text-4xl">
            Everything you need to go live.
          </h2>
          <p className="text-base leading-relaxed text-black md:text-lg">
            From L2 chargers for daily use to L3 fast DC for high-traffic
            properties, choose the hardware that fits your charging needs.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <ProductCard product={PRODUCTS.l2} />
          <ProductCard product={PRODUCTS.l3} />
        </div>
      </div>
    </section>
  );
}
