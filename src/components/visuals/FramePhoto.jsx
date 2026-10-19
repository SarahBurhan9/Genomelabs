import { cx } from "@/lib/cx";

export function FramePhoto({
  src,
  alt,
  position = "center",
  eager = false,
  className,
}) {
  return (
    <img
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      className={cx("service-visual absolute inset-0 h-full w-full object-cover", className)}
      style={{ objectPosition: position }}
    />
  );
}
