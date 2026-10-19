import { AppLink } from "@/components/ui/AppLink";
import { FramePhoto } from "@/components/visuals/FramePhoto";
import { cx } from "@/lib/cx";

export function ServiceCard({
  index,
  title,
  summary,
  note,
  image,
  imageAlt = "",
  imagePosition = "center",
  tone = "standard",
  href = "/diagnostics",
  className,
}) {
  const feature = tone === "feature";
  const wide = tone === "wide";

  return (
    <AppLink
      href={href}
      className={cx(
        "service-card group flex h-full flex-col overflow-hidden rounded-sm border border-border bg-surface text-foreground",
        feature && "is-feature border-primary bg-primary text-primary-foreground",
        wide && "md:grid md:grid-cols-[minmax(0,16rem)_1fr]",
        className,
      )}
    >
      <div
        className={cx(
          "relative overflow-hidden",
          feature ? "hero-field text-primary-foreground" : "bg-surface-muted text-primary",
          wide ? "h-36 md:h-full md:min-h-44" : "h-32 sm:h-40",
          feature && "h-44 sm:h-52 lg:h-auto lg:min-h-56 lg:flex-1",
        )}
      >
        {image ? (
          <FramePhoto src={image} alt={imageAlt} position={imagePosition} />
        ) : null}
      </div>

      <div className={cx("flex flex-1 flex-col p-6 sm:p-7", wide && "md:justify-center md:py-8 md:pr-8")}>
        <div className="flex items-center justify-between gap-4">
          <span className={cx("type-eyebrow", feature && "!text-primary-foreground/65")}>{index}</span>
          <span
            className={cx(
              "service-arrow inline-flex",
              feature ? "text-primary-foreground" : "text-primary",
            )}
            aria-hidden="true"
          >
            <svg width="28" height="12" viewBox="0 0 28 12" fill="none">
              <path d="M0 6h26M21 1l5 5-5 5" stroke="currentColor" strokeWidth="1.25" />
            </svg>
          </span>
        </div>
        <span
          className={cx(
            "service-rule mt-5 block h-px bg-accent",
          )}
        />
        <h3
          className={cx(
            "mt-4 font-display text-[1.45rem] leading-tight font-medium text-balance sm:text-[1.65rem]",
            feature ? "sm:text-[2.15rem]" : "text-primary",
          )}
        >
          {title}
        </h3>
        <p
          className={cx(
            "mt-3 max-w-xl text-[1.02rem] leading-relaxed",
            feature ? "text-primary-foreground/78" : "text-muted",
          )}
        >
          {summary}
        </p>
        {note ? (
          <p
            className={cx(
              "type-small",
              wide ? "mt-6" : "mt-auto pt-6",
              feature ? "text-primary-foreground/60" : "text-muted",
            )}
          >
            {note}
          </p>
        ) : null}
      </div>
    </AppLink>
  );
}
