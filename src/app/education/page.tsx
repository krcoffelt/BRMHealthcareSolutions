import { PrimaryCTA } from "@/components/primary-cta";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export default function EducationPage() {
  return (
    <div className="section-frame">
      <section className="hero-grid panel grid gap-8 px-8 py-10 md:grid-cols-[1.05fr_0.95fr] md:px-12 md:py-12">
        <SectionHeading
          eyebrow="Education"
          title="Training resources built for respiratory teams."
          description={siteContent.education.intro}
        />
        <div className="dark-band rounded-[1.8rem] p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">Resource Focus</p>
          <p className="mt-5 text-3xl font-display leading-tight">
            Videos, guidelines, and templates in one place.
          </p>
          <p className="mt-4 text-sm leading-7 text-white/76">
            This section is designed to become BRM&apos;s education library for staff development,
            operational consistency, and clinical readiness.
          </p>
        </div>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        {siteContent.education.categories.map((category) => (
          <article key={category.title} className="panel p-8">
            <p className="eyebrow">Education Area</p>
            <h2 className="mt-4 font-display text-[2rem] leading-tight text-ink">{category.title}</h2>
            <p className="mt-4 text-base leading-8 text-steel">{category.description}</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-steel">
              {category.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sea" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="panel p-8 md:p-10">
          <p className="eyebrow">Planned Library</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-ink">
            Education content can grow with your program.
          </h2>
          <p className="mt-5 text-base leading-8 text-steel">
            BRM can use this section to publish staff education videos, downloadable guidelines,
            competency tools, and operational templates that support consistency across your facilities.
          </p>
        </div>

        <div className="data-panel rounded-[2rem] border border-bone/50 p-8">
          <p className="eyebrow">Next Step</p>
          <p className="mt-4 text-2xl font-display text-ink">Need custom education support?</p>
          <p className="mt-3 text-sm leading-7 text-steel">
            Schedule a call to discuss the education resources, materials, and guidance your team needs.
          </p>
          <PrimaryCTA className="mt-6">Schedule a Call</PrimaryCTA>
        </div>
      </section>
    </div>
  );
}
