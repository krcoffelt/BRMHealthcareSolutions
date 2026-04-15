import { PrimaryCTA } from "@/components/primary-cta";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { siteContent } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="section-frame pb-8 pt-10 md:pb-12 md:pt-14">
        <div className="hero-grid panel grid gap-10 overflow-hidden px-7 py-8 md:grid-cols-[1.12fr_0.88fr] md:px-12 md:py-12">
          <div className="flex flex-col justify-between">
            <p className="eyebrow">BRM Healthcare Solutions</p>
            <h1 className="title-balance mt-5 max-w-3xl font-display text-5xl leading-[0.93] text-ink md:text-[5.25rem]">
              {siteContent.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-steel">
              {siteContent.hero.subheadline}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryCTA>Request a Consultation</PrimaryCTA>
              <PrimaryCTA href="/services" variant="ghost">
                View Services
              </PrimaryCTA>
            </div>
            <div className="mt-10 rounded-[1.5rem] border border-bone/60 bg-white p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea">
                Trusted Performance
              </p>
              <p className="mt-3 text-sm leading-7 text-steel">
                {siteContent.hero.supportingLine}
              </p>
            </div>
          </div>

          <div className="flex items-end">
            <div className="w-full space-y-4">
              <div className="dark-band rounded-[2rem] p-8 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">
                  Value Proposition
                </p>
                <h2 className="mt-4 font-display text-3xl leading-tight">
                  {siteContent.valueProposition.title}
                </h2>
                <div className="mt-6 space-y-4 text-sm leading-7 text-white/78">
                  {siteContent.valueProposition.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="data-panel rounded-[2rem] border border-bone/50 p-6">
                <p className="eyebrow">Proven ROI</p>
                <p className="mt-4 text-2xl font-display text-ink">{siteContent.roiSection.title}</p>
                <p className="mt-3 text-sm leading-7 text-steel">{siteContent.roiSection.closing}</p>
                <PrimaryCTA className="mt-6">Request a Consultation</PrimaryCTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame py-10 md:py-12">
        <SectionHeading eyebrow="Results" title="Results That Speak for Themselves." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {siteContent.trustMetrics.map((metric) => (
            <article key={metric.value} className="metric-card">
              <p className="text-3xl font-semibold text-sea">{metric.value}</p>
              <p className="mt-3 text-sm leading-7 text-steel">{metric.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame">
        <SectionHeading
          eyebrow="ROI"
          title={siteContent.roiSection.title}
          description={siteContent.roiSection.intro}
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="panel p-8 md:p-10">
            <ul className="space-y-4 text-base leading-8 text-steel">
              {siteContent.roiSection.items.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-3 h-2.5 w-2.5 rounded-full bg-sea" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="dark-band rounded-[2rem] p-8 text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">
              Return Profile
            </p>
            <p className="mt-5 text-4xl font-display leading-tight">$112M+ in increased billing</p>
            <p className="mt-4 text-sm leading-7 text-white/78">
              The annual cost of BRM&apos;s retainer pays for itself quickly. Most facilities see full ROI within 60-90 days.
            </p>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <SectionHeading
          eyebrow="Services"
          title="Everything Your Respiratory Department Needs Under One Roof."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {siteContent.services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="section-frame pt-2">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading
            eyebrow="Education"
            title="Videos, guidelines, and templates."
            description={siteContent.education.intro}
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {siteContent.education.categories.map((category) => (
              <article key={category.title} className="panel p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea/70">
                  Resource
                </p>
                <h3 className="mt-4 font-display text-2xl text-ink">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-steel">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
        <PrimaryCTA href="/education" variant="ghost" className="mt-8">
          View Education
        </PrimaryCTA>
      </section>

      <section className="section-frame pt-4">
        <SectionHeading
          eyebrow="Who We Help"
          title="For healthcare organizations and clinicians."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {siteContent.audiencePaths.map((path, index) => (
            <article key={path.title} className="panel p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sea/65">
                Audience 0{index + 1}
              </p>
              <h3 className="mt-4 font-display text-3xl text-ink">{path.title}</h3>
              <p className="mt-4 text-base leading-8 text-steel">{path.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-frame">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="dark-band min-h-[320px] rounded-[2rem] p-8 text-white">
            <p className="eyebrow">Why BRM</p>
            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/5 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage">What Facilities Gain</p>
              <div className="mt-6 space-y-3 text-sm leading-7 text-white/74">
                <p>The expertise of a full-time director at a fraction of the cost.</p>
                <p>Clinical, operational, and financial discipline without added overhead.</p>
              </div>
            </div>
          </div>

          <div className="panel p-8 md:p-10">
            <p className="eyebrow">Differentiator</p>
            <h2 className="mt-4 font-display text-4xl leading-tight text-ink">
              {siteContent.aboutSection.title}
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-steel">
              {siteContent.aboutSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <PrimaryCTA href="/about" variant="ghost" className="mt-8">
              Read the About Me page
            </PrimaryCTA>
          </div>
        </div>
      </section>

      <section className="section-frame pt-0">
        <div className="dark-band panel px-8 py-10 text-white md:px-12 md:py-14">
          <p className="eyebrow text-sage">Discovery Call</p>
          <h2 className="title-balance mt-4 max-w-3xl font-display text-4xl md:text-5xl">
            {siteContent.finalCta.title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
            {siteContent.finalCta.description}
          </p>
          <p className="mt-4 text-sm leading-7 text-white/65">{siteContent.finalCta.note}</p>
          <PrimaryCTA className="mt-8 bg-white text-ink shadow-none hover:bg-sand">
            {siteContent.finalCta.buttonLabel}
          </PrimaryCTA>
        </div>
      </section>
    </>
  );
}
