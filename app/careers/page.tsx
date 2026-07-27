import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleDot,
  CloudCog,
  CodeXml,
  Database,
  ExternalLink,
  GraduationCap,
  HeartHandshake,
  Layers3,
  MapPin,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Target,
  Timer,
  Users,
  Workflow,
  X,
} from "lucide-react";

import { careersContent, type CareerIconName } from "@/lib/content/careers";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Explore technology consulting careers at Jethavictus Solutions across cloud, artificial intelligence, cybersecurity, enterprise applications, and data engineering.",
};

const jobIcons: Record<CareerIconName, LucideIcon> = {
  cloud: CloudCog,
  ai: BrainCircuit,
  security: ShieldCheck,
  erp: Layers3,
  data: Database,
};

const benefitIcons: Record<
  (typeof careersContent.benefits.items)[number]["icon"],
  LucideIcon
> = {
  growth: GraduationCap,
  impact: Target,
  flexibility: Workflow,
  expertise: Users,
};

export default function CareersPage() {
  const {
    brand,
    applicationFormUrl,
    header,
    hero,
    introduction,
    values,
    benefits,
    openings,
    hiringProcess,
    closingStatement,
    contact,
    footer,
  } = careersContent;

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
                  className={`hover:text-brand-blue transition-colors ${
                    item.href === "/careers" ? "text-brand-blue" : ""
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mx-auto flex h-[74px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="/"
            aria-label={`${brand.name} ${brand.suffix} home`}
            className="flex items-center gap-3"
          >
            <span className="border-brand-navy relative flex h-10 w-10 items-center justify-center border-2">
              <span className="text-brand-navy text-sm font-black tracking-[-0.08em]">
                {brand.initials}
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
                className={`group hover:text-brand-blue flex items-center gap-1 text-[13px] font-semibold transition-colors ${
                  item.href === "/careers"
                    ? "text-brand-blue"
                    : "text-content-secondary"
                }`}
              >
                {item.label}
                <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={header.cta.href}
              className="bg-brand-blue text-content-inverse hover:bg-brand-blue-dark hidden items-center gap-3 px-5 py-3 text-xs font-bold transition-colors md:flex"
            >
              {header.cta.label}
              <ArrowRight className="h-4 w-4" />
            </a>

            <details className="group relative xl:hidden">
              <summary className="text-brand-navy flex h-11 w-11 cursor-pointer list-none items-center justify-center [&::-webkit-details-marker]:hidden">
                <span className="sr-only">Open navigation</span>
                <Menu className="h-6 w-6 group-open:hidden" />
                <X className="hidden h-6 w-6 group-open:block" />
              </summary>

              <div className="border-line-subtle bg-surface-page shadow-navigation fixed inset-x-0 top-[74px] border-t lg:top-[111px]">
                <nav className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-4 sm:px-8 lg:px-12">
                  {header.primaryNavigation.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="border-line-subtle text-brand-navy flex items-center justify-between border-b py-5 text-lg font-semibold"
                    >
                      {item.label}
                      <ArrowRight className="h-5 w-5" />
                    </a>
                  ))}

                  <a
                    href={header.cta.href}
                    className="bg-brand-blue text-content-inverse mt-5 flex items-center justify-between px-5 py-4 text-sm font-bold"
                  >
                    {header.cta.label}
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </nav>
              </div>
            </details>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-brand-navy relative min-h-[640px] overflow-hidden sm:min-h-[700px] lg:min-h-[760px]">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="bg-brand-navy/30 absolute inset-0" />
        <div className="from-brand-navy-deep/95 via-brand-navy/78 to-brand-navy/10 absolute inset-0 bg-gradient-to-r" />
        <div className="from-brand-navy/70 absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t to-transparent" />

        <div className="relative mx-auto flex min-h-[640px] w-full max-w-[1440px] items-center px-5 py-20 sm:min-h-[700px] sm:px-8 lg:min-h-[760px] lg:px-12">
          <div className="text-content-inverse max-w-5xl">
            <p className="text-content-inverse/80 mb-6 text-xs font-bold tracking-[0.24em] uppercase">
              {hero.label}
            </p>

            <h1 className="max-w-5xl text-5xl leading-[0.98] font-light tracking-[-0.05em] sm:text-6xl lg:text-[86px]">
              {hero.title}

              <span className="block font-semibold">
                {hero.highlightedTitle}
              </span>
            </h1>

            <p className="text-content-inverse/85 mt-8 max-w-3xl text-lg leading-8 sm:text-xl">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={hero.primaryCta.href}
                className="group bg-surface-page text-brand-navy hover:bg-surface-muted inline-flex items-center justify-between gap-10 px-6 py-4 text-sm font-bold transition-colors"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={hero.secondaryCta.href}
                className="group border-line-inverse text-content-inverse hover:bg-surface-page hover:text-brand-navy inline-flex items-center justify-between gap-10 border px-6 py-4 text-sm font-bold transition-colors"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>

        <a
          href="#introduction"
          aria-label="Continue to careers introduction"
          className="bg-surface-page text-brand-navy hover:bg-brand-blue hover:text-content-inverse absolute right-0 bottom-0 hidden h-20 w-20 items-center justify-center transition-colors md:flex"
        >
          <ArrowDown className="h-7 w-7" />
        </a>
      </section>

      {/* Introduction */}
      <section
        id="introduction"
        className="bg-surface-page scroll-mt-24 py-20 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:px-12">
          <div>
            <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
              {introduction.label}
            </p>

            <h2 className="text-brand-navy mt-5 text-4xl leading-[1.05] font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {introduction.title}
            </h2>
          </div>

          <div>
            <p className="text-content-secondary text-lg leading-8">
              {introduction.description}
            </p>

            <p className="border-brand-blue text-brand-navy mt-8 border-l-2 pl-6 text-xl leading-9 font-medium">
              {introduction.statement}
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface-muted py-20 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:px-12">
          <div>
            <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
              {values.label}
            </p>

            <h2 className="text-brand-navy mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl">
              {values.title}
            </h2>

            <p className="text-content-muted mt-7 max-w-md text-base leading-7">
              {values.description}
            </p>
          </div>

          <div className="border-line-default border-t">
            {values.items.map((value) => (
              <article
                key={value.number}
                className="group border-line-default grid gap-4 border-b py-7 sm:grid-cols-[52px_0.75fr_1.25fr_24px] sm:items-start"
              >
                <span className="text-brand-blue font-mono text-xs font-semibold">
                  {value.number}
                </span>

                <h3 className="text-brand-navy text-lg font-semibold">
                  {value.title}
                </h3>

                <p className="text-content-muted text-sm leading-7">
                  {value.description}
                </p>

                <ArrowRight className="text-brand-blue hidden h-5 w-5 transition-transform group-hover:translate-x-1 sm:block" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-brand-navy text-content-inverse py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="text-brand-sky text-xs font-bold tracking-[0.2em] uppercase">
                {benefits.label}
              </p>

              <h2 className="mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {benefits.title}
              </h2>
            </div>

            <p className="text-content-inverse/65 max-w-2xl text-lg leading-8">
              {benefits.description}
            </p>
          </div>

          <div className="border-line-inverse/20 mt-14 grid border-t border-l md:grid-cols-2 xl:grid-cols-4">
            {benefits.items.map((benefit) => {
              const Icon = benefitIcons[benefit.icon];

              return (
                <article
                  key={benefit.title}
                  className="group border-line-inverse/20 hover:bg-surface-page min-h-[370px] border-r border-b p-7 transition-colors sm:p-9"
                >
                  <div className="border-line-inverse/30 text-brand-sky group-hover:border-brand-blue group-hover:bg-brand-ice group-hover:text-brand-blue flex h-12 w-12 items-center justify-center border">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="group-hover:text-brand-navy mt-24 text-2xl font-medium tracking-[-0.025em]">
                    {benefit.title}
                  </h3>

                  <p className="text-content-inverse/60 group-hover:text-content-muted mt-5 text-sm leading-7">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section
        id="open-positions"
        className="bg-surface-page scroll-mt-24 py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="border-line-default grid gap-8 border-b pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
                {openings.label}
              </p>

              <h2 className="text-brand-navy mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {openings.title}
              </h2>
            </div>

            <p className="text-content-muted max-w-xl text-base leading-7 lg:justify-self-end">
              {openings.description}
            </p>
          </div>

          <div className="border-line-default mt-10 border-t">
            {openings.jobs.map((job) => {
              const Icon = jobIcons[job.icon];

              return (
                <details
                  key={job.slug}
                  id={job.slug}
                  className="group border-line-default scroll-mt-24 border-b"
                >
                  <summary className="grid cursor-pointer list-none gap-6 py-7 md:grid-cols-[64px_1fr_auto] md:items-center lg:py-9 [&::-webkit-details-marker]:hidden">
                    <span className="bg-brand-ice text-brand-blue group-open:bg-brand-navy group-open:text-brand-sky flex h-14 w-14 items-center justify-center transition-colors">
                      <Icon className="h-7 w-7" />
                    </span>

                    <div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                        <h3 className="text-brand-navy text-2xl font-medium tracking-[-0.025em] sm:text-3xl">
                          {job.title}
                        </h3>

                        <span className="bg-surface-muted text-content-muted inline-flex items-center gap-2 px-3 py-1.5 text-[11px] font-bold tracking-[0.14em] uppercase">
                          <CircleDot className="text-brand-blue h-3.5 w-3.5" />
                          Open
                        </span>
                      </div>

                      <div className="text-content-muted mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                        <span className="flex items-center gap-2">
                          <BriefcaseBusiness className="text-brand-blue h-4 w-4" />
                          {job.department}
                        </span>

                        <span className="flex items-center gap-2">
                          <MapPin className="text-brand-blue h-4 w-4" />
                          {job.location}
                        </span>

                        <span className="flex items-center gap-2">
                          <Timer className="text-brand-blue h-4 w-4" />
                          {job.employmentType}
                        </span>

                        <span className="flex items-center gap-2">
                          <Sparkles className="text-brand-blue h-4 w-4" />
                          {job.experience}
                        </span>
                      </div>
                    </div>

                    <span className="border-line-default text-brand-blue group-open:bg-brand-blue group-open:text-content-inverse flex h-12 w-12 items-center justify-center border transition-colors">
                      <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </span>
                  </summary>

                  <div className="pb-10 md:pl-20 lg:pb-14">
                    <div className="border-line-subtle grid gap-10 border-t pt-8 xl:grid-cols-[0.8fr_1.2fr] xl:gap-16">
                      <div>
                        <p className="text-content-secondary text-lg leading-8">
                          {job.summary}
                        </p>

                        <a
                          href={applicationFormUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="group bg-brand-blue text-content-inverse hover:bg-brand-blue-dark mt-8 inline-flex items-center justify-between gap-10 px-6 py-4 text-sm font-bold transition-colors"
                        >
                          Apply through Google Form
                          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>

                        <p className="text-content-muted mt-4 max-w-sm text-xs leading-6">
                          The application opens in a new tab and is submitted
                          through Google Forms.
                        </p>
                      </div>

                      <div className="grid gap-9 lg:grid-cols-2">
                        <div>
                          <p className="text-brand-blue text-xs font-bold tracking-[0.18em] uppercase">
                            Responsibilities
                          </p>

                          <ul className="mt-5 space-y-4">
                            {job.responsibilities.map((responsibility) => (
                              <li
                                key={responsibility}
                                className="text-content-secondary flex items-start gap-3 text-sm leading-7"
                              >
                                <span className="bg-brand-ice text-brand-blue mt-1 flex h-5 w-5 shrink-0 items-center justify-center">
                                  <Check className="h-3.5 w-3.5" />
                                </span>

                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <p className="text-brand-blue text-xs font-bold tracking-[0.18em] uppercase">
                            Requirements
                          </p>

                          <ul className="mt-5 space-y-4">
                            {job.requirements.map((requirement) => (
                              <li
                                key={requirement}
                                className="text-content-secondary flex items-start gap-3 text-sm leading-7"
                              >
                                <span className="bg-brand-blue mt-2 h-1.5 w-1.5 shrink-0" />
                                <span>{requirement}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="border-line-subtle mt-8 border-t pt-7">
                            <p className="text-brand-blue text-xs font-bold tracking-[0.18em] uppercase">
                              Preferred
                            </p>

                            <ul className="mt-5 space-y-3">
                              {job.preferredQualifications.map(
                                (qualification) => (
                                  <li
                                    key={qualification}
                                    className="text-content-muted flex items-start gap-3 text-sm leading-6"
                                  >
                                    <span className="bg-content-subtle mt-2 h-1.5 w-1.5 shrink-0" />
                                    <span>{qualification}</span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </details>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section
        id="hiring-process"
        className="bg-surface-muted scroll-mt-24 py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
              {hiringProcess.label}
            </p>

            <h2 className="text-brand-navy mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {hiringProcess.title}
            </h2>

            <p className="text-content-muted mt-7 max-w-2xl text-lg leading-8">
              {hiringProcess.description}
            </p>
          </div>

          <div className="border-line-default mt-14 grid border-t border-l md:grid-cols-2 xl:grid-cols-4">
            {hiringProcess.steps.map((step, index) => {
              const processIcons = [
                CodeXml,
                HeartHandshake,
                Network,
                BriefcaseBusiness,
              ];

              const Icon = processIcons[index];

              return (
                <article
                  key={step.number}
                  className="group border-line-default bg-surface-page hover:bg-brand-navy min-h-[360px] border-r border-b p-7 transition-colors sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="bg-brand-ice text-brand-blue group-hover:bg-content-inverse/10 group-hover:text-brand-sky flex h-12 w-12 items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </span>

                    <span className="text-brand-blue group-hover:text-brand-sky font-mono text-xs font-semibold">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-brand-navy group-hover:text-content-inverse mt-24 text-3xl font-medium tracking-[-0.035em]">
                    {step.title}
                  </h3>

                  <p className="text-content-muted group-hover:text-content-inverse/70 mt-5 text-sm leading-7">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="bg-brand-navy text-content-inverse relative min-h-[680px] overflow-hidden">
        <img
          src={closingStatement.image}
          alt={closingStatement.imageAlt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="bg-brand-navy/45 absolute inset-0" />
        <div className="from-brand-navy-deep/95 via-brand-navy/80 absolute inset-0 bg-gradient-to-r to-transparent" />

        <div className="relative mx-auto flex min-h-[680px] w-full max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-brand-sky text-xs font-bold tracking-[0.22em] uppercase">
              {closingStatement.label}
            </p>

            <h2 className="mt-6 text-5xl leading-[0.98] font-light tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              {closingStatement.title}

              <span className="block font-semibold">
                {closingStatement.highlightedTitle}
              </span>
            </h2>

            <p className="text-content-inverse/75 mt-8 max-w-2xl text-lg leading-8">
              {closingStatement.description}
            </p>
          </div>
        </div>
      </section>

      {/* General application */}
      <section className="bg-brand-blue text-content-inverse">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-brand-ice text-xs font-bold tracking-[0.22em] uppercase">
                {contact.label}
              </p>

              <h2 className="mt-5 max-w-5xl text-5xl leading-[0.98] font-light tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                {contact.title}

                <span className="block font-semibold">
                  {contact.highlightedTitle}
                </span>
              </h2>

              <p className="text-content-inverse/75 mt-7 max-w-2xl text-lg leading-8">
                {contact.description}
              </p>
            </div>

            <a
              href={applicationFormUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Open the Jethavictus general application form"
              className="group border-line-inverse bg-surface-page text-brand-blue flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-full border text-center transition-transform hover:scale-105 sm:h-40 sm:w-40"
            >
              <ExternalLink className="h-7 w-7" />

              <span className="max-w-24 text-xs leading-5 font-bold">
                {contact.ctaLabel}
              </span>
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
                href="/"
                aria-label={`${brand.name} ${brand.suffix} home`}
                className="flex items-center gap-3"
              >
                <span className="border-line-inverse relative flex h-10 w-10 items-center justify-center border-2">
                  <span className="text-content-inverse text-sm font-black tracking-[-0.08em]">
                    {brand.initials}
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
                {brand.description}
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
                          target={
                            link.href.startsWith("https://forms.gle")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            link.href.startsWith("https://forms.gle")
                              ? "noreferrer"
                              : undefined
                          }
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
