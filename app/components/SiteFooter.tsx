import Link from "next/link";

import { siteContent, type NavigationItem } from "@/lib/content/site";

function isExternal(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function FooterLink({ item }: { item: NavigationItem }) {
  const className =
    "text-content-inverse/60 hover:text-content-inverse text-sm transition-colors";

  if (isExternal(item.href)) {
    return (
      <a
        href={item.href}
        target={item.href.startsWith("http") ? "_blank" : undefined}
        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
        className={className}
      >
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

export function SiteFooter() {
  const { brand, footerGroups } = siteContent;

  return (
    <footer className="bg-brand-navy text-content-inverse">
      <div className="mx-auto w-full max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
        <div className="border-line-inverse/20 grid gap-12 border-b pb-14 lg:grid-cols-[1.15fr_2fr]">
          <div>
            <Link
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
            </Link>

            <p className="text-content-inverse/60 mt-7 max-w-sm text-sm leading-7">
              {brand.description}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-content-inverse text-xs font-bold tracking-[0.18em] uppercase">
                  {group.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <FooterLink item={link} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="text-content-inverse/45 flex flex-col gap-4 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {brand.name} {brand.suffix}. All
            rights reserved.
          </p>

          <p>{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
