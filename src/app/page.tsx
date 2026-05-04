import Image from "next/image";
import { PrimaryCTA } from "@/components/primary-cta";
import { SectionHeading } from "@/components/section-heading";
import { siteContent } from "@/content/site";

type ServiceIconName = "audit" | "staffing" | "compliance" | "education" | "leadership";

const serviceTiles = [
  {
    title: "Strategic Consulting",
    description:
      "Respiratory department audits, protocol development, KPI tracking, and operational roadmaps built for clinical and financial performance.",
    icon: "audit",
    className: "md:col-span-8",
  },
  {
    title: "Elite Staffing",
    description:
      "Experienced respiratory coverage across ICU, ER, PICU, and NICU settings when your facility needs dependable support.",
    icon: "staffing",
    className: "md:col-span-4",
  },
  {
    title: "Compliance",
    description:
      "Joint Commission, CMS, CAP, and CLIA readiness with documentation discipline designed for zero-deficiency outcomes.",
    icon: "compliance",
    className: "md:col-span-4",
  },
  {
    title: "Education",
    description:
      "BLS, ACLS, tracheostomy, oxygen therapy, competency, and orientation programs delivered by critical care leadership.",
    icon: "education",
    className: "md:col-span-4",
  },
  {
    title: "Leadership",
    description:
      "Embedded fractional directors who bring executive respiratory governance without full-time executive overhead.",
    icon: "leadership",
    className: "bg-sea md:col-span-4",
  },
] satisfies Array<{
  title: string;
  description: string;
  icon: ServiceIconName;
  className: string;
}>;

const educationPreview = [
  {
    title: "Video Library",
    description: "Short clinical refreshers, onboarding walkthroughs, and equipment training.",
  },
  {
    title: "Guidelines & Protocols",
    description: "Respiratory standards, competency references, and survey-readiness material.",
  },
  {
    title: "Templates & Tools",
    description: "KPI trackers, education plans, orientation tools, and leadership resources.",
  },
];

const impactStats = [
  {
    value: "$112M+",
    label: "Increased Billing Impact",
    icon: "trend",
  },
  {
    value: "2-3",
    label: "Months to Typical ROI",
    icon: "calendar",
  },
  {
    value: "95%+",
    label: "Staff Retention Rate",
    icon: "people",
  },
  {
    value: "18+",
    label: "Years of Critical Care & Respiratory Leadership",
    icon: "shield",
  },
] satisfies Array<{
  value: string;
  label: string;
  icon: "trend" | "calendar" | "people" | "shield";
}>;

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const iconClass = "h-6 w-6";

  switch (name) {
    case "audit":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 4h14v16H5V4Z" stroke="currentColor" strokeWidth="2" />
          <path d="M8 8h8M8 12h5M8 16h3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          <path d="m15 15 1.5 1.5L20 13" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        </svg>
      );
    case "staffing":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="2" />
          <path d="M3 20c.7-3.5 2.4-5 5-5s4.3 1.5 5 5M13 18c.7-2 1.9-3 3.7-3 1.9 0 3.2 1.2 3.8 3.6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        </svg>
      );
    case "compliance":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3 5 6v5c0 4.6 2.7 7.8 7 10 4.3-2.2 7-5.4 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="2" />
          <path d="m8.5 12 2.4 2.4 4.9-5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        </svg>
      );
    case "education":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 5h6.5A3.5 3.5 0 0 1 13 8.5V20a3.5 3.5 0 0 0-3.5-3.5H3V5Z" stroke="currentColor" strokeWidth="2" />
          <path d="M21 5h-6.5A3.5 3.5 0 0 0 11 8.5V20a3.5 3.5 0 0 1 3.5-3.5H21V5Z" stroke="currentColor" strokeWidth="2" />
          <path d="M7 9h2M7 12h2M17 9h-2M17 12h-2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        </svg>
      );
    case "leadership":
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 20V6M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
          <path d="M7 16h3V9H7v7ZM14 16h3V4h-3v12Z" stroke="currentColor" strokeWidth="2" />
          <path d="m9 6 3-3 3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
        </svg>
      );
  }
}

function TrendIcon() {
  return (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      <path d="m5 14 4-4 4 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
      <path d="M15 6h4v4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 5 6v5c0 4.6 2.7 7.8 7 10 4.3-2.2 7-5.4 7-10V6l-7-3Z" stroke="currentColor" strokeWidth="2" />
      <path d="m8.5 12 2.3 2.3 4.8-5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 5h14v15H5V5Z" stroke="currentColor" strokeWidth="2" />
      <path d="M8 3v4M16 3v4M5 10h14M8 14h2M12 14h2M16 14h2M8 17h2M12 17h2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" stroke="currentColor" strokeWidth="2" />
      <path d="M3.5 20c.7-3.6 2.5-5.3 5.5-5.3s4.8 1.7 5.5 5.3M14.5 18.5c.7-2.1 2-3.2 4-3.2 1.4 0 2.5.5 3.2 1.7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" />
    </svg>
  );
}

function ImpactIcon({ name }: { name: "trend" | "calendar" | "people" | "shield" }) {
  if (name === "trend") return <TrendIcon />;
  if (name === "calendar") return <CalendarIcon />;
  if (name === "people") return <PeopleIcon />;
  return <ShieldCheckIcon />;
}

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-73px)] overflow-hidden border-b border-bone bg-charcoal">
        <Image
          src="/healthcare-team-hero.webp"
          alt="Healthcare professionals in discussion"
          fill
          className="hero-medical-image object-cover object-center opacity-62"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0a0a0a_0%,rgba(10,10,10,0.94)_36%,rgba(10,10,10,0.58)_68%,rgba(10,10,10,0.18)_100%)]" />
        <div className="grid-plane absolute inset-0 opacity-30" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-73px)] max-w-[1440px] items-center px-5 py-20 md:px-10 lg:px-16">
          <div className="max-w-4xl animate-[rise-in_0.7s_ease-out_both]">
            <p className="eyebrow">Fractional Respiratory Leadership</p>
            <h1 className="title-balance mt-6 font-display text-5xl font-black uppercase leading-[0.92] text-white md:text-7xl lg:text-[5.8rem]">
              Elite Respiratory Leadership.{" "}
              <span className="text-sea">Proven Results.</span> No Overhead.
            </h1>
            <p className="mt-7 max-w-2xl border-l-4 border-sea pl-6 text-base leading-8 text-steel md:text-lg">
              {siteContent.hero.subheadline}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <PrimaryCTA>Schedule Meeting</PrimaryCTA>
              <PrimaryCTA href="/services" variant="ghost">
                View Impact
              </PrimaryCTA>
            </div>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="mb-12 grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end">
          <SectionHeading eyebrow="Core Services" title="Elite service tiers for respiratory performance." />
          <p className="max-w-xl text-base leading-8 text-steel md:justify-self-end md:text-right">
            Specialized interventions designed to optimize clinical workflows, strengthen compliance, and eliminate operational inefficiencies.
          </p>
        </div>

        <div className="grid gap-px border border-bone bg-bone md:grid-cols-12">
          {serviceTiles.map((service) => (
            <article
              key={service.title}
              className={`group min-h-[250px] bg-sand p-7 transition hover:bg-[#2a2a2a] md:p-10 ${service.className}`}
            >
              <div className="mb-8 flex h-11 w-11 items-center justify-center bg-sea text-white group-hover:bg-white group-hover:text-charcoal">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-white">{service.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-steel">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="impact-section border-y border-bone bg-[#030303]">
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-14 md:px-10 md:py-20 lg:grid-cols-[0.72fr_1.92fr] lg:items-center lg:px-16">
          <div className="impact-band-copy">
            <p className="eyebrow">Our Impact</p>
            <h2 className="mt-5 font-display text-4xl font-black leading-[1.04] text-white md:text-5xl">
              Measurable Results.
              <span className="mt-2 block text-sea">Real Value.</span>
            </h2>
          </div>

          <div className="impact-stat-grid grid grid-cols-2 gap-px border-white/20 lg:grid-cols-4 lg:border-l">
            {impactStats.map((metric) => (
              <article key={metric.value} className="impact-stat-column flex flex-col items-center px-3 py-5 text-center sm:px-4 md:px-6 lg:border-r lg:border-white/20">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sea text-white shadow-[0_0_30px_rgba(230,0,0,0.42)] sm:h-[4.5rem] sm:w-[4.5rem] md:h-20 md:w-20">
                  <ImpactIcon name={metric.icon} />
                </div>
                <p className="mt-5 whitespace-nowrap font-display text-3xl font-black leading-none text-white sm:text-5xl md:text-[3.35rem]">
                  {metric.value}
                </p>
                <p className="mt-3 max-w-[10rem] text-xs font-bold leading-5 text-white/80 sm:text-sm md:text-base md:leading-6">
                  {metric.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame">
        <SectionHeading
          eyebrow="Leadership Pricing"
          title="Transparent investment structures for facilities of every scale."
          align="center"
        />

        <div className="mx-auto mt-14 grid max-w-5xl gap-px border border-bone bg-bone md:grid-cols-2">
          <article className="bg-linen p-8 md:p-12">
            <p className="eyebrow">For specific interventions</p>
            <h3 className="mt-5 font-display text-4xl font-black uppercase text-white">A la carte</h3>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-steel">
              <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 bg-sea" />Agency staffing: $100/hr when available</li>
              <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 bg-sea" />General consultation: $200/hr with 1-hour minimum</li>
              <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 bg-sea" />General patient consultation: $50/pt</li>
            </ul>
            <PrimaryCTA href="/services" variant="ghost" className="mt-10 w-full">
              View Full Fee Schedule
            </PrimaryCTA>
          </article>

          <article className="border-l-4 border-sea bg-white p-8 md:p-12">
            <p className="eyebrow">Annual Professional Services Fee</p>
            <h3 className="mt-5 font-display text-4xl font-black uppercase text-charcoal">0-50 Beds</h3>
            <p className="mt-6 font-display text-6xl font-black text-charcoal">$7,500</p>
            <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-steel">per year</p>
            <ul className="mt-8 space-y-4 text-sm leading-7 text-steel">
              <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 bg-sea" />Respiratory guideline review included</li>
              <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 bg-sea" />Supply review included</li>
              <li className="flex gap-3"><span className="mt-2 h-2.5 w-2.5 bg-sea" />One annual onsite survey support included</li>
            </ul>
            <PrimaryCTA href="/services" className="mt-10 w-full bg-sea text-white hover:bg-charcoal">Review Retainer Terms</PrimaryCTA>
          </article>
        </div>
      </section>

      <section className="border-y border-bone bg-charcoal">
        <div className="section-frame">
          <div>
            <p className="eyebrow">Practitioner Operator</p>
            <h2 className="title-balance mt-5 font-display text-4xl font-black uppercase leading-none text-white md:text-6xl">
              The experience your patients deserve. The efficiency your organization requires.
            </h2>
            <div className="mt-7 max-w-2xl space-y-5 text-base leading-8 text-steel">
              {siteContent.aboutSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <PrimaryCTA href="/about" variant="ghost" className="mt-9">
              Read Founder Bio
            </PrimaryCTA>
          </div>
        </div>
      </section>

      <section className="section-frame">
        <div className="border border-bone bg-bone">
          <div className="grid gap-px bg-bone lg:grid-cols-[1fr_0.72fr]">
            <div className="bg-white p-7 md:p-10 lg:p-12">
              <p className="eyebrow">Education Hub Coming Soon</p>
              <h2 className="mt-5 max-w-4xl font-display text-3xl font-black uppercase leading-[1.02] text-charcoal md:text-5xl">
                A practical respiratory resource center is in development.
              </h2>
            </div>

            <div className="flex flex-col justify-between bg-linen p-7 md:p-10 lg:p-12">
              <p className="text-base leading-8 text-steel">
                BRM is building a dedicated education hub for videos, respiratory guidelines, templates,
                and operational tools. Education support is currently available through direct facility engagements.
              </p>
              <PrimaryCTA href="/education" variant="ghost" className="mt-8 self-start">
                Preview Education Plans
              </PrimaryCTA>
            </div>
          </div>

          <div className="grid gap-px bg-bone md:grid-cols-3">
            {educationPreview.map((category) => (
              <article key={category.title} className="bg-linen p-7 md:p-8">
                <p className="eyebrow">Planned</p>
                <h3 className="mt-4 font-display text-2xl font-bold uppercase leading-tight text-white md:text-3xl">
                  {category.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-steel">{category.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-frame pt-0">
        <div className="relative overflow-hidden border border-bone bg-sea p-8 text-white md:p-14">
          <div className="grid-plane absolute inset-0 opacity-20" />
          <div className="relative z-10 max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-white">Discovery Call</p>
            <h2 className="title-balance mt-5 font-display text-4xl font-black uppercase leading-none md:text-6xl">
              {siteContent.finalCta.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/85">
              {siteContent.finalCta.description}
            </p>
            <PrimaryCTA className="mt-9 border-white bg-white !text-charcoal hover:bg-charcoal hover:!text-white">
              {siteContent.finalCta.buttonLabel}
            </PrimaryCTA>
          </div>
        </div>
      </section>
    </>
  );
}
