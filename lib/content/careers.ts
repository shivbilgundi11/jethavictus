export type NavigationItem = {
  label: string;
  href: string;
};

export type CareerIconName = "cloud" | "ai" | "security" | "erp" | "data";

export type JobPosting = {
  slug: string;
  icon: CareerIconName;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  preferredQualifications: string[];
};

export type ValueItem = {
  number: string;
  title: string;
  description: string;
};

export type BenefitItem = {
  icon: "growth" | "impact" | "flexibility" | "expertise";
  title: string;
  description: string;
};

export type HiringStep = {
  number: string;
  title: string;
  description: string;
};

export type FooterGroup = {
  title: string;
  links: NavigationItem[];
};

export const careersContent = {
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

  applicationFormUrl: "https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM_LINK",

  header: {
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
        label: "Contact",
        href: "/#contact",
      },
    ] satisfies NavigationItem[],

    primaryNavigation: [
      {
        label: "Who we are",
        href: "/about",
      },
      {
        label: "Capabilities",
        href: "/services",
      },
      {
        label: "Careers",
        href: "/careers",
      },
      {
        label: "Industries",
        href: "/#industries",
      },
    ] satisfies NavigationItem[],

    cta: {
      label: "View open positions",
      href: "#open-positions",
    },
  },

  hero: {
    label: "Careers at Jethavictus",
    title: "Build technology",
    highlightedTitle: "that changes what is possible.",
    description:
      "Join a team of strategic thinkers, systems architects, engineers, and technology specialists solving complex enterprise challenges with precision and accountability.",

    primaryCta: {
      label: "Explore open positions",
      href: "#open-positions",
    },

    secondaryCta: {
      label: "Discover who we are",
      href: "/about",
    },

    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=90",
    imageAlt: "Technology professionals collaborating in a modern workplace",
  },

  introduction: {
    label: "Work with purpose",
    title: "For people who refuse to settle for average.",
    description:
      "Jethavictus is built for experienced professionals who want to solve meaningful problems, work alongside capable people, and take real ownership of the outcome.",

    statement:
      "We are not building a consulting organization defined by presentations, hierarchy, or hours billed. We are building one defined by expertise, accountability, and measurable client impact.",
  },

  values: {
    label: "What we value",
    title: "The standards behind the work.",
    description:
      "Our culture is shaped by the same principles we bring to every client engagement.",

    items: [
      {
        number: "01",
        title: "Ownership",
        description:
          "Take responsibility for the decision, the execution, and the result. Important work cannot disappear between teams or job titles.",
      },
      {
        number: "02",
        title: "Precision",
        description:
          "Understand the real requirement, communicate clearly, and build solutions that can withstand scrutiny.",
      },
      {
        number: "03",
        title: "Curiosity",
        description:
          "Question assumptions, investigate deeply, and continue learning as technology and client environments evolve.",
      },
      {
        number: "04",
        title: "Decisive action",
        description:
          "Move with urgency when the path is clear, while maintaining the discipline required for high-stakes environments.",
      },
      {
        number: "05",
        title: "Respect for expertise",
        description:
          "Strong outcomes come from capable people challenging ideas constructively and contributing beyond narrow role boundaries.",
      },
      {
        number: "06",
        title: "Results",
        description:
          "Success is measured by what changed for the client, the organization, and the people using what we built.",
      },
    ] satisfies ValueItem[],
  },

  benefits: {
    label: "Why Jethavictus",
    title: "An environment designed for meaningful work.",
    description:
      "We give experienced professionals the space, responsibility, and support required to do their strongest work.",

    items: [
      {
        icon: "impact",
        title: "High-impact engagements",
        description:
          "Work on important enterprise initiatives where architecture, engineering, and strategic decisions have visible consequences.",
      },
      {
        icon: "expertise",
        title: "Senior collaboration",
        description:
          "Work alongside experienced consultants, engineers, architects, and domain specialists rather than being isolated in a delivery layer.",
      },
      {
        icon: "growth",
        title: "Continued development",
        description:
          "Expand your expertise through challenging assignments, cross-functional exposure, technical learning, and increased responsibility.",
      },
      {
        icon: "flexibility",
        title: "Flexible ways of working",
        description:
          "Engagement models are structured around client needs, team effectiveness, and clear outcomes rather than unnecessary process.",
      },
    ] satisfies BenefitItem[],
  },

  openings: {
    label: "Open positions",
    title: "Find your next mission.",
    description:
      "Review our current opportunities below. Each application is submitted through our external Google Form.",

    jobs: [
      {
        slug: "senior-cloud-architect",
        icon: "cloud",
        title: "Senior Cloud Architect",
        department: "Cloud & Infrastructure",
        location: "Remote / Hybrid",
        employmentType: "Full-time",
        experience: "7+ years",
        summary:
          "Lead the architecture and delivery of secure, resilient cloud platforms for enterprise clients undergoing modernization and transformation.",

        responsibilities: [
          "Design cloud and hybrid-cloud architectures aligned with business, security, and operational requirements.",
          "Lead workload assessments, migration planning, and modernization programs.",
          "Define cloud governance, networking, identity, observability, resilience, and cost-management standards.",
          "Guide engineering teams through implementation and critical technical decisions.",
          "Present architectural recommendations and tradeoffs to technical and executive stakeholders.",
        ],

        requirements: [
          "Strong experience designing and operating enterprise AWS environments.",
          "Deep knowledge of cloud networking, identity, security, infrastructure automation, and platform operations.",
          "Experience leading cloud migration or modernization initiatives.",
          "Ability to translate business requirements into clear technical architecture.",
          "Strong written, verbal, and stakeholder communication skills.",
        ],

        preferredQualifications: [
          "AWS professional-level certification.",
          "Experience with Terraform, Kubernetes, CI/CD, or cloud-native application architecture.",
          "Consulting or client-facing delivery experience.",
        ],
      },
      {
        slug: "ai-machine-learning-engineer",
        icon: "ai",
        title: "AI & Machine Learning Engineer",
        department: "Artificial Intelligence",
        location: "Remote / Hybrid",
        employmentType: "Full-time",
        experience: "4+ years",
        summary:
          "Design and deploy production-ready artificial intelligence and machine learning solutions that improve enterprise decision-making and automate complex work.",

        responsibilities: [
          "Develop and deploy machine learning models for enterprise use cases.",
          "Build reliable data preparation, training, evaluation, and inference pipelines.",
          "Design solutions involving language models, natural language processing, predictive analytics, or intelligent automation.",
          "Collaborate with cloud, data, security, and application teams.",
          "Monitor model quality, performance, reliability, and responsible-use requirements.",
        ],

        requirements: [
          "Professional experience developing machine learning or applied AI systems.",
          "Strong Python skills and familiarity with common machine learning frameworks.",
          "Understanding of model evaluation, data quality, deployment, and monitoring.",
          "Experience working with cloud-based data or machine learning services.",
          "Ability to communicate technical findings to non-specialist stakeholders.",
        ],

        preferredQualifications: [
          "Experience with generative AI, retrieval-augmented generation, or language-model applications.",
          "Experience with MLOps platforms and production model operations.",
          "Knowledge of enterprise AI governance and security.",
        ],
      },
      {
        slug: "cybersecurity-consultant",
        icon: "security",
        title: "Cybersecurity Consultant",
        department: "Cybersecurity & Risk",
        location: "Remote / Hybrid",
        employmentType: "Full-time",
        experience: "5+ years",
        summary:
          "Help enterprise clients evaluate cyber risk, improve security architecture, and build stronger operational resilience.",

        responsibilities: [
          "Conduct security architecture reviews, risk assessments, and maturity evaluations.",
          "Support zero-trust, identity, network security, and cloud security initiatives.",
          "Develop practical remediation roadmaps connected to business risk.",
          "Assist with compliance readiness across relevant security standards.",
          "Support incident-response planning, tabletop exercises, and security operations improvement.",
        ],

        requirements: [
          "Professional experience in cybersecurity consulting, architecture, engineering, or risk management.",
          "Strong knowledge of identity, cloud security, network security, and vulnerability management.",
          "Experience communicating risk to technical and executive audiences.",
          "Understanding of common security frameworks and control environments.",
          "Strong analytical, documentation, and client-facing skills.",
        ],

        preferredQualifications: [
          "CISSP, CISM, CCSP, or similar certification.",
          "Experience with SOC 2, ISO 27001, HIPAA, or PCI-DSS.",
          "Penetration-testing or incident-response experience.",
        ],
      },
      {
        slug: "erp-solutions-consultant",
        icon: "erp",
        title: "ERP Solutions Consultant",
        department: "Enterprise Applications",
        location: "Remote / Hybrid",
        employmentType: "Full-time",
        experience: "5+ years",
        summary:
          "Lead enterprise process improvement and ERP implementation initiatives that connect operations, data, and organizational decision-making.",

        responsibilities: [
          "Assess current business processes, systems, data flows, and operating challenges.",
          "Support ERP platform evaluation, solution design, configuration, and implementation.",
          "Translate business requirements into functional and technical specifications.",
          "Coordinate process owners, technical teams, vendors, and executive stakeholders.",
          "Support data migration, integration, testing, training, and post-launch optimization.",
        ],

        requirements: [
          "Experience delivering ERP implementation or transformation programs.",
          "Strong understanding of enterprise business processes and system integration.",
          "Ability to facilitate requirements and process-design workshops.",
          "Experience supporting testing, adoption, and organizational change.",
          "Strong project, stakeholder, and communication skills.",
        ],

        preferredQualifications: [
          "Experience with a major enterprise ERP platform.",
          "Business process reengineering experience.",
          "Consulting or multi-client delivery experience.",
        ],
      },
      {
        slug: "senior-data-engineer",
        icon: "data",
        title: "Senior Data Engineer",
        department: "Data & Analytics",
        location: "Remote / Hybrid",
        employmentType: "Full-time",
        experience: "5+ years",
        summary:
          "Build scalable enterprise data platforms that support analytics, artificial intelligence, operational reporting, and trusted decision-making.",

        responsibilities: [
          "Design and build scalable batch and real-time data pipelines.",
          "Develop cloud-based data platforms, warehouses, and lakehouse architectures.",
          "Integrate operational, application, IoT, and third-party data sources.",
          "Implement data quality, observability, lineage, and governance controls.",
          "Collaborate with analytics, AI, application, and infrastructure teams.",
        ],

        requirements: [
          "Strong experience building production data pipelines and platforms.",
          "Proficiency with SQL and at least one general-purpose programming language.",
          "Experience with cloud data services, orchestration, and distributed processing.",
          "Knowledge of dimensional modeling, data quality, and platform reliability.",
          "Ability to make pragmatic architecture and engineering tradeoffs.",
        ],

        preferredQualifications: [
          "Experience with streaming data or IoT platforms.",
          "Experience supporting machine learning and advanced analytics workloads.",
          "Knowledge of modern data governance and cataloging tools.",
        ],
      },
    ] satisfies JobPosting[],
  },

  hiringProcess: {
    label: "What to expect",
    title: "A direct and focused hiring process.",
    description:
      "We use a practical process designed to understand your experience, how you think, and where you can create the greatest impact.",

    steps: [
      {
        number: "01",
        title: "Application",
        description:
          "Submit your details, experience, and relevant links through the Google Form connected to the position.",
      },
      {
        number: "02",
        title: "Initial conversation",
        description:
          "A focused discussion about your background, the role, your interests, and how Jethavictus works.",
      },
      {
        number: "03",
        title: "Technical discussion",
        description:
          "A practical conversation with relevant specialists about your experience, decisions, and approach to complex work.",
      },
      {
        number: "04",
        title: "Final alignment",
        description:
          "A final discussion covering role expectations, engagement style, availability, and next steps.",
      },
    ] satisfies HiringStep[],
  },

  closingStatement: {
    label: "Build with us",
    title: "Complex problems need",
    highlightedTitle: "exceptional people.",
    description:
      "Jethavictus is building a consulting force capable of taking on the enterprise challenges that matter most. We are looking for people ready to contribute expertise, judgment, and ownership.",

    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2400&q=90",
    imageAlt: "Modern collaborative technology workplace",
  },

  contact: {
    label: "Do not see your role?",
    title: "Exceptional experience",
    highlightedTitle: "is always worth a conversation.",
    description:
      "Use the general application form to introduce yourself and tell us where your expertise could strengthen Jethavictus.",
    ctaLabel: "Submit a general application",
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
            href: "/#contact",
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
        title: "Explore",
        links: [
          {
            label: "Open positions",
            href: "#open-positions",
          },
          {
            label: "Hiring process",
            href: "#hiring-process",
          },
          {
            label: "General application",
            href: "https://forms.gle/REPLACE_WITH_YOUR_GOOGLE_FORM_LINK",
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
