import { PrimaryCTA } from "@/components/primary-cta";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

export default function AboutPage() {
  return (
    <>
      <section className="section-frame">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="dark-band flex min-h-[420px] flex-col justify-between rounded-[2rem] p-8 text-white md:p-10">
            <div>
              <p className="eyebrow text-sage">Executive profile</p>
              <p className="mt-5 font-display text-4xl">Dustan Sprowl</p>
              <p className="mt-2 text-sm uppercase tracking-[0.16em] text-white/70">
                Founder, MBHA, RRT
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/76">
                18+ years of respiratory and critical care experience.
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-7 text-white/76">
                Leadership across respiratory therapy, sleep, neurology, pulmonary lab, radiology, and laboratory services.
              </div>
            </div>
          </div>

          <div className="panel p-8 md:p-10">
            <p className="eyebrow">About Me</p>
            <h1 className="mt-4 font-display text-5xl leading-tight text-ink">
              {siteContent.founder.name}
            </h1>
            <p className="mt-3 text-sm uppercase tracking-[0.16em] text-sea/80">
              {siteContent.founder.title}
            </p>
            <p className="mt-6 text-base leading-8 text-steel">{siteContent.founder.summary}</p>
            <PrimaryCTA className="mt-8">Request a Consultation</PrimaryCTA>
          </div>
        </div>
      </section>

      <section className="section-frame pt-0">
        <SectionHeading
          eyebrow="Differentiator"
          title={siteContent.aboutSection.title}
        />
        <div className="mt-10 panel p-8 md:p-10">
          <div className="space-y-6">
            {siteContent.aboutSection.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-steel">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame pt-0">
        <SectionHeading
          eyebrow="Professional Summary"
          title="Leadership grounded in respiratory care and operations."
        />
        <div className="mt-10 panel p-8 md:p-10">
          <div className="space-y-6">
            {siteContent.founder.professionalSummary.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-steel">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame pt-0">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="panel p-8">
            <p className="eyebrow">Areas of expertise</p>
            <ul className="mt-6 grid gap-4 text-sm leading-7 text-ink/80">
              {siteContent.founder.expertise.map((item) => (
                <li key={item} className="rounded-3xl border border-bone/55 bg-mist px-5 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-8">
            <p className="eyebrow">Career highlights</p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-steel">
              {siteContent.founder.highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-sea" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-frame pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="panel p-8 md:p-10">
            <p className="eyebrow">Credentials and certifications</p>
            <ul className="mt-6 grid gap-4 text-sm leading-7 text-ink/80 md:grid-cols-2">
              {siteContent.founder.credentials.map((item) => (
                <li key={item} className="rounded-3xl border border-bone/50 bg-cloud px-5 py-4">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="panel p-8 md:p-10">
            <p className="eyebrow">Personal mission</p>
            <p className="mt-6 text-base leading-8 text-steel">{siteContent.founder.mission}</p>
            <div className="mt-8 rounded-[1.75rem] border border-bone/55 bg-mist p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/75">
                Resume source
              </p>
              <p className="mt-3 text-sm leading-7 text-steel">
                Based on Dustan Sprowl&apos;s 2026 updated resume.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame pt-0">
        <div className="dark-band panel px-8 py-10 text-white md:px-12 md:py-14">
          <p className="eyebrow text-sage">Final CTA</p>
          <h2 className="title-balance mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            {siteContent.finalCta.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
            {siteContent.finalCta.description}
          </p>
          <PrimaryCTA className="mt-8 bg-white text-ink shadow-none hover:bg-sand">
            {siteContent.finalCta.buttonLabel}
          </PrimaryCTA>
        </div>
      </section>
    </>
  );
}
