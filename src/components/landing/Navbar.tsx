import { useState } from "react";
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

  return (
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

        <nav className="ml-auto hidden items-center gap-8 md:flex">
          <div className="group relative flex h-16 items-center">
            <a
              href="#products"
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-primary group-hover:text-primary"
            >
              Product
              <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </a>

            <div className="invisible absolute left-1/2 top-full w-96 -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
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
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-primary group-hover/services:text-primary"
            >
              Services
              <ChevronDown className="h-4 w-4 transition-transform group-hover/services:rotate-180" />
            </a>

            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-hover/services:visible group-hover/services:opacity-100 group-focus-within/services:visible group-focus-within/services:opacity-100">
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
              className="inline-flex items-center gap-1 text-sm font-medium text-foreground/75 transition-colors hover:text-primary group-hover/solutions:text-primary"
            >
              Solutions
              <ChevronDown className="h-4 w-4 transition-transform group-hover/solutions:rotate-180" />
            </a>

            <div className="invisible absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4 opacity-0 transition-all duration-150 group-hover/solutions:visible group-hover/solutions:opacity-100 group-focus-within/solutions:visible group-focus-within/solutions:opacity-100">
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
            className="inline-flex h-10 items-center rounded-md border border-border bg-background px-5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:bg-secondary"
          >
            Contact Us
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
              onClick={() => setOpen(false)}
              className="inline-flex h-10 items-center justify-center rounded-md border border-border bg-background px-5 text-sm font-semibold text-foreground"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
