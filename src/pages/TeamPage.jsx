import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/layout/PageHero";
import { FramePhoto } from "@/components/visuals/FramePhoto";
import { Team } from "@/components/sections/Team";

export function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people named by the laboratory."
        lede="Names, roles, and photographs are those published on the Genome Labs team page. The advisors below are the names listed on the laboratory’s advisors page."
        actions={
          <Button href="/contact" className="w-full sm:w-auto">
            Contact
          </Button>
        }
        visual={
          <div className="relative min-h-[14rem] overflow-hidden bg-primary text-primary-foreground sm:min-h-[18rem]">
            <FramePhoto
              src="/media/reception.jpg"
              alt="Reception at Genome Centre."
              position="center 40%"
            />
            <div className="photo-scrim absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <p className="type-eyebrow !text-primary-foreground/65">Lahore</p>
            <p className="mt-3 max-w-xs font-display text-2xl leading-tight font-medium text-balance sm:text-3xl">
              Staff and advisors, as published.
            </p>
            </div>
          </div>
        }
      />
      <Team showIntro={false} />
    </>
  );
}
