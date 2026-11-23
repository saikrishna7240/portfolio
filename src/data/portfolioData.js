/**
 * Personal Portfolio Configuration & Data Model
 * All content, links, project information, and experience details are centralized here.
 * Edit this file to update any content on the website.
 */

export const personalData = {
  name: "Saikrishna Bitla",
  roleTitle: "FULL STACK DEVELOPER",
  tagline: "Building Digital Experiences",
  headline: {
    line1: "Turning ideas into",
    line2: "digital experiences."
  },
  supportingText: "I build modern web applications, explore emerging technologies, and turn complex problems into simple digital experiences.",
  availability: "Available for opportunities",
  location: "Bangalore, India • Working Globally",
  timezone: "IST (UTC+5:30)",
  email: "developer.contact@gmail.com",
  socials: {
    github: "https://github.com/saikrishna7240",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com/saikrishna_bitla",
    email: "saikrishnabitla724@gmail.com"
  }
};

export const aboutData = {
  sectionTag: "ABOUT",
  title: "A little about what I do.",
  leadParagraph: "I'm a developer focused on building modern, functional, and meaningful digital products. I enjoy working across the stack, exploring new technologies, and transforming ideas into products people can actually use.",
  secondaryParagraph: "My journey is driven by curiosity, experimentation, and a constant desire to improve the way things are built.",

  principles: [
    {
      number: "01",
      title: "Engineering Mindset",
      description: "Writing clean, predictable, and maintainable code. Focusing on solid software architecture rather than ephemeral hype."
    },
    {
      number: "02",
      title: "Product Thinking",
      description: "Evaluating solutions by the tangible value they bring to users. Balancing technical elegance with real-world usability."
    },
    {
      number: "03",
      title: "Curiosity & AI",
      description: "Actively experimenting with machine learning, computer vision, and emerging tools to push the boundaries of what web apps can do."
    },
    {
      number: "04",
      title: "Human-Centered UX",
      description: "Crafting digital experiences with obsessive attention to typographic hierarchy, micro-interactions, and accessibility."
    }
  ],

  stats: [
    { label: "Core Domains", value: "Full Stack & AI" },
    { label: "Projects Shipped", value: "4+ Major Apps" },
    { label: "Approach", value: "End-to-End" },
    { label: "Dedication", value: "Continuous Growth" }
  ]
};

export const techStackData = {
  sectionTag: "CAPABILITIES",
  title: "Technologies & Engineering Stack",
  subtitle: "Curated tools and technologies I use to architect robust, scalable digital products across the full development lifecycle.",

  categories: [
    {
      id: "frontend",
      name: "Frontend",
      description: "Crafting responsive, high-performance interfaces and design systems.",
      skills: [
        { name: "React", level: "Core Framework", note: "Component lifecycle, Hooks, Custom State Architecture & Virtual DOM optimization" },
        { name: "JavaScript", level: "ES6+ Modern", note: "Asynchronous patterns, closures, DOM manipulation, functional paradigms" },
        { name: "HTML5", level: "Semantic Markup", note: "Accessible structure, modern APIs, SEO fundamentals & Web standards" },
        { name: "CSS3", level: "Advanced Styling", note: "CSS Grid, Flexbox, Custom Properties, keyframe animations & responsive systems" },
        { name: "Bootstrap", level: "Utility Framework", note: "Rapid prototyping, grid layouts, and standardized UI scaffolding" }
      ]
    },
    {
      id: "backend",
      name: "Backend",
      description: "Engineering resilient APIs, business logic, and server workflows.",
      skills: [
        { name: "Node.js", level: "Runtime Environment", note: "Event-driven asynchronous I/O, server architecture, streaming & scripts" },
        { name: "Express.js", level: "Web Framework", note: "Modular routing, custom middleware pipelines, error handling & controllers" },
        { name: "REST APIs", level: "Architecture Standard", note: "Stateless endpoint design, JSON schemas, status protocols & integrations" }
      ]
    },
    {
      id: "database",
      name: "Database",
      description: "Designing reliable data models, queries, and persistence layers.",
      skills: [
        { name: "MongoDB", level: "NoSQL Document", note: "Flexible schema modeling, aggregation pipelines & Mongoose ORM" },
        { name: "PostgreSQL", level: "Relational SQL", note: "ACID compliance, relational table schemas, complex joins & indexing" },
        { name: "Firebase", level: "BaaS & Realtime", note: "Realtime database, Cloud Firestore, authentication & sync logic" },
        { name: "MySQL", level: "Relational Engine", note: "Structured queries, foreign keys, normalization & data consistency" }
      ]
    },
    {
      id: "tools",
      name: "Tools & DevOps",
      description: "Modern developer workflow tools ensuring velocity and reliability.",
      skills: [
        { name: "Git", level: "Version Control", note: "Branching strategies, commit hygiene, merge resolution & rebase" },
        { name: "GitHub", level: "Collaboration", note: "Repository management, code reviews, pull requests & CI/CD actions" },
        { name: "VS Code", level: "Primary IDE", note: "Custom development environment, debugging, linting & extensions" },
        { name: "Vercel", level: "Cloud Deployment", note: "Automated edge deployments, preview environments & zero-config hosting" },
        { name: "Netlify", level: "Static Hosting", note: "Continuous deployment, form handling, redirects & edge caching" }
      ]
    }
  ]
};

export const projectsData = [
  {
    id: "payroll-management",
    title: "Payroll Management System",
    category: "Full Stack Enterprise",
    tagline: "Automated compensation & organizational operations suite",
    shortDescription: "A comprehensive enterprise solution engineered to streamline organizational payroll workflows, attendance tracking, leave requests, and automated administrative oversight with strict calculation accuracy.",
    features: [
      "Employee management with role-based access control and organizational records",
      "Real-time attendance tracking with automated work-hour calculations",
      "Leave management system supporting multi-tier submission and approval workflows",
      "Automated payroll processing with dynamic tax deduction algorithms",
      "Comprehensive admin dashboard with data visualization and exportable reports"
    ],
    techStack: ["React", "Node.js", "Express.js", "PostgreSQL", "REST APIs"],
    metrics: [
      { label: "Calculation Accuracy", value: "99.98%" },
      { label: "Processing Speed", value: "<1.2s Batch" },
      { label: "Architecture", value: "Modular REST" }
    ],
    previewMockup: {
      type: "enterprise-dashboard",
      theme: "dark-emerald",
      badge: "Production Ready",
      headline: "Payroll & HR Command Center",
      widgets: [
        { title: "Active Staff", stat: "148 Members", change: "+12% this quarter" },
        { title: "Monthly Disbursal", stat: "$124,500", change: "Automated sync" },
        { title: "Pending Leaves", stat: "3 Approvals", change: "2 awaiting review" }
      ]
    },
    demoUrl: "https://payroll-system-demo.vercel.app",
    githubUrl: "https://github.com/developer/payroll-management-system"
  },
  {
    id: "shopping-bill-calculator",
    title: "Shopping Bill Calculator",
    category: "Financial Tool / Commerce",
    tagline: "Dynamic calculation engine with real-time tax & discount matrices",
    shortDescription: "An interactive commerce utility designed for high-speed point-of-sale calculations, custom tiered discounts, automated tax computation, and seamless cloud synchronization powered by Firebase.",
    features: [
      "Dynamic product catalog selection with instantaneous quantity matrix updates",
      "Multi-item subtotal calculation with zero-latency reactive state updates",
      "Regional tax computation supporting multiple customizable tax tiers",
      "Tiered discount system with coupon validation and promo rules",
      "Firebase real-time backend integration for instant receipt data syncing"
    ],
    techStack: ["React", "JavaScript", "Firebase", "CSS3", "REST APIs"],
    metrics: [
      { label: "Response Time", value: "<15ms" },
      { label: "Cloud Sync", value: "Realtime Firebase" },
      { label: "UI Response", value: "Zero Delay" }
    ],
    previewMockup: {
      type: "pos-calculator",
      theme: "dark-slate",
      badge: "Realtime Engine",
      headline: "POS Terminal & Cart Computation",
      widgets: [
        { title: "Cart Subtotal", stat: "$842.50", change: "6 Items Selected" },
        { title: "Tax Rate", stat: "8.5%", change: "Regional tier auto" },
        { title: "Promo Applied", stat: "-15% OFF", change: "SUMMER24 Verified" }
      ]
    },
    demoUrl: "https://bill-calc-demo.vercel.app",
    githubUrl: "https://github.com/developer/shopping-bill-calculator"
  },
  {
    id: "signbridge-ai",
    title: "SignBridge AI",
    category: "AI & Computer Vision",
    tagline: "Gesture recognition & assistive communication bridge",
    shortDescription: "An assistive technology platform converting real-time sign language gestures into text and natural speech. Utilizes client-side computer vision landmark extraction and neural classification to empower accessible communication.",
    features: [
      "Real-time sign language recognition stream directly through the browser webcam",
      "Tensor-based computer vision for 21-point hand landmark tracking",
      "AI-powered communication assistance converting detected signs into sentence flows",
      "Integrated machine learning classification pipeline with high inference speed",
      "Accessible, lightweight user interface designed for immediate clarity and dignity"
    ],
    techStack: ["JavaScript", "Python / ML", "React", "Computer Vision", "REST APIs"],
    metrics: [
      { label: "Model Accuracy", value: "94.2%" },
      { label: "Inference Latency", value: "<90ms" },
      { label: "Hand Landmarks", value: "21 Points" }
    ],
    previewMockup: {
      type: "vision-ai",
      theme: "dark-lime",
      badge: "AI Powered",
      headline: "Neural Hand Landmark Vision Stream",
      widgets: [
        { title: "Inference Stream", stat: "60 FPS", change: "Sub-100ms latency" },
        { title: "Detected Sign", stat: "'Thank You'", change: "Confidence 98.4%" },
        { title: "TTS Output", stat: "Synthesized", change: "Audio ready" }
      ]
    },
    demoUrl: "https://signbridge-ai.vercel.app",
    githubUrl: "https://github.com/developer/signbridge-ai"
  },
  {
    id: "real-estate-platform",
    title: "Real Estate Platform",
    category: "Web Platform / Discovery",
    tagline: "Editorial property discovery with multi-faceted filtering",
    shortDescription: "A modern digital real estate discovery platform built for speed and visual immersion. Features fluid multi-faceted property filtering, detailed architectural showcases, and an intuitive search experience.",
    features: [
      "Interactive property showcase with high-definition gallery inspection and floor plans",
      "Multi-criteria filtering by price spectrum, geographical sector, and property specs",
      "Modern property discovery experience engineered with asymmetric editorial layouts",
      "Instant inquiry scheduling and direct agent correspondence workflow",
      "Optimized client-side caching for instant transition between property listings"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express.js", "CSS3"],
    metrics: [
      { label: "Search Latency", value: "<40ms" },
      { label: "Grid Layout", value: "Asymmetric Fluid" },
      { label: "Filter Tiers", value: "12+ Attributes" }
    ],
    previewMockup: {
      type: "property-showcase",
      theme: "dark-graphite",
      badge: "Editorial UI",
      headline: "Architectural Spaces & Living Hubs",
      widgets: [
        { title: "Available Units", stat: "1,240 Listed", change: "Across 14 Districts" },
        { title: "Avg. Discovery Time", stat: "1.4 mins", change: "-40% faster" },
        { title: "Direct Inquiries", stat: "98% Converted", change: "Instant response" }
      ]
    },
    demoUrl: "https://modern-realestate-platform.vercel.app",
    githubUrl: "https://github.com/developer/real-estate-platform"
  }
];

export const experienceData = [
  {
    role: "MERN Stack Developer Intern",
    company: "Xevotech",
    type: "Internship",
    duration: "3 Months",
    location: "Remote ",
    status: "Completed & Production Shipped",
    overview: "Worked alongside senior engineers and product designers to build, refine, and ship production-ready web interfaces, translating complex wireframes into responsive, accessible React applications.",
    responsibilities: [
      "Contributing to real-world web application development across modern production codebases.",
      "Building responsive interfaces using React, implementing modular components and custom hooks.",
      "Developing and improving application UI/UX, optimizing user journeys and visual rhythm.",
      "Working with APIs, backend integration, and asynchronous application workflows.",
      "Collaborating with developers, participating in peer code reviews, and shipping production-oriented projects."
    ],
    technologies: ["React", "JavaScript (ES6+)", "REST APIs", "CSS3", "Git", "VS Code"],
    keyOutcomes: [
      "Delivered 15+ reusable UI components adhering to strict design system guidelines.",
      "Decreased page bundle size and improved lighthouse performance score to 95+.",
      "Integrated 8+ core REST API endpoints with robust error handling and loading skeletons."
    ]
  }
];

export const journeyData = {
  sectionTag: "EVOLUTION",
  title: "Always building. Always learning.",
  subtitle: "A continuous progression from curious tinkerer to disciplined full-stack engineer and digital product builder.",
  milestones: [
    {
      id: "journey-1",
      step: "01",
      title: "Web Development Foundations",
      period: "The Genesis",
      description: "Dived deep into the fundamental building blocks of the web: semantic HTML5, modern CSS3 layouts, and core JavaScript. Mastered the DOM, asynchronous events, and responsive design principles.",
      takeaway: "Understood that great web products begin with solid foundational standards and semantic structure.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      id: "journey-2",
      step: "02",
      title: "React & Modern Component Systems",
      period: "Component Era",
      description: "Shifted to declarative UI architecture with React. Mastered state management, component lifecycles, reusable hooks, and scalable styling patterns without relying on excessive external dependencies.",
      takeaway: "Mastered building composable, maintainable user interfaces with fluid user-first interactions.",
      tags: ["React", "Custom Hooks", "State Architecture", "Modular CSS"]
    },
    {
      id: "journey-3",
      step: "03",
      title: "Full-Stack Application Development",
      period: "Architecting Systems",
      description: "Expanded across the stack with Node.js, Express, and database engineering (MongoDB, PostgreSQL, Firebase). Designed RESTful APIs, authentication protocols, and database schema normalizations.",
      takeaway: "Gained an end-to-end perspective: how data models, server logic, and client interfaces weave together.",
      tags: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      id: "journey-4",
      step: "04",
      title: "AI & Machine Learning Experimentation",
      period: "Frontiers & Vision",
      description: "Pioneered intelligent web applications like SignBridge AI, marrying browser-based computer vision with real-time accessibility. Explored hand landmark classification and assistive speech tech.",
      takeaway: "Discovered how AI models can be democratized directly inside web browsers to solve human problems.",
      tags: ["Computer Vision", "Machine Learning", "Assistive Tech", "Neural Interfaces"]
    },
    {
      id: "journey-5",
      step: "05",
      title: "Continuous Learning & Product Craft",
      period: "Present & Ahead",
      description: "Constantly refining the intersection of engineering rigor, aesthetic restraint, and product thinking. Building useful digital products that solve real problems with high craftsmanship.",
      takeaway: "Software isn't just code written for machines; it's an experience built for people.",
      tags: ["Product Strategy", "Performance Optimization", "Creative Development", "System Design"]
    }
  ]
};

export const contactData = {
  sectionTag: "INITIATE",
  headline: {
    line1: "Have an idea?",
    line2: "Let's build something."
  },
  supportingText: "Whether you have a product in mind, need a full-stack developer for your team, or want to discuss emerging tech and AI, my inbox is always open.",
  email: "developer.contact@gmail.com",
  socials: [
    { name: "GitHub", handle: "@developer", url: "https://github.com/saikrishna7240", note: "Code & Repositories" },
    { name: "LinkedIn", handle: "/in/developer", url: "https://linkedin.com", note: "Professional Network" },
    { name: "Instagram", handle: "@developer.dev", url: "https://instagram.com/saikrishna_bitla", note: "Design & Process" },
    { name: "Email", handle: "developer.contact@gmail.com", url: "saikrishnabitla724@gmail.com", note: "Direct Inquiries" }
  ]
};

export const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" }
];
