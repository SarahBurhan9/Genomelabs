import { FramePhoto } from "@/components/visuals/FramePhoto";
import { cx } from "@/lib/cx";

export function MolecularField({ className }) {
  return (
    <div className={cx("relative overflow-hidden bg-primary text-primary-foreground", className)}>
      <FramePhoto
        eager
        src="/media/genexpert.jpg"
        alt="Cepheid GeneXpert system in the Genome Labs laboratory."
        position="center center"
        className="!object-contain"
      />
      <div className="photo-scrim absolute inset-x-0 bottom-0 px-6 pt-24 pb-6 sm:px-8 sm:pb-8 lg:px-10 lg:pb-10">
        <p className="type-eyebrow !text-primary-foreground/75">In the laboratory</p>
        <p className="mt-3 max-w-xs font-display text-[1.45rem] leading-tight font-medium text-balance text-primary-foreground sm:text-[1.65rem]">
          Real-time PCR and nucleic acid extraction.
        </p>
        <p className="type-small mt-4 max-w-xs text-primary-foreground/80">
          Cepheid GeneXpert, Smart Cycler II, and Sa&rsquo; Cycler 96.
        </p>
      </div>
    </div>
  );
}
