import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { capabilities } from "@/data/capabilities";

export function CapabilityStrip() {
  return (
    <section
      id="capabilities"
      aria-label="Laboratory capabilities"
      className="scroll-mt-24 border-y border-primary bg-primary text-primary-foreground"
    >
      <Container size="wide">
        <ol className="grid md:grid-cols-2 xl:grid-cols-4">
          {capabilities.map((item, index) => (
            <li key={item.title} className="border-white/15 py-8 md:px-6 md:py-10 xl:border-l xl:first:border-l-0">
              <Reveal delay={index * 70}>
                <span className="font-display text-5xl leading-none text-accent-soft/80">{item.index}</span>
                <span className="rule-draw mt-5 block h-px w-10 bg-accent" />
                <p className="mt-4 text-lg font-semibold tracking-tight">{item.title}</p>
                <p className="type-small mt-2 max-w-xs text-primary-foreground/70">{item.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
