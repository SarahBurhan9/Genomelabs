import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { testGroups, testNote, tests } from "@/data/tests";
import { cx } from "@/lib/cx";

const PAGE_SIZE = 20;
const filters = ["All", ...testGroups];

export function TestsPage() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");
  const [page, setPage] = useState(1);

  const counts = useMemo(() => {
    const totals = { All: tests.length };
    for (const test of tests) totals[test.group] = (totals[test.group] || 0) + 1;
    return totals;
  }, []);

  const visible = useMemo(() => {
    const term = query.trim().toLowerCase();
    return tests.filter((test) => {
      if (group !== "All" && test.group !== group) return false;
      if (!term) return true;
      return [test.name, test.sample, test.instructions, test.time]
        .join(" ")
        .toLowerCase()
        .includes(term);
    });
  }, [group, query]);

  const pageCount = Math.max(1, Math.ceil(visible.length / PAGE_SIZE));
  const current = Math.min(page, pageCount);
  const slice = visible.slice((current - 1) * PAGE_SIZE, current * PAGE_SIZE);
  const term = query.trim();

  function chooseGroup(next) {
    setGroup(next);
    setPage(1);
  }

  function choosePage(next) {
    setPage(next);
    document.getElementById("test-results")?.scrollIntoView({ block: "start" });
  }

  return (
    <>
      <PageHero
        eyebrow="Test list"
        title="Rates and reporting times published by the laboratory."
        lede="PCR, routine and special chemistry, and the fixed discounted tests listed on the Genome Labs test list. Rates are in PKR."
      />
      <section className="section pt-0">
        <Container size="wide">
          <div
            id="test-results"
            className="sticky top-16 z-30 -mx-5 scroll-mt-24 border-b border-border bg-background/95 px-5 py-4 backdrop-blur-md sm:top-[4.5rem] sm:-mx-8 sm:px-8 lg:-mx-10 lg:px-10"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Test groups">
                {filters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    role="tab"
                    aria-selected={group === item}
                    onClick={() => chooseGroup(item)}
                    className={cx(
                      "h-10 px-4 text-sm font-medium",
                      group === item
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-surface text-foreground hover:border-primary",
                    )}
                  >
                    {item}
                    <span className={cx("ml-2", group === item ? "text-accent-soft" : "text-muted")}>
                      {counts[item]}
                    </span>
                  </button>
                ))}
              </div>
              <label className="block w-full lg:max-w-sm">
                <span className="sr-only">Search tests</span>
                <input
                  value={query}
                  onChange={(event) => {
                    setQuery(event.target.value);
                    setPage(1);
                  }}
                  placeholder="Search by test, sample, or time"
                  className="contact-field h-11 w-full px-3"
                />
              </label>
            </div>
          </div>

          <p className="type-small mt-4 text-muted">
            {visible.length} {visible.length === 1 ? "test" : "tests"}. {testNote}
          </p>

          {visible.length === 0 ? (
            <p className="mt-10 text-lg text-foreground">No test matches that search.</p>
          ) : (
            <>
              <ul className="mt-4 border-t border-border">
                {slice.map((test) => (
                  <li
                    key={`${test.group}-${test.name}-${test.rate}-${test.sample}`}
                    className="grid gap-2 border-b border-border py-5 sm:grid-cols-[minmax(0,36rem)_8rem] sm:items-start sm:gap-8"
                  >
                    <div className="min-w-0">
                      <p className="type-eyebrow">{test.group}</p>
                      <h2 className="mt-1 text-lg font-semibold tracking-tight text-foreground">
                        <Highlight text={test.name} term={term} />
                      </h2>
                      <p className="type-small mt-1 text-muted">
                        {test.sample}
                        {test.time ? ` · ${test.time}` : ""}
                      </p>
                      {test.instructions ? (
                        <p className="type-small mt-1 text-muted">{test.instructions}</p>
                      ) : null}
                    </div>
                    <p className="text-base font-semibold text-primary sm:pt-6 sm:text-right">PKR {test.rate}</p>
                  </li>
                ))}
              </ul>
              <Pager page={current} pageCount={pageCount} onChange={choosePage} />
            </>
          )}
        </Container>
      </section>
    </>
  );
}

function Highlight({ text, term }) {
  if (!term) return text;
  const index = text.toLowerCase().indexOf(term.toLowerCase());
  if (index < 0) return text;
  return (
    <>
      {text.slice(0, index)}
      <mark className="bg-accent-soft text-primary">{text.slice(index, index + term.length)}</mark>
      {text.slice(index + term.length)}
    </>
  );
}

function Pager({ page, pageCount, onChange }) {
  if (pageCount <= 1) return null;
  const pages = pageWindow(page, pageCount);

  return (
    <nav className="mt-8 flex flex-wrap items-center gap-2" aria-label="Test list pages">
      <button
        type="button"
        className="h-10 border border-border px-3 text-sm disabled:opacity-40"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        Previous
      </button>
      {pages.map((item, index) =>
        item === "…" ? (
          <span key={`gap-${index}`} className="px-1 text-muted">
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            aria-current={item === page ? "page" : undefined}
            onClick={() => onChange(item)}
            className={cx(
              "h-10 min-w-10 px-3 text-sm",
              item === page ? "bg-primary text-primary-foreground" : "border border-border hover:border-primary",
            )}
          >
            {item}
          </button>
        ),
      )}
      <button
        type="button"
        className="h-10 border border-border px-3 text-sm disabled:opacity-40"
        disabled={page === pageCount}
        onClick={() => onChange(page + 1)}
      >
        Next
      </button>
    </nav>
  );
}

function pageWindow(page, pageCount) {
  const items = [];
  const push = (value) => {
    if (items[items.length - 1] !== value) items.push(value);
  };
  push(1);
  for (let number = page - 1; number <= page + 1; number += 1) {
    if (number > 1 && number < pageCount) push(number);
  }
  push(pageCount);
  const withGaps = [];
  items.forEach((number, index) => {
    if (index > 0 && number - items[index - 1] > 1) withGaps.push("…");
    withGaps.push(number);
  });
  return withGaps;
}
