import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { contactDetails } from "@/data/contact";

const mapsQuery = "GENOME CENTER LAHORE, CL-26, Block B Abdalians Cooperative Housing Society, Lahore, Pakistan";
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapsQuery)}`;
const mapsEmbed = `https://maps.google.com/maps?q=${encodeURIComponent(mapsQuery)}&z=17&output=embed`;

const linkClass = "font-medium text-primary hover:text-primary-hover";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [sender, setSender] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    setSender(String(data.get("name") || "").trim());
    setSent(true);
  }

  return (
    <section id="contact" className="section scroll-mt-24">
      <Container size="wide">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="type-eyebrow">08 — Contact</p>
            <h2 className="type-title mt-4 max-w-[min(14ch,100%)]">Reach the laboratory directly.</h2>
            <p className="type-body mt-5 text-muted">
              Genome Centre for Molecular Diagnostics & Research, in Johar Town,
              Lahore. Call or write using the details below.
            </p>

            <dl className="mt-8 border-t border-border">
              <Detail label="Address">
                <p>CL-26, Block B, Abdalians Cooperative Housing Society, Lahore.</p>
              </Detail>
              <Detail label="Phone">
                <ul className="flex flex-col gap-1">
                  {contactDetails.phones.map((phone) => (
                    <li key={phone.href}>
                      <a href={phone.href} className={linkClass}>
                        {phone.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </Detail>
              <Detail label="Email">
                <a
                  href={contactDetails.emailHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`${linkClass} break-all`}
                >
                  {contactDetails.email}
                </a>
              </Detail>
            </dl>

            <div className="mt-8">
              {sent ? (
                <div role="status" className="border border-border bg-surface px-6 py-8 sm:px-8">
                  <p className="type-eyebrow">Preview only</p>
                  <h3 className="mt-3 font-display text-3xl leading-tight font-medium">
                    Thank you{sender ? `, ${sender}` : ""}.
                  </h3>
                  <p className="type-body mt-3 text-muted">
                    This note stays on the page. It is not sent to the laboratory.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="border border-border bg-surface px-5 py-6 sm:px-8 sm:py-7">
                  <h3 className="font-display text-2xl leading-tight font-medium">Send a note</h3>
                  <p className="type-small mt-2 text-muted">
                    This note stays on the page. It is not sent to the laboratory.
                  </p>
                  <div className="mt-5 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <Field name="name" label="Name" type="text" autoComplete="name" />
                      <Field name="phone" label="Phone" type="tel" autoComplete="tel" />
                    </div>
                    <Field name="email" label="Email" type="email" autoComplete="email" />
                    <label className="block">
                      <span className="type-small font-medium text-foreground">Message</span>
                      <textarea
                        name="message"
                        required
                        rows={3}
                        className="contact-field mt-2 min-h-24 w-full resize-y px-3 py-3"
                      />
                    </label>
                  </div>
                  <Button type="submit" className="mt-5 w-full sm:w-auto">
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={80} className="lg:sticky lg:top-24">
            <p className="text-sm font-semibold tracking-[0.14em] text-foreground uppercase">Our location</p>
            <p className="type-small mt-2 text-muted">CL-26, Block B, Abdalians Cooperative Housing Society, Lahore.</p>
            <div className="relative mt-5 h-[26rem] overflow-hidden rounded-3xl border border-border bg-surface sm:h-[32rem] lg:h-[calc(100vh-14rem)] lg:min-h-[28rem]">
              <iframe
                title="Map of Genome Center Lahore, CL-26, Block B, Abdalians Cooperative Housing Society"
                src={mapsEmbed}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={mapsHref}
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-4 left-4 z-10 flex w-[min(18rem,calc(100%-2rem))] items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-[0_10px_28px_rgb(16_42_67/0.12)]"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <PinIcon />
                </span>
                <span>
                  <span className="block font-semibold tracking-tight">Genome Center Lahore</span>
                  <span className="type-small text-muted">CL-26, Block B, Abdalians Cooperative Housing Society</span>
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.25" />
    </svg>
  );
}

function Detail({ label, children }) {
  return (
    <div className="grid gap-1 border-b border-border py-4 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-6">
      <dt className="type-eyebrow">{label}</dt>
      <dd className="text-foreground">{children}</dd>
    </div>
  );
}

function Field({ name, label, type, autoComplete }) {
  return (
    <label className="block">
      <span className="type-small font-medium text-foreground">{label}</span>
      <input
        name={name}
        type={type}
        required
        autoComplete={autoComplete}
        className="contact-field mt-2 h-11 w-full px-3"
      />
    </label>
  );
}
