import { AppLink } from "@/components/ui/AppLink";
import { Logo } from "@/components/ui/Logo";
import { contactDetails } from "@/data/contact";
import { services } from "@/data/services";

const company = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Team", to: "/team" },
  { label: "Contact", to: "/contact" },
];

const pages = [
  { label: "Services", to: "/services" },
  { label: "Diagnostics", to: "/diagnostics" },
  { label: "Tests", to: "/tests" },
  { label: "Research", to: "/research" },
];

const linkClass = "inline-flex py-0.5 text-sm leading-snug text-accent-soft hover:text-white";

export function Footer() {
  return (
    <footer>
      <div className="w-full rounded-t-3xl bg-primary px-6 py-8 text-primary-foreground sm:px-8 sm:py-9">
        <div className="mx-auto w-full max-w-5xl">
        <AppLink href="/" className="inline-flex items-center gap-2.5">
          <Logo alt="" className="h-9 w-9 shrink-0" />
          <span className="text-base font-medium tracking-tight text-accent-soft">Genome Labs</span>
        </AppLink>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:mt-7 lg:grid-cols-4 lg:gap-8">
          <FooterColumn title="Company">
            <ul className="grid">
              {company.map((item) => (
                <li key={item.to}>
                  <AppLink href={item.to} className={linkClass}>
                    {item.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Pages">
            <ul className="grid">
              {pages.map((item) => (
                <li key={item.to}>
                  <AppLink href={item.to} className={linkClass}>
                    {item.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Services">
            <ul className="grid">
              {services.map((service) => (
                <li key={service.title}>
                  <AppLink href="/services" className={linkClass}>
                    {service.title}
                  </AppLink>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn title="Contact">
            <p className="max-w-[14rem] py-0.5 text-sm leading-snug text-accent-soft">
              {contactDetails.place}
            </p>
            <ul className="grid">
              {contactDetails.phones.map((phone) => (
                <li key={phone.href}>
                  <a href={phone.href} className={linkClass}>
                    {phone.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={contactDetails.emailHref} target="_blank" rel="noreferrer" className={`${linkClass} break-all`}>
                  {contactDetails.email}
                </a>
              </li>
            </ul>
          </FooterColumn>
        </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div className="min-w-0">
      <p className="text-sm font-medium text-white">{title}</p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
