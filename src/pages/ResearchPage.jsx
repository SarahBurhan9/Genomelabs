import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { ResearchList } from "@/components/sections/ResearchList";
import { FramePhoto } from "@/components/visuals/FramePhoto";
import { publicationsHref } from "@/data/research";

export function ResearchPage() {
  return (
    <>
      <PageHero
        eyebrow="Research & Publications"
        title="What the laboratory has put on record."
        lede="The publications page lists a study of HCV genotypes in District Mardan, Khyber Pakhtunkhwa. Two laboratory notes from July 2021 record analyzers the centre houses."
        actions={
          <>
            <Button href={publicationsHref} target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              View All Research
            </Button>
            <Button href="/contact" variant="outline" className="w-full sm:w-auto">
              Contact
            </Button>
          </>
        }
        visual={
          <div className="relative min-h-[16rem] overflow-hidden bg-primary text-primary-foreground sm:min-h-[18rem]">
            <FramePhoto
              src="/media/workstation.jpg"
              alt="A scientist reviewing real-time PCR results at Genome Labs."
              position="70% center"
            />
            <div className="photo-scrim absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="type-eyebrow !text-primary-foreground/65">Publication</p>
            <p className="mt-3 max-w-sm font-display text-2xl leading-tight font-medium text-balance sm:text-[1.75rem]">
              HCV genotypes in District Mardan.
            </p>
            <p className="type-small mt-4 text-primary-foreground/70">
              Listed on the laboratory’s publications page.
            </p>
            </div>
          </div>
        }
      />
      <section className="section">
        <Container size="wide">
          <ResearchList />
        </Container>
      </section>
    </>
  );
}
