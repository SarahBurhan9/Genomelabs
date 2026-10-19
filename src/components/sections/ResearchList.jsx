import { Reveal } from "@/components/ui/Reveal";
import { researchItems } from "@/data/research";
import { cx } from "@/lib/cx";

export function ResearchList({ className, items = researchItems }) {
  return (
    <ol className={cx("border-t border-border", className)}>
      {items.map((item, index) => (
        <li key={item.title}>
          <Reveal delay={index * 70}>
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="journal-row group grid gap-3 border-b border-border py-7 sm:grid-cols-[5.5rem_minmax(0,1fr)_auto] sm:items-start sm:gap-8 sm:py-8"
            >
              <span className="font-display text-3xl text-primary/30">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="type-eyebrow">{item.category}{item.date ? ` · ${item.date}` : ""}</span>
                <span className="mt-2 block font-display text-2xl leading-tight text-primary sm:text-[1.7rem]">
                  {item.title}
                </span>
                <span className="mt-3 block max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {item.summary}
                </span>
              </span>
              <span className="research-arrow inline-flex items-center gap-2 text-sm font-medium text-primary">
                <span className="diag-mark block h-px w-0 bg-accent group-hover:w-8" />
                Read
              </span>
            </a>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
