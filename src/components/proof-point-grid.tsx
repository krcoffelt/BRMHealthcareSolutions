type ProofPointGridProps = {
  items: string[];
};

export function ProofPointGrid({ items }: ProofPointGridProps) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item}
          className="panel min-h-32 px-6 py-6 text-sm leading-7 text-ink/80 transition hover:-translate-y-1"
        >
          <div className="mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-sea to-sage" />
          <p>{item}</p>
        </div>
      ))}
    </div>
  );
}
