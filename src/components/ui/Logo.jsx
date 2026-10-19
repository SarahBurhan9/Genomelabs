import { cx } from "@/lib/cx";

export function Logo({
  className,
  alt = "Genome Centre for Molecular Diagnostics & Research",
  ...props
}) {
  return (
    <img
      src="/logo.png"
      alt={alt}
      decoding="async"
      className={cx("object-contain", className)}
      {...props}
    />
  );
}
