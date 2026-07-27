"use client";

import { useState } from "react";
import { homeContent } from "@/lib/content/home";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const {
    brand,
    header,
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
    footer,
  } = homeContent;

  return (
    <main className="bg-surface-page text-content-primary selection:bg-brand-blue selection:text-content-inverse overflow-hidden antialiased">
      {/* Header */}
      <header className="bg-surface-page relative z-50">
        <div className="border-line-subtle bg-surface-soft hidden border-b lg:block">
          <div className="mx-auto flex h-9 w-full max-w-[1440px] items-center justify-end px-5 sm:px-8 lg:px-12">
            <nav
              aria-label="Utility navigation"
              className="text-content-muted flex items-center gap-7 text-[11px] font-semibold"
            >
              {header.utilityNavigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-brand-blue transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mx-auto flex h-[74px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#top"
            aria-label={`${brand.name} ${brand.suffix} home`}
            className="flex items-center gap-3"
          >
            <span className="border-brand-navy relative flex h-10 w-10 items-center justify-center border-2">
              <span className="text-brand-navy text-sm font-black tracking-[-0.08em]">
                JV
              </span>

              <span className="border-surface-page bg-brand-blue absolute -right-1 -bottom-1 h-3 w-3 border-2" />
            </span>

            <span className="leading-none">
              <span className="text-brand-navy block text-[15px] font-extrabold tracking-[0.08em]">
                {brand.name}
              </span>

              <span className="text-content-muted mt-1 block text-[9px] font-bold tracking-[0.38em]">
                {brand.suffix}
              </span>
            </span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 xl:flex"
          >
            {header.primaryNavigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group text-content-secondary hover:text-brand-blue flex items-center gap-1 text-[13px] font-semibold transition-colors"
              >
                {item.label}

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5"
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
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="text-content-muted hover:bg-surface-muted hover:text-brand-blue hidden h-11 w-11 items-center justify-center transition-colors sm:flex"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5"
              >
                <circle
                  cx="11"
                  cy="11"
                  r="6.5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="m16 16 4 4"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <a
              href={header.cta.href}
              className="bg-brand-blue text-content-inverse hover:bg-brand-blue-dark hidden items-center gap-3 px-5 py-3 text-xs font-bold transition-colors md:flex"
            >
              {header.cta.label}

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

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((current) => !current)}
              className="text-brand-navy flex h-11 w-11 items-center justify-center xl:hidden"
            >
              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    d="m6 6 12 12M18 6 6 18"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="h-6 w-6"
                >
                  <path
                    d="M4 7h16M4 12h16M4 17h16"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="border-line-subtle bg-surface-page shadow-navigation absolute inset-x-0 top-full border-t xl:hidden">
            <div className="mx-auto w-full max-w-[1440px] px-5 py-4 sm:px-8 lg:px-12">
              <nav className="flex flex-col">
                {header.primaryNavigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="border-line-subtle text-brand-navy flex items-center justify-between border-b py-5 text-lg font-semibold"
                  >
                    {item.label}

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="h-5 w-5"
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
                ))}

                <a
                  href={header.cta.href}
                  onClick={() => setMenuOpen(false)}
                  className="bg-brand-blue text-content-inverse mt-5 flex items-center justify-between px-5 py-4 text-sm font-bold"
                >
                  {header.cta.label}

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="h-5 w-5"
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
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        id="top"
        className="bg-brand-navy relative min-h-[620px] overflow-hidden sm:min-h-[680px] lg:min-h-[740px]"
      >
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="bg-brand-navy/15 absolute inset-0" />

        <div className="from-brand-navy-deep/95 via-brand-navy/70 absolute inset-0 bg-gradient-to-r to-transparent" />

        <div className="from-brand-navy/55 absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t to-transparent" />

        <div className="relative mx-auto flex min-h-[620px] w-full max-w-[1440px] items-center px-5 py-20 sm:min-h-[680px] sm:px-8 lg:min-h-[740px] lg:px-12">
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
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
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
                <div className="bg-surface-muted relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-brand-blue text-[11px] font-bold tracking-[0.2em] uppercase">
                    {item.category}
                  </p>

                  <h3 className="text-brand-navy mt-4 text-2xl leading-tight font-medium tracking-[-0.025em]">
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
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
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
            <div className="relative min-h-[420px]">
              <img
                src={aboutSection.feature.image}
                alt={aboutSection.feature.imageAlt}
                loading="lazy"
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
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
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
                    index === 0
                      ? "aspect-[16/9] lg:aspect-[16/7]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />

                  <div className="bg-brand-navy text-content-inverse absolute top-0 left-0 px-4 py-3 text-xs font-bold">
                    {service.number}
                  </div>
                </div>

                <div className="border-line-default border-b py-6">
                  <h3 className="text-brand-navy text-2xl font-medium tracking-[-0.025em]">
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
                        <span className="bg-brand-blue mt-[9px] h-1.5 w-1.5 shrink-0" />

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
      <section className="bg-brand-navy text-content-inverse">
        <div className="grid lg:grid-cols-2">
          <article className="border-line-inverse/20 border-b p-8 sm:p-12 lg:min-h-[480px] lg:border-r lg:border-b-0 lg:p-16 xl:p-24">
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

          <article className="p-8 sm:p-12 lg:min-h-[480px] lg:p-16 xl:p-24">
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
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:px-12">
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
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
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
                className="group border-line-default bg-surface-page hover:bg-brand-navy min-h-[330px] border-r border-b p-7 transition-colors sm:p-9"
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
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
          <div className="relative min-h-[520px] overflow-hidden">
            <img
              src={industriesSection.featureImage}
              alt={industriesSection.featureImageAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="from-brand-navy/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

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
      <section className="bg-brand-navy text-content-inverse relative min-h-[650px] overflow-hidden">
        <img
          src={commitmentSection.image}
          alt={commitmentSection.imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="bg-brand-navy/50 absolute inset-0" />

        <div className="from-brand-navy/95 via-brand-navy/75 absolute inset-0 bg-gradient-to-r to-transparent" />

        <div className="relative mx-auto flex min-h-[650px] w-full max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:px-12">
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
        <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-brand-ice text-xs font-bold tracking-[0.22em] uppercase">
                {contactSection.label}
              </p>

              <h2 className="mt-5 max-w-5xl text-5xl leading-[0.98] font-light tracking-[-0.05em] sm:text-6xl lg:text-7xl">
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

      {/* Footer */}
      <footer className="bg-brand-navy text-content-inverse">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="border-line-inverse/20 grid gap-12 border-b pb-14 lg:grid-cols-[1.15fr_2fr]">
            <div>
              <a
                href="#top"
                aria-label={`${brand.name} ${brand.suffix} home`}
                className="flex items-center gap-3"
              >
                <span className="border-line-inverse relative flex h-10 w-10 items-center justify-center border-2">
                  <span className="text-content-inverse text-sm font-black tracking-[-0.08em]">
                    JV
                  </span>

                  <span className="border-brand-navy bg-surface-page absolute -right-1 -bottom-1 h-3 w-3 border-2" />
                </span>

                <span className="leading-none">
                  <span className="text-content-inverse block text-[15px] font-extrabold tracking-[0.08em]">
                    {brand.name}
                  </span>

                  <span className="text-content-inverse/65 mt-1 block text-[9px] font-bold tracking-[0.38em]">
                    {brand.suffix}
                  </span>
                </span>
              </a>

              <p className="text-content-inverse/60 mt-7 max-w-sm text-sm leading-7">
                {brand.shortDescription}
              </p>
            </div>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {footer.groups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-content-inverse text-xs font-bold tracking-[0.18em] uppercase">
                    {group.title}
                  </h3>

                  <ul className="mt-5 space-y-3">
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-content-inverse/60 hover:text-content-inverse text-sm transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-content-inverse/45 flex flex-col gap-4 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {brand.name} {brand.suffix}. All
              rights reserved.
            </p>

            <p>{brand.tagline}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
