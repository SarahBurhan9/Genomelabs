import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ResearchList } from "@/components/sections/ResearchList";

export function Research() {
  return (
    <section id="research" className="section scroll-mt-24 border-t border-border">
      <Container size="wide">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="max-w-2xl">
            <p className="type-eyebrow">06 — Research & Publications</p>
            <h2 className="type-title mt-4 max-w-[min(16ch,100%)]">
              What the laboratory has put on record.
            </h2>
            <p className="type-body mt-5 text-muted">
              The publications page lists a study of HCV genotypes in District
              Mardan. Two laboratory notes from July 2021 record analyzers the
              centre houses.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <Button href="/research" variant="outline" className="w-full shrink-0 sm:w-auto">
              View Research
            </Button>
          </Reveal>
        </div>

        <ResearchList className="mt-12 lg:mt-16" />
      </Container>
    </section>
  );
}
