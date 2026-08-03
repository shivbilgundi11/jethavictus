export type NavigationItem = {
  label: string;
  href: string;
};

export type ContactMethodIcon = "email" | "phone" | "business" | "careers";

export type ContactMethod = {
  icon: ContactMethodIcon;
  label: string;
  value: string;
  description: string;
  href: string;
  external?: boolean;
};

export type Office = {
  name: string;
  type: string;
  city: string;
  country: string;
  addressLines: string[];
  phone: string;
  phoneHref: string;
  email: string;
  hours: string[];
  mapUrl: string;
  image: string;
  imageAlt: string;
  isPrimary?: boolean;
};

export type FooterGroup = {
  title: string;
  links: NavigationItem[];
};

export const contactContent = {
  brand: {
    name: "JETHAVICTUS",
    suffix: "SOLUTIONS",
    initials: "JV",
    email: "info@jethavictus.com",
    website: "https://www.jethavictus.com",
    websiteLabel: "www.jethavictus.com",
    googleFormUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLScPcHjSpkkzD7hC95NJSDWoFe-jKU6TUgd9Nwpo6pxFSfQU-g/viewform?usp=publish-editor",
    tagline: "Engineered for victory. Built for the future.",
    description:
      "High-performance technology consulting for organizations that refuse to settle for average.",
  },

  header: {
    utilityNavigation: [
      {
        label: "Company",
        href: "/about#introduction",
      },
      {
        label: "Technology",
        href: "/services#services",
      },
      {
        label: "Careers",
        href: "/careers#open-positions",
      },
      {
        label: "Contact",
        href: "/contact#contact-details",
      },
    ] satisfies NavigationItem[],

    primaryNavigation: [
      {
        label: "Who we are",
        href: "/about#introduction",
      },
      {
        label: "Capabilities",
        href: "/services#services",
      },
      {
        label: "Careers",
        href: "/careers#open-positions",
      },
      {
        label: "Contact",
        href: "/contact#contact-details",
      },
    ] satisfies NavigationItem[],

    cta: {
      label: "Contact our team",
      href: "#contact-details",
    },
  },

  hero: {
    label: "Contact Jethavictus",
    title: "Bring us the challenge.",
    highlightedTitle: "We will engineer the path forward.",
    description:
      "Connect with our team to discuss technology strategy, enterprise transformation, implementation support, partnerships, or career opportunities.",

    primaryCta: {
      label: "Contact our team",
      href: "#contact-details",
    },

    secondaryCta: {
      label: "View office locations",
      href: "#offices",
    },

    image: "/contact-hero-bg.avif",
    imageAlt: "Modern corporate office and enterprise technology workspace",
  },

  introduction: {
    label: "Start a conversation",
    title: "Direct access to the right team.",
    description:
      "Whether you are evaluating a strategic initiative, looking for specialist delivery support, exploring a partnership, or interested in joining Jethavictus, contact the team most relevant to your request.",

    statement:
      "We keep communication direct. Send us the context, the challenge, and the outcome you are trying to achieve.",
  },

  contactMethods: [
    {
      icon: "email",
      label: "General inquiries",
      value: "info@jethavictus.com",
      description:
        "For general questions, company information, and initial introductions.",
      href: "mailto:info@jethavictus.com",
    },
    {
      icon: "business",
      label: "Business and consulting",
      value: "info@jethavictus.com",
      description:
        "For consulting engagements, technology programs, partnerships, and enterprise opportunities.",
      href: "mailto:info@jethavictus.com",
    },
    {
      icon: "careers",
      label: "Careers",
      value: "info@jethavictus.com",
      description:
        "For career-related questions and information about open opportunities.",
      href: "mailto:info@jethavictus.com",
    },
    {
      icon: "phone",
      label: "Main office",
      value: "+1 (000) 000-0000",
      description:
        "Available during standard business hours for direct inquiries.",
      href: "tel:+10000000000",
    },
  ] satisfies ContactMethod[],

  officeSection: {
    label: "Our offices",
    title: "Connected globally. Available locally.",
    description:
      "Jethavictus supports clients across regions through a network of consulting, engineering, and delivery offices.",
    emptyTitle: "No office address available for now.",
    emptyDescription:
      "Our office is getting ready and we will share the address here in the next few days.",

    offices: [
      // {
      //   name: "Corporate Headquarters",
      //   type: "Executive & Consulting Office",
      //   city: "City Name",
      //   country: "Country",
      //   addressLines: [
      //     "Building or Business Park",
      //     "Street Address, Floor or Suite",
      //     "City, State or Region, Postal Code",
      //   ],
      //   phone: "+1 (000) 000-0000",
      //   phoneHref: "tel:+10000000000",
      //   email: "info@jethavictus.com",
      //   hours: ["Monday–Friday", "9:00 AM–6:00 PM", "Local office time"],
      //   mapUrl: "https://maps.google.com/?q=REPLACE+WITH+HEADQUARTERS+ADDRESS",
      //   image:
      //     "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
      //   imageAlt: "Modern corporate headquarters office",
      //   isPrimary: true,
      // },
    ] satisfies Office[],
  },

  availability: {
    label: "Business hours",
    title: "Available across time zones.",
    description:
      "Our offices operate according to their local business hours. Enterprise clients with active support agreements should continue to use their assigned service and escalation channels.",

    details: [
      {
        label: "Standard inquiries",
        value: "Monday–Friday, 9:00 AM–6:00 PM",
      },
      {
        label: "Response target",
        value: "Within one business day",
      },
      {
        label: "Client support",
        value: "Based on your service agreement",
      },
      {
        label: "Office visits",
        value: "Appointments recommended",
      },
    ],
  },

  visitSection: {
    label: "Planning a visit?",
    title: "Meet with our team.",
    highlightedTitle: "Move the conversation forward.",
    description:
      "Office meetings are available by appointment. Contact the relevant office or your Jethavictus representative before visiting so we can connect you with the right team.",

    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=90",
    imageAlt:
      "Enterprise consultants meeting in a professional office environment",
  },

  finalContact: {
    label: "Not sure where to start?",
    title: "Send your request to",
    highlightedTitle: "our central team.",
    description:
      "We will review your inquiry and connect you with the appropriate consulting, technology, careers, or regional team.",
    ctaLabel: "Email Jethavictus",
  },

  footer: {
    groups: [
      {
        title: "Company",
        links: [
          {
            label: "Who we are",
            href: "/about",
          },
          {
            label: "Careers",
            href: "/careers",
          },
          {
            label: "Our principles",
            href: "/about#principles",
          },
          {
            label: "Contact",
            href: "/contact",
          },
        ],
      },
      {
        title: "Capabilities",
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
        title: "More capabilities",
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
            label: "All services",
            href: "/services",
          },
        ],
      },
      {
        title: "Connect",
        links: [
          {
            label: "Office locations",
            href: "#offices",
          },
          {
            label: "Business inquiries",
            href: "mailto:info@jethavictus.com",
          },
          {
            label: "Careers",
            href: "/careers",
          },
          {
            label: "Email our team",
            href: "mailto:info@jethavictus.com",
          },
        ],
      },
    ] satisfies FooterGroup[],
  },
} as const;
