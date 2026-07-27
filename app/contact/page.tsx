import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  ArrowDown,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Clock3,
  ExternalLink,
  Globe2,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Users,
} from "lucide-react";
import {
  contactContent,
  type ContactMethod,
  type ContactMethodIcon,
} from "@/lib/content/contact";
import { getPageMetadata } from "@/lib/seo";

export const metadata: Metadata = getPageMetadata("contact");

const contactMethodIcons: Record<ContactMethodIcon, LucideIcon> = {
  email: Mail,
  phone: Phone,
  business: BriefcaseBusiness,
  careers: Users,
};

export default function ContactPage() {
  const {
    brand,
    hero,
    introduction,
    contactMethods,
    officeSection,
    availability,
    visitSection,
    finalContact,
  } = contactContent;

  return (
    <main className="bg-surface-page text-content-primary selection:bg-brand-blue selection:text-content-inverse overflow-hidden antialiased">
      {/* Hero */}
      <section className="bg-brand-navy relative min-h-[620px] overflow-hidden sm:min-h-[680px] lg:min-h-[740px]">
        <Image
          src={hero.image}
          alt={hero.imageAlt}
          fill
          sizes="100vw"
          preload
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="bg-brand-navy/30 absolute inset-0" />

        <div className="from-brand-navy-deep/95 via-brand-navy/78 to-brand-navy/10 absolute inset-0 bg-gradient-to-r" />

        <div className="from-brand-navy/70 absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t to-transparent" />

        <div className="relative mx-auto flex min-h-[620px] w-full max-w-[1440px] items-center px-5 py-20 sm:min-h-[680px] sm:px-8 lg:min-h-[740px] lg:px-12">
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
          href="#contact-details"
          aria-label="Continue to contact details"
          className="bg-surface-page text-brand-navy hover:bg-brand-blue hover:text-content-inverse absolute right-0 bottom-0 hidden h-20 w-20 items-center justify-center transition-colors md:flex"
        >
          <ArrowDown className="h-7 w-7" />
        </a>
      </section>

      {/* Introduction */}
      <section
        id="contact-details"
        className="bg-surface-page scroll-mt-24 py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
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

          <div className="border-line-default mt-16 grid border-t border-l md:grid-cols-2 xl:grid-cols-4">
            {contactMethods.map((method: ContactMethod) => {
              const Icon = contactMethodIcons[method.icon];

              return (
                <article
                  key={method.label}
                  className="group border-line-default bg-surface-page hover:bg-brand-navy flex min-h-[360px] flex-col border-r border-b p-7 transition-colors sm:p-9"
                >
                  <div className="bg-brand-ice text-brand-blue group-hover:bg-content-inverse/10 group-hover:text-brand-sky flex h-12 w-12 items-center justify-center">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="text-brand-blue group-hover:text-brand-sky mt-20 text-xs font-bold tracking-[0.18em] uppercase">
                    {method.label}
                  </p>

                  <a
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={method.external ? "noreferrer" : undefined}
                    className="text-brand-navy group-hover:text-content-inverse mt-4 text-xl leading-snug font-medium break-words"
                  >
                    {method.value}
                  </a>

                  <p className="text-content-muted group-hover:text-content-inverse/65 mt-5 text-sm leading-7">
                    {method.description}
                  </p>

                  <a
                    href={method.href}
                    className="text-brand-blue group-hover:text-brand-sky mt-auto flex items-center gap-3 pt-8 text-sm font-bold"
                  >
                    Contact this team
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offices heading */}
      <section
        id="offices"
        className="bg-surface-muted scroll-mt-24 py-20 lg:py-28"
      >
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="border-line-default grid gap-10 border-b pb-10 lg:grid-cols-[1fr_0.72fr] lg:items-end">
            <div>
              <p className="text-brand-blue text-xs font-bold tracking-[0.2em] uppercase">
                {officeSection.label}
              </p>

              <h2 className="text-brand-navy mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {officeSection.title}
              </h2>
            </div>

            <p className="text-content-muted max-w-xl text-base leading-7 lg:justify-self-end">
              {officeSection.description}
            </p>
          </div>

          <div className="mt-10 grid gap-x-7 gap-y-12 lg:grid-cols-2">
            {officeSection.offices.map((office) => (
              <article
                key={office.name}
                className="group border-line-default bg-surface-page border"
              >
                <div className="bg-surface-muted relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={office.image}
                    alt={office.imageAlt}
                    fill
                    sizes="100vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />

                  <div className="from-brand-navy/70 absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t to-transparent" />

                  {office.isPrimary && (
                    <span className="bg-brand-blue text-content-inverse absolute top-0 left-0 px-4 py-3 text-xs font-bold tracking-[0.14em] uppercase">
                      Primary office
                    </span>
                  )}

                  <div className="text-content-inverse absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <p className="text-brand-sky text-xs font-bold tracking-[0.16em] uppercase">
                      {office.type}
                    </p>

                    <h3 className="mt-2 text-3xl font-medium tracking-[-0.035em]">
                      {office.name}
                    </h3>
                  </div>
                </div>

                <div className="grid gap-8 p-6 sm:p-8 md:grid-cols-2">
                  <div>
                    <div className="flex items-start gap-3">
                      <MapPin className="text-brand-blue mt-1 h-5 w-5 shrink-0" />

                      <div>
                        <p className="text-brand-navy font-semibold">
                          {office.city}, {office.country}
                        </p>

                        <address className="text-content-muted mt-3 text-sm leading-7 not-italic">
                          {office.addressLines.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </address>
                      </div>
                    </div>

                    <a
                      href={office.mapUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link text-brand-blue mt-6 inline-flex items-center gap-3 text-sm font-bold"
                    >
                      View on Google Maps
                      <ExternalLink className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                    </a>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <Phone className="text-brand-blue mt-1 h-5 w-5 shrink-0" />

                      <div>
                        <p className="text-content-muted text-xs font-bold tracking-[0.14em] uppercase">
                          Phone
                        </p>

                        <a
                          href={office.phoneHref}
                          className="text-brand-navy hover:text-brand-blue mt-2 block text-sm font-medium"
                        >
                          {office.phone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="text-brand-blue mt-1 h-5 w-5 shrink-0" />

                      <div>
                        <p className="text-content-muted text-xs font-bold tracking-[0.14em] uppercase">
                          Email
                        </p>

                        <a
                          href={`mailto:${office.email}`}
                          className="text-brand-navy hover:text-brand-blue mt-2 block text-sm font-medium break-all"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock3 className="text-brand-blue mt-1 h-5 w-5 shrink-0" />

                      <div>
                        <p className="text-content-muted text-xs font-bold tracking-[0.14em] uppercase">
                          Office hours
                        </p>

                        <div className="text-content-muted mt-2 text-sm leading-6">
                          {office.hours.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className="bg-brand-navy text-content-inverse py-20 lg:py-28">
        <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div>
              <p className="text-brand-sky text-xs font-bold tracking-[0.2em] uppercase">
                {availability.label}
              </p>

              <h2 className="mt-5 text-4xl leading-tight font-light tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                {availability.title}
              </h2>
            </div>

            <p className="text-content-inverse/65 max-w-2xl text-lg leading-8">
              {availability.description}
            </p>
          </div>

          <div className="border-line-inverse/20 mt-14 grid border-t border-l md:grid-cols-2 xl:grid-cols-4">
            {availability.details.map((detail, index) => {
              const icons = [Clock3, Mail, Navigation, Building2];
              const Icon = icons[index];

              return (
                <article
                  key={detail.label}
                  className="group border-line-inverse/20 hover:bg-surface-page min-h-[300px] border-r border-b p-7 transition-colors sm:p-9"
                >
                  <div className="border-line-inverse/30 text-brand-sky group-hover:border-brand-blue group-hover:bg-brand-ice group-hover:text-brand-blue flex h-12 w-12 items-center justify-center border">
                    <Icon className="h-6 w-6" />
                  </div>

                  <p className="text-brand-sky group-hover:text-brand-blue mt-20 text-xs font-bold tracking-[0.18em] uppercase">
                    {detail.label}
                  </p>

                  <p className="text-content-inverse group-hover:text-brand-navy mt-4 text-xl leading-snug font-medium">
                    {detail.value}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Visit section */}
      <section className="bg-brand-navy text-content-inverse relative min-h-[680px] overflow-hidden">
        <Image
          src={visitSection.image}
          alt={visitSection.imageAlt}
          fill
          sizes="100vw"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="bg-brand-navy/45 absolute inset-0" />

        <div className="from-brand-navy-deep/95 via-brand-navy/80 absolute inset-0 bg-gradient-to-r to-transparent" />

        <div className="relative mx-auto flex min-h-[680px] w-full max-w-[1440px] items-center px-5 py-20 sm:px-8 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-brand-sky text-xs font-bold tracking-[0.22em] uppercase">
              {visitSection.label}
            </p>

            <h2 className="mt-6 text-5xl leading-[0.98] font-light tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              {visitSection.title}

              <span className="block font-semibold">
                {visitSection.highlightedTitle}
              </span>
            </h2>

            <p className="text-content-inverse/75 mt-8 max-w-2xl text-lg leading-8">
              {visitSection.description}
            </p>

            <a
              href={`mailto:${brand.email}?subject=Office meeting request`}
              className="group bg-surface-page text-brand-navy hover:bg-surface-muted mt-9 inline-flex items-center justify-between gap-10 px-6 py-4 text-sm font-bold transition-colors"
            >
              Request an office meeting
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Final contact */}
      <section className="bg-brand-blue text-content-inverse">
        <div className="mx-auto w-full max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-brand-ice text-xs font-bold tracking-[0.22em] uppercase">
                {finalContact.label}
              </p>

              <h2 className="mt-5 max-w-5xl text-5xl leading-[0.98] font-light tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                {finalContact.title}

                <span className="block font-semibold">
                  {finalContact.highlightedTitle}
                </span>
              </h2>

              <p className="text-content-inverse/75 mt-7 max-w-2xl text-lg leading-8">
                {finalContact.description}
              </p>
            </div>

            <a
              href={`mailto:${brand.email}`}
              aria-label={`Email ${brand.name} ${brand.suffix}`}
              className="group border-line-inverse bg-surface-page text-brand-blue flex h-32 w-32 flex-col items-center justify-center gap-3 rounded-full border text-center transition-transform hover:scale-105 sm:h-40 sm:w-40"
            >
              <Mail className="h-7 w-7" />

              <span className="max-w-24 text-xs leading-5 font-bold">
                {finalContact.ctaLabel}
              </span>
            </a>
          </div>

          <div className="border-line-inverse/30 mt-16 grid gap-6 border-t pt-8 sm:grid-cols-2 lg:grid-cols-3">
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-3 text-lg font-semibold transition-opacity hover:opacity-70"
            >
              <Mail className="h-5 w-5" />
              {brand.email}
            </a>

            <a
              href={brand.website}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-lg font-semibold transition-opacity hover:opacity-70"
            >
              <Globe2 className="h-5 w-5" />
              {brand.websiteLabel}
            </a>

            <a
              href="#offices"
              className="flex items-center gap-3 text-lg font-semibold transition-opacity hover:opacity-70"
            >
              <MapPin className="h-5 w-5" />
              View all offices
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
