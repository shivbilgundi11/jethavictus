"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Manrope, Sora } from "next/font/google";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Blocks,
  Bot,
  Building2,
  Check,
  Cloud,
  Cpu,
  Factory,
  Globe2,
  HeartPulse,
  Landmark,
  Layers3,
  Menu,
  MoveUpRight,
  RadioTower,
  ServerCog,
  ShieldCheck,
  Target,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const navigation = [
  { label: "Company", href: "#company" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Execution", href: "#execution" },
  { label: "Industries", href: "#industries" },
];

type Service = {
  number: string;
  title: string;
  shortTitle: string;
  statement: string;
  description: string;
  capabilities: string[];
  image: string;
  icon: LucideIcon;
};

type Industry = {
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

const services: Service[] = [
  {
    number: "01",
    title: "Strategic IT Consulting",
    shortTitle: "Strategic IT",
    statement: "Strategy engineered for execution.",
    description:
      "Jethavictus assesses complex technology environments, identifies critical capability gaps, and creates an executable roadmap aligned with business priorities, operating realities, and growth.",
    capabilities: [
      "Infrastructure assessment",
      "Technology roadmaps",
      "System integration",
      "Legacy modernization",
      "Transformation execution",
    ],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2400&q=90",
    icon: ServerCog,
  },
  {
    number: "02",
    title: "Artificial Intelligence & Machine Learning",
    shortTitle: "AI & ML",
    statement: "Intelligence built for real operations.",
    description:
      "We design production-ready AI systems that automate intelligence-heavy work, expose predictive insights, and improve decision-making at enterprise scale.",
    capabilities: [
      "AI strategy",
      "Model architecture",
      "Machine learning pipelines",
      "Natural language processing",
      "Predictive intelligence",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2400&q=90",
    icon: Bot,
  },
  {
    number: "03",
    title: "Cloud Architecture & AWS Solutions",
    shortTitle: "Cloud & AWS",
    statement: "Cloud foundations without compromise.",
    description:
      "Secure and resilient cloud environments engineered to increase digital velocity while protecting performance, governance, reliability, and cost control.",
    capabilities: [
      "AWS architecture",
      "Cloud migration",
      "Hybrid cloud strategy",
      "Cloud-native applications",
      "DevOps and governance",
    ],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2400&q=90",
    icon: Cloud,
  },
  {
    number: "04",
    title: "Cybersecurity & Risk Management",
    shortTitle: "Cybersecurity",
    statement: "Resilience engineered into every layer.",
    description:
      "Comprehensive security frameworks that protect critical assets, strengthen regulatory readiness, and prepare organizations to respond decisively to sophisticated threats.",
    capabilities: [
      "Zero-trust architecture",
      "Threat modeling",
      "Penetration testing",
      "Compliance management",
      "Incident response",
    ],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=2400&q=90",
    icon: ShieldCheck,
  },
  {
    number: "05",
    title: "Enterprise ERP Solutions",
    shortTitle: "Enterprise ERP",
    statement: "One enterprise. One operational truth.",
    description:
      "Connected ERP environments that unify departments, standardize processes, eliminate information silos, and provide organization-wide visibility.",
    capabilities: [
      "ERP selection",
      "System implementation",
      "Process reengineering",
      "Data migration",
      "Managed optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=2400&q=90",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Blockchain & Emerging Technologies",
    shortTitle: "Blockchain",
    statement: "Trust engineered into transactions.",
    description:
      "Enterprise blockchain and decentralized systems that introduce verifiable trust, transparency, and intelligent automation across complex networks.",
    capabilities: [
      "Smart contracts",
      "Blockchain architecture",
      "DApp development",
      "Contract auditing",
      "Digital asset strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=2400&q=90",
    icon: Blocks,
  },
  {
    number: "07",
    title: "IoT & Data Science",
    shortTitle: "IoT & Data",
    statement: "Turn physical operations into intelligence.",
    description:
      "Connected devices, real-time data pipelines, and advanced analytics that expose operational insights and unlock new revenue opportunities.",
    capabilities: [
      "IoT platforms",
      "Edge computing",
      "Streaming analytics",
      "Data science",
      "Data engineering",
    ],
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2400&q=90",
    icon: RadioTower,
  },
];

const differentiators = [
  {
    number: "01",
    title: "Enterprise depth",
    description:
      "Specialized expertise across AI, cloud, cybersecurity, ERP, IoT, blockchain, and modernization.",
  },
  {
    number: "02",
    title: "Senior-led execution",
    description:
      "Experienced specialists lead strategy, architecture, communication, and delivery from the beginning.",
  },
  {
    number: "03",
    title: "Outcome ownership",
    description:
      "Success is measured by operational and commercial results, not activity or hours billed.",
  },
  {
    number: "04",
    title: "End-to-end accountability",
    description:
      "One accountable partner from assessment and architecture through deployment and optimization.",
  },
  {
    number: "05",
    title: "Built for complexity",
    description:
      "Disciplined methods developed for critical environments, significant dependencies, and high stakes.",
  },
  {
    number: "06",
    title: "Velocity with discipline",
    description:
      "Decisive delivery without sacrificing security, governance, reliability, or implementation quality.",
  },
];

const executionSteps = [
  {
    number: "01",
    title: "Discover",
    statement: "Expose the complete operating reality.",
    description:
      "We examine the business model, technology estate, operating constraints, dependencies, risks, and competitive environment before recommending a direction.",
    details: [
      "Leadership and stakeholder alignment",
      "Technology landscape assessment",
      "Capability and process analysis",
      "Risk and dependency mapping",
    ],
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "02",
    title: "Design",
    statement: "Convert ambition into an executable system.",
    description:
      "We architect a precise solution aligned with your requirements, internal capabilities, regulatory environment, timeline, and definition of success.",
    details: [
      "Solution and enterprise architecture",
      "Delivery roadmap",
      "Governance and measurement",
      "Implementation planning",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "03",
    title: "Deploy",
    statement: "Create momentum without losing control.",
    description:
      "Senior specialists execute with agile velocity, transparent communication, visible accountability, and disciplined quality controls.",
    details: [
      "Senior-led execution",
      "Iterative implementation",
      "Testing and security validation",
      "Stakeholder communication",
    ],
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2200&q=90",
  },
  {
    number: "04",
    title: "Deliver",
    statement: "Own the outcome beyond launch.",
    description:
      "We measure results, transfer knowledge, optimize continuously, and remain accountable for the performance of what we build.",
    details: [
      "Outcome measurement",
      "Team enablement",
      "Performance optimization",
      "Long-term support",
    ],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2200&q=90",
  },
];

const industries: Industry[] = [
  {
    title: "Financial Services & Banking",
    shortTitle: "Finance",
    description:
      "Secure modernization, decision intelligence, regulatory readiness, and resilient digital platforms.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=90",
    icon: Landmark,
  },
  {
    title: "Healthcare & Life Sciences",
    shortTitle: "Healthcare",
    description:
      "Protected data, intelligent workflows, connected operations, and compliant technology ecosystems.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=2400&q=90",
    icon: HeartPulse,
  },
  {
    title: "Energy & Utilities",
    shortTitle: "Energy",
    description:
      "Connected infrastructure, predictive maintenance, operational intelligence, and cyber resilience.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=2400&q=90",
    icon: Zap,
  },
  {
    title: "Retail & E-Commerce",
    shortTitle: "Retail",
    description:
      "Scalable commerce, customer intelligence, integrated platforms, and responsive digital experiences.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2400&q=90",
    icon: Globe2,
  },
  {
    title: "Manufacturing & Supply Chain",
    shortTitle: "Manufacturing",
    description:
      "IoT systems, ERP modernization, forecasting, automation, and real-time operational visibility.",
    image:
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=2400&q=90",
    icon: Factory,
  },
  {
    title: "Technology & SaaS",
    shortTitle: "Technology",
    description:
      "Cloud-native platforms, AI capabilities, product modernization, DevOps, and scalable architecture.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2400&q=90",
    icon: Cpu,
  },
  {
    title: "Government & Public Sector",
    shortTitle: "Public Sector",
    description:
      "Secure transformation, accessible digital services, modern governance, and reliable delivery.",
    image:
      "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=2400&q=90",
    icon: Building2,
  },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-3">
      <span
        className={`font-display text-[24px] font-semibold tracking-[-0.08em] ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        J
      </span>

      <span
        className={`h-8 w-px ${
          light ? "bg-white/30" : "bg-brand-line"
        }`}
      />

      <span
        className={`font-display text-[13px] font-semibold leading-[1.05] tracking-[-0.035em] ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        <span className="block">JETHAVICTUS</span>

        <span
          className={`mt-1 block text-[8px] font-medium tracking-[0.28em] ${
            light ? "text-white/45" : "text-brand-slate"
          }`}
        >
          SOLUTIONS
        </span>
      </span>
    </a>
  );
}

function EditorialLabel({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.22em] ${
        light ? "text-brand-cyan" : "text-brand-cobalt"
      }`}
    >
      <span
        className={`h-px w-10 ${
          light ? "bg-brand-cyan" : "bg-brand-cobalt"
        }`}
      />

      {children}
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSolid, setHeaderSolid] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [activeExecution, setActiveExecution] = useState(0);
  const [activeIndustry, setActiveIndustry] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setHeaderSolid(window.scrollY > 70);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const selectedService = services[activeService];
  const SelectedServiceIcon = selectedService.icon;

  const selectedExecution = executionSteps[activeExecution];

  const selectedIndustry = industries[activeIndustry];
  const SelectedIndustryIcon = selectedIndustry.icon;

  const goToPreviousService = () => {
    setActiveService((current) =>
      current === 0 ? services.length - 1 : current - 1,
    );
  };

  const goToNextService = () => {
    setActiveService((current) =>
      current === services.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <main
      className={`${manrope.variable} ${sora.variable} min-h-screen overflow-x-hidden bg-background font-sans text-foreground selection:bg-brand-cyan selection:text-brand-navy`}
    >
      <style jsx global>{`
        @keyframes capability-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .capability-marquee {
          animation: capability-marquee 28s linear infinite;
        }

        .capability-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .capability-marquee {
            animation: none;
          }
        }
      `}</style>

      {/* Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          headerSolid
            ? "border-b border-brand-line/70 bg-brand-paper/95 text-brand-navy backdrop-blur-xl"
            : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-22 max-w-[1540px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <Logo light={!headerSolid} />

          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative py-3 text-[12px] font-bold after:absolute after:bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className={`group hidden items-center gap-4 text-[12px] font-bold lg:flex ${
              headerSolid ? "text-brand-navy" : "text-white"
            }`}
          >
            Start a mission

            <MoveUpRight
              size={17}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center lg:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-brand-line bg-brand-paper px-5 pb-7 text-brand-navy shadow-xl lg:hidden">
            <nav className="mx-auto flex max-w-[1540px] flex-col">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-brand-line py-5 font-display text-xl font-semibold"
                >
                  {item.label}
                  <ArrowRight size={18} />
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-6 flex h-14 items-center justify-between bg-brand-cobalt px-5 font-bold text-white"
              >
                Start a mission
                <MoveUpRight size={18} />
              </a>
            </nav>
          </div>
        ) : null}
      </header>

      {/* Editorial cover */}
      <section className="relative min-h-212.5 overflow-hidden bg-brand-cream lg:min-h-screen">
        <div className="absolute inset-y-0 right-0 w-full lg:w-[61%]">
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2500&q=92"
            alt="Enterprise technology infrastructure"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-brand-deep/45 lg:bg-brand-deep/10" />

          <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(245,241,232,1)_0%,rgba(245,241,232,0.94)_12%,rgba(245,241,232,0)_48%)] lg:block" />
        </div>

        <div
          className="absolute inset-y-0 right-0 hidden w-[64%] bg-brand-cobalt/10 lg:block"
          style={{
            clipPath: "polygon(22% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />

        <div className="relative mx-auto flex min-h-212.5 max-w-[1540px] items-end px-5 pb-16 pt-36 sm:px-8 lg:min-h-screen lg:items-center lg:px-12 lg:pb-12">
          <div className="relative z-10 max-w-215">
            <p className="text-[10px] font-bold uppercase tracking-[0.23em] text-brand-cyan lg:text-brand-cobalt">
              High-performance technology consulting
            </p>

            <h1 className="font-display mt-8 text-[55px] font-semibold leading-[0.91] tracking-[-0.075em] text-white sm:text-[76px] lg:text-[92px] lg:text-brand-navy xl:text-[108px]">
              Engineer the
              <span className="block text-brand-cyan lg:text-brand-cobalt">
                advantage.
              </span>
            </h1>

            <p className="mt-9 max-w-165 text-lg leading-8 text-white/75 sm:text-xl lg:text-brand-slate">
              Jethavictus transforms complex enterprise technology into
              scalable systems, stronger operations, and measurable
              competitive progress.
            </p>

            <div className="mt-11 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <a
                href="#capabilities"
                className="group inline-flex min-h-14 items-center gap-9 bg-brand-cobalt px-7 text-sm font-bold text-white transition-colors hover:bg-brand-navy"
              >
                Explore capabilities

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#company"
                className="group inline-flex items-center gap-4 text-sm font-bold text-white lg:text-brand-navy"
              >
                Discover Jethavictus

                <ArrowDown
                  size={17}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 z-20 max-w-140 bg-brand-gold px-7 py-8 text-brand-navy sm:px-10 lg:right-12 lg:px-12">
            <p className="font-display text-[22px] font-semibold leading-8 tracking-[-0.035em] sm:text-[27px]">
              “We don&apos;t just consult. We conquer complexity.”
            </p>
          </div>
        </div>
      </section>

      {/* Moving capability line */}
      <section className="overflow-hidden bg-brand-cobalt text-white">
        <div className="capability-marquee flex min-w-max">
          {[...services, ...services].map((service, index) => (
            <button
              key={`${service.shortTitle}-${index}`}
              type="button"
              onClick={() => setActiveService(index % services.length)}
              className="group flex h-21 items-center gap-5 border-r border-white/20 px-8 transition-colors hover:bg-brand-navy sm:px-11"
            >
              <span className="h-2 w-2 rotate-45 bg-brand-gold" />

              <span className="font-display text-sm font-semibold">
                {service.shortTitle}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Company manifesto */}
      <section
        id="company"
        className="relative scroll-mt-20 overflow-hidden bg-brand-paper"
      >
        <div className="absolute right-0 top-0 hidden h-full w-[27%] bg-brand-cyan-soft lg:block" />

        <div className="mx-auto max-w-[1540px] px-5 py-28 sm:px-8 lg:px-12 lg:py-44">
          <div className="relative grid gap-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24">
            <div>
              <p className="max-w-270 font-display text-[41px] font-semibold leading-[1.09] tracking-[-0.055em] text-brand-navy sm:text-[58px] lg:text-[70px]">
                Technology should not merely support the enterprise.
                <span className="text-brand-cobalt">
                  {" "}
                  It should multiply what the enterprise can achieve.
                </span>
              </p>

              <div className="mt-16 grid gap-10 border-t border-brand-line pt-10 md:grid-cols-2 md:gap-16">
                <p className="text-lg leading-8 text-brand-slate">
                  Jethavictus brings together strategic thinkers, systems
                  architects, and senior technology specialists committed to
                  transforming how enterprises operate, compete, and grow.
                </p>

                <p className="text-lg leading-8 text-brand-slate">
                  We do not offer generic blueprints. Every engagement is built
                  around a defined objective, accountable leadership, and a
                  measurable interpretation of victory.
                </p>
              </div>
            </div>

            <div className="relative min-h-105 lg:min-h-165">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1800&q=90"
                alt="Senior technology consultants collaborating"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-brand-deep/75 via-transparent to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
                <p className="text-[10px] font-bold uppercase tracking-[0.21em] text-brand-cyan">
                  Technology as a force multiplier
                </p>

                <p className="font-display mt-5 text-[27px] font-semibold leading-[1.22] tracking-[-0.04em]">
                  Strategy, architecture, and execution operating as one force.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Immersive services stage */}
      <section
        id="capabilities"
        className="relative min-h-237.5 scroll-mt-20 overflow-hidden bg-brand-deep text-white"
      >
        <img
          key={selectedService.image}
          src={selectedService.image}
          alt={selectedService.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-700"
        />

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(4,19,29,0.97)_0%,rgba(4,19,29,0.88)_44%,rgba(4,19,29,0.35)_78%,rgba(4,19,29,0.5)_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,29,0.28)_0%,rgba(4,19,29,0.18)_45%,rgba(4,19,29,0.92)_100%)]" />

        <div className="relative mx-auto flex min-h-237.5 max-w-[1540px] flex-col px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-between gap-9 lg:flex-row lg:items-end">
            <div>
              <EditorialLabel light>Core capabilities</EditorialLabel>

              <h2 className="font-display mt-8 max-w-217.5 text-[44px] font-semibold leading-[1.03] tracking-[-0.06em] sm:text-[61px] lg:text-[76px]">
                One strategy.
                <span className="block text-brand-cyan">
                  Seven connected practices.
                </span>
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label="Previous service"
                onClick={goToPreviousService}
                className="grid h-12 w-12 place-items-center border border-white/30 transition-colors hover:bg-white hover:text-brand-navy"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                aria-label="Next service"
                onClick={goToNextService}
                className="grid h-12 w-12 place-items-center border border-white/30 transition-colors hover:bg-white hover:text-brand-navy"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="mt-14 flex gap-7 overflow-x-auto border-b border-white/25 pb-5">
            {services.map((service, index) => {
              const isActive = activeService === index;

              return (
                <button
                  key={service.title}
                  type="button"
                  onMouseEnter={() => setActiveService(index)}
                  onFocus={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`relative shrink-0 pb-4 text-left transition-colors ${
                    isActive ? "text-white" : "text-white/42 hover:text-white"
                  }`}
                >
                  <span className="block text-[9px] font-bold tracking-[0.18em]">
                    {service.number}
                  </span>

                  <span className="font-display mt-2 block text-lg font-semibold">
                    {service.shortTitle}
                  </span>

                  <span
                    className={`absolute bottom-0 left-0 h-0.75 bg-brand-gold transition-all ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div className="mt-auto grid gap-12 pt-20 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
            <div>
              <SelectedServiceIcon
                size={31}
                strokeWidth={1.35}
                className="text-brand-gold"
              />

              <p className="font-display mt-8 max-w-130 text-[31px] font-semibold leading-[1.18] tracking-[-0.04em] sm:text-[40px]">
                {selectedService.statement}
              </p>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cyan">
                Capability {selectedService.number}
              </span>

              <h3 className="font-display mt-5 max-w-212.5 text-[38px] font-semibold leading-[1.05] tracking-tighter sm:text-[52px]">
                {selectedService.title}
              </h3>

              <p className="mt-7 max-w-195 text-lg leading-8 text-white/65">
                {selectedService.description}
              </p>

              <div className="mt-9 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/25 pt-7">
                {selectedService.capabilities.map((capability) => (
                  <span
                    key={capability}
                    className="flex items-center gap-3 text-sm font-semibold text-white/75"
                  >
                    <span className="h-1.5 w-1.5 bg-brand-gold" />
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof rail */}
      <section className="overflow-hidden bg-brand-cream py-24 lg:py-36">
        <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
            <div>
              <EditorialLabel>Why Jethavictus</EditorialLabel>

              <h2 className="font-display mt-8 max-w-130 text-[42px] font-semibold leading-[1.06] tracking-[-0.055em] text-brand-navy sm:text-[56px]">
                Built for the moments that matter.
              </h2>
            </div>

            <div className="overflow-x-auto">
              <div className="flex min-w-max border-l border-brand-line">
                {differentiators.map((item) => (
                  <article
                    key={item.title}
                    className="group w-[320px] border-r border-brand-line px-7 py-3 sm:w-92.5 sm:px-9"
                  >
                    <span className="font-display text-[70px] font-semibold leading-none tracking-[-0.08em] text-brand-cobalt/15 transition-colors group-hover:text-brand-cobalt">
                      {item.number}
                    </span>

                    <h3 className="font-display mt-14 text-[25px] font-semibold tracking-[-0.035em] text-brand-navy">
                      {item.title}
                    </h3>

                    <p className="mt-5 leading-7 text-brand-slate">
                      {item.description}
                    </p>

                    <span className="mt-9 block h-px w-10 bg-brand-cobalt transition-all duration-300 group-hover:w-full" />
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="relative overflow-hidden bg-brand-cobalt text-white">
        <div className="absolute inset-y-0 right-0 hidden w-[43%] lg:block">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1900&q=90"
            alt="Technology team focused on enterprise delivery"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-brand-cobalt/25" />
          <div className="absolute inset-0 bg-linear-to-r from-brand-cobalt via-brand-cobalt/30 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-40">
          <div className="max-w-205">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">
              Our mission
            </p>

            <p className="font-display mt-8 text-[39px] font-semibold leading-[1.08] tracking-[-0.055em] sm:text-[54px] lg:text-[64px]">
              Transform technology into operational excellence, competitive
              dominance, and long-term business growth.
            </p>

            <div className="mt-16 max-w-175 border-t border-white/25 pt-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-brand-gold">
                Our vision
              </p>

              <p className="font-display mt-6 text-[27px] font-semibold leading-[1.2] tracking-[-0.04em] sm:text-[36px]">
                To become the market&apos;s most trusted and results-driven
                technology consulting force.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive execution narrative */}
      <section
        id="execution"
        className="scroll-mt-20 bg-brand-paper py-24 lg:py-40"
      >
        <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <div>
              <EditorialLabel>Execution model</EditorialLabel>

              <h2 className="font-display mt-8 max-w-225 text-[43px] font-semibold leading-[1.04] tracking-[-0.06em] text-brand-navy sm:text-[60px] lg:text-[74px]">
                From ambiguity to accountable execution.
              </h2>
            </div>

            <p className="max-w-115 text-lg leading-8 text-brand-slate">
              Four connected phases. Senior ownership and visible progress
              throughout.
            </p>
          </div>

          <div className="mt-20 grid gap-14 lg:grid-cols-[0.62fr_1.38fr] lg:gap-20">
            <div className="border-t border-brand-line">
              {executionSteps.map((step, index) => {
                const isActive = activeExecution === index;

                return (
                  <button
                    key={step.title}
                    type="button"
                    onMouseEnter={() => setActiveExecution(index)}
                    onFocus={() => setActiveExecution(index)}
                    onClick={() => setActiveExecution(index)}
                    className="group flex w-full items-center gap-6 border-b border-brand-line py-7 text-left"
                  >
                    <span
                      className={`text-[10px] font-bold ${
                        isActive
                          ? "text-brand-cobalt"
                          : "text-brand-slate/40"
                      }`}
                    >
                      {step.number}
                    </span>

                    <span
                      className={`font-display flex-1 text-[27px] font-semibold tracking-[-0.04em] transition-all ${
                        isActive
                          ? "translate-x-2 text-brand-cobalt"
                          : "text-brand-navy group-hover:text-brand-cobalt"
                      }`}
                    >
                      {step.title}
                    </span>

                    <ArrowRight
                      size={18}
                      className={`transition-all ${
                        isActive
                          ? "translate-x-0 text-brand-cobalt"
                          : "-translate-x-2 text-brand-line group-hover:translate-x-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="relative min-h-170 overflow-hidden bg-brand-deep">
              <img
                key={selectedExecution.image}
                src={selectedExecution.image}
                alt={selectedExecution.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,29,0.08)_20%,rgba(4,19,29,0.94)_100%)]" />

              <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-10 lg:p-12">
                <span className="font-display text-[90px] font-semibold leading-none tracking-[-0.08em] text-white/10">
                  {selectedExecution.number}
                </span>

                <p className="font-display mt-4 max-w-190 text-[32px] font-semibold leading-[1.14] tracking-[-0.045em] sm:text-[43px]">
                  {selectedExecution.statement}
                </p>

                <p className="mt-6 max-w-185 text-lg leading-8 text-white/63">
                  {selectedExecution.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4 border-t border-white/25 pt-7">
                  {selectedExecution.details.map((detail) => (
                    <span
                      key={detail}
                      className="flex items-center gap-3 text-sm font-semibold text-white/72"
                    >
                      <Check size={15} className="text-brand-gold" />
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic industries */}
      <section
        id="industries"
        className="relative min-h-237.5 scroll-mt-20 overflow-hidden bg-brand-deep text-white"
      >
        <img
          key={selectedIndustry.image}
          src={selectedIndustry.image}
          alt={selectedIndustry.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-700"
        />

        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(4,19,29,0.55)_0%,rgba(4,19,29,0.12)_42%,rgba(4,19,29,0.94)_100%)]" />

        <div className="relative mx-auto flex min-h-237.5 max-w-[1540px] flex-col px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-start">
            <div>
              <EditorialLabel light>Industries</EditorialLabel>

              <h2 className="font-display mt-8 max-w-[760px] text-[44px] font-semibold leading-[1.04] tracking-[-0.06em] sm:text-[61px] lg:text-[74px]">
                Domain fluency where technology cannot fail.
              </h2>
            </div>

            <span className="font-display text-[110px] font-semibold leading-none tracking-[-0.08em] text-white/8">
              0{activeIndustry + 1}
            </span>
          </div>

          <div className="mt-auto">
            <div className="max-w-[780px]">
              <SelectedIndustryIcon
                size={30}
                strokeWidth={1.35}
                className="text-brand-gold"
              />

              <h3 className="font-display mt-7 text-[39px] font-semibold leading-[1.06] tracking-[-0.05em] sm:text-[54px]">
                {selectedIndustry.title}
              </h3>

              <p className="mt-6 max-w-[680px] text-lg leading-8 text-white/65">
                {selectedIndustry.description}
              </p>
            </div>

            <div className="mt-14 flex gap-8 overflow-x-auto border-t border-white/30 pt-6">
              {industries.map((industry, index) => {
                const isActive = activeIndustry === index;

                return (
                  <button
                    key={industry.title}
                    type="button"
                    onMouseEnter={() => setActiveIndustry(index)}
                    onFocus={() => setActiveIndustry(index)}
                    onClick={() => setActiveIndustry(index)}
                    className={`relative shrink-0 pb-4 text-left transition-colors ${
                      isActive ? "text-white" : "text-white/40 hover:text-white"
                    }`}
                  >
                    <span className="text-[9px] font-bold tracking-[0.17em]">
                      0{index + 1}
                    </span>

                    <span className="font-display mt-2 block text-xl font-semibold">
                      {industry.shortTitle}
                    </span>

                    <span
                      className={`absolute bottom-0 left-0 h-[3px] bg-brand-gold transition-all ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Closing manifesto */}
      <section className="relative overflow-hidden bg-brand-cream">
        <div className="absolute inset-y-0 left-[28%] hidden w-px bg-brand-line lg:block" />

        <div className="mx-auto max-w-[1540px] px-5 py-28 sm:px-8 lg:px-12 lg:py-44">
          <div className="grid gap-16 lg:grid-cols-[0.45fr_1.55fr] lg:gap-24">
            <div>
              <p className="text-[10px] font-bold uppercase leading-8 tracking-[0.2em] text-brand-cobalt">
                No generic playbooks.
                <br />
                No diluted ownership.
                <br />
                No technology for its own sake.
              </p>
            </div>

            <div>
              <p className="font-display max-w-[1080px] text-[41px] font-semibold leading-[1.09] tracking-[-0.055em] text-brand-navy sm:text-[57px] lg:text-[70px]">
                Senior expertise, disciplined execution, and an unwavering
                commitment to the outcome your mission demands.
              </p>

              <div className="mt-14 grid gap-9 border-t border-brand-line pt-9 md:grid-cols-[1fr_auto] md:items-center">
                <p className="max-w-[650px] text-lg leading-8 text-brand-slate">
                  From strategy and architecture through implementation and
                  support, Jethavictus owns the path from complexity to progress.
                </p>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-5 text-sm font-bold text-brand-navy"
                >
                  Begin the mission

                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-20 bg-brand-gold text-brand-navy"
      >
        <div className="mx-auto max-w-[1540px] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.23em] text-brand-navy/52">
                Ready to win?
              </span>

              <h2 className="font-display mt-7 max-w-[1030px] text-[53px] font-semibold leading-[0.94] tracking-[-0.07em] sm:text-[77px] lg:text-[98px]">
                Build what your future demands.
              </h2>
            </div>

            <div className="lg:pb-2">
              <p className="max-w-[440px] text-lg leading-8 text-brand-navy/66">
                Bring us the enterprise challenge that matters most. We will
                bring the strategy, engineering, and accountability required to
                move it forward.
              </p>

              <a
                href="mailto:hello@jethavictus.com"
                className="group mt-9 flex min-h-[68px] items-center justify-between border-t border-brand-navy/25 py-5 font-bold"
              >
                hello@jethavictus.com

                <MoveUpRight
                  size={20}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-deep text-white">
        <div className="mx-auto max-w-[1540px] px-5 pb-7 pt-16 sm:px-8 lg:px-12">
          <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.35fr_0.65fr_0.65fr]">
            <div>
              <Logo light />

              <p className="mt-7 max-w-[480px] leading-7 text-white/45">
                High-performance technology consulting engineered to transform
                complex enterprise challenges into measurable advantage.
              </p>

              <p className="mt-8 text-[9px] font-bold uppercase tracking-[0.22em] text-brand-cyan">
                Engineered for victory
              </p>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Navigate
              </p>

              <nav className="mt-6 flex flex-col items-start gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-cyan"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
                Contact
              </p>

              <div className="mt-6 space-y-4">
                <a
                  href="mailto:hello@jethavictus.com"
                  className="block text-sm text-white/60 transition-colors hover:text-brand-cyan"
                >
                  hello@jethavictus.com
                </a>

                <a
                  href="https://www.jethavictus.com"
                  className="block text-sm text-white/60 transition-colors hover:text-brand-cyan"
                >
                  www.jethavictus.com
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 py-7 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Jethavictus Solutions.</p>

            <div className="flex gap-6">
              <a
                href="#"
                className="transition-colors hover:text-brand-cyan"
              >
                Privacy
              </a>

              <a
                href="#"
                className="transition-colors hover:text-brand-cyan"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}