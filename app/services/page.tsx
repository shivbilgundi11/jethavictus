import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  BrainCircuit,
  Building2,
  Check,
  CloudCog,
  GitMerge,
  Headphones,
  Layers3,
  Network,
  RefreshCw,
  Route,
  Settings2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { servicesContent, type ServiceIconName } from "@/lib/content/services";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("services");

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  strategy: Route,
  ai: BrainCircuit,
  cloud: CloudCog,
  security: ShieldCheck,
  erp: Layers3,
  blockchain: Blocks,
  iot: Network,
};

const sharedCapabilityIcons: Record<
  (typeof servicesContent.sharedCapabilities.items)[number]["icon"],
  LucideIcon
> = {
  governance: Settings2,
  integration: GitMerge,
  analytics: BarChart3,
  support: Headphones,
};

export default function ServicesPage() {
  const {
    brand,
    hero,
    introduction,
    services,
    sharedCapabilities,
    delivery,
    engagementModels,
    closingStatement,
    contact,
  } = servicesContent;

  return (
    <main className="bg-surface-page text-content-primary selection:bg-brand-blue selection:text-content-inverse overflow-hidden antialiased">
      {/* Hero */}
      <section className="bg-brand-navy relative min-h-160 overflow-hidden sm:min-h-175 lg:min-h-190">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          sizes="100vw"
          preload
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="bg-brand-navy/35 absolute inset-0" />

        <div className="from-brand-navy-deep/95 via-brand-navy/80 to-brand-navy/10 absolute inset-0 bg-linear-to-r" />

        <div className="from-brand-navy/75 absolute inset-x-0 bottom-0 h-48 bg-linear-to-t to-transparent" />

        <div className="relative mx-auto flex min-h-160 w-full max-w-360 items-center px-5 py-20 sm:min-h-175 sm:px-8 lg:min-h-190 lg:px-12">
          <div className="text-content-inverse max-w-5xl">
            <p className="text-content-inverse/80 mb-6 text-xs font-bold tracking-[0.24em] uppercase">
              {hero.label}
            </p>

            <h1 className="max-w-5xl text-5xl leading-[0.98] font-light tracking-tighter sm:text-6xl lg:text-[86px]">
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
          aria-label="Continue to services introduction"
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
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
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

          <div className="border-line-default mt-16 grid border-t border-l sm:grid-cols-3">
            {introduction.statistics.map((statistic) => (
              <article
                key={statistic.label}
                className="border-line-default border-r border-b p-7 sm:p-9"
              >
                <p className="text-brand-navy font-mono text-5xl font-medium tracking-tighter sm:text-6xl">
                  {statistic.value}
                </p>

                <p className="text-content-muted mt-4 text-sm font-semibold tracking-[0.12em] uppercase">
                  {statistic.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services navigation */}
      <section
        id="services"
        className="border-line-subtle bg-surface-soft scroll-mt-24 border-y"
      >
        <div className="mx-auto w-full max-w-360 px-5 py-8 sm:px-8 lg:px-12">
          <p className="text-brand-blue mb-6 text-xs font-bold tracking-[0.2em] uppercase">
            Jump to a capability
          </p>

          <nav
            aria-label="Service page sections"
            className="border-line-default grid border-t border-l sm:grid-cols-2 lg:grid-cols-4"
          >
            {services.map((service) => {
              const Icon = serviceIcons[service.icon];

              return (
                <a
                  key={service.slug}
                  href={`#${service.slug}`}
                  className="group border-line-default bg-surface-page hover:bg-brand-navy flex min-h-28 items-center justify-between gap-5 border-r border-b p-5 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <Icon className="text-brand-blue group-hover:text-brand-sky h-6 w-6 shrink-0" />

                    <div>
                      <span className="text-content-subtle group-hover:text-content-inverse/55 block font-mono text-[11px]">
                        {service.number}
                      </span>

                      <span className="text-brand-navy group-hover:text-content-inverse mt-1 block text-sm font-semibold">
                        {service.shortTitle}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className="text-brand-blue group-hover:text-content-inverse h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      {/* Service detail sections */}
      {services.map((service, index) => {
        const Icon = serviceIcons[service.icon];
        const imageFirst = index % 2 !== 0;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className={`scroll-mt-24 py-20 lg:py-28 ${
              index % 2 === 0 ? "bg-surface-page" : "bg-surface-muted"
            }`}
          >
            <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
              <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-0">
                <div
                  className={`relative min-h-115 overflow-hidden lg:min-h-180 ${
                    imageFirst ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    fill
                    sizes="100vw"
                    className="absolute inset-0 h-full w-full object-cover"
                  />

                  <div className="from-brand-navy/65 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />

                  <div className="bg-brand-navy text-content-inverse absolute top-0 left-0 flex items-center gap-3 px-5 py-4">
                    <Icon className="text-brand-sky h-5 w-5" />
                    <span className="font-mono text-xs font-semibold tracking-[0.12em]">
                      SERVICE {service.number}
                    </span>
                  </div>

                  <div className="text-content-inverse absolute inset-x-0 bottom-0 p-7 sm:p-10">
                    <p className="max-w-xl text-2xl leading-snug font-light sm:text-3xl">
                      {service.introduction}
                    </p>
                  </div>
                </div>

                <div
                  className={`border-line-default bg-surface-page flex items-center border p-7 sm:p-10 lg:p-14 xl:p-16 ${
                    imageFirst ? "lg:order-1" : ""
                  }`}
                >
                  <div className="w-full">
                    <div className="flex items-center gap-4">
                      <span className="bg-brand-ice text-brand-blue flex h-12 w-12 items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </span>

                      <span className="text-content-subtle font-mono text-xs font-semibold tracking-[0.16em]">
                        {service.number}
                      </span>
                    </div>

                    <h2 className="text-brand-navy mt-7 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl">
                      {service.title}
                    </h2>

                    <p className="text-content-secondary mt-7 text-base leading-8">
                      {service.description}
                    </p>

                    <div className="mt-10">
                      <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
                        Business outcomes
                      </p>

                      <ul className="mt-5 space-y-4">
                        {service.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="text-content-secondary flex items-start gap-3 text-sm leading-7"
                          >
                            <span className="bg-brand-ice text-brand-blue mt-1 flex h-5 w-5 shrink-0 items-center justify-center">
                              <Check className="h-3.5 w-3.5" />
                            </span>

                            <span>{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-line-default mt-10 border-t pt-8">
                      <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
                        Core capabilities
                      </p>

                      <div className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                        {service.capabilities.map((capability) => (
                          <div
                            key={capability}
                            className="text-content-secondary flex items-start gap-3 text-sm leading-6"
                          >
                            <span className="bg-brand-blue mt-2 h-1.5 w-1.5 shrink-0" />
                            <span>{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="group bg-brand-blue text-content-inverse hover:bg-brand-blue-dark mt-10 inline-flex items-center justify-between gap-10 px-6 py-4 text-sm font-bold transition-colors"
                    >
                      Discuss this capability
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Shared capabilities */}
      <section className="bg-brand-navy text-content-inverse py-20 lg:py-28">
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-brand-sky text-xs font-bold tracking-[0.2em] uppercase">
                {sharedCapabilities.label}
              </p>

              <h2 className="mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {sharedCapabilities.title}
              </h2>
            </div>

            <p className="text-content-inverse/65 max-w-2xl text-lg leading-8">
              {sharedCapabilities.description}
            </p>
          </div>

          <div className="border-line-inverse/20 mt-14 grid border-t border-l md:grid-cols-2 xl:grid-cols-4">
            {sharedCapabilities.items.map((item) => {
              const Icon = sharedCapabilityIcons[item.icon];

              return (
                <article
                  key={item.title}
                  className="group border-line-inverse/20 hover:bg-surface-page min-h-87.5 border-r border-b p-7 transition-colors sm:p-9"
                >
                  <div className="border-line-inverse/30 text-brand-sky group-hover:border-brand-blue group-hover:bg-brand-ice group-hover:text-brand-blue flex h-12 w-12 items-center justify-center border">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="group-hover:text-brand-navy mt-24 text-2xl font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-content-inverse/60 group-hover:text-content-muted mt-5 text-sm leading-7">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section
        id="delivery"
        className="bg-surface-page scroll-mt-24 py-20 lg:py-28"
      >
        <div className="mx-auto grid w-full max-w-360 gap-12 px-5 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24 lg:px-12">
          <div>
            <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
              {delivery.label}
            </p>

            <h2 className="text-brand-navy mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl">
              {delivery.title}
            </h2>

            <p className="text-content-muted mt-7 max-w-md text-base leading-7">
              {delivery.description}
            </p>
          </div>

          <div className="border-line-default border-t">
            {delivery.principles.map((principle) => (
              <article
                key={principle.number}
                className="group border-line-default grid gap-5 border-b py-8 sm:grid-cols-[52px_0.8fr_1.2fr_24px] sm:items-start"
              >
                <span className="text-brand-blue font-mono text-xs font-semibold">
                  {principle.number}
                </span>

                <h3 className="text-brand-navy text-lg font-semibold">
                  {principle.title}
                </h3>

                <p className="text-content-muted text-sm leading-7">
                  {principle.description}
                </p>

                <ArrowRight className="text-brand-blue hidden h-5 w-5 transition-transform group-hover:translate-x-1 sm:block" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement models */}
      <section
        id="engagement-models"
        className="bg-surface-muted scroll-mt-24 py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-360 px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
                {engagementModels.label}
              </p>

              <h2 className="text-brand-navy mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {engagementModels.title}
              </h2>
            </div>

            <p className="text-content-muted max-w-2xl text-lg leading-8">
              {engagementModels.description}
            </p>
          </div>

          <div className="border-line-default mt-14 grid border-t border-l md:grid-cols-2 xl:grid-cols-4">
            {engagementModels.items.map((item, index) => {
              const icons = [Sparkles, Building2, Bot, RefreshCw];
              const Icon = icons[index];

              return (
                <article
                  key={item.label}
                  className="group border-line-default bg-surface-page hover:bg-brand-navy min-h-95 border-r border-b p-7 transition-colors sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <span className="bg-brand-ice text-brand-blue group-hover:bg-content-inverse/10 group-hover:text-brand-sky flex h-12 w-12 items-center justify-center">
                      <Icon className="h-6 w-6" />
                    </span>

                    <ArrowRight className="text-brand-blue group-hover:text-content-inverse h-5 w-5 -rotate-45 transition-transform group-hover:rotate-0" />
                  </div>

                  <p className="text-brand-blue group-hover:text-brand-sky mt-20 text-xs font-bold tracking-[0.18em] uppercase">
                    {item.label}
                  </p>

                  <h3 className="text-brand-navy group-hover:text-content-inverse mt-4 text-2xl font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-content-muted group-hover:text-content-inverse/65 mt-5 text-sm leading-7">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="bg-brand-navy text-content-inverse relative min-h-170 overflow-hidden">
        <Image
          src={closingStatement.image}
          alt={closingStatement.imageAlt}
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="bg-brand-navy/55 absolute inset-0" />

        <div className="from-brand-navy-deep/95 via-brand-navy/80 absolute inset-0 bg-linear-to-r to-transparent" />

        <div className="relative mx-auto flex min-h-170 w-full max-w-360 items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-brand-sky text-xs font-bold tracking-[0.22em] uppercase">
              {closingStatement.label}
            </p>

            <h2 className="mt-6 text-5xl leading-[0.98] font-light tracking-tighter sm:text-6xl lg:text-7xl">
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

      {/* Contact */}
      <section className="bg-brand-blue text-content-inverse">
        <div className="mx-auto w-full max-w-360 px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-brand-ice text-xs font-bold tracking-[0.22em] uppercase">
                {contact.label}
              </p>

              <h2 className="mt-5 max-w-5xl text-5xl leading-[0.98] font-light tracking-tighter sm:text-6xl lg:text-7xl">
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
              href={`mailto:${brand.email}`}
              aria-label={`Email ${brand.name} ${brand.suffix}`}
              className="group border-line-inverse bg-surface-page text-brand-blue flex h-28 w-28 items-center justify-center rounded-full border transition-transform hover:scale-105 sm:h-36 sm:w-36"
            >
              <ArrowRight className="h-9 w-9 -rotate-45 transition-transform group-hover:rotate-0" />
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
