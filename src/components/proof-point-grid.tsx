type ProofPointGridProps = {
  items: string[];
};

export function ProofPointGrid({ items }: ProofPointGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item}
          className="panel min-h-32 px-6 py-6 text-sm leading-7 text-steel transition hover:-translate-y-1"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-sea" />
            <span className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-sea/80">
              BRM Standard
            </span>
          </div>
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
