type ProofPointGridProps = {
  items: string[];
};

export function ProofPointGrid({ items }: ProofPointGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={item}
          className="panel min-h-32 px-6 py-6 text-sm leading-7 text-steel transition hover:-translate-y-1"
        >
          <div className="mb-5 flex items-center justify-between gap-3">
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sea/80">
              BRM Performance
            </span>
            <span className="text-xs font-semibold text-sea/55">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <p className="text-[0.98rem] leading-7 text-ink/84">{item}</p>
        </div>
      ))}
    </div>
  );
}
