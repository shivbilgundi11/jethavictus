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
  applyLink: string;
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
    email: "info@jethavictus.com",
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
        label: "Industries",
        href: "/about#industries",
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
      href: "/about#introduction",
    },

    image: "/career-hero-bg.avif",
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
    emptyTitle: "No openings for now.",
    emptyDescription:
      "Please keep checking this page for future opportunities and updates.",

    // Please follow the format as the commented openning code for posting new opennings
    jobs: [
      // {
      //   slug: "senior-cloud-architect",
      //   icon: "cloud",
      //   title: "Senior Cloud Architect",
      //   department: "Cloud & Infrastructure",
      //   location: "Remote / Hybrid",
      //   employmentType: "Full-time",
      //   experience: "7+ years",
      //   applyLink:
      //     "https://docs.google.com/forms/d/e/1FAIpQLSfSN8RGZuuDP18HoA6JGgMYG9JlcmoS3MQ91N4TA1woKmM_CA/viewform?usp=publish-editor",
      //   summary:
      //     "Lead the architecture and delivery of secure, resilient cloud platforms for enterprise clients undergoing modernization and transformation.",
      //   responsibilities: [
      //     "Design cloud and hybrid-cloud architectures aligned with business, security, and operational requirements.",
      //     "Lead workload assessments, migration planning, and modernization programs.",
      //     "Define cloud governance, networking, identity, observability, resilience, and cost-management standards.",
      //     "Guide engineering teams through implementation and critical technical decisions.",
      //     "Present architectural recommendations and tradeoffs to technical and executive stakeholders.",
      //   ],
      //   requirements: [
      //     "Strong experience designing and operating enterprise AWS environments.",
      //     "Deep knowledge of cloud networking, identity, security, infrastructure automation, and platform operations.",
      //     "Experience leading cloud migration or modernization initiatives.",
      //     "Ability to translate business requirements into clear technical architecture.",
      //     "Strong written, verbal, and stakeholder communication skills.",
      //   ],
      //   preferredQualifications: [
      //     "AWS professional-level certification.",
      //     "Experience with Terraform, Kubernetes, CI/CD, or cloud-native application architecture.",
      //     "Consulting or client-facing delivery experience.",
      //   ],
      // },
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
            href: "mailto:info@jethavictus.com",
          },
        ],
      },
    ] satisfies FooterGroup[],
  },
} as const;
