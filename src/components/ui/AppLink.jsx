import { Link } from "react-router-dom";

export function AppLink({ href, to, children, ...props }) {
  const dest = to || href || "";
  const internal = dest.startsWith("/") && !dest.startsWith("//");

  if (internal) {
    return (
      <Link to={dest} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <a href={dest} {...props}>
      {children}
    </a>
  );
}
