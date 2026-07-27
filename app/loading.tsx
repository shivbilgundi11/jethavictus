export default function Loading() {
  return (
    <main className="bg-surface-page text-content-primary overflow-hidden">
      <section className="bg-brand-navy min-h-[620px] animate-pulse sm:min-h-[680px] lg:min-h-[740px]">
        <div className="mx-auto flex min-h-[620px] w-full max-w-[1440px] items-center px-5 py-20 sm:min-h-[680px] sm:px-8 lg:min-h-[740px] lg:px-12">
          <div className="w-full max-w-4xl">
            <div className="bg-content-inverse/20 h-4 w-48 rounded-full" />
            <div className="bg-content-inverse/25 mt-8 h-20 w-full max-w-3xl rounded" />
            <div className="bg-content-inverse/20 mt-5 h-20 w-full max-w-2xl rounded" />
            <div className="bg-content-inverse/15 mt-8 h-24 w-full max-w-xl rounded" />
            <div className="mt-10 flex gap-3">
              <div className="bg-content-inverse/25 h-12 w-48 rounded-full" />
              <div className="bg-content-inverse/15 h-12 w-44 rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
