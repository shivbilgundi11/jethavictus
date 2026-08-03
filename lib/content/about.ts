export type NavigationItem = {
  label: string;
  href: string;
};

export type IdentityPoint = {
  number: string;
  title: string;
  description: string;
};

export type Principle = {
  number: string;
  title: string;
  description: string;
};

export type OperatingStep = {
  number: string;
  title: string;
  description: string;
};

export type LeadershipStandard = {
  title: string;
  description: string;
};

export type FooterGroup = {
  title: string;
  links: NavigationItem[];
};

export const aboutContent = {
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
        label: "Contact",
        href: "/contact#contact-details",
      },
      {
        label: "info@jethavictus.com",
        href: "mailto:info@jethavictus.com",
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
        label: "Our approach",
        href: "/about#operating-model",
      },
      {
        label: "Industries",
        href: "/about#industries",
      },
    ] satisfies NavigationItem[],

    cta: {
      label: "Start a conversation",
      href: "/contact#contact-details",
    },
  },

  hero: {
    label: "About Jethavictus",
    title: "Built to confront",
    highlightedTitle: "complexity head-on.",
    description:
      "We are a high-performance technology consulting firm for organizations that need more than recommendations. They need decisive strategy, rigorous execution, and measurable results.",
    primaryCta: {
      label: "Explore our capabilities",
      href: "/services#services",
    },
    secondaryCta: {
      label: "Start a conversation",
      href: "/contact#contact-details",
    },
    image: "/about-hero-bg.avif",
    imageAlt:
      "Technology specialists collaborating in a modern enterprise environment",
  },

  introduction: {
    label: "Who we are",
    title: "We do not just consult.",
    highlightedTitle: "We conquer complexity.",

    paragraphs: [
      "Jethavictus is a high-performance technology consulting firm built for organizations that refuse to settle for average.",
      "We are strategic thinkers, systems architects, engineers, and digital specialists committed to transforming how businesses operate, compete, and grow.",
      "Our work begins where generic consulting ends. We enter complex environments, understand the realities behind the challenge, and engineer solutions designed to produce meaningful operational and commercial impact.",
    ],

    emphasizedText:
      "Technology should not be another cost center or collection of disconnected tools. It should be a force multiplier for the entire enterprise.",
  },

  identity: {
    label: "Our identity",
    title: "A name rooted in victory.",
    description:
      "The name Jethavictus reflects the standard we bring to every engagement. Each assignment is treated as a mission with clear objectives, disciplined execution, and an outcome we are determined to achieve.",

    image: "/about-identity.avif",
    imageAlt: "Enterprise technology team discussing strategy and execution",

    points: [
      {
        number: "01",
        title: "Strategic clarity",
        description:
          "We translate complex business and technology environments into clear priorities, informed decisions, and executable roadmaps.",
      },
      {
        number: "02",
        title: "Technical precision",
        description:
          "Our solutions are architected around the real requirements of your organization rather than generic frameworks or assumptions.",
      },
      {
        number: "03",
        title: "Operational ownership",
        description:
          "We remain accountable beyond the recommendation, supporting implementation, adoption, optimization, and continued evolution.",
      },
    ] satisfies IdentityPoint[],
  },

  missionVision: {
    mission: {
      label: "Our mission",
      title:
        "Empower enterprises with transformative technology strategies that drive operational excellence, competitive dominance, and long-term growth.",
      description:
        "We deliver every engagement with precision, accountability, and a direct connection to measurable business outcomes.",
    },

    vision: {
      label: "Our vision",
      title:
        "Become the market's most trusted and results-driven technology consulting force.",
      description:
        "We envision a firm where every client partnership concludes with stronger systems, better decisions, and measurable victory.",
    },
  },

  principles: {
    label: "What we believe",
    title: "Principles that guide every engagement.",
    description:
      "Our work is shaped by a small set of non-negotiable standards. They influence how we think, how we execute, and how we measure success.",

    items: [
      {
        number: "01",
        title: "Outcomes before activity",
        description:
          "Hours worked, documents produced, and meetings held are not measures of success. Business and operational results are.",
      },
      {
        number: "02",
        title: "Ownership without excuses",
        description:
          "We take responsibility from initial discovery through implementation, optimization, and long-term support.",
      },
      {
        number: "03",
        title: "Senior expertise where it matters",
        description:
          "Clients work with experienced consultants and technical specialists equipped to make important decisions.",
      },
      {
        number: "04",
        title: "Precision over convention",
        description:
          "We do not force every organization into the same model. Solutions are engineered around specific conditions and goals.",
      },
      {
        number: "05",
        title: "Velocity with discipline",
        description:
          "We move quickly while maintaining quality, security, governance, documentation, and long-term maintainability.",
      },
      {
        number: "06",
        title: "Clarity in every decision",
        description:
          "Complexity is never used to obscure accountability. We communicate directly and make tradeoffs visible.",
      },
    ] satisfies Principle[],
  },

  operatingModel: {
    label: "How we operate",
    title: "A disciplined path from uncertainty to impact.",
    description:
      "Every Jethavictus engagement follows a battle-tested delivery model designed to create alignment, accelerate execution, and maintain accountability.",

    steps: [
      {
        number: "01",
        title: "Discover",
        description:
          "We examine your business objectives, operating environment, technology landscape, constraints, and competitive position.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "We architect a tailored solution with clear priorities, governance, measures of success, and an executable roadmap.",
      },
      {
        number: "03",
        title: "Deploy",
        description:
          "We execute with senior-level rigor, agile delivery practices, transparent communication, and zero shortcuts.",
      },
      {
        number: "04",
        title: "Deliver",
        description:
          "We measure the result, optimize performance, transfer knowledge, and support the solution as the organization evolves.",
      },
    ] satisfies OperatingStep[],
  },

  leadershipStandard: {
    label: "The Jethavictus standard",
    title: "Experienced people. Clear accountability. Real results.",
    description:
      "Our clients engage Jethavictus when the challenge is too important for generic advice or inexperienced delivery teams.",

    image: "/about-standards.avif",
    imageAlt: "Experienced enterprise consulting team working together",

    items: [
      {
        title: "Senior-level engagement",
        description:
          "Experienced consultants remain directly involved in strategy, architecture, decision-making, and delivery.",
      },
      {
        title: "Cross-functional thinking",
        description:
          "We connect technology decisions with operations, risk, finance, customer experience, and long-term business strategy.",
      },
      {
        title: "Measured accountability",
        description:
          "Success criteria are established early, monitored throughout delivery, and evaluated against real outcomes.",
      },
    ] satisfies LeadershipStandard[],
  },

  industries: {
    label: "Industries we serve",
    title: "Technology expertise grounded in operational reality.",
    description:
      "Different industries face different regulatory, operational, security, and commercial pressures. Our recommendations account for those realities.",

    items: [
      "Financial Services & Banking",
      "Healthcare & Life Sciences",
      "Energy & Utilities",
      "Retail & E-Commerce",
      "Manufacturing & Supply Chain",
      "Technology & SaaS",
      "Government & Public Sector",
    ],
  },

  closingStatement: {
    label: "Our commitment",
    title: "We enter every engagement",
    highlightedTitle: "determined to win.",
    description:
      "From the first assessment to implementation and ongoing optimization, Jethavictus brings discipline, ownership, and a relentless focus on results.",
    image: "/our-commitment.avif",
    imageAlt: "Connected world representing global enterprise transformation",
  },

  contact: {
    label: "Ready to move forward?",
    title: "Bring us the challenge.",
    highlightedTitle: "We will engineer the outcome.",
    description:
      "Partner with a consulting team built to transform complexity into secure systems, operational advantage, and measurable growth.",
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
            label: "Our mission",
            href: "#mission",
          },
          {
            label: "Our principles",
            href: "#principles",
          },
          {
            label: "Contact",
            href: "/contact#contact-details",
          },
        ],
      },
      {
        title: "Capabilities",
        links: [
          {
            label: "IT consulting",
            href: "/#capabilities",
          },
          {
            label: "Artificial intelligence",
            href: "/#capabilities",
          },
          {
            label: "Cloud and AWS",
            href: "/#capabilities",
          },
          {
            label: "Cybersecurity",
            href: "/#capabilities",
          },
        ],
      },
      {
        title: "More capabilities",
        links: [
          {
            label: "Enterprise ERP",
            href: "/#capabilities",
          },
          {
            label: "Blockchain",
            href: "/#capabilities",
          },
          {
            label: "IoT",
            href: "/#capabilities",
          },
          {
            label: "Data science",
            href: "/#capabilities",
          },
        ],
      },
      {
        title: "Explore",
        links: [
          {
            label: "Our approach",
            href: "#operating-model",
          },
          {
            label: "Industries",
            href: "#industries",
          },
          {
            label: "Start a conversation",
            href: "/#contact",
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
