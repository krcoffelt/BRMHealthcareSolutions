import { PrimaryCTA } from "@/components/primary-cta";
import type { Service } from "@/content/site";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="panel group flex h-full flex-col overflow-hidden p-8 transition hover:border-white/80 hover:bg-[#2a2a2a]">
      <div className="-mx-8 -mt-8 h-1.5 bg-sea" />
      <p className="eyebrow mt-7">Service Line</p>
      <h3 className="mt-4 font-display text-[2rem] font-bold uppercase leading-tight text-white">{service.title}</h3>
      <p className="mt-4 text-base leading-8 text-steel">{service.description}</p>

      <div className="soft-card mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sea">Who it&apos;s for</p>
        <p className="mt-3 text-sm leading-7 text-steel">{service.whoItsFor}</p>
      </div>

      <ul className="mt-6 space-y-3 text-sm leading-7 text-steel">
        {service.outcomes.map((outcome) => (
          <li key={outcome} className="flex gap-3">
            <span className="mt-2 h-2.5 w-2.5 bg-sea" aria-hidden="true" />
            <span>{outcome}</span>
          </li>
        ))}
      </ul>

      <PrimaryCTA className="mt-8 self-start">Schedule Meeting</PrimaryCTA>
    </article>
  );
}
