import { AppLink } from "@/components/ui/AppLink";
import { cx } from "@/lib/cx";

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-hover",
  secondary:
    "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-secondary-hover",
  outline:
    "border border-primary bg-transparent text-primary hover:bg-surface active:bg-surface",
  ghost: "bg-transparent text-foreground hover:bg-surface-muted active:bg-surface-muted",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-base",
  lg: "h-12 px-6 text-base",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const classes = cx(
    "inline-flex cursor-pointer items-center justify-center gap-2 rounded-sm font-medium tracking-wide transition-[color,background-color,border-color,box-shadow] duration-200",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <AppLink href={href} className={classes} {...props}>
        {children}
      </AppLink>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}
