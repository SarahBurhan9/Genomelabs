import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceGrid } from "@/components/sections/ServiceGrid";

export function Services() {
  return (
    <section id="services" className="section scroll-mt-24">
      <Container size="wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="type-eyebrow">Services</p>
            <h2 className="type-title mt-4 max-w-[min(18ch,100%)]">
              Real-time PCR and extraction, in one laboratory.
            </h2>
            <p className="type-body mt-5 text-muted">
              Genome Centre for Molecular Diagnostics & Research provides the
              PCR and extraction work named on its laboratory floor: real-time
              PCR platforms from Cepheid, the Sa&apos; Cycler 96, and automated
              nucleic acid extraction.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Button href="/services" variant="outline" className="w-full sm:w-auto">
              Explore Services
            </Button>
          </Reveal>
        </div>

        <ServiceGrid className="mt-12 lg:mt-16" />
      </Container>
    </section>
  );
}
