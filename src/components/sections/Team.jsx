import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TeamMember } from "@/components/ui/TeamMember";
import { advisors, teamMembers } from "@/data/team";
import { cx } from "@/lib/cx";

export function Team({ showIntro = true }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? teamMembers : teamMembers.slice(0, 4);

  return (
    <section
      id={showIntro ? "team" : undefined}
      className={cx("section scroll-mt-24", showIntro && "border-t border-border")}
    >
      <Container size="wide">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          {showIntro ? (
            <Reveal className="max-w-2xl">
              <p className="type-eyebrow">07 — Our Team</p>
              <h2 className="type-title mt-4 max-w-[min(16ch,100%)]">The people named by the laboratory.</h2>
              <p className="type-body mt-5 text-muted">
                The laboratory’s team and the advisors it lists, with the roles and
                photographs published on its site.
              </p>
            </Reveal>
          ) : (
            <p className="type-eyebrow">Laboratory team</p>
          )}
          <Button
            type="button"
            className="w-full shrink-0 sm:w-auto"
            aria-expanded={showAll}
            onClick={() => setShowAll((value) => !value)}
          >
            {showAll ? "Show less" : "View All"}
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {visible.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-12 lg:mt-20">
          <Reveal>
            <p className="type-eyebrow">Advisory committee</p>
            <h3 className="type-heading mt-4 sm:text-2xl">
              Advisors named by the centre.
            </h3>
          </Reveal>
          <ul className="mt-8 grid gap-px bg-border md:grid-cols-2">
            {advisors.map((advisor, index) => (
              <li key={advisor.name} className="bg-background">
                <Reveal delay={index * 60}>
                  <article className="px-1 py-6 md:px-6">
                    <h4 className="text-lg font-semibold tracking-tight">{advisor.name}</h4>
                    <p className="type-small mt-2 max-w-md text-muted">{advisor.role}</p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
