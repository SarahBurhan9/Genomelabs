import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { MolecularField } from "@/components/visuals/MolecularField";

export function Hero() {
  return (
    <section
      id="home"
      className="grid w-full grid-cols-[minmax(0,1fr)] pt-16 sm:pt-[4.5rem] lg:min-h-svh lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]"
    >
      <div className="flex min-w-0 flex-col justify-center px-5 pt-24 pb-10 sm:px-8 lg:px-10 lg:py-20 xl:pl-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]">
        <div className="max-w-xl min-w-0">
          <Reveal rootMargin="0px">
            <p className="type-eyebrow">Molecular Diagnostics & Research</p>
          </Reveal>
          <Reveal delay={80} rootMargin="0px">
            <h1 className="type-display mt-5 max-w-[min(16ch,100%)]">
              Where molecular evidence meets clinical care.
            </h1>
          </Reveal>
          <Reveal delay={140} rootMargin="0px">
            <p className="type-body mt-6 max-w-prose text-pretty text-muted">
              Genome Centre for Molecular Diagnostics & Research has provided
              PCR-based testing in Lahore since 2011, including real-time PCR
              and nucleic acid extraction for patients and referring physicians.
            </p>
          </Reveal>
          <Reveal delay={200} rootMargin="0px">
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" className="w-full sm:w-auto">
                Get in Touch
              </Button>
              <Button href="/diagnostics" variant="outline" className="w-full sm:w-auto">
                Diagnostics
              </Button>
            </div>
          </Reveal>
          <Reveal delay={260} rootMargin="0px">
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-border pt-5 sm:grid-cols-3">
              <div>
                <dt className="type-eyebrow">Place</dt>
                <dd className="mt-1 text-sm text-foreground">Lahore</dd>
              </div>
              <div>
                <dt className="type-eyebrow">Established</dt>
                <dd className="mt-1 text-sm text-foreground">2011</dd>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <dt className="type-eyebrow">Focus</dt>
                <dd className="mt-1 text-sm text-foreground">PCR testing</dd>
              </div>
            </dl>
          </Reveal>
          <div className="mt-12 hidden items-center gap-3 lg:flex" aria-hidden="true">
            <span className="scroll-line block h-12 w-px bg-foreground/40" />
            <span className="type-eyebrow">Scroll</span>
          </div>
        </div>
      </div>

      <div className="min-w-0 px-5 pb-8 sm:px-8 lg:py-8 lg:pr-8 lg:pl-0">
        <MolecularField className="min-h-[18rem] sm:min-h-[22rem] lg:h-full lg:min-h-[32rem]" />
      </div>
    </section>
  );
}
