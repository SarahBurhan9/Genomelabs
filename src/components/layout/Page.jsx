import { cx } from "@/lib/cx";

export function Page({ className, children, ...props }) {
  return (
    <div
      className={cx("min-h-svh bg-background text-foreground", className)}
      {...props}
    >
      {children}
    </div>
  );
}
