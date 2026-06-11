import type { Metadata } from "next";
import { PrimaryCTA } from "@/components/primary-cta";

export const metadata: Metadata = {
  title: "BLS & ACLS Classes",
  description:
    "BLS and ACLS education for healthcare teams, respiratory staff, and facilities that need practical critical-care training.",
};

const classes = [
  {
    title: "BLS Training",
    description:
      "Basic Life Support education for clinical teams that need clear, practical instruction from an experienced critical-care respiratory leader.",
    items: ["Small-group instruction", "Hands-on skills support", "Facility-focused scheduling discussion"],
  },
  {
    title: "ACLS Training",
    description:
      "Advanced Cardiovascular Life Support education for teams that need structured critical-care readiness and instructor-led reinforcement.",
    items: ["Instructor-led ACLS support", "Critical-care context", "Scheduling options discussed directly"],
  },
];

export default function BlsAclsPage() {
  return (
    <div className="section-frame">
      <section className="grid gap-px border border-bone bg-bone lg:grid-cols-[0.95fr_1.05fr]">
        <div className="bg-charcoal p-8 text-white md:p-12">
          <p className="eyebrow">BLS & ACLS</p>
          <h1 className="title-balance mt-5 font-display text-5xl font-black uppercase leading-none md:text-6xl">
            Critical-care education for teams that need confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/76">
            BRM provides BLS and ACLS education as part of its respiratory and critical-care training support.
          </p>
          <PrimaryCTA href="/book?service=bls-acls" className="mt-9">
            Ask About Class Dates
          </PrimaryCTA>
        </div>

        <div className="grid gap-px bg-bone md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {classes.map((course) => (
            <article key={course.title} className="bg-linen p-8 text-white md:p-10">
              <h2 className="font-display text-3xl font-black uppercase leading-tight">{course.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/76">{course.description}</p>
              <ul className="mt-7 space-y-4 text-sm leading-7 text-white">
                {course.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 bg-sea" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 border border-bone bg-white p-8 text-charcoal md:p-10">
        <p className="eyebrow">Scheduling</p>
        <h2 className="mt-4 max-w-3xl font-display text-4xl font-black uppercase leading-tight text-charcoal">
          Ask about upcoming BLS and ACLS dates.
        </h2>
        <p className="mt-5 max-w-3xl text-base leading-8 text-black/72">
          Contact BRM to discuss available class dates and facility training needs.
        </p>
      </section>
    </div>
  );
}
