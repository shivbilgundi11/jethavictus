"use client";

import { useEffect } from "react";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-surface-page text-content-primary flex min-h-[70vh] items-center">
      <section className="mx-auto w-full max-w-225 px-5 py-24 sm:px-8 lg:px-12">
        <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
          Page error
        </p>
        <h1 className="text-brand-navy mt-5 text-5xl leading-none font-light tracking-[-0.045em] sm:text-6xl">
          Something went wrong.
        </h1>
        <p className="text-content-muted mt-6 max-w-xl text-base leading-7">
          The page failed to render. Try again, or return to the main
          navigation.
        </p>
        <button
          type="button"
          onClick={() => unstable_retry()}
          className="bg-brand-blue text-content-inverse hover:bg-brand-blue-dark mt-8 px-6 py-4 text-sm font-bold transition-colors"
        >
          Try again
        </button>
      </section>
    </main>
  );
}
