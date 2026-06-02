import { Mail, Globe, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const APPLY_HREF = "mailto:Zerocostapplication@foreseeson.com";

const productLinks = [
  { href: "https://ess.foreseeson.com/", label: "Energy Storage Solutions" },
  { href: "https://ess.foreseeson.com/", label: "Green Renewal Power" },
  { href: "#products", label: "Reuse of EV Battery Power" },
];

const serviceLinks = [{ href: "https://foreseeson-evse.com/", label: "Installation" }];

const ZERO_COST_HREF = "/ubiq_broch.html";

const footerHeadingClass = "text-sm font-bold uppercase tracking-[0.18em] text-white";
const footerLinkClass = "font-medium text-[#A7B0B2] transition-colors hover:text-[#20B2AA]";
const footerParentLinkClass = "font-semibold text-[#A7B0B2] transition-colors hover:text-[#20B2AA]";
const legalDisclosure =
  "Program availability, zero-upfront-cost participation, revenue share, equipment ownership, installation, maintenance, and operating terms are subject to site assessment, eligibility, utility capacity, permits, local regulations, and final written agreement. Website content is for general information only and is not a binding offer, guarantee of approval, or guarantee of revenue or savings.";

export function Footer() {
  return (
    <footer className="bg-[#071113] text-white">
      <div className="mx-auto max-w-[1380px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="UbiqPower" className="h-10 w-auto object-contain" />
              <span className="text-lg font-bold tracking-tight">UbiqPower</span>
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#A7B0B2]">
              Zero Cost EV Charger Program — turnkey EV charging for strata corporations, multi-unit
              residential, commercial, and retail properties.
            </p>

            <a
              href="#apply"
              className="mt-6 inline-flex h-11 items-center rounded-md bg-[#2E8B57] px-5 text-sm font-semibold text-white shadow-sm shadow-black/20 transition-colors hover:bg-[#20B2AA]"
            >
              Apply Now
            </a>
          </div>

          <div className="md:col-span-2">
            <h4 className={footerHeadingClass}>Product</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#products" className={footerParentLinkClass}>
                  EV Chargers
                </a>
              </li>
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={footerParentLinkClass}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className={footerHeadingClass}>Services</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className={footerParentLinkClass}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className={footerHeadingClass}>Solutions</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={ZERO_COST_HREF} className={footerParentLinkClass}>
                  Zero Cost
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className={footerHeadingClass}>Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#20B2AA]" />
                <a href={APPLY_HREF} className={footerLinkClass}>
                  Zerocostapplication@foreseeson.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-[#20B2AA]" />
                <a
                  href="https://www.ubiqpower.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerLinkClass}
                >
                  www.ubiqpower.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#20B2AA]" />
                <span className="font-medium text-[#A7B0B2]">
                  #101–4460 Jacombs Rd., Richmond, BC V6V 2C5
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-[rgba(255,255,255,0.08)] pt-6 text-xs text-[#A7B0B2] md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} UbiqPower Technology Inc. All rights reserved.</div>
          <div>Acceptance is subject to site qualification and agreement approval.</div>
        </div>

        <p className="mt-5 max-w-5xl text-xs leading-relaxed text-[#879194]">{legalDisclosure}</p>
      </div>
    </footer>
  );
}
