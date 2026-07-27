export type NavigationItem = {
  label: string;
  href: string;
};

export type Priority = {
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  linkLabel: string;
};

export type Service = {
  number: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  href: string;
  linkLabel: string;
};

export type Differentiator = {
  number: string;
  title: string;
  description: string;
};

export type ApproachStep = {
  number: string;
  title: string;
  description: string;
};

export type FooterGroup = {
  title: string;
  links: NavigationItem[];
};

export const homeContent = {
  brand: {
    name: "JETHAVICTUS",
    suffix: "SOLUTIONS",
    email: "hello@jethavictus.com",
    website: "https://www.jethavictus.com",
    websiteLabel: "www.jethavictus.com",
    tagline: "Engineered for victory. Built for the future.",
    shortDescription:
      "High-performance technology consulting for organizations that refuse to settle for average.",
  },

  header: {
    utilityNavigation: [
      {
        label: "Company",
        href: "#about",
      },
      {
        label: "Technology",
        href: "#capabilities",
      },
      {
        label: "Contact",
        href: "#contact",
      },
      {
        label: "hello@jethavictus.com",
        href: "mailto:hello@jethavictus.com",
      },
    ] satisfies NavigationItem[],

    primaryNavigation: [
      {
        label: "Who we are",
        href: "#about",
      },
      {
        label: "Capabilities",
        href: "#capabilities",
      },
      {
        label: "Our approach",
        href: "#approach",
      },
      {
        label: "Industries",
        href: "#industries",
      },
    ] satisfies NavigationItem[],

    cta: {
      label: "Start a conversation",
      href: "#contact",
    },
  },

  hero: {
    label: "Jethavictus Solutions",
    title: "Engineered for victory.",
    highlightedTitle: "Built for the future.",
    description:
      "We transform complex enterprise technology challenges into secure, scalable systems and measurable business advantage.",
    primaryCta: {
      label: "Explore our capabilities",
      href: "#capabilities",
    },
    secondaryCta: {
      label: "Discover Jethavictus",
      href: "#about",
    },
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=90",
    imageAlt: "Modern enterprise data center infrastructure",
  },

  prioritiesSection: {
    label: "What matters now",
    title: "Technology for today's defining challenges",
    description:
      "Focused capabilities for organizations navigating transformation, disruption, and increasing operational complexity.",

    items: [
      {
        category: "Artificial intelligence",
        title: "Turn enterprise intelligence into decisive action",
        description:
          "Deploy practical AI systems that automate complex work, improve forecasting, and create faster decision cycles.",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Artificial intelligence technology visualization",
        href: "#capabilities",
        linkLabel: "Learn more",
      },
      {
        category: "Cloud modernization",
        title: "Build the digital foundation for what comes next",
        description:
          "Modernize infrastructure with resilient cloud environments designed for security, scale, and operational efficiency.",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Connected digital infrastructure around the world",
        href: "#capabilities",
        linkLabel: "Learn more",
      },
      {
        category: "Cyber resilience",
        title: "Protect critical operations in an evolving threat landscape",
        description:
          "Strengthen your organization with zero-trust architecture, proactive risk management, and prepared response capabilities.",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=85",
        imageAlt: "Digital cybersecurity and identity protection",
        href: "#capabilities",
        linkLabel: "Learn more",
      },
    ] satisfies Priority[],
  },

  aboutSection: {
    label: "Who we are",
    title: "We don't just consult.",
    highlightedTitle: "We conquer complexity.",

    paragraphs: [
      "Jethavictus is a high-performance technology consulting firm built for organizations that refuse to settle for average.",
      "We are strategic thinkers, systems architects, and digital specialists relentlessly committed to transforming the way businesses operate, compete, and grow.",
      "Founded on the principle that technology should be a force multiplier, Jethavictus partners with enterprises to deliver bold, scalable, and measurable outcomes.",
    ],

    emphasizedParagraph:
      "We do not offer generic blueprints. We craft precision-engineered solutions that address your most complex technology challenges head-on.",

    feature: {
      label: "Our belief",
      title: "Every engagement is a mission we are determined to win.",
      description:
        "The name Jethavictus—rooted in victory—reflects the standard we bring to every partnership: disciplined thinking, accountable execution, and measurable results.",
      cta: {
        label: "See how we work",
        href: "#approach",
      },
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=85",
      imageAlt: "Technology consultants collaborating around a table",
    },
  },

  capabilitiesSection: {
    label: "Core services",
    title:
      "Enterprise technology capabilities from strategy through execution.",
    description:
      "Senior-level specialists take ownership across the complete technology lifecycle—from discovery and architecture to deployment, optimization, and ongoing support.",

    services: [
      {
        number: "01",
        title: "Strategic IT Consulting",
        description:
          "Enterprise-grade consulting that goes beyond surface-level advice. We assess your technology landscape, identify critical gaps, and engineer a roadmap aligned with your business objectives.",
        bullets: [
          "IT infrastructure assessment and optimization",
          "Technology roadmap development and governance",
          "System integration and legacy modernization",
          "Digital transformation strategy and execution",
        ],
        image:
          "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "Enterprise technology consultants in a strategy meeting",
        href: "#contact",
        linkLabel: "Discuss this capability",
      },
      {
        number: "02",
        title: "Artificial Intelligence & Machine Learning",
        description:
          "Enterprise AI solutions that automate intelligence-heavy processes, unlock predictive insights, and enable faster, smarter decisions at scale.",
        bullets: [
          "AI strategy, architecture, and model development",
          "Machine learning pipeline design and deployment",
          "Natural language processing and automation",
          "Predictive analytics and decision intelligence",
        ],
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "Advanced computer processor and machine learning hardware",
        href: "#contact",
        linkLabel: "Discuss this capability",
      },
      {
        number: "03",
        title: "Cloud Architecture & AWS Solutions",
        description:
          "Scalable cloud environments engineered to reduce costs, improve resilience, and accelerate your digital velocity without compromising security.",
        bullets: [
          "AWS cloud architecture, migration, and optimization",
          "Multi-cloud and hybrid-cloud strategy",
          "Cloud-native application development and DevOps",
          "Cost optimization and cloud governance",
        ],
        image:
          "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "Cloud computing and connected data center infrastructure",
        href: "#contact",
        linkLabel: "Discuss this capability",
      },
      {
        number: "04",
        title: "Cybersecurity & Risk Management",
        description:
          "Comprehensive security programs that protect critical assets, support regulatory compliance, and strengthen organizational resilience.",
        bullets: [
          "Security architecture and zero-trust implementation",
          "Penetration testing and threat modeling",
          "SOC 2, HIPAA, PCI-DSS, and ISO 27001 compliance",
          "Incident response and security operations",
        ],
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "Secure digital access and cybersecurity technology",
        href: "#contact",
        linkLabel: "Discuss this capability",
      },
      {
        number: "05",
        title: "Enterprise ERP Solutions",
        description:
          "Integrated ERP systems that unify operations, eliminate data silos, and provide organization-wide visibility.",
        bullets: [
          "ERP selection, configuration, and customization",
          "Business process reengineering",
          "Data migration and quality management",
          "Ongoing optimization and user training",
        ],
        image:
          "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "Enterprise team planning an integrated business system",
        href: "#contact",
        linkLabel: "Discuss this capability",
      },
      {
        number: "06",
        title: "Blockchain & Emerging Technologies",
        description:
          "Blockchain solutions that create immutable trust, transparency, and automation across transactions, supply chains, and identity systems.",
        bullets: [
          "Smart contract development and auditing",
          "Enterprise blockchain architecture",
          "Decentralized application development",
          "Tokenization and digital asset strategy",
        ],
        image:
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "Blockchain network and distributed digital technology",
        href: "#contact",
        linkLabel: "Discuss this capability",
      },
      {
        number: "07",
        title: "IoT & Data Science",
        description:
          "Intelligent IoT ecosystems and advanced data capabilities that generate real-time operational intelligence and uncover new opportunities.",
        bullets: [
          "IoT platforms, device integration, and edge computing",
          "Real-time data streaming and analytics",
          "Forecasting, clustering, and anomaly detection",
          "Data engineering, warehousing, and governance",
        ],
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85",
        imageAlt: "Connected devices and enterprise data technology",
        href: "#contact",
        linkLabel: "Discuss this capability",
      },
    ] satisfies Service[],
  },

  missionVisionSection: {
    mission: {
      label: "Our mission",
      title:
        "Empower enterprises with transformative technology strategies that create operational excellence and long-term growth.",
      description:
        "Every strategy is delivered with precision, accountability, and a clear connection to measurable business outcomes.",
    },

    vision: {
      label: "Our vision",
      title:
        "Become the market's most trusted and results-driven technology consulting force.",
      description:
        "A partner defined by one standard: every client engagement should end in measurable victory.",
    },
  },

  differentiatorsSection: {
    label: "What sets us apart",
    title: "Built for complex, high-stakes environments.",
    description:
      "Our clients choose Jethavictus when generic recommendations are not enough and ownership matters.",

    items: [
      {
        number: "01",
        title: "Enterprise-grade expertise",
        description:
          "Deep capabilities across artificial intelligence, cloud, cybersecurity, ERP, IoT, blockchain, and data science.",
      },
      {
        number: "02",
        title: "Battle-tested delivery",
        description:
          "Disciplined methodologies built for complex, high-stakes environments where shortcuts are not acceptable.",
      },
      {
        number: "03",
        title: "Senior-level consultants",
        description:
          "Experienced specialists with deep technical and industry knowledge—not junior generalists learning on your project.",
      },
      {
        number: "04",
        title: "Outcome-focused execution",
        description:
          "Success is measured by operational impact, competitive advantage, and business results—not hours billed.",
      },
      {
        number: "05",
        title: "End-to-end ownership",
        description:
          "We remain accountable from strategy and architecture through implementation, optimization, and ongoing support.",
      },
      {
        number: "06",
        title: "Agile without compromise",
        description:
          "Delivery frameworks designed to move quickly while maintaining security, quality, governance, and precision.",
      },
    ] satisfies Differentiator[],
  },

  approachSection: {
    label: "Our approach",
    title: "A disciplined delivery model designed for measurable results.",
    description:
      "Every engagement moves through four clearly defined stages, with accountability and outcome measurement built into the process.",

    steps: [
      {
        number: "01",
        title: "Discover",
        description:
          "We examine your business, technology, operations, constraints, and competitive landscape.",
      },
      {
        number: "02",
        title: "Design",
        description:
          "We architect a precision solution aligned with your goals, environment, and measurable success criteria.",
      },
      {
        number: "03",
        title: "Deploy",
        description:
          "We execute with senior-level rigor, agile velocity, clear governance, and zero shortcuts.",
      },
      {
        number: "04",
        title: "Deliver",
        description:
          "We measure outcomes, optimize continuously, transfer knowledge, and own the results.",
      },
    ] satisfies ApproachStep[],
  },

  industriesSection: {
    label: "Industries we serve",
    title: "Expertise across critical sectors.",

    featureLabel: "Industry understanding",
    featureText:
      "Technology decisions are only effective when they reflect the realities of your industry.",
    featureImage:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=85",
    featureImageAlt: "Modern enterprise workplace",

    industries: [
      "Financial Services & Banking",
      "Healthcare & Life Sciences",
      "Energy & Utilities",
      "Retail & E-Commerce",
      "Manufacturing & Supply Chain",
      "Technology & SaaS",
      "Government & Public Sector",
    ],
  },

  commitmentSection: {
    label: "Our commitment",
    title: "Strategy through implementation.",
    highlightedTitle: "One accountable partner.",
    description:
      "Jethavictus takes end-to-end ownership—from understanding the challenge and defining the roadmap to deploying the solution, measuring its impact, and supporting its continued evolution.",
    cta: {
      label: "Work with Jethavictus",
      href: "#contact",
    },
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=90",
    imageAlt: "Connected world representing global enterprise technology",
  },

  contactSection: {
    label: "Ready to win?",
    title: "Let's build something",
    highlightedTitle: "unstoppable together.",
    description:
      "Bring us your most complex technology challenge. We will bring the strategy, architecture, and execution required to move it forward.",
  },

  footer: {
    groups: [
      {
        title: "Company",
        links: [
          {
            label: "Who we are",
            href: "#about",
          },
          {
            label: "Mission and vision",
            href: "#about",
          },
          {
            label: "What sets us apart",
            href: "#differentiators",
          },
          {
            label: "Contact",
            href: "#contact",
          },
        ],
      },
      {
        title: "Capabilities",
        links: [
          {
            label: "IT consulting",
            href: "#capabilities",
          },
          {
            label: "Artificial intelligence",
            href: "#capabilities",
          },
          {
            label: "Cloud and AWS",
            href: "#capabilities",
          },
          {
            label: "Cybersecurity",
            href: "#capabilities",
          },
        ],
      },
      {
        title: "More capabilities",
        links: [
          {
            label: "Enterprise ERP",
            href: "#capabilities",
          },
          {
            label: "Blockchain",
            href: "#capabilities",
          },
          {
            label: "IoT",
            href: "#capabilities",
          },
          {
            label: "Data science",
            href: "#capabilities",
          },
        ],
      },
      {
        title: "Explore",
        links: [
          {
            label: "Our approach",
            href: "#approach",
          },
          {
            label: "Industries",
            href: "#industries",
          },
          {
            label: "Start a conversation",
            href: "#contact",
          },
          {
            label: "Email our team",
            href: "mailto:hello@jethavictus.com",
          },
        ],
      },
    ] satisfies FooterGroup[],
  },
} as const;
