import environmentImage from "@/assets/environment.jpg";
import futureImage from "@/assets/future.png";
import revenueImage from "@/assets/rev.jpg";
import tenantImage from "@/assets/tenant.png";

const valueItems = [
  {
    title: "Create new revenue from existing parking",
    text: "Earn 10% of monthly net profit from charging activity while UbiqPower handles the equipment, installation, and management.",
    image: revenueImage,
    alt: "Revenue growth from EV charging parking spaces",
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
    title: "Environmental impact",
    text: "Support cleaner transportation with EV chargers that help reduce emissions and make your property part of a greener future.",
    image: environmentImage,
    alt: "Sustainable EV charging and environmental impact",
  },
];

export function Value() {
  return (
    <section
      id="value"
      className="bg-[linear-gradient(180deg,#FFFFFF_0%,#F8F4EC_14%,#F8F4EC_86%,#FFFFFF_100%)] py-20 md:py-28"
    >
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
                  {item.image && (
                    <>
                      <img
                        src={item.image}
                        alt={item.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.42),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.2),rgba(239,242,251,0.16))]" />
                    </>
                  )}
                </div>
                <div className="mt-3">
                  <h3 className="text-base font-semibold leading-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
