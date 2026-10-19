export function FeatureItem({ index, title, text }) {
  return (
    <article className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-4 gap-y-1 border-t border-border py-5">
      <span className="type-eyebrow pt-1">{index}</span>
      <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="type-small col-start-2 text-muted">{text}</p>
    </article>
  );
}
