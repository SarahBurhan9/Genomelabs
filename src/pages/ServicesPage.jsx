import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { FramePhoto } from "@/components/visuals/FramePhoto";

export function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Real-time PCR and extraction, in one laboratory."
        lede="Genome Centre for Molecular Diagnostics & Research provides the PCR and extraction work named on its laboratory floor: Cepheid platforms, the Sa' Cycler 96, and automated nucleic acid extraction."
        actions={
          <>
            <Button href="/diagnostics" className="w-full sm:w-auto">
              Diagnostics
            </Button>
            <Button href="/contact" variant="outline" className="w-full sm:w-auto">
              Contact
            </Button>
          </>
        }
        visual={
          <div className="relative min-h-[16rem] overflow-hidden bg-primary text-primary-foreground sm:min-h-[18rem]">
            <FramePhoto
              src="/media/automation.jpg"
              alt="A scientist preparing samples at an automated instrument in the Genome Labs laboratory."
              position="62% center"
            />
            <div className="photo-scrim absolute inset-x-0 bottom-0 px-6 pt-16 pb-6 sm:px-8">
              <p className="type-eyebrow !text-primary-foreground/65">Laboratory floor</p>
              <p className="mt-3 font-display text-2xl leading-tight font-medium text-balance">
                PCR platforms and extraction.
              </p>
            </div>
          </div>
        }
      />
      <section className="section">
        <Container size="wide">
          <ServiceGrid />
        </Container>
      </section>
    </>
  );
}
