"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const STORAGE_KEY = "brm-audience-path";

export function AudienceGate() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!window.localStorage.getItem(STORAGE_KEY)) {
      setIsVisible(true);
    }
  }, []);

  function chooseAudience(value: string) {
    window.localStorage.setItem(STORAGE_KEY, value);
    setIsVisible(false);
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/82 px-5 backdrop-blur-sm">
      <div className="grid w-full max-w-4xl gap-px border border-bone bg-bone shadow-[0_30px_120px_rgba(0,0,0,0.7)] md:grid-cols-2">
        <div className="bg-charcoal p-7 text-white md:p-10">
          <p className="eyebrow">Start Here</p>
          <h2 className="mt-5 font-display text-4xl font-black uppercase leading-none md:text-5xl">
            Which best applies to you?
          </h2>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/72">
            BRM supports healthcare organizations and private families. Choose the path that matches what you need today.
          </p>
          <button
            type="button"
            onClick={() => chooseAudience("skip")}
            className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-white/60 hover:text-white"
          >
            Continue to site
          </button>
        </div>

        <div className="grid gap-px bg-bone">
          <Link
            href="/services"
            onClick={() => chooseAudience("facility")}
            className="bg-sand p-7 text-white hover:bg-[#2a2a2a] md:p-10"
          >
            <p className="text-xs font-black uppercase tracking-[0.24em] text-sea">
              Clinic / Hospital / Practice
            </p>
            <h3 className="mt-4 font-display text-3xl font-black uppercase leading-tight">
              Facility support
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/72">
              Consulting, staffing, education, survey readiness, and respiratory leadership for healthcare teams.
            </p>
          </Link>

          <Link
            href="/family-consultation"
            onClick={() => chooseAudience("individual")}
            className="bg-white p-7 text-charcoal hover:bg-[#f2f2f2] md:p-10"
          >
            <p className="text-xs font-black uppercase tracking-[0.24em] text-sea">
              Personal / Individual
            </p>
            <h3 className="mt-4 font-display text-3xl font-black uppercase leading-tight">
              Family care guidance
            </h3>
            <p className="mt-4 text-sm leading-7 text-black/72">
              Private respiratory-care questions for a loved one, including discharge, oxygen, equipment, and care planning.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
