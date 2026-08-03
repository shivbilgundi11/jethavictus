import type { Metadata } from "next";
import Image from "next/image";
import { homeContent } from "@/lib/content/home";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("home");

export default function HomePage() {
  const {
    brand,
    hero,
    prioritiesSection,
    aboutSection,
    capabilitiesSection,
    missionVisionSection,
    differentiatorsSection,
    approachSection,
    industriesSection,
    commitmentSection,
    contactSection,
  } = homeContent;

  return (
    <main className="bg-surface-page text-content-primary selection:bg-brand-blue selection:text-content-inverse overflow-hidden antialiased">
      {/* Hero */}
      <section
        id="top"
        className="bg-brand-navy relative min-h-155 overflow-hidden sm:min-h-170 lg:min-h-185"
      >
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          sizes="100vw"
          preload
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="bg-brand-navy/15 absolute inset-0" />

        <div className="from-brand-navy-deep/95 via-brand-navy/70 absolute inset-0 bg-linear-to-r to-transparent" />

        <div className="from-brand-navy/55 absolute inset-x-0 bottom-0 h-40 bg-linear-to-t to-transparent" />

        <div className="relative mx-auto flex min-h-155 w-full max-w-360 items-center px-5 py-20 sm:min-h-170 sm:px-8 lg:min-h-185 lg:px-12">
          <div className="text-content-inverse max-w-4xl">
            <p className="text-content-inverse/80 mb-6 text-xs font-bold tracking-[0.24em] uppercase">
              {hero.label}
            </p>

            <h1 className="max-w-4xl text-5xl leading-[0.98] font-light tracking-[-0.045em] sm:text-6xl lg:text-[88px]">
              {hero.title}

              <span className="block font-semibold">
                {hero.highlightedTitle}
              </span>
            </h1>

            <p className="text-content-inverse/85 mt-8 max-w-2xl text-lg leading-8 sm:text-xl">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={hero.primaryCta.href}
                className="group bg-surface-page text-brand-navy hover:bg-surface-muted inline-flex items-center justify-between gap-10 px-6 py-4 text-sm font-bold transition-colors"
              >
                {hero.primaryCta.label}

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h13M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href={hero.secondaryCta.href}
                className="group border-line-inverse text-content-inverse hover:bg-surface-page hover:text-brand-navy inline-flex items-center justify-between gap-10 border bg-transparent px-6 py-4 text-sm font-bold transition-colors"
              >
                {hero.secondaryCta.label}

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h13M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <a
          href="#priorities"
          aria-label="Continue to the next section"
          className="bg-surface-page text-brand-navy hover:bg-brand-blue hover:text-content-inverse absolute right-0 bottom-0 hidden h-20 w-20 items-center justify-center transition-colors md:flex"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="h-7 w-7"
          >
            <path
              d="m6 9 6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>

      {/* Priorities */}
      <section
        id="priorities"
        className="bg-surface-page scroll-mt-24 py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="border-line-default flex flex-col justify-between gap-6 border-b pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
                {prioritiesSection.label}
              </p>

              <h2 className="text-brand-navy mt-4 text-4xl font-light tracking-[-0.035em] sm:text-5xl">
                {prioritiesSection.title}
              </h2>
            </div>

            <p className="text-content-muted max-w-md text-base leading-7">
              {prioritiesSection.description}
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {prioritiesSection.items.map((item) => (
              <article
                key={item.title}
                className="group border-line-subtle bg-surface-elevated flex h-full flex-col border"
              >
                <div className="bg-surface-muted relative aspect-16/10 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-brand-blue text-[11px] font-bold tracking-[0.2em] uppercase">
                    {item.category}
                  </p>

                  <h3 className="text-brand-navy mt-4 text-2xl leading-tight font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-content-muted mt-4 flex-1 text-sm leading-7">
                    {item.description}
                  </p>

                  <a
                    href={item.href}
                    className="text-brand-blue mt-7 flex items-center gap-3 text-sm font-bold"
                  >
                    {item.linkLabel}

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M5 12h13M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="bg-surface-muted scroll-mt-24 py-20 lg:py-32"
      >
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div>
              <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
                {aboutSection.label}
              </p>

              <h2 className="text-brand-navy mt-5 text-4xl leading-[1.05] font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {aboutSection.title}

                <span className="block font-semibold">
                  {aboutSection.highlightedTitle}
                </span>
              </h2>
            </div>

            <div className="text-content-secondary space-y-7 text-lg leading-8">
              {aboutSection.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}

              <p className="text-brand-navy font-medium">
                {aboutSection.emphasizedParagraph}
              </p>
            </div>
          </div>

          <div className="bg-brand-navy mt-20 grid overflow-hidden lg:grid-cols-2">
            <div className="relative min-h-105">
              <Image
                src={aboutSection.feature.image}
                alt={aboutSection.feature.imageAlt}
                fill
                sizes="100vw"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="text-content-inverse flex items-center p-8 sm:p-12 lg:p-16">
              <div>
                <p className="text-brand-sky text-xs font-bold tracking-[0.2em] uppercase">
                  {aboutSection.feature.label}
                </p>

                <h3 className="mt-5 text-3xl leading-tight font-light sm:text-4xl">
                  {aboutSection.feature.title}
                </h3>

                <p className="text-content-inverse/75 mt-6 max-w-xl text-base leading-8">
                  {aboutSection.feature.description}
                </p>

                <a
                  href={aboutSection.feature.cta.href}
                  className="border-line-inverse mt-8 inline-flex items-center gap-3 border-b pb-2 text-sm font-bold"
                >
                  {aboutSection.feature.cta.label}

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-4 w-4"
                  >
                    <path
                      d="M5 12h13M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        id="capabilities"
        className="bg-surface-page scroll-mt-24 py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="border-line-default grid gap-8 border-b pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
                {capabilitiesSection.label}
              </p>

              <h2 className="text-brand-navy mt-5 max-w-4xl text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {capabilitiesSection.title}
              </h2>
            </div>

            <p className="text-content-muted max-w-xl text-base leading-7 lg:justify-self-end">
              {capabilitiesSection.description}
            </p>
          </div>

          <div className="mt-10 grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {capabilitiesSection.services.map((service, index) => (
              <article
                key={service.number}
                className={`group ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <div
                  className={`bg-surface-muted relative overflow-hidden ${
                    index === 0 ? "aspect-video lg:aspect-16/7" : "aspect-16/10"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />

                  <div className="bg-brand-navy text-content-inverse absolute top-0 left-0 px-4 py-3 text-xs font-bold">
                    {service.number}
                  </div>
                </div>

                <div className="border-line-default border-b py-6">
                  <h3 className="text-brand-navy text-2xl font-medium tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-content-muted mt-4 text-sm leading-7">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="text-content-secondary flex gap-3 text-sm leading-6"
                      >
                        <span className="bg-brand-blue mt-2.25 h-1.5 w-1.5 shrink-0" />

                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={service.href}
                    className="text-brand-blue mt-6 inline-flex items-center gap-3 text-sm font-bold"
                  >
                    {service.linkLabel}

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    >
                      <path
                        d="M5 12h13M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section
        id="mission-vision"
        className="bg-brand-navy text-content-inverse"
      >
        <div className="mx-auto grid max-w-360 lg:grid-cols-2">
          <article className="border-line-inverse/20 border-b p-8 sm:p-12 lg:min-h-120 lg:border-r lg:border-b-0 lg:p-14 xl:p-20">
            <p className="text-brand-sky text-xs font-bold tracking-[0.22em] uppercase">
              {missionVisionSection.mission.label}
            </p>

            <h2 className="mt-8 max-w-xl text-3xl leading-snug font-light sm:text-4xl lg:text-5xl">
              {missionVisionSection.mission.title}
            </h2>

            <p className="text-content-inverse/65 mt-8 max-w-xl text-base leading-8">
              {missionVisionSection.mission.description}
            </p>
          </article>

          <article className="p-8 sm:p-12 lg:min-h-120 lg:p-14 xl:p-20">
            <p className="text-brand-sky text-xs font-bold tracking-[0.22em] uppercase">
              {missionVisionSection.vision.label}
            </p>

            <h2 className="mt-8 max-w-xl text-3xl leading-snug font-light sm:text-4xl lg:text-5xl">
              {missionVisionSection.vision.title}
            </h2>

            <p className="text-content-inverse/65 mt-8 max-w-xl text-base leading-8">
              {missionVisionSection.vision.description}
            </p>
          </article>
        </div>
      </section>

      {/* Differentiators */}
      <section
        id="differentiators"
        className="bg-surface-page scroll-mt-24 py-20 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-360 gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:px-12">
          <div>
            <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
              {differentiatorsSection.label}
            </p>

            <h2 className="text-brand-navy mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl">
              {differentiatorsSection.title}
            </h2>

            <p className="text-content-muted mt-6 max-w-md text-base leading-7">
              {differentiatorsSection.description}
            </p>
          </div>

          <div className="border-line-default border-t">
            {differentiatorsSection.items.map((item) => (
              <article
                key={item.number}
                className="group border-line-default grid gap-4 border-b py-7 sm:grid-cols-[52px_0.75fr_1.25fr_24px] sm:items-start"
              >
                <span className="text-brand-blue text-xs font-bold">
                  {item.number}
                </span>

                <h3 className="text-brand-navy text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-content-muted text-sm leading-7">
                  {item.description}
                </p>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="text-brand-blue hidden h-5 w-5 transition-transform group-hover:translate-x-1 sm:block"
                >
                  <path
                    d="M5 12h13M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        id="approach"
        className="bg-surface-muted scroll-mt-24 py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
              {approachSection.label}
            </p>

            <h2 className="text-brand-navy mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {approachSection.title}
            </h2>

            <p className="text-content-muted mt-7 max-w-2xl text-lg leading-8">
              {approachSection.description}
            </p>
          </div>

          <div className="border-line-default mt-14 grid border-t border-l md:grid-cols-2 xl:grid-cols-4">
            {approachSection.steps.map((step) => (
              <article
                key={step.number}
                className="group border-line-default bg-surface-page hover:bg-brand-navy min-h-82.5 border-r border-b p-7 transition-colors sm:p-9"
              >
                <div className="flex items-start justify-between">
                  <span className="text-brand-blue group-hover:text-brand-sky text-sm font-bold">
                    {step.number}
                  </span>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="text-brand-blue group-hover:text-content-inverse h-5 w-5 -rotate-45 transition-transform group-hover:rotate-0"
                  >
                    <path
                      d="M5 12h13M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <h3 className="text-brand-navy group-hover:text-content-inverse mt-24 text-3xl font-medium tracking-[-0.035em]">
                  {step.title}
                </h3>

                <p className="text-content-muted group-hover:text-content-inverse/70 mt-5 text-sm leading-7">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        id="industries"
        className="bg-surface-page scroll-mt-24 overflow-hidden py-20 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-360 gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
          <div className="relative min-h-130 overflow-hidden">
            <Image
              src={industriesSection.featureImage}
              alt={industriesSection.featureImageAlt}
              fill
              sizes="100vw"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="from-brand-navy/80 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />

            <div className="text-content-inverse absolute inset-x-0 bottom-0 p-7 sm:p-10">
              <p className="text-brand-sky text-xs font-bold tracking-[0.2em] uppercase">
                {industriesSection.featureLabel}
              </p>

              <p className="mt-4 max-w-lg text-2xl leading-snug font-light sm:text-3xl">
                {industriesSection.featureText}
              </p>
            </div>
          </div>

          <div>
            <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
              {industriesSection.label}
            </p>

            <h2 className="text-brand-navy mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl">
              {industriesSection.title}
            </h2>

            <div className="border-line-default mt-10 border-t">
              {industriesSection.industries.map((industry, index) => (
                <div
                  key={industry}
                  className="group border-line-default flex items-center justify-between gap-5 border-b py-5"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-brand-blue w-7 text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-brand-navy text-lg font-medium sm:text-xl">
                      {industry}
                    </span>
                  </div>

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="text-brand-blue h-5 w-5 transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M5 12h13M13 6l6 6-6 6"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-brand-navy text-content-inverse relative min-h-162.5 overflow-hidden">
        <Image
          src={commitmentSection.image}
          alt={commitmentSection.imageAlt}
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />

        <div className="bg-brand-navy/50 absolute inset-0" />

        <div className="from-brand-navy/95 via-brand-navy/75 absolute inset-0 bg-linear-to-r to-transparent" />

        <div className="relative mx-auto flex min-h-162.5 w-full max-w-360 items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-brand-sky text-xs font-bold tracking-[0.22em] uppercase">
              {commitmentSection.label}
            </p>

            <h2 className="mt-6 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {commitmentSection.title}

              <span className="block font-semibold">
                {commitmentSection.highlightedTitle}
              </span>
            </h2>

            <p className="text-content-inverse/75 mt-7 max-w-2xl text-lg leading-8">
              {commitmentSection.description}
            </p>

            <a
              href={commitmentSection.cta.href}
              className="group bg-surface-page text-brand-navy mt-9 inline-flex items-center justify-between gap-12 px-6 py-4 text-sm font-bold"
            >
              {commitmentSection.cta.label}

              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M5 12h13M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="bg-brand-blue text-content-inverse scroll-mt-24"
      >
        <div className="mx-auto w-full max-w-360 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-brand-ice text-xs font-bold tracking-[0.22em] uppercase">
                {contactSection.label}
              </p>

              <h2 className="mt-5 max-w-5xl text-5xl leading-[0.98] font-light tracking-tighter sm:text-6xl lg:text-7xl">
                {contactSection.title}

                <span className="block font-semibold">
                  {contactSection.highlightedTitle}
                </span>
              </h2>

              <p className="text-content-inverse/75 mt-7 max-w-xl text-lg leading-8">
                {contactSection.description}
              </p>
            </div>

            <a
              href={`mailto:${brand.email}`}
              className="group border-line-inverse bg-surface-page text-brand-blue flex h-28 w-28 items-center justify-center rounded-full border transition-transform hover:scale-105 sm:h-36 sm:w-36"
              aria-label={`Email ${brand.name} ${brand.suffix}`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-9 w-9 -rotate-45 transition-transform group-hover:rotate-0"
              >
                <path
                  d="M5 12h13M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="border-line-inverse/30 mt-16 flex flex-col gap-5 border-t pt-8 text-lg font-semibold sm:flex-row sm:items-center sm:justify-between">
            <a
              href={`mailto:${brand.email}`}
              className="transition-opacity hover:opacity-70"
            >
              {brand.email}
            </a>

            <a
              href={brand.website}
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-70"
            >
              {brand.websiteLabel}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
