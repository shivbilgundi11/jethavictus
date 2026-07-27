export type NavigationItem = {
  label: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  links: NavigationItem[];
};

export const siteContent = {
  brand: {
    name: "JETHAVICTUS",
    suffix: "SOLUTIONS",
    initials: "JV",
    email: "hello@jethavictus.com",
    website: "https://www.jethavictus.com",
    websiteLabel: "www.jethavictus.com",
    tagline: "Engineered for victory. Built for the future.",
    description:
      "High-performance technology consulting for organizations that refuse to settle for average.",
  },

  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ] satisfies NavigationItem[],

  utilityNavigation: [
    {
      label: "Company",
      href: "/about",
    },
    {
      label: "Technology",
      href: "/services",
    },
    {
      label: "Careers",
      href: "/careers",
    },
    {
      label: "hello@jethavictus.com",
      href: "mailto:hello@jethavictus.com",
    },
  ] satisfies NavigationItem[],

  cta: {
    label: "Start a conversation",
    href: "/contact",
  },

  footerGroups: [
    {
      title: "Pages",
      links: [
        {
          label: "Home",
          href: "/",
        },
        {
          label: "About",
          href: "/about",
        },
        {
          label: "Services",
          href: "/services",
        },
        {
          label: "Careers",
          href: "/careers",
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
    },
    {
      title: "Services",
      links: [
        {
          label: "IT consulting",
          href: "/services#strategic-it-consulting",
        },
        {
          label: "Artificial intelligence",
          href: "/services#artificial-intelligence",
        },
        {
          label: "Cloud and AWS",
          href: "/services#cloud-architecture",
        },
        {
          label: "Cybersecurity",
          href: "/services#cybersecurity",
        },
      ],
    },
    {
      title: "More services",
      links: [
        {
          label: "Enterprise ERP",
          href: "/services#enterprise-erp",
        },
        {
          label: "Blockchain",
          href: "/services#blockchain",
        },
        {
          label: "IoT and data science",
          href: "/services#iot-data-science",
        },
        {
          label: "Delivery approach",
          href: "/services#delivery",
        },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          label: "Open positions",
          href: "/careers#open-positions",
        },
        {
          label: "Office locations",
          href: "/contact#offices",
        },
        {
          label: "Business inquiries",
          href: "mailto:business@jethavictus.com",
        },
        {
          label: "Email our team",
          href: "mailto:hello@jethavictus.com",
        },
      ],
    },
  ] satisfies FooterGroup[],
} as const;
