import { cx } from "@/lib/cx";

export function ResearchCard({
  title,
  summary,
  category,
  date,
  href,
  tone = "compact",
  className,
}) {
  const feature = tone === "feature";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cx(
        "research-card group flex h-full flex-col rounded-sm border border-border bg-surface text-foreground",
        feature && "is-feature border-primary bg-primary text-primary-foreground lg:min-h-[28rem]",
        className,
      )}
    >
      <div className={cx("flex items-center justify-between gap-4", feature ? "px-6 pt-6 sm:px-8 sm:pt-8" : "px-5 pt-5")}>
        <span className={cx("research-meta type-eyebrow", feature && "!text-primary-foreground/65")}>{category}</span>
        {date ? (
          <span className={cx("research-meta type-small", feature ? "text-primary-foreground/65" : "text-muted")}>
            {date}
          </span>
        ) : null}
      </div>

      <div className={cx("flex flex-1 flex-col", feature ? "px-6 py-8 sm:px-8" : "px-5 py-5")}>
        <h3
          className={cx(
            "font-display leading-tight font-medium",
            feature ? "text-balance text-[1.75rem] sm:text-3xl" : "text-balance text-xl text-primary",
          )}
        >
          {title}
        </h3>
        <p
          className={cx(
            "mt-4 max-w-xl leading-relaxed",
            feature ? "text-primary-foreground/78" : "type-small text-muted",
          )}
        >
          {summary}
        </p>
        <span
          className={cx(
            "research-arrow mt-auto inline-flex items-center gap-3 pt-8 text-sm font-medium tracking-wide",
            feature ? "text-primary-foreground" : "text-primary",
          )}
        >
          {feature ? "Read" : "View"}
          <span className="sr-only"> on the laboratory site</span>
          <svg width="28" height="12" viewBox="0 0 28 12" fill="none" aria-hidden="true">
            <path d="M0 6h26M21 1l5 5-5 5" stroke="currentColor" strokeWidth="1.25" />
          </svg>
        </span>
      </div>
    </a>
  );
}
