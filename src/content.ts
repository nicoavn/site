export type SocialLink = {
  label: string;
  href: string;
};

export type Highlight = {
  title: string;
  body: string;
};

export type SkillGroup = {
  label: string;
  items: string[];
};

export type CaseStudyClient = {
  name: string;
  body: string;
};

export type CaseStudy = {
  id: string;
  featured?: boolean;
  company: string;
  location: string;
  role: string;
  dates: string;
  narrative: string;
  outcomes: string[];
  stack: string[];
  clients?: CaseStudyClient[];
};

export type TimelineItem = {
  company: string;
  role: string;
  dates: string;
  summary: string;
};

export type EducationItem = {
  credential: string;
  school: string;
  dates: string;
};

export const site = {
  name: "Alvin Durán",
  title: "Senior Full Stack & AI Integrations Engineer",
  location: "Santo Domingo Este, Dominican Republic",
  availability: "Available immediately · Open to remote (US/EU)",
  url: "https://alvinduran.com",
  email: "nicoavn@gmail.com",
  resumeHref: "/Alvin_Duran_Resume.pdf",
  github: "https://github.com/nicoavn",
  linkedin: "https://www.linkedin.com/in/alvinod",
  description:
    "Senior Full Stack Engineer with 10+ years building enterprise web platforms, data pipelines, and AI/LLM orchestration for U.S. companies.",
} as const;

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#resume" },
] as const;

export const socials: SocialLink[] = [
  { label: "Email", href: `mailto:${site.email}` },
  { label: "LinkedIn", href: site.linkedin },
  { label: "GitHub", href: site.github },
];

export const summary =
  "Senior Full Stack Engineer with 10+ years of experience architecting enterprise web platforms, data pipelines, and internal tools for U.S. companies across SaaS, Fintech, E-commerce, and Manufacturing. Specialized in Python (Django/Flask), TypeScript/React, cloud infrastructure (AWS/Docker), and modern AI/LLM orchestration. Proven track record of operationalizing AI solutions—utilizing LangChain, LLMs, and automated pipelines to transform raw unstructured data into high-value business logic.";

export const highlights: Highlight[] = [
  {
    title: "LLM-powered automation",
    body: "Integrated LangChain and LLM-driven tooling into core e-commerce backend pipelines to automate product categorization, unstructured attribute normalization, and intelligent category inference.",
  },
  {
    title: "Scalable data pipelines",
    body: "Engineered high-throughput scraping and synchronization services handling high concurrency (500+ active enterprise users, bulk imports, and real-time inventory management).",
  },
  {
    title: "AI-assisted engineering",
    body: "Early adopter of AI developer tooling (Cursor, AI agents) to accelerate feature delivery, refactoring, and test writing across complex codebases.",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "sunco",
    featured: true,
    company: "Sunco.com",
    location: "U.S.",
    role: "Senior Software Engineer",
    dates: "Nov 2024 – Present",
    narrative:
      "Architected e-commerce backend integrations and internal orchestration platforms, then operationalized LLMs inside catalog workflows so multi-vendor product data could be categorized, normalized, and kept in sync with Amazon and Shopify.",
    outcomes: [
      "Spearheaded LangChain integrations for intelligent product categorization, automated attribute normalization, and category inference across multi-vendor catalogs.",
      "Built automated pipelines synchronizing Amazon and Shopify for high-volume bulk imports, real-time pricing updates, and operational reporting.",
      "Overhauled web scraping and import pipelines and implemented new Shopify GraphQL APIs to improve operational reliability.",
    ],
    stack: [
      "Django",
      "Celery",
      "Docker",
      "AWS",
      "PostgreSQL",
      "LangChain",
      "Shopify GraphQL",
      "Amazon SP-API",
    ],
  },
  {
    id: "fullstack-labs",
    company: "FullStack Labs",
    location: "U.S.",
    role: "Senior Full Stack Engineer (Consultant)",
    dates: "Feb 2023 – Nov 2024",
    narrative:
      "Shipped frontend and backend work for U.S. product teams across lending and integration-heavy clients—modular UI, OpenAPI services, and automated test suites.",
    outcomes: [],
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Koa",
      "OpenAPI 3",
      "Storybook",
      "Playwright",
      "Cypress",
      "Alembic",
    ],
    clients: [
      {
        name: "Bass Credit Union",
        body: "Engineered core frontend and backend services for a B2B lending portal using React, TypeScript, Node.js (Koa), and OpenAPI 3. Built modular UI components in Storybook.",
      },
      {
        name: "Studproof & marketplace clients",
        body: "Developed asynchronous backend services, integration suites (Playwright, Cypress), and Google Photos SDK workflows. Managed database migrations via Alembic.",
      },
    ],
  },
  {
    id: "circular",
    company: "Circular.co",
    location: "U.S.",
    role: "Senior Full Stack Engineer",
    dates: "Feb 2023 – Nov 2024",
    narrative:
      "Developed B2B marketplace functionality connecting recycled plastics suppliers and buyers, spanning the React/TypeScript frontend and Python/Django backend.",
    outcomes: [],
    stack: ["React", "TypeScript", "Python", "Django"],
  },
  {
    id: "level12",
    company: "Level12",
    location: "U.S.",
    role: "Full Stack Developer",
    dates: "Oct 2021 – Feb 2023",
    narrative:
      "Built the core application engine for How2Recycle—complex product configuration, packaging sustainability logic, and custom XLSX reporting—paired with resilient APIs and a React UI.",
    outcomes: [
      "Developed RESTful APIs with Python/Keg (Flask) and PostgreSQL, paired with React, MobX, and SCSS.",
      "Implemented Stripe payment processing, role-based access control, authentication, and asynchronous notification queues.",
    ],
    stack: [
      "Python",
      "Keg",
      "Flask",
      "PostgreSQL",
      "React",
      "MobX",
      "SCSS",
      "Stripe",
    ],
  },
  {
    id: "scalable-path",
    company: "Scalable Path",
    location: "U.S.",
    role: "Full Stack Developer",
    dates: "Feb 2020 – Oct 2021",
    narrative:
      "Scaled and maintained U.S. nationwide hiring and healthcare staffing products, including a legacy frontend migration and Elasticsearch-backed search with complex faceted filtering.",
    outcomes: [],
    stack: [
      "PHP",
      "Laravel",
      "Elasticsearch",
      "MySQL",
      "React",
      "AngularJS",
    ],
    clients: [
      {
        name: "LiquidCompass",
        body: "Managed scaling and maintenance for a U.S. nationwide job search platform using PHP/Laravel, Elasticsearch, MySQL, and React. Led the frontend legacy migration from AngularJS to React.",
      },
      {
        name: "VMS (Healthcare Staffing)",
        body: "Developed a B2B order and contingent workforce management system featuring Elasticsearch full-text search and complex faceted filtering.",
      },
    ],
  },
  {
    id: "encore",
    company: "Encore Repair Services, Inc.",
    location: "U.S.",
    role: "Senior Software Developer",
    dates: "Aug 2016 – Feb 2020",
    narrative:
      "Built a mission-critical manufacturing execution system that powered plant operations, then bridged shop-floor hardware into the application layer with a low-latency C# client.",
    outcomes: [
      "MES used by 500+ concurrent employees on the plant floor.",
      "Low-latency bridge connecting scanners, printers, and Windows/Apple devices to a Django REST API using C# (MVVM), MySQL, and SQL Server.",
    ],
    stack: ["Django", "C#", "MVVM", "MySQL", "SQL Server"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: "AI, automation & data",
    items: [
      "LangChain",
      "LLMs (GPT/Claude)",
      "Cursor",
      "Attribute normalization",
      "Category inference",
      "Data scraping",
      "Asynchronous data pipelines",
    ],
  },
  {
    label: "Backend",
    items: [
      "Python (Django, Flask, Keg)",
      "Node.js (Koa, Express)",
      "C# (.NET/ASP.NET)",
      "Celery",
      "REST APIs",
      "GraphQL",
      "OpenAPI 3",
      "Alembic",
    ],
  },
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Vue.js",
      "AngularJS",
      "MobX",
      "Storybook",
      "Fomantic UI",
      "Reactstrap",
      "SCSS",
    ],
  },
  {
    label: "Cloud & databases",
    items: ["AWS", "Docker", "PostgreSQL", "MySQL", "SQL Server", "Elasticsearch"],
  },
  {
    label: "E-commerce & financial",
    items: [
      "Shopify API",
      "Stripe",
      "Amazon SP-API workflows",
      "B2B marketplaces",
    ],
  },
  {
    label: "Testing & QA",
    items: ["Playwright", "Cypress", "Unit & integration testing"],
  },
];

export const timeline: TimelineItem[] = [
  {
    company: "Sunco.com",
    role: "Senior Software Engineer",
    dates: "Nov 2024 – Present",
    summary:
      "E-commerce orchestration, LLM catalog pipelines, Amazon/Shopify sync.",
  },
  {
    company: "Circular.co",
    role: "Senior Full Stack Engineer",
    dates: "Feb 2023 – Nov 2024",
    summary:
      "B2B marketplace connecting recycled plastics suppliers and buyers.",
  },
  {
    company: "FullStack Labs",
    role: "Senior Full Stack Engineer (Consultant)",
    dates: "Feb 2023 – Nov 2024",
    summary: "B2B lending portal and integration suites.",
  },
  {
    company: "Level12",
    role: "Full Stack Developer",
    dates: "Oct 2021 – Feb 2023",
    summary: "How2Recycle engine, Stripe, RBAC, and async notifications.",
  },
  {
    company: "Scalable Path",
    role: "Full Stack Developer",
    dates: "Feb 2020 – Oct 2021",
    summary: "LiquidCompass scale-up and VMS search/filtering.",
  },
  {
    company: "Encore Repair Services",
    role: "Senior Software Developer",
    dates: "Aug 2016 – Feb 2020",
    summary: "Plant-floor MES for 500+ concurrent users and hardware bridge.",
  },
];

export const education: EducationItem[] = [
  {
    credential: "Bachelor of Science in Computer Science",
    school: "Instituto Tecnológico de Santo Domingo",
    dates: "2014 – 2018",
  },
  {
    credential: "Associate’s Degree in Software Engineering",
    school: "ITLA",
    dates: "2010 – 2012",
  },
];

export const certification =
  "Oracle Certified Associate, Java SE 7 Programmer";

export const languages = [
  { name: "English", level: "Professional working proficiency" },
  { name: "Spanish", level: "Native" },
] as const;
