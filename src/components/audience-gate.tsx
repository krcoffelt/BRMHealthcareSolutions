"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const STORAGE_KEY = "brm-audience-path";

function getTodayKey() {
  return new Date().toLocaleDateString("en-CA");
}

export function AudienceGate() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (pathname !== "/") {
      setIsVisible(false);
      return;
    }

    const lastSelection = window.localStorage.getItem(STORAGE_KEY);
    const today = getTodayKey();

    if (!lastSelection?.startsWith(`${today}:`)) {
      setIsVisible(true);
    }
  }, [pathname]);

  function chooseAudience(value: string) {
    window.localStorage.setItem(STORAGE_KEY, `${getTodayKey()}:${value}`);
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[80] overflow-y-auto bg-black/88 px-4 py-4 backdrop-blur-md sm:px-5 sm:py-8">
      <div className="mx-auto flex min-h-[calc(100svh-2rem)] max-w-5xl items-center">
        <div className="grid w-full gap-px border border-bone bg-bone shadow-[0_30px_120px_rgba(0,0,0,0.7)] lg:grid-cols-[0.72fr_1fr]">
          <div className="bg-charcoal p-5 text-white sm:p-7 md:p-9">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="eyebrow">Start Here</p>
                <h2 className="mt-4 font-display text-3xl font-black uppercase leading-none sm:text-4xl md:text-5xl">
                  Choose your path.
                </h2>
              </div>
              <button
                type="button"
                onClick={() => chooseAudience("skip")}
                className="shrink-0 border border-white/30 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-white/70 hover:border-white hover:text-white"
              >
                Skip
              </button>
            </div>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/72">
              Select the option that best fits what you need today.
            </p>
          </div>

          <div className="grid gap-px bg-bone md:grid-cols-2 lg:grid-cols-1">
            <Link
              href="/services"
              onClick={() => chooseAudience("facility")}
              className="bg-sand p-5 text-white hover:bg-[#2a2a2a] sm:p-7 md:p-9"
            >
              <p className="text-xs font-black uppercase tracking-[0.24em] text-sea">
                Clinic / Hospital / Practice
              </p>
              <h3 className="mt-3 font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
                Facility support
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/72">
                Consulting, staffing, education, survey readiness, and operations for healthcare teams.
              </p>
            </Link>

            <Link
              href="/family-consultation"
              onClick={() => chooseAudience("individual")}
              className="bg-white p-5 text-charcoal hover:bg-[#f2f2f2] sm:p-7 md:p-9"
            >
              <p className="text-xs font-black uppercase tracking-[0.24em] text-sea">
                Personal / Individual
              </p>
              <h3 className="mt-3 font-display text-2xl font-black uppercase leading-tight sm:text-3xl">
                Family care guidance
              </h3>
              <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-sea">
                Neonatal, Pediatric, Adult
              </p>
              <p className="mt-3 text-sm leading-6 text-black/72">
                Private respiratory care explanations for diagnosis, discharge oxygen equipment, and care planning. *Not a provider
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
