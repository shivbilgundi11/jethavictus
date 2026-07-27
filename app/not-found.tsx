import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested Jethavictus Solutions page could not be found.",
};

export default function NotFound() {
  return (
    <main className="bg-surface-page text-content-primary flex min-h-[70vh] items-center">
      <section className="mx-auto w-full max-w-[900px] px-5 py-24 sm:px-8 lg:px-12">
        <p className="text-brand-blue text-4xl font-bold tracking-[0.2em] uppercase lg:text-6xl">
          404
        </p>
        <h1 className="text-brand-navy mt-5 text-5xl leading-none font-light tracking-[-0.045em] sm:text-6xl">
          Page not found.
        </h1>
        <p className="text-content-muted mt-5 max-w-xl text-base leading-7">
          The page may have moved, or the link may be incorrect.
        </p>
        <Link
          href="/"
          className="bg-brand-blue text-content-inverse hover:bg-brand-blue-dark mt-8 inline-flex px-6 py-4 text-sm font-bold transition-colors"
        >
          Return home
        </Link>
      </section>
    </main>
  );
}
