import { Fragment } from "react";
import { notFound } from "next/navigation";
import { legalReady } from "@/data/site";

export interface PolicySection {
  heading: string;
  /** Paragraphs; text in [square brackets] is rendered highlighted as a fill-in field. */
  body: string[];
  list?: string[];
}

function Fill({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\[[^\]]+\])/g).map((part, i) =>
        part.startsWith("[") ? (
          <mark key={i} className="rounded bg-lime/50 px-1 text-navy">{part}</mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}

/**
 * Policy page. While any highlighted [field] remains, the owner still has to fill it in:
 * remove the `showDraftNotice` prop on the page once everything is completed and reviewed.
 */
export function PolicyPage({
  title,
  updated,
  intro,
  sections,
  showDraftNotice = true,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: PolicySection[];
  showDraftNotice?: boolean;
}) {
  if (!legalReady) notFound();
  return (
    <article className="px-5 py-14 sm:px-10">
      <div className="mx-auto max-w-3xl">
        {showDraftNotice && (
          <p role="note" className="rounded-2xl bg-lime/40 p-4 text-sm font-semibold">
            Template: fill in the highlighted [fields] and have this text reviewed before relying on it. Then set
            showDraftNotice to false on this page.
          </p>
        )}
        <h1 className="mt-8 text-4xl font-extrabold tracking-tight">{title}</h1>
        <p className="mt-2 text-sm text-ink-soft">Last updated: <Fill text={updated} /></p>
        <p className="mt-6 leading-relaxed text-ink-soft"><Fill text={intro} /></p>
        {sections.map((s, i) => (
          <section key={s.heading} className="mt-10">
            <h2 className="text-xl font-extrabold">{i + 1}. {s.heading}</h2>
            {s.body.map((p) => (
              <p key={p} className="mt-3 leading-relaxed text-ink-soft"><Fill text={p} /></p>
            ))}
            {s.list && (
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-ink-soft">
                {s.list.map((l) => (
                  <li key={l}><Fill text={l} /></li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </article>
  );
}
