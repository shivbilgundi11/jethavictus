type LegalSection = {
  title: string;
  body?: string[];
  list?: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  lastUpdated: string;
  intro: string[];
  sections: LegalSection[];
};

export function LegalPage({
  eyebrow,
  title,
  lastUpdated,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <main className="bg-surface-page text-content-primary selection:bg-brand-blue selection:text-content-inverse overflow-hidden antialiased">
      <section className="bg-brand-navy text-content-inverse">
        <div className="mx-auto grid min-h-105 w-full max-w-360 content-end gap-10 px-5 pt-22 pb-16 sm:px-8 lg:min-h-125 lg:grid-cols-[1fr_0.42fr] lg:px-12 lg:pt-28 lg:pb-20">
          <div>
            <p className="text-brand-sky text-xs font-bold tracking-[0.22em] uppercase">
              {eyebrow}
            </p>

            <h1 className="mt-6 max-w-5xl text-5xl leading-[0.98] font-light tracking-tighter sm:text-6xl lg:text-[86px]">
              {title}
            </h1>
          </div>

          <div className="border-line-inverse/25 self-end border-t pt-6 lg:justify-self-end">
            <p className="text-content-inverse/55 text-xs font-bold tracking-[0.18em] uppercase">
              Last Updated
            </p>

            <p className="mt-3 text-xl font-semibold">{lastUpdated}</p>
          </div>
        </div>
      </section>

      <article className="mx-auto w-full max-w-360 px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="flex flex-col gap-y-5 md:gap-y-10">
          <aside className="border-line-default text-content-muted hidden border-t pt-6 text-xs font-bold tracking-[0.18em] uppercase lg:block">
            Legal
          </aside>

          <div className="max-w-210">
            <div className="border-line-default space-y-6 border-b pb-10">
              {intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-content-secondary text-lg leading-8 sm:text-xl sm:leading-9"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="divide-line-default divide-y">
              {sections.map((section, index) => (
                <section key={section.title} className="py-9">
                  <h2 className="text-brand-navy text-2xl leading-tight font-medium tracking-[-0.03em] sm:text-[27px]">
                    {index + 1}. {section.title}
                  </h2>

                  {section.body?.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-content-secondary mt-5 text-base leading-8 sm:text-lg"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {section.list ? (
                    <ul className="text-content-secondary mt-6 list-disc space-y-3 pl-5 text-base leading-8 sm:text-lg">
                      {section.list.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
