import { AppLink } from "@/components/ui/AppLink";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function ClosingCta() {
  return (
    <section className="scroll-mt-24 border-t border-border" aria-label="Next step">
      <div className="hero-field relative overflow-hidden text-primary-foreground">
        <CtaField />
        <Container size="wide" className="relative py-20 sm:py-24 lg:py-28">
          <Reveal className="max-w-3xl">
            <p className="type-eyebrow !text-primary-foreground/65">Molecular diagnostics</p>
            <h2 className="type-title mt-4 max-w-[min(16ch,100%)] text-primary-foreground">
              A clearer result starts with a careful PCR.
            </h2>
            <p className="type-body mt-5 max-w-xl text-primary-foreground/75">
              Genome Centre for Molecular Diagnostics & Research in Johar Town
              carries out real-time PCR and nucleic acid extraction. Call the
              laboratory or write from this page.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AppLink href="/contact" className="cta-light w-full sm:w-auto">
                Contact
              </AppLink>
              <AppLink href="/services" className="cta-line w-full sm:w-auto">
                Explore Services
              </AppLink>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}

function CtaField() {
  return (
    <svg
      viewBox="0 0 800 420"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <circle cx="640" cy="90" r="48" opacity="0.45" />
        <circle cx="640" cy="90" r="86" opacity="0.28" />
        <path d="M80 300h220" opacity="0.4" />
        <path d="M120 300c30-70 70-70 100 0" opacity="0.7" />
        <circle className="drift-a text-accent" cx="168" cy="246" r="3.5" fill="currentColor" stroke="none" />
        <circle className="text-accent" cx="640" cy="90" r="3" fill="currentColor" stroke="none" />
      </g>
    </svg>
  );
}
