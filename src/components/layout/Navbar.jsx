import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AppLink } from "@/components/ui/AppLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { isCurrentNav, navItems } from "@/data/navigation";
import { cx } from "@/lib/cx";

export function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-md">
      <Container size="wide" className="flex h-16 min-w-0 items-center justify-between gap-4 sm:h-[4.5rem]">
        <AppLink href="/" className="flex min-w-0 items-center gap-3" onClick={close}>
          <Logo alt="" className="h-11 w-11 shrink-0 sm:h-12 sm:w-12" />
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-sm font-semibold tracking-wide text-foreground">
              Genome Labs
            </span>
            <span className="hidden truncate text-xs text-muted xl:block">
              Molecular Diagnostics
            </span>
          </span>
        </AppLink>

        <nav className="hidden min-w-0 items-center gap-x-3 xl:gap-x-5 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <NavLink key={item.to} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden lg:block">
            <Button href="/contact" size="sm" onClick={close}>
              Get in Touch
            </Button>
          </div>
          <button
            type="button"
            className="relative h-11 w-11 shrink-0 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className={cx(
                "absolute left-2.5 h-0.5 w-6 bg-foreground transition-transform duration-300",
                open ? "top-1/2 rotate-45" : "top-[calc(50%-4px)]",
              )}
            />
            <span
              className={cx(
                "absolute left-2.5 h-0.5 w-6 bg-foreground transition-transform duration-300",
                open ? "top-1/2 -rotate-45" : "top-[calc(50%+4px)]",
              )}
            />
          </button>
        </div>
      </Container>

      <div id="mobile-nav" className={cx("nav-drawer lg:hidden", open && "is-open")}>
        <div>
          <nav aria-label="Mobile" className="nav-panel border-t border-border bg-background">
            <Container size="wide" className="flex flex-col py-3">
              {navItems.map((item) => {
                const active = isCurrentNav(item.to, pathname);
                return (
                  <AppLink
                    key={item.to}
                    href={item.to}
                    aria-current={active ? "page" : undefined}
                    onClick={close}
                    className={cx(
                      "border-b border-border py-3 text-lg tracking-wide transition-colors last:border-b-0",
                      active ? "nav-current text-foreground" : "text-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </AppLink>
                );
              })}
              <Button href="/contact" className="mt-4 w-full lg:hidden" onClick={close}>
                Get in Touch
              </Button>
            </Container>
          </nav>
        </div>
      </div>
    </header>
  );
}

function NavLink({ item, pathname }) {
  const active = isCurrentNav(item.to, pathname);

  return (
    <AppLink
      href={item.to}
      aria-current={active ? "page" : undefined}
      className={cx(
        "group relative py-1 text-[0.8125rem] tracking-wide whitespace-nowrap transition-colors duration-200 xl:text-sm",
        active ? "text-foreground" : "text-muted hover:text-foreground",
      )}
    >
      {item.label}
      <span
        className={cx(
          "absolute -bottom-1 left-0 h-px bg-accent transition-[width] duration-200",
          active ? "w-full" : "w-0 group-hover:w-full",
        )}
      />
    </AppLink>
  );
}
