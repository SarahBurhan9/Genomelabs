export const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Diagnostics", to: "/diagnostics" },
  { label: "Tests", to: "/tests" },
  { label: "Research", to: "/research" },
  { label: "Contact", to: "/contact" },
];

export function isCurrentNav(to, pathname) {
  if (to === "/") return pathname === "/";
  return pathname === to;
}
