import evCharger from "@/assets/ev-charger.jpg";
import futureImage from "@/assets/future.png";
import officeBuilding from "@/assets/office-building.jpg";
import tenantImage from "@/assets/tenant.png";

const valueItems = [
  {
    title: "Create new revenue from existing parking",
    text: "Turn qualified stalls into charging income without adding equipment, installation, or management costs to your budget.",
    image: officeBuilding,
    alt: "Commercial property parking area",
  },
  {
    title: "Tenant attraction and retention",
    text: "Offer convenient EV access with networked chargers that support everyday drivers and high-traffic properties.",
    image: tenantImage,
    alt: "Tenant using EV charging",
  },
  {
    title: "Future Proof",
    text: "Future-proof your property with EV-ready infrastructure.",
    image: futureImage,
    alt: "Future-proof EV charging property value",
  },
  {
    title: "Share in monthly net profit",
    text: "Once chargers are live, the property owner or agreement holder receives 10% of monthly net profit automatically.",
    image: evCharger,
    alt: "EV charger installed at a parking space",
  },
];

export function Value() {
  return (
    <section id="value" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1380px] px-5 md:px-8">
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Built to add value
          </h2>
        </div>

        <div className="grid gap-x-6 gap-y-9 md:grid-cols-2 md:gap-y-10">
          {valueItems.map((item) => {
            return (
              <article key={item.title}>
                <div className="relative aspect-[1.5/1] overflow-hidden rounded-lg bg-[#F4F3EF]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.42),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.2),rgba(239,242,251,0.16))]" />
                </div>
                <div className="mt-3">
                  <h3 className="text-lg font-semibold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
