export type NavigationItem = {
  label: string;
  href: string;
};

export type ServiceIconName =
  "strategy" | "ai" | "cloud" | "security" | "erp" | "blockchain" | "iot";

export type Service = {
  number: string;
  slug: string;
  icon: ServiceIconName;
  title: string;
  shortTitle: string;
  introduction: string;
  description: string;
  outcomes: string[];
  capabilities: string[];
  image: string;
  imageAlt: string;
};

export type DeliveryPrinciple = {
  number: string;
  title: string;
  description: string;
};

export type SharedCapability = {
  icon: "governance" | "integration" | "analytics" | "support";
  title: string;
  description: string;
};

export type FooterGroup = {
  title: string;
  links: NavigationItem[];
};

export const servicesContent = {
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
        href: "/services#delivery",
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
    label: "Our capabilities",
    title: "Technology strategy.",
    highlightedTitle: "Engineered through execution.",
    description:
      "Jethavictus brings together enterprise strategy, architecture, engineering, security, and data expertise to solve complex technology challenges from end to end.",

    primaryCta: {
      label: "Explore our services",
      href: "#services",
    },

    secondaryCta: {
      label: "Discuss your challenge",
      href: "/contact#contact-details",
    },

    image: "/services-hero-bg.avif",
    imageAlt:
      "Global digital infrastructure and connected enterprise technology",
  },

  introduction: {
    label: "One technology partner",
    title: "Integrated expertise for complex enterprise environments.",
    description:
      "Technology challenges rarely exist in isolation. Cloud architecture affects security. Data strategy affects artificial intelligence. Legacy platforms affect operational performance. Our services are designed to work together as one coordinated delivery capability.",

    statement:
      "We remain accountable from the first assessment and strategic decision through implementation, adoption, optimization, and ongoing support.",

    statistics: [
      {
        value: "07",
        label: "Core technology practices",
      },
      {
        value: "04",
        label: "Delivery stages",
      },
      {
        value: "01",
        label: "Accountable partner",
      },
    ],
  },

  services: [
    {
      number: "01",
      slug: "strategic-it-consulting",
      icon: "strategy",
      title: "Strategic IT Consulting",
      shortTitle: "IT Strategy",
      introduction:
        "Transform technology from a collection of systems into a coordinated business capability.",
      description:
        "Jethavictus provides enterprise-grade IT consulting that goes beyond surface-level advice. We conduct detailed assessments of your technology landscape, identify critical gaps and dependencies, and develop an actionable roadmap aligned with business priorities.",

      outcomes: [
        "A clear technology strategy connected to business objectives",
        "Reduced operational complexity and technical debt",
        "Improved investment prioritization and governance",
        "A practical roadmap for modernization and transformation",
      ],

      capabilities: [
        "IT infrastructure assessment and optimization",
        "Technology roadmap development",
        "Architecture governance and operating models",
        "System integration strategy",
        "Legacy modernization planning",
        "Digital transformation execution",
      ],

      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=85",
      imageAlt: "Enterprise consultants developing a technology strategy",
    },
    {
      number: "02",
      slug: "artificial-intelligence",
      icon: "ai",
      title: "Artificial Intelligence & Machine Learning",
      shortTitle: "AI & Machine Learning",
      introduction:
        "Move artificial intelligence from experimentation into secure, measurable enterprise deployment.",
      description:
        "We bring the full power of artificial intelligence and machine learning into enterprise operations. Our solutions automate intelligence-heavy processes, improve forecasting, surface hidden patterns, and enable faster decisions at scale.",

      outcomes: [
        "Automated workflows and reduced manual decision effort",
        "Faster access to predictive and operational insight",
        "Production-ready AI systems with appropriate governance",
        "Improved customer and employee experiences",
      ],

      capabilities: [
        "Enterprise AI strategy and architecture",
        "Machine learning model development",
        "ML pipeline design and deployment",
        "Natural language processing",
        "Intelligent document automation",
        "Predictive analytics and decision intelligence",
      ],

      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1800&q=85",
      imageAlt: "Advanced artificial intelligence technology visualization",
    },
    {
      number: "03",
      slug: "cloud-architecture",
      icon: "cloud",
      title: "Cloud Architecture & AWS Solutions",
      shortTitle: "Cloud & AWS",
      introduction:
        "Create a secure, resilient cloud foundation that supports faster delivery and continued growth.",
      description:
        "Jethavictus architects scalable cloud environments that reduce operating costs, improve resilience, and accelerate digital delivery. We design, migrate, and optimize workloads with security, governance, and performance built into the foundation.",

      outcomes: [
        "Improved scalability, availability, and resilience",
        "Lower and more transparent cloud operating costs",
        "Faster application delivery and deployment",
        "Consistent governance across cloud environments",
      ],

      capabilities: [
        "AWS cloud architecture and migration",
        "Cloud workload assessment",
        "Multi-cloud and hybrid-cloud strategy",
        "Cloud-native application development",
        "DevOps and delivery automation",
        "FinOps and cloud cost optimization",
      ],

      image:
        "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1800&q=85",
      imageAlt: "Cloud computing infrastructure and connected data systems",
    },
    {
      number: "04",
      slug: "cybersecurity",
      icon: "security",
      title: "Cybersecurity & Risk Management",
      shortTitle: "Cybersecurity",
      introduction:
        "Protect critical operations with security architecture designed around modern threats and business realities.",
      description:
        "Cybersecurity is an enterprise resilience issue, not only a technical function. Jethavictus designs comprehensive security programs that protect critical assets, support regulatory compliance, and prepare organizations to respond decisively when incidents occur.",

      outcomes: [
        "Reduced exposure across critical systems and data",
        "Improved security visibility and response readiness",
        "Clear alignment between risk and security investment",
        "Stronger regulatory and compliance posture",
      ],

      capabilities: [
        "Security architecture and zero-trust implementation",
        "Vulnerability assessment",
        "Penetration testing",
        "Threat modeling and risk analysis",
        "Compliance readiness and management",
        "Incident response and security operations",
      ],

      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1800&q=85",
      imageAlt: "Cybersecurity access control and digital identity protection",
    },
    {
      number: "05",
      slug: "enterprise-erp",
      icon: "erp",
      title: "Enterprise ERP Solutions",
      shortTitle: "Enterprise ERP",
      introduction:
        "Connect processes, people, and information through one integrated enterprise operating platform.",
      description:
        "We design and implement ERP environments that unify operations, eliminate disconnected data, and improve organization-wide visibility. Our ERP practice covers platform selection, implementation, integration, adoption, and managed support.",

      outcomes: [
        "More consistent and efficient business processes",
        "Improved enterprise data visibility",
        "Reduced duplication and operational fragmentation",
        "Greater adoption and long-term platform value",
      ],

      capabilities: [
        "ERP platform assessment and selection",
        "Platform configuration and customization",
        "Business process reengineering",
        "Workflow automation",
        "Data migration and integration",
        "Managed support and optimization",
      ],

      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1800&q=85",
      imageAlt: "Enterprise team planning integrated business operations",
    },
    {
      number: "06",
      slug: "blockchain",
      icon: "blockchain",
      title: "Blockchain & Emerging Technologies",
      shortTitle: "Blockchain",
      introduction:
        "Apply emerging technology where it creates practical trust, transparency, and operational advantage.",
      description:
        "Jethavictus evaluates and deploys blockchain solutions for use cases that benefit from immutable records, shared trust, and programmable transactions. We focus on enterprise value rather than technology for its own sake.",

      outcomes: [
        "Improved transparency across multi-party processes",
        "Reduced reconciliation and transaction complexity",
        "Automated execution through smart contracts",
        "A governed strategy for digital assets and tokenization",
      ],

      capabilities: [
        "Blockchain use-case assessment",
        "Smart contract design and development",
        "Smart contract security auditing",
        "Enterprise blockchain architecture",
        "Decentralized application development",
        "Tokenization and digital asset strategy",
      ],

      image:
        "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1800&q=85",
      imageAlt: "Blockchain technology and distributed network visualization",
    },
    {
      number: "07",
      slug: "iot-data-science",
      icon: "iot",
      title: "IoT & Data Science",
      shortTitle: "IoT & Data Science",
      introduction:
        "Connect physical operations with real-time data, advanced analytics, and intelligent decision systems.",
      description:
        "We create connected IoT ecosystems and data platforms that turn operational signals into actionable intelligence. Our teams work across device integration, edge computing, data engineering, analytics, and advanced modeling.",

      outcomes: [
        "Real-time visibility into physical operations",
        "Faster detection of anomalies and performance issues",
        "Improved forecasting and resource planning",
        "Trusted enterprise data available for decision-making",
      ],

      capabilities: [
        "IoT platform and device architecture",
        "Edge computing and device integration",
        "Real-time data streaming",
        "Operational analytics and dashboards",
        "Forecasting and anomaly detection",
        "Data warehousing and governance",
      ],

      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1800&q=85",
      imageAlt: "Connected enterprise devices and data analytics technology",
    },
  ] satisfies Service[],

  sharedCapabilities: {
    label: "Built into every engagement",
    title: "Capabilities that connect strategy with sustained results.",
    description:
      "Our core technology practices are supported by shared disciplines that help every solution remain governed, integrated, measurable, and maintainable.",

    items: [
      {
        icon: "governance",
        title: "Architecture & governance",
        description:
          "Clear standards, decision rights, documentation, and controls that keep technology aligned as the organization evolves.",
      },
      {
        icon: "integration",
        title: "Systems integration",
        description:
          "Reliable connections between applications, platforms, partners, data sources, and operational workflows.",
      },
      {
        icon: "analytics",
        title: "Measurement & analytics",
        description:
          "Success criteria, operational metrics, and reporting that demonstrate performance and guide continued improvement.",
      },
      {
        icon: "support",
        title: "Optimization & support",
        description:
          "Ongoing monitoring, improvement, knowledge transfer, and support after initial implementation.",
      },
    ] satisfies SharedCapability[],
  },

  delivery: {
    label: "Our delivery standard",
    title: "How we turn complex requirements into working systems.",
    description:
      "Every service engagement follows a disciplined delivery model that creates clarity early, maintains senior accountability, and measures impact after deployment.",

    principles: [
      {
        number: "01",
        title: "Business-led discovery",
        description:
          "We begin with business objectives, operational realities, risks, and measurable outcomes—not a predetermined technology answer.",
      },
      {
        number: "02",
        title: "Precision architecture",
        description:
          "Solutions are designed around your environment, constraints, security requirements, and long-term operating model.",
      },
      {
        number: "03",
        title: "Senior-led implementation",
        description:
          "Experienced consultants and technical leaders remain directly involved throughout execution and critical decision-making.",
      },
      {
        number: "04",
        title: "Measured delivery",
        description:
          "We track adoption, performance, operational improvement, and business results against clearly defined success criteria.",
      },
    ] satisfies DeliveryPrinciple[],
  },

  engagementModels: {
    label: "Ways to engage",
    title: "Flexible engagement models. One standard of accountability.",
    description:
      "The structure can change based on the challenge, but our commitment to senior expertise, clear ownership, and measurable outcomes does not.",

    items: [
      {
        label: "Advisory",
        title: "Strategy and assessment",
        description:
          "Focused assessments, architecture reviews, roadmaps, risk analysis, and executive decision support.",
      },
      {
        label: "Delivery",
        title: "Implementation programs",
        description:
          "End-to-end design, engineering, migration, integration, deployment, and organizational adoption.",
      },
      {
        label: "Embedded",
        title: "Specialist augmentation",
        description:
          "Senior specialists embedded within your teams to accelerate critical initiatives and strengthen internal capability.",
      },
      {
        label: "Managed",
        title: "Optimization and support",
        description:
          "Ongoing platform support, governance, performance optimization, monitoring, and continued improvement.",
      },
    ],
  },

  closingStatement: {
    label: "Technology without fragmentation",
    title: "One strategy.",
    highlightedTitle: "One accountable delivery force.",
    description:
      "Whether the challenge begins with cloud, security, data, artificial intelligence, enterprise systems, or transformation strategy, Jethavictus connects every decision to the larger enterprise outcome.",

    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=90",
    imageAlt:
      "Advanced enterprise technology infrastructure and digital systems",
  },

  contact: {
    label: "Bring us the challenge",
    title: "Ready to transform",
    highlightedTitle: "complexity into advantage?",
    description:
      "Tell us where technology is slowing your organization down, creating risk, or limiting growth. We will help define and execute the path forward.",
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
            href: "/about#mission",
          },
          {
            label: "Our principles",
            href: "/about#principles",
          },
          {
            label: "Contact",
            href: "/#contact",
          },
        ],
      },
      {
        title: "Capabilities",
        links: [
          {
            label: "IT consulting",
            href: "#strategic-it-consulting",
          },
          {
            label: "Artificial intelligence",
            href: "#artificial-intelligence",
          },
          {
            label: "Cloud and AWS",
            href: "#cloud-architecture",
          },
          {
            label: "Cybersecurity",
            href: "#cybersecurity",
          },
        ],
      },
      {
        title: "More capabilities",
        links: [
          {
            label: "Enterprise ERP",
            href: "#enterprise-erp",
          },
          {
            label: "Blockchain",
            href: "#blockchain",
          },
          {
            label: "IoT and data science",
            href: "#iot-data-science",
          },
          {
            label: "Engagement models",
            href: "#engagement-models",
          },
        ],
      },
      {
        title: "Explore",
        links: [
          {
            label: "Delivery approach",
            href: "#delivery",
          },
          {
            label: "Industries",
            href: "/#industries",
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
