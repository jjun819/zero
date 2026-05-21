import { Mail, Globe, MapPin, Zap } from "lucide-react";

const APPLY_HREF = "mailto:Zerocostapplication@foreseeson.com";

export function Footer() {
  return (
    <footer className="bg-[#12141A] text-white">
      <div className="mx-auto max-w-[1380px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-primary">
                <Zap className="h-4 w-4 text-primary-foreground" />
              </span>
              <span className="text-lg font-bold tracking-tight">
                UbiqPower Technology Inc.
              </span>
            </div>
            <p className="mt-4 max-w-md text-sm text-white/65">
              Zero Cost EV Charger Program — turnkey EV charging for strata
              corporations, multi-unit residential, commercial, and retail
              properties.
            </p>

            <a
              href="#apply"
              className="mt-6 inline-flex h-11 items-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Apply Now
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Program
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href="#Products" className="text-white/80 hover:text-[#1EDDC7]">
                  Products
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-white/80 hover:text-[#1EDDC7]">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-[#1EDDC7]">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#1EDDC7]" />
                <a
                  href={APPLY_HREF}
                  className="text-white/80 hover:text-[#1EDDC7]"
                >
                  Zerocostapplication@foreseeson.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-0.5 h-4 w-4 shrink-0 text-[#1EDDC7]" />
                <a
                  href="https://www.ubiqpower.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-[#1EDDC7]"
                >
                  www.ubiqpower.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1EDDC7]" />
                <span className="text-white/80">
                  #101–4460 Jacombs Rd., Richmond, BC V6V 2C5
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} UbiqPower Technology Inc. All rights
            reserved.
          </div>
          <div>
            Acceptance is subject to site qualification and agreement approval.
          </div>
        </div>
      </div>
    </footer>
  );
}
