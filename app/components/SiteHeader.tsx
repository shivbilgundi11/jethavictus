"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { siteContent, type NavigationItem } from "@/lib/content/site";

function isExternal(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

function isActive(pathname: string, href: string) {
  const path = href.split("#")[0];

  return path === "/" ? pathname === "/" : pathname === path;
}

function NavLink({
  item,
  className,
  onClick,
}: {
  item: NavigationItem;
  className: string;
  onClick?: () => void;
}) {
  if (isExternal(item.href)) {
    return (
      <a href={item.href} className={className} onClick={onClick}>
        {item.label}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {item.label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { brand, utilityNavigation, navigation, cta } = siteContent;

  return (
    <header className="bg-surface-page relative z-50">
      <div className="border-line-subtle bg-surface-soft hidden border-b lg:block">
        <div className="mx-auto flex h-9 w-full max-w-[1440px] items-center justify-end px-5 sm:px-8 lg:px-12">
          <nav
            aria-label="Utility navigation"
            className="text-content-muted flex items-center gap-7 text-[11px] font-semibold"
          >
            {utilityNavigation.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                className={`hover:text-brand-blue transition-colors ${
                  isActive(pathname, item.href) ? "text-brand-blue" : ""
                }`}
              />
            ))}
          </nav>
        </div>
      </div>

      <div className="mx-auto flex h-[74px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
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
        </Link>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 xl:flex"
        >
          {navigation.map((item) => (
            <NavLink
              key={item.label}
              item={item}
              className={`hover:text-brand-blue text-[13px] font-semibold transition-colors ${
                isActive(pathname, item.href)
                  ? "text-brand-blue"
                  : "text-content-secondary"
              }`}
            />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={cta.href}
            className="bg-brand-blue text-content-inverse hover:bg-brand-blue-dark hidden items-center gap-3 rounded-full px-5 py-3 text-xs font-bold transition-colors md:flex"
          >
            {cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="text-brand-navy hover:bg-surface-muted flex h-11 w-11 items-center justify-center rounded-full transition-colors xl:hidden"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-line-subtle bg-surface-page shadow-navigation absolute inset-x-0 top-full border-t xl:hidden">
          <nav className="mx-auto flex w-full max-w-[1440px] flex-col px-5 py-4 sm:px-8 lg:px-12">
            {navigation.map((item) => (
              <NavLink
                key={item.label}
                item={item}
                onClick={() => setMenuOpen(false)}
                className="border-line-subtle text-brand-navy flex items-center justify-between border-b py-5 text-lg font-semibold"
              />
            ))}

            <Link
              href={cta.href}
              onClick={() => setMenuOpen(false)}
              className="bg-brand-blue text-content-inverse mt-5 flex items-center justify-between rounded-full px-5 py-4 text-sm font-bold"
            >
              {cta.label}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
