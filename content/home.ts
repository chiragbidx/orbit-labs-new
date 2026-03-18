import { 
  HeroContent, SponsorItem, SponsorsContent, BenefitItem, BenefitsContent, 
  FeatureItem, FeaturesContent, ServiceItem, ServicesContent, 
  TestimonialItem, TestimonialsContent, SocialLink, TeamMember, TeamContent, 
  PricingPlan, PricingContent, ContactInfoBlock, ContactContent, 
  FaqItem, FaqContent, FooterLink, FooterColumn, FooterContent, 
  NavRoute, NavFeature, NavbarContent, HomeContent 
} from "./home";

// CoreCRM homepage content
export const defaultHomeContent: HomeContent = {
  hero: {
    badgeInner: "Internal CRM",
    badgeOuter: "CoreCRM now powering your business",
    titleBefore: "Run your business on",
    titleHighlight: "CoreCRM",
    titleAfter: "",
    subtitle:
      "CoreCRM is your team's command center: lightning-fast contact management, team collaboration, and internal workflows—all in one place, ready to grow with your business.",
    primaryCta: { label: "Try CoreCRM", href: "#pricing" },
    secondaryCta: { label: "See features", href: "#features" },
    heroImageLight: "/hero-image-light.jpeg",
    heroImageDark: "/hero-image-dark.jpeg",
    heroImageAlt: "CoreCRM dashboard preview",
  },

  sponsors: {
    heading: "Runs on world-class tech",
    items: [
      { icon: "Crown", name: "Vercel" },
      { icon: "Vegan", name: "Stripe" },
      { icon: "Ghost", name: "OpenAI" },
      { icon: "Puzzle", name: "Supabase" },
      { icon: "Cookie", name: "Resend" },
      { icon: "Drama", name: "Sentry" },
    ],
  },

  benefits: {
    eyebrow: "Why CoreCRM",
    heading: "A focused CRM platform for real teams",
    description: "Don’t waste time duct-taping spreadsheets, documents, and basic SaaS tools. CoreCRM keeps your customers, teammates, and workflows in perfect sync in a single, production-ready dashboard.",
    items: [
      {
        icon: "Blocks",
        title: "Team Collaboration",
        description: "Share updates, assign roles, and keep everyone coordinated in real time.",
      },
      {
        icon: "LineChart",
        title: "Track What Matters",
        description: "Log contacts, deals, support tickets, and feedback—no more lost info.",
      },
      {
        icon: "Wallet",
        title: "Lower Operating Cost",
        description: "Modern UI and workflows out-of-the-box, no dev required.",
      },
      {
        icon: "Sparkle",
        title: "Frictionless UX By Default",
        description: "Fast search, clean interface, responsive on any device.",
      },
    ],
  },

  features: {
    eyebrow: "Features",
    heading: "What makes CoreCRM different",
    subtitle: "Ready-to-use for sales, support, and internal ops. Built for company teams who need more than spreadsheets, and less than legacy ‘enterprise’ bloat.",
    items: [
      { icon: "TabletSmartphone", title: "Mobile & Desktop Ready", description: "Work from anywhere—responsive, always fast." },
      { icon: "BadgeCheck", title: "Role-Based Security", description: "Granular permissions for owners, admins, and staff." },
      { icon: "Goal", title: "Team Management", description: "Invite members, set roles, and keep everyone up to date." },
      { icon: "PictureInPicture", title: "Deal/Contact Tracking", description: "All your leads, partners, or vendors in one place—easy to search and update." },
      { icon: "MousePointerClick", title: "Lightning Signup", description: "Email/password auth flow built for internal teams, with email verification and reset." },
      { icon: "Newspaper", title: "Easy Data Export", description: "Coming soon: export your data any time—your data, always portable." },
    ],
  },

  services: {
    eyebrow: "Core Services",
    heading: "What’s included",
    subtitle: "Everything you need to run an internal CRM and expand as your business grows.",
    items: [
      { title: "Contact Management", description: "Customers, deals, companies, and notes—unified.", pro: false },
      { title: "Team Collaboration", description: "Role-based access, invitations, and shared timeline.", pro: false },
      { title: "Customizable Workflows", description: "Tailor pipelines to match your internal processes.", pro: false },
      { title: "Fast Search", description: "Find any record instantly, even as your data grows.", pro: true },
    ],
  },

  testimonials: {
    eyebrow: "Results",
    heading: "Trusted by fast-moving teams",
    reviews: [
      { image: "/demo-img.jpg", name: "Jordan White", role: "COO, RapidScale", comment: "We run our entire client ops with CoreCRM. Setup took minutes, and onboarding is smooth for every new teammate.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Priya Singh", role: "Head of Ops, Nova Digital", comment: "Email signups, team permissions, and internal dashboards—CoreCRM got us live in a day.", rating: 4.9 },
      { image: "/demo-img.jpg", name: "Marcus Lee", role: "Team Lead, GreenGrid Labs", comment: "We ditched spreadsheets for CoreCRM. Our support workflow is now a breeze.", rating: 4.8 },
      { image: "/demo-img.jpg", name: "Anna Kowalski", role: "Managing Partner, KiteEdge", comment: "Beautiful interface, fast search, and easy for non-technical staff. Highly recommended for growing consultancies.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Daniel Kim", role: "Customer Success, PulseOps", comment: "We onboarded the entire team without IT support. Night and day compared to our old CRM.", rating: 5.0 },
      { image: "/demo-img.jpg", name: "Ava Patel", role: "Operations, LaunchHub", comment: "Built for small companies that want ready-to-go organization and reliable support.", rating: 4.9 },
    ],
  },

  team: {
    eyebrow: "Our Team",
    heading: "Meet the CoreCRM team",
    members: [
      {
        imageUrl: "/team1.jpg",
        firstName: "Chirag",
        lastName: "Dodiya",
        positions: ["Founder & CEO", "Product Owner"],
        socialNetworks: [
          { name: "LinkedIn", url: "https://www.linkedin.com/in/chiragdodiya/" },
          { name: "Github", url: "https://github.com/chiragdodiya" },
        ],
      },
    ],
  },

  pricing: {
    eyebrow: "Pricing",
    heading: "Simple, honest pricing",
    subtitle: "No contracts or hidden fees. Scale from startup to larger teams as you grow.",
    priceSuffix: "/month",
    plans: [
      {
        title: "Startup",
        popular: false,
        price: 0,
        description: "Perfect for early internal use or prototypes.",
        buttonText: "Get Started Free",
        benefits: ["Up to 5 users", "Basic roles and permissions", "Internal dashboard", "Email support", "Self-hosted option"],
      },
      {
        title: "Growth",
        popular: true,
        price: 49,
        description: "For growing teams with advanced collaboration needs.",
        buttonText: "Start 14-day Trial",
        benefits: ["Unlimited users", "Advanced permissions", "Priority support", "Deal workflow templates", "Daily backups"],
      },
      {
        title: "Enterprise",
        popular: false,
        price: 199,
        description: "Best for organizations needing custom workflows, compliance, or onboarding.",
        buttonText: "Contact Sales",
        benefits: ["Custom integration", "SSO/SCIM", "Dedicated onboarding", "SLA support", "Custom pipelines"],
      },
    ],
  },

  contact: {
    eyebrow: "Contact",
    heading: "Talk to CoreCRM",
    description: "Questions about onboarding, custom workflows, or migration? Contact the CoreCRM team and we’ll get back in 1 business day.",
    mailtoAddress: "chirag@bidx.ai",
    info: {
      address: { label: "Location", value: "Remote-first | Mumbai, India" },
      phone: { label: "Contact", value: "" },
      email: { label: "Email", value: "chirag@bidx.ai" },
      hours: { label: "Support Hours", value: ["Monday - Friday", "10AM - 7PM IST"] },
    },
    formSubjects: ["Setup Demo", "Custom Workflow", "Migration", "Pricing", "Enterprise Plan"],
    formSubmitLabel: "Submit inquiry",
  },

  faq: {
    eyebrow: "FAQ",
    heading: "CoreCRM: Common Questions",
    items: [
      { question: "Who is CoreCRM for?", answer: "Businesses and teams who need a reliable, internal CRM to manage contacts, deals, and daily workflows with roles and permissions out of the box." },
      { question: "Is CoreCRM only for tech teams?", answer: "No. CoreCRM is built for any business—consultancies, agencies, support, services, vendors, and more." },
      { question: "What integrations are supported?", answer: "Stripe, SendGrid, OpenAI, and more. You own your data and can export it any time." },
      { question: "Is my data private and secure?", answer: "Yes. Data is encrypted at rest (Postgres) and never shared or sold—your CRM, your data, always." },
      { question: "Can I add features as we grow?", answer: "Absolutely! Use the built-in feature scaffold to add new pages for custom workflows, records, or data types." },
    ],
  },

  footer: {
    brandName: "CoreCRM",
    columns: [
      {
        heading: "Contact",
        links: [
          { label: "chirag@bidx.ai", href: "mailto:chirag@bidx.ai" },
          { label: "Github", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya/" },
        ],
      },
      {
        heading: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        heading: "Help",
        links: [
          { label: "Contact Us", href: "#contact" },
          { label: "FAQ", href: "#faq" },
          { label: "Docs", href: "https://nextjs.org/docs" },
        ],
      },
      {
        heading: "Socials",
        links: [
          { label: "GitHub", href: "https://github.com/chiragdodiya" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/chiragdodiya/" },
        ],
      },
    ],
    copyright: "\u00a9 2026 CoreCRM.",
    attribution: { label: "Built on Next.js", href: "https://nextjs.org" },
  },

  navbar: {
    brandName: "CoreCRM",
    routes: [
      { href: "/#features", label: "Features" },
      { href: "/#pricing", label: "Pricing" },
      { href: "/#contact", label: "Contact" },
      { href: "/#faq", label: "FAQ" },
    ],
    featureDropdownLabel: "Features",
    featureImage: { src: "/demo-img.jpg", alt: "CoreCRM dashboard preview" },
    features: [
      { title: "Contact & Lead Management", description: "Manage all company relations, notes, and deal stages." },
      { title: "Team Collaboration", description: "Invite, assign, and set permissions for every teammate." },
      { title: "Internal Workflows", description: "Customize for HR, support, sales, onboarding, operations, and more." },
    ],
    signInLabel: "Sign in",
    signUpLabel: "Create Account",
    dashboardLabel: "Dashboard",
    githubLink: { href: "https://github.com/chiragdodiya", ariaLabel: "View CoreCRM on GitHub" },
  },
};

export function getHomeContent(): HomeContent {
  return defaultHomeContent;
}