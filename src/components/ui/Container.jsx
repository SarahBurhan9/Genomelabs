import { createElement } from "react";
import { cx } from "@/lib/cx";

const widths = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
  ...props
}) {
  return createElement(
    Tag,
    {
      className: cx(
        "mx-auto w-full px-5 sm:px-8 lg:px-10",
        widths[size],
        className,
      ),
      ...props,
    },
    children,
  );
}
