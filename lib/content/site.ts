export type NavigationItem = {
  label: string;
  href: string;
};

export type FooterGroup = {
  title: string;
  links: NavigationItem[];
};

export const siteContent = {
  siteUrl: "https://www.jethavictus.com",

  brand: {
    name: "JETHAVICTUS",
    suffix: "SOLUTIONS",
    initials: "JV",
    email: "info@jethavictus.com",
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
      label: "info@jethavictus.com",
      href: "mailto:info@jethavictus.com",
    },
  ] satisfies NavigationItem[],

  cta: {
    label: "Start a conversation",
    href: "/contact",
  },

  seo: {
    keywords: [
      "technology consulting",
      "AI consulting",
      "cloud architecture",
      "cybersecurity consulting",
      "ERP consulting",
      "data science consulting",
      "Jethavictus Solutions",
    ],

    pages: {
      home: {
        path: "/",
        title: "Jethavictus Solutions",
        description:
          "High-performance technology consulting across AI, cloud, cybersecurity, ERP, blockchain, IoT, and data science.",
        image: "/home-hero-bg.jpg",
      },
      about: {
        path: "/about",
        title: "About Jethavictus Solutions",
        description:
          "Learn how Jethavictus Solutions confronts enterprise technology complexity with strategic clarity, technical precision, and accountable delivery.",
        image: "/about-hero-bg.avif",
      },
      services: {
        path: "/services",
        title: "Technology Services",
        description:
          "Explore Jethavictus Solutions services across IT consulting, artificial intelligence, cloud architecture, cybersecurity, ERP, blockchain, IoT, and data science.",
        image: "/services-hero-bg.avif",
      },
      careers: {
        path: "/careers",
        title: "Careers",
        description:
          "Explore technology consulting careers at Jethavictus Solutions across cloud, artificial intelligence, cybersecurity, enterprise applications, and data engineering.",
        image: "/career-hero-bg.avif",
      },
      contact: {
        path: "/contact",
        title: "Contact",
        description:
          "Contact Jethavictus Solutions for enterprise technology consulting, partnerships, careers, and regional office information.",
        image: "/contact-hero-bg.avif",
      },
      privacy: {
        path: "/privacy",
        title: "Privacy Policy",
        description:
          "Read the Jethavictus Solutions website privacy policy, including how we collect, use, share, and protect website inquiry data.",
        image: "/industries-we-serve.avif",
      },
      terms: {
        path: "/terms",
        title: "Terms and Conditions",
        description:
          "Read the Jethavictus Solutions website terms and conditions for acceptable use, intellectual property, liability, and governing law.",
        image: "/industries-we-serve.avif",
      },
    },
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
          href: "mailto:info@jethavictus.com",
        },
        {
          label: "Email our team",
          href: "mailto:info@jethavictus.com",
        },
      ],
    },
  ] satisfies FooterGroup[],
} as const;
