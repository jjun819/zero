import { useEffect, useRef, useState, type FormEvent } from "react";
import { ChevronDown, ChevronRight, Menu, X, Zap } from "lucide-react";

const evChargerLinks = [
  { href: "/products/l2-ev-charger", label: "L2 EV Charger" },
  { href: "/products/l3-fast-dc-ev-charger", label: "L3 Fast DC EV Charger" },
];

const productLinks = [
  { href: "#products", label: "Energy Storage Solutions" },
  { href: "#products", label: "Green Renewal Power" },
  { href: "#products", label: "Reuse of EV Battery Power" },
];

const serviceLinks = [
  { href: "#services", label: "Installation" },
];

const zeroCostLinks = [
  { href: "#solutions", label: "Residential" },
  { href: "#solutions", label: "Commercial" },
];

const APPLY_HREF = "#apply";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [calendlyOpen, setCalendlyOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<
    "product" | "services" | "solutions" | null
  >(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!activeDropdown) return;

    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, [activeDropdown]);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
        <div className="mx-auto flex h-16 max-w-[1380px] items-center px-5 pl-6 md:px-8 md:pl-16">
          <a href="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
              <Zap className="h-4 w-4" />
            </span>
            <span className="text-base font-bold tracking-tight text-foreground">
              UbiqPower
            </span>
          </a>

        <nav ref={navRef} className="ml-auto hidden items-center gap-8 md:flex">
          <div className="group relative flex h-16 items-center">
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                setActiveDropdown((current) =>
                  current === "product" ? null : "product",
                );
              }}
              className="inline-flex items-center gap-1 text-sm font-medium text-black transition-colors hover:text-primary group-hover:text-primary"
            >
              Product
              <ChevronDown
                className={`h-4 w-4 transition-transform group-hover:rotate-180 ${
                  activeDropdown === "product" ? "rotate-180" : ""
                }`}
              />
            </a>

            <div
              className={`absolute left-1/2 top-full w-96 -translate-x-1/2 pt-4 transition-all duration-150 ${
                activeDropdown === "product"
                  ? "visible opacity-100"
                  : "invisible opacity-0 group-hover:visible group-hover:opacity-100"
              }`}
            >
              <div className="rounded-xl border border-border bg-background p-3 shadow-xl">
                <div className="grid gap-1">
                  <div className="group/ev relative">
                    <a
                      href="#products"
                      className="flex items-center justify-between gap-4 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary group-hover/ev:bg-secondary group-hover/ev:text-primary"
                    >
                      EV Chargers
                      <ChevronRight className="h-4 w-4" />
                    </a>

                    <div className="invisible absolute left-full top-0 w-72 pl-3 opacity-0 transition-all duration-150 group-hover/ev:visible group-hover/ev:opacity-100 group-focus-within/ev:visible group-focus-within/ev:opacity-100">
                      <div className="rounded-xl border border-border bg-background p-3 shadow-xl">
                        <div className="grid gap-1">
                          {evChargerLinks.map((l) => (
                            <a
                              key={l.label}
                              href={l.href}
                              className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                            >
                              {l.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {productLinks.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="group/services relative flex h-16 items-center">
            <a
              href="#services"
              onClick={(event) => {
                event.preventDefault();
                setActiveDropdown((current) =>
                  current === "services" ? null : "services",
                );
              }}
              className="inline-flex items-center gap-1 text-sm font-medium text-black transition-colors hover:text-primary group-hover/services:text-primary"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform group-hover/services:rotate-180 ${
                  activeDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </a>

            <div
              className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 transition-all duration-150 ${
                activeDropdown === "services"
                  ? "visible opacity-100"
                  : "invisible opacity-0 group-hover/services:visible group-hover/services:opacity-100"
              }`}
            >
              <div className="rounded-xl border border-border bg-background p-3 shadow-xl">
                <div className="grid gap-1">
                  {serviceLinks.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="group/solutions relative flex h-16 items-center">
            <a
              href="#solutions"
              onClick={(event) => {
                event.preventDefault();
                setActiveDropdown((current) =>
                  current === "solutions" ? null : "solutions",
                );
              }}
              className="inline-flex items-center gap-1 text-sm font-medium text-black transition-colors hover:text-primary group-hover/solutions:text-primary"
            >
              Solutions
              <ChevronDown
                className={`h-4 w-4 transition-transform group-hover/solutions:rotate-180 ${
                  activeDropdown === "solutions" ? "rotate-180" : ""
                }`}
              />
            </a>

            <div
              className={`absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4 transition-all duration-150 ${
                activeDropdown === "solutions"
                  ? "visible opacity-100"
                  : "invisible opacity-0 group-hover/solutions:visible group-hover/solutions:opacity-100"
              }`}
            >
              <div className="rounded-xl border border-border bg-background p-3 shadow-xl">
                <div className="group/zero relative">
                  <a
                    href="#solutions"
                    className="flex items-center justify-between gap-4 rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary group-hover/zero:bg-secondary group-hover/zero:text-primary"
                  >
                    Zero Cost
                    <ChevronRight className="h-4 w-4" />
                  </a>

                  <div className="invisible absolute left-full top-0 w-64 pl-3 opacity-0 transition-all duration-150 group-hover/zero:visible group-hover/zero:opacity-100 group-focus-within/zero:visible group-focus-within/zero:opacity-100">
                    <div className="rounded-xl border border-border bg-background p-3 shadow-xl">
                      <div className="grid gap-1">
                        {zeroCostLinks.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            className="rounded-lg px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                          >
                            {l.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="ml-8 hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setContactOpen(true)}
            className="inline-flex h-10 cursor-pointer items-center rounded-md border border-black/30 bg-background px-5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary"
          >
            Contact Us
          </button>
          <button
            type="button"
            onClick={() => setCalendlyOpen(true)}
            className="inline-flex h-10 cursor-pointer items-center rounded-md border border-primary/40 bg-background px-5 text-sm font-semibold text-primary shadow-sm transition-colors hover:bg-primary/10"
          >
            Book a Call
          </button>
          <a
            href={APPLY_HREF}
            className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            Apply Now
          </a>
        </div>

        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-10 w-10 place-items-center rounded-md text-foreground md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-[1380px] flex-col gap-1 px-5 py-4">
            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
            >
              Product
            </a>
            <div className="ml-3 grid gap-1 border-l border-border pl-3">
              <a
                href="#products"
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground/70 hover:bg-secondary hover:text-primary"
              >
                EV Chargers
              </a>
              <div className="ml-3 grid gap-1 border-l border-border pl-3">
                {evChargerLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-sm font-medium text-foreground/60 hover:bg-secondary hover:text-primary"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
              {productLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-foreground/70 hover:bg-secondary hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </div>
            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
            >
              Services
            </a>
            <div className="ml-3 grid gap-1 border-l border-border pl-3">
              {serviceLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm font-medium text-foreground/70 hover:bg-secondary hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <a
              href="#solutions"
              onClick={() => setOpen(false)}
              className="rounded-md px-2 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
            >
              Solutions
            </a>
            <div className="ml-3 grid gap-1 border-l border-border pl-3">
              <a
                href="#solutions"
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground/70 hover:bg-secondary hover:text-primary"
              >
                Zero Cost
              </a>
              <div className="ml-3 grid gap-1 border-l border-border pl-3">
                {zeroCostLinks.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-2 py-2 text-sm font-medium text-foreground/60 hover:bg-secondary hover:text-primary"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <a
              href={APPLY_HREF}
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              Apply Now
            </a>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setContactOpen(true);
              }}
              className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-semibold text-foreground"
            >
              Contact Us
            </button>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setCalendlyOpen(true);
              }}
              className="inline-flex h-10 cursor-pointer items-center justify-center rounded-md border border-primary/40 bg-background px-5 text-sm font-semibold text-primary"
            >
              Book a Call
            </button>
          </div>
        </div>
      )}
      </header>

      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}
      {calendlyOpen && <CalendlyModal onClose={() => setCalendlyOpen(false)} />}
    </>
  );
}

function CalendlyModal({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const existing = document.getElementById("calendly-script");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "calendly-script";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-5 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="calendly-title"
      onMouseDown={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-xl border border-black/20 bg-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-black/10 px-6 py-4">
          <h2 id="calendly-title" className="text-xl font-semibold tracking-tight">
            Book a Call
          </h2>
          <button
            type="button"
            aria-label="Close booking"
            onClick={onClose}
            className="grid h-9 w-9 cursor-pointer place-items-center rounded-md text-foreground transition-colors hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/taegooc50?hide_landing_page_details=1&hide_gdpr_banner=1"
          style={{ minWidth: 320, height: 700 }}
        />
      </div>
    </div>
  );
}

function ContactModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/public/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        setError("Something went wrong submitting your message. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong submitting your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/45 px-5 py-8 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-title"
      onMouseDown={onClose}
    >
      <div
        className="w-full max-w-xl rounded-xl border border-black/20 bg-white p-6 text-foreground md:p-8"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="contact-title" className="text-2xl font-semibold tracking-tight md:text-3xl">
              Contact Us
            </h2>
            <p className="mt-2 text-base leading-relaxed text-black">
              Send us a message and our team will get back to you shortly.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close contact form"
            onClick={onClose}
            className="grid h-10 w-10 shrink-0 cursor-pointer place-items-center rounded-md text-foreground transition-colors hover:bg-secondary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {submitted ? (
          <div className="mt-8 rounded-lg border border-primary/25 bg-primary/10 p-5 text-base font-medium text-foreground">
            Thank you. Your message has been submitted.
          </div>
        ) : (
          <form
            className="mt-8 grid gap-5"
            onSubmit={handleSubmit}
          >
            <label className="grid gap-2 text-sm font-semibold text-foreground">
              Name
              <input
                name="name"
                type="text"
                required
                className="h-11 rounded-md border border-black/30 bg-white px-4 text-base font-normal outline-none transition-colors focus:border-primary"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-foreground">
              Email
              <input
                name="email"
                type="email"
                required
                className="h-11 rounded-md border border-black/30 bg-white px-4 text-base font-normal outline-none transition-colors focus:border-primary"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-foreground">
              Phone
              <input
                name="phone"
                type="tel"
                className="h-11 rounded-md border border-black/30 bg-white px-4 text-base font-normal outline-none transition-colors focus:border-primary"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-foreground">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="resize-none rounded-md border border-black/30 bg-white px-4 py-3 text-base font-normal outline-none transition-colors focus:border-primary"
              />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex h-11 cursor-pointer items-center justify-center rounded-md bg-primary px-6 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
            {error && <p className="text-sm font-medium text-destructive">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
}
