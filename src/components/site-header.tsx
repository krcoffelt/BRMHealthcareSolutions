"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { siteContent } from "@/content/site";
import { PrimaryCTA } from "@/components/primary-cta";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = siteContent.navItems.filter((item) => item.href !== "/");

  return (
    <header className="sticky top-0 z-40">
      <div className="glass-shell">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea"
            aria-label="BRM Healthcare home"
          >
            <Image
              src="/brm-healthcare-logo-wide.png"
              alt="BRM Healthcare"
              width={1000}
              height={200}
              className="h-auto w-[225px] object-contain sm:w-[260px] md:w-[300px]"
              priority
            />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-xs font-bold uppercase tracking-[0.08em] text-white hover:text-sea focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <PrimaryCTA className="hidden sm:inline-flex">Schedule Meeting</PrimaryCTA>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-white bg-sea text-white hover:bg-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sea lg:hidden"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
            <span className="flex h-5 w-5 flex-col justify-center gap-1.5" aria-hidden="true">
              <span className={`h-0.5 w-5 bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
              <span className={`h-0.5 w-5 bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div id="mobile-menu" className="fixed inset-x-0 top-[73px] z-50 border-y border-bone bg-charcoal px-5 py-6 shadow-[0_30px_80px_rgba(0,0,0,0.55)] lg:hidden">
            <nav aria-label="Mobile primary" className="grid gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="border border-bone bg-sand px-5 py-4 font-display text-base font-black uppercase tracking-[0.12em] text-white hover:border-sea hover:text-sea focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/book"
                onClick={() => setIsOpen(false)}
                className="mt-2 border border-sea bg-sea px-5 py-4 text-center font-display text-base font-black uppercase tracking-[0.12em] text-white hover:bg-ember focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sea"
              >
                Schedule Meeting
              </Link>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
