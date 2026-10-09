export type ImageAsset = { src: string; width: number; height: number; alt: string };
export type Photo = ImageAsset & { caption: string; category?: string };

export const profile = {
  name: "Dhwanil Bhavsar",
  firstName: "Dhwanil",
  initials: "DB",
  role: "Product Growth Engineer · Cybersecurity Enthusiast · Community Builder",
  headline: "Building Products. Exploring Security. Capturing Stories.",
  primaryHeadline: "Product Growth Engineer. Cybersecurity Enthusiast. Community Builder.",
  city: "Indore",
  state: "Madhya Pradesh",
  country: "India",
  location: "Indore, India",
  timeZone: "Asia/Kolkata",
  tzLabel: "IST",
  utcOffset: "UTC+5:30",
  coords: { latitude: 22.7196, longitude: 75.8577 }, // Coordinates for Indore, Madhya Pradesh
  email: "dhwanilb8@gmail.com",
  websiteUrl: "https://dhwnil-portfolio.vercel.app/",
  linkedinUrl: "https://www.linkedin.com/in/dhwanilll/",
  mediumUrl: "https://medium.com/@dhwanill",
  twitterUrl: "https://x.com/dhwanillll",
  photographyIgUrl: "https://www.instagram.com/starrry.lens/?hl=hi",
  personalIgUrl: "https://www.instagram.com/_dhwanil__/?hl=hi",
  sessionizeUrl: "https://sessionize.com/dhwanil-bhavsar",
  githubUrl: "https://github.com/dhwanill",
  camera: "Sony A6000",
  photoBrand: "@starrry.lens",
  resumeUrl: "https://www.linkedin.com/in/dhwanilll/",
  publicRepos: 18,
  portrait: {
    src: "/images/Dhwnil1.jpeg",
    width: 720,
    height: 1217,
    alt: "Dhwanil Bhavsar — Product Growth Engineer, Cybersecurity Enthusiast & Community Builder",
  },
  secondaryPortrait: {
    src: "/images/Dhwnil2.jpeg",
    width: 720,
    height: 1102,
    alt: "Dhwanil Bhavsar — Community Leader & Speaker",
  },
  bio: [
    "I’m Dhwanil Bhavsar, a product growth professional, cybersecurity enthusiast, and community builder based in Indore, India. I work at the intersection of product engineering, SaaS, AI-powered automation, application security, and developer communities.",
    "Beyond software and product strategy, I lead community initiatives like The Hackers Meetup Indore (600+ members), mentor students at SVVV, and explore visual storytelling and astrophotography through my lens (@starrry.lens) with a Sony A6000.",
    "I believe in thoughtful product design, practical engineering, responsible security, and bringing tech communities together to learn and build in the open.",
  ],
} as const;

export type SocialKey = "github" | "linkedin" | "x" | "instagram" | "medium" | "sessionize" | "email";
export type Social = { id: string; key: SocialKey; label: string; href: string; external: boolean };

export const socials: Social[] = [
  { id: "github", key: "github", label: "GitHub", href: "https://github.com/dhwanill", external: true },
  { id: "linkedin", key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/dhwanilll/", external: true },
  { id: "medium", key: "medium", label: "Medium", href: "https://medium.com/@dhwanill", external: true },
  { id: "x", key: "x", label: "X / Twitter", href: "https://x.com/dhwanillll", external: true },
  { id: "instagram-breakingbyte", key: "instagram", label: "Breaking Byte (@breaking.byte)", href: "https://www.instagram.com/breaking.byte", external: true },
  { id: "instagram-viasocket", key: "instagram", label: "viaSocket (@viasocket)", href: "https://www.instagram.com/viasocket/", external: true },
  { id: "instagram-photography", key: "instagram", label: "Photography (@starrry.lens)", href: "https://www.instagram.com/starrry.lens/?hl=hi", external: true },
  { id: "sessionize", key: "sessionize", label: "Sessionize", href: "https://sessionize.com/dhwanil-bhavsar", external: true },
  { id: "email", key: "email", label: "Email (dhwanilb8@gmail.com)", href: "mailto:dhwanilb8@gmail.com", external: true },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "community", label: "Community" },
  { id: "writing", label: "Writing" },
  { id: "photography", label: "Photography" },
  { id: "contact", label: "Contact" },
] as const;

export const greetings = ["Hello,", "Namaste,", "Hey,", "Ciao,"] as const;

export const skills = [
  "Product Management",
  "Product Growth",
  "SaaS Workflows",
  "AI Agents",
  "Workflow Automation",
  "Generative AI",
  "Ethical Hacking",
  "OSINT",
  "Threat Intelligence",
  "Application Security",
  "Network Forensics",
  "Python",
  "TensorFlow",
  "JavaScript",
  "Phaser 3",
  "Godot 4",
  "GDScript",
  "viaSocket",
  "50Agents",
  "Apache OFBiz",
  "Google Gemini",
] as const;

export type Skill = (typeof skills)[number];

export const skillCategories = [
  {
    category: "Product & Growth",
    description: "Engineering-led growth, adoption strategy, SaaS workflows, and product positioning.",
    items: ["Product Management", "Product Growth", "Product-Market Fit", "SaaS Workflows", "Product Operations", "Technical Documentation", "Product Positioning"],
  },
  {
    category: "AI & Automation",
    description: "Autonomous task agents, workflow orchestrations, and practical generative AI.",
    items: ["AI Agents", "Workflow Automation", "Generative AI", "AI-Assisted Productivity", "viaSocket", "50Agents", "GTWY.AI", "Google Gemini"],
  },
  {
    category: "Cybersecurity",
    description: "Security research, threat intelligence, ethical hacking, and risk awareness.",
    items: ["Ethical Hacking", "OSINT", "Threat Intelligence", "Application Security", "Network Forensics", "Security Awareness", "OWASP Top 10"],
  },
  {
    category: "Development & Tools",
    description: "Hands-on languages, game engines, framework integrations, and platforms.",
    items: ["Python", "TensorFlow", "JavaScript", "Phaser 3", "Godot 4", "GDScript", "Apache OFBiz", "SaaS Integrations"],
  },
] as const;

/* ------------------------------------------------------------------ */
/*  About & Narrative                                                 */
/* ------------------------------------------------------------------ */

export const aboutStory: string[] = [
  "I’m Dhwanil — a **Product Growth Engineer, cybersecurity enthusiast, and community builder** from Indore. My work connects **product engineering, SaaS growth, AI automation, and security**, focusing on how technology scales and serves real people.",
  "At **Walkover**, I work on engineering-led product growth, SaaS integrations with viaSocket, AI agents, and product optimization. Previously, I contributed to product marketing at **HotWax Systems** (Apache OFBiz) and platform operations at **47Billion**.",
  "Beyond the keyboard, I co-lead **The Hackers Meetup Indore** (600+ members), organize developer workshops, write about tech on **Medium**, and explore visual storytelling through astrophotography with my **Sony A6000** under **@starrry.lens**.",
];

export const aboutTldr: { emoji: string; text: string }[] = [
  { emoji: "🚀", text: "Product Growth Engineer at **Walkover** (viaSocket, AI agents, SaaS integrations)." },
  { emoji: "🛡️", text: "Cybersecurity enthusiast & speaker — **OSINT**, ethical hacking, appsec, threat intel." },
  { emoji: "👥", text: "Co-Lead of **The Hackers Meetup Indore** (600+ members) & campus tech mentor." },
  { emoji: "✍️", text: "Technical writer on **Medium** (@dhwanill) covering AI security & product strategy." },
  { emoji: "📸", text: "Photographer & visual storyteller (**@starrry.lens**) — Sony A6000 & astrophotography." },
  { emoji: "🎓", text: "B.Tech in Computer Science (Info & Cyber Security) at **SVVV, Indore**." },
];

export type TimelineEntry = {
  date: string;
  company: string;
  title: string;
  body: string;
  badge?: string;
  current?: boolean;
};

export const timeline: TimelineEntry[] = [
  {
    date: "Feb 2026 — Present",
    company: "Walkover",
    title: "Product Growth Engineer",
    body: "Driving engineering-led product growth, SaaS integrations, product-market fit optimizations, viaSocket automation features, and technical evaluation.",
    badge: "Current Role",
    current: true,
  },
  {
    date: "Jan — Feb 2026",
    company: "HotWax Systems",
    title: "Product Marketing Associate",
    body: "Worked with B2B SaaS workflows, Apache OFBiz architecture, technical documentation, product positioning, and developer guides.",
    badge: "B2B SaaS",
  },
  {
    date: "Sep — Dec 2025",
    company: "47Billion",
    title: "Product & Platform Operations Associate",
    body: "Streamlined internal platform workflows, multi-stack operational efficiency, AI-powered platform evaluation, student engagement, and automation tools.",
    badge: "Platform Ops",
  },
  {
    date: "Aug 2025 — Mar 2026",
    company: "Google",
    title: "Google Gemini Campus Ambassador",
    body: "Promoted generative AI and Google technologies among students, coordinated interactive workshops, and fostered AI-driven developer adoption.",
    badge: "Community & AI",
  },
  {
    date: "Sep 2025 — Present",
    company: "SVVV",
    title: "Student Placement Coordinator",
    body: "Coordinated corporate campus drives, recruitment presentations, placement documentation, and student-recruiter relations for the Training & Placement Cell.",
    badge: "Leadership",
  },
  {
    date: "Academics",
    company: "SVVV, Indore",
    title: "B.Tech in Computer Science & Cyber Security",
    body: "Specializing in Information and Cyber Security at Shri Vaishnav Vidyapeeth Vishwavidyalaya, Indore.",
    badge: "Education",
  },
];

/* ------------------------------------------------------------------ */
/*  Community & Leadership                                            */
/* ------------------------------------------------------------------ */

export type CommunityRole = {
  name: string;
  role: string;
  stats?: string;
  description: string;
  tags: string[];
  link?: string;
  linkText?: string;
};

export const communityRoles: CommunityRole[] = [
  {
    name: "Breaking Byte",
    role: "Creator & Security Learning Community",
    stats: "@breaking.byte",
    description:
      "Building Breaking Byte — an active cybersecurity and technology learning space breaking down real-world vulnerabilities, ethical hacking fundamentals, and OSINT techniques into byte-sized visual guides.",
    tags: ["Cybersecurity", "Ethical Hacking", "OSINT", "Community"],
    link: "https://www.instagram.com/breaking.byte",
    linkText: "instagram.com/breaking.byte",
  },
  {
    name: "viaSocket Community",
    role: "Product Growth & Automation Ecosystem",
    stats: "@viasocket",
    description:
      "Growing the viaSocket ecosystem by Walkover — championing workflow automation, AI agents, and frictionless SaaS integrations connecting tools and developers.",
    tags: ["viaSocket", "Walkover", "Workflow Automation", "AI Agents"],
    link: "https://www.instagram.com/viasocket/",
    linkText: "instagram.com/viasocket",
  },
  {
    name: "The Hackers Meetup — Indore Chapter",
    role: "Chapter Co-Lead & Co-Host",
    stats: "600+ Members",
    description:
      "Helping lead and scale one of central India's most active cybersecurity communities. Hosting monthly technical meetups, coordinating speakers, and organizing hands-on workshops on application security, network forensics, and threat landscapes.",
    tags: ["Cybersecurity", "AppSec", "Forensics", "Meetups"],
  },
  {
    name: "Abhyudaya Coding Club",
    role: "Mentor and Administravtive Secretary",
    stats: "SVVV Campus",
    description:
      "Mentoring aspiring developers through software design patterns, architectural fundamentals, and real-world project challenges.",
    tags: ["Mentorship", "Algorithms", "Software Design"],
  },
  {
    name: "GDG Cloud Indore",
    role: "Head of Photography & Core Contributor",
    stats: "Developer Ecosystem",
    description:
      "Led visual coverage, photography, cinematography, and social media storytelling for Google Developer Group cloud initiatives and community gatherings.",
    tags: ["GDG", "Cinematography", "Media", "Events"],
  },
  {
    name: "Reliance Foundation",
    role: "Scholar & Student Mentor",
    stats: "Mentorship",
    description:
      "Associated as a scholar and mentor, contributing guidance to junior cohorts and student development programs.",
    tags: ["Scholarship", "Youth Mentorship"],
  },
  {
    name: "BrowserStack Community, Indore",
    role: "Social Media Manager",
    stats: "Developer Engagement",
    description:
      "Managed digital footprint, announcements, and developer engagement initiatives for testing and development communities.",
    tags: ["Community Outreach", "Testing"],
  },
];

/* ------------------------------------------------------------------ */
/*  Articles & Thought Leadership (Medium: @dhwanill)                */
/* ------------------------------------------------------------------ */

export type Article = {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: "Cybersecurity" | "AI Security" | "Product Strategy" | "Tech Careers";
  excerpt: string;
  url: string;
};

export const articles: Article[] = [
  {
    title: "What College Doesn't Teach You About Working in Tech",
    slug: "what-college-doesnt-teach-you",
    date: "October 2026",
    readTime: "5 min read",
    category: "Tech Careers",
    excerpt:
      "Candid reflections on the transition from college classrooms to fast-moving technology companies, startup environments, and the real-world dynamics of shipping products.",
    url: "https://medium.com/@dhwanill",
  },
  {
    title: "What If Apple's Biggest Innovation Was Knowing What to Leave Out?",
    slug: "apples-biggest-innovation-subtraction",
    date: "January 20, 2026",
    readTime: "4 min read",
    category: "Product Strategy",
    excerpt:
      "An exploration of intentional product design, engineering trade-offs, and why the discipline of subtraction creates more iconic user experiences than adding features.",
    url: "https://medium.com/@dhwanill",
  },
  {
    title: "The Anthropic Cyber Espionage Incident: A Turning Point for AI Security",
    slug: "anthropic-cyber-espionage-incident",
    date: "November 26, 2025",
    readTime: "6 min read",
    category: "AI Security",
    excerpt:
      "Analyzing the shifting landscape of threat intelligence, state-sponsored cyber operations targeting artificial intelligence firms, and implications for defensive AI protocols.",
    url: "https://medium.com/@dhwanill",
  },
  {
    title: "Finding Your Path in Cybersecurity: Lessons from Dhawal Shrivastava Sir",
    slug: "lessons-from-dhawal-shrivastava",
    date: "September 19, 2025",
    readTime: "5 min read",
    category: "Cybersecurity",
    excerpt:
      "Reflecting on guidance from seasoned mentors, persistence through technical hurdles, continuous ethical hacking learning, and cultivating community impact.",
    url: "https://medium.com/@dhwanill",
  },
  {
    title: "Exploring OSINT and Threat Intelligence",
    slug: "exploring-osint-threat-intelligence",
    date: "June 2, 2025",
    readTime: "5 min read",
    category: "Cybersecurity",
    excerpt:
      "A breakdown of Open-Source Intelligence workflows: uncovering digital footprints, reconnaissance strategies, and transforming public data into actionable threat intelligence.",
    url: "https://medium.com/@dhwanill",
  },
  {
    title: "Cybersecurity Awareness and Why That Link Might Be Worse Than Your Wi-Fi Password",
    slug: "cybersecurity-awareness-suspicious-links",
    date: "January 6, 2025",
    readTime: "4 min read",
    category: "Cybersecurity",
    excerpt:
      "Why social engineering and deceptive communication vectors present an urgent vulnerability, and practical hygiene habits to protect digital identity.",
    url: "https://medium.com/@dhwanill",
  },
];

/* ------------------------------------------------------------------ */
/*  Certifications & Verified Learning                                */
/* ------------------------------------------------------------------ */

export type Certification = {
  title: string;
  issuer: string;
  year: string;
  verified: boolean;
};

export const certifications: Certification[] = [
  {
    title: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    year: "Verified",
    verified: true,
  },
  {
    title: "Microsoft Azure Data Fundamentals",
    issuer: "Microsoft",
    year: "Verified",
    verified: true,
  },
  {
    title: "Introduction to Generative AI & Responsible AI",
    issuer: "Google Cloud Skills Boost",
    year: "Verified",
    verified: true,
  },
  {
    title: "TryHackMe Advent of Cyber",
    issuer: "TryHackMe",
    year: "Hands-on Security",
    verified: true,
  },
  {
    title: "OWASP Top 10 & Application Security",
    issuer: "Security Research Curriculum",
    year: "Knowledge Area",
    verified: true,
  },
  {
    title: "Social Engineering & Defensive Awareness",
    issuer: "Security Domain",
    year: "Knowledge Area",
    verified: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Photography — Starrry Lens (@starrry.lens · Sony A6000)           */
/* ------------------------------------------------------------------ */

export const photographyStyles = [
  { name: "Light Painting", desc: "Long-exposure night experimentation and light-trail compositions." },
  { name: "Astrophotography", desc: "Moon phases, nocturnal skyscapes, and astronomical frames." },
  { name: "Wildlife", desc: "Patient natural captures and biodiversity moments." },
  { name: "Cinematic Street", desc: "Urban geometry, golden hour, and candid human rhythm." },
  { name: "Heritage & Architecture", desc: "Ancient stones, intricate carvings, and historic monuments." },
] as const;

export const gallery: Photo[] = [
  {
    src: "/images/photography/1.jpg",
    width: 1200,
    height: 800,
    alt: "Captivating photography capture by Dhwanil Bhavsar — Starrry Lens",
    caption: "golden hour light · @starrry.lens",
    category: "Cinematic",
  },
  {
    src: "/images/photography/2.jpg",
    width: 1440,
    height: 1800,
    alt: "Stunning visual storytelling — Sony A6000 capture",
    caption: "nocturnal framing · starry skies",
    category: "Astrophotography",
  },
  {
    src: "/images/photography/3.jpg",
    width: 1440,
    height: 960,
    alt: "Visual depth and perspective — Starrry Lens exploration",
    caption: "perspective & horizon · Sony A6000",
    category: "Landscape",
  },
  {
    src: "/images/photography/4.jpg",
    width: 1440,
    height: 1800,
    alt: "Atmospheric mood capture — visual storytelling",
    caption: "ambient tones & quiet frames",
    category: "Street",
  },
  {
    src: "/images/photography/5.jpg",
    width: 1440,
    height: 1641,
    alt: "Architectural and natural geometries in focus",
    caption: "natural geometries & shadows",
    category: "Heritage",
  },
  {
    src: "/images/photography/6.jpg",
    width: 1440,
    height: 1806,
    alt: "High-contrast dynamic frame — Starrry Lens",
    caption: "light & motion · slow shutter",
    category: "Light Painting",
  },
  {
    src: "/images/photography/7.jpg",
    width: 1440,
    height: 1920,
    alt: "Expressive visual detail — Starrry Lens collection",
    caption: "stillness in frame · @starrry.lens",
    category: "Cinematic",
  },
];

export const aboutPolaroids: Photo[] = [
  {
    src: "/images/Dhwnil2.jpeg",
    width: 720,
    height: 1102,
    alt: "Dhwanil Bhavsar",
    caption: "saying hello! ✌️",
    category: "Portraits",
  },
  {
    src: "/images/events/1.jpg",
    width: 1080,
    height: 810,
    alt: "The Hackers Meetup Indore",
    caption: "community in action 🤝",
    category: "Community",
  },
  {
    src: "/images/events/4.jpg",
    width: 1024,
    height: 1536,
    alt: "Dhwanil speaking at campus seminar",
    caption: "sharing stories on stage 🎙️",
    category: "Speaking",
  },
  {
    src: "/images/photography/2.jpg",
    width: 1440,
    height: 1800,
    alt: "Nocturnal capture by Dhwanil",
    caption: "through my lens ✨",
    category: "Photography",
  },
];

/* ------------------------------------------------------------------ */
/*  Events, Workshops & Seminars                                      */
/* ------------------------------------------------------------------ */

export type EventPhoto = {
  src: string;
  width: number;
  height: number;
  alt: string;
  title: string;
  category: "Meetups" | "Workshops" | "Seminars" | "Speaking";
  badge: string;
};

export const eventPhotos: EventPhoto[] = [
  {
    src: "/images/events/1.jpg",
    width: 1080,
    height: 810,
    alt: "The Hackers Meetup Indore chapter session",
    title: "The Hackers Meetup — Indore Chapter",
    category: "Meetups",
    badge: "THM Indore",
  },
  {
    src: "/images/events/2.jpg",
    width: 1080,
    height: 1440,
    alt: "Keynote presentation on stage at technology conference",
    title: "Keynote & Security Awareness",
    category: "Speaking",
    badge: "Keynote",
  },
  {
    src: "/images/events/3.jpg",
    width: 800,
    height: 533,
    alt: "Hands-on cybersecurity and product workshop",
    title: "Hands-on Security & OSINT Workshop",
    category: "Workshops",
    badge: "Hands-on Lab",
  },
  {
    src: "/images/events/4.jpg",
    width: 1024,
    height: 1536,
    alt: "Dhwanil addressing university audience on cybersecurity and AI",
    title: "Campus Technology & Career Seminar",
    category: "Seminars",
    badge: "Tech Seminar",
  },
  {
    src: "/images/events/5.jpg",
    width: 800,
    height: 533,
    alt: "Community members collaborating during developer gathering",
    title: "Developer Community Round Table",
    category: "Meetups",
    badge: "Community",
  },
  {
    src: "/images/events/6.jpg",
    width: 800,
    height: 450,
    alt: "Google Gemini campus session and generative AI demo",
    title: "Google Gemini Campus Ambassador Workshop",
    category: "Workshops",
    badge: "AI Workshop",
  },
  {
    src: "/images/events/7.jpg",
    width: 800,
    height: 533,
    alt: "Interactive audience Q&A session at tech conference",
    title: "Interactive Open Q&A & Threat Intel",
    category: "Seminars",
    badge: "Interactive",
  },
  {
    src: "/images/events/8.jpg",
    width: 800,
    height: 533,
    alt: "The Hackers Meetup Indore community group capture",
    title: "The Hackers Meetup Group Milestone",
    category: "Meetups",
    badge: "600+ Members",
  },
  {
    src: "/images/events/9.jpg",
    width: 800,
    height: 533,
    alt: "Specialized ethical hacking and forensics demonstration",
    title: "Application Security & Threat Landscapes",
    category: "Workshops",
    badge: "AppSec",
  },
  {
    src: "/images/events/10.jpg",
    width: 800,
    height: 450,
    alt: "Auditorium keynote and tech lecture",
    title: "University Auditorium Tech Keynote",
    category: "Seminars",
    badge: "Auditorium",
  },
  {
    src: "/images/events/11.jpg",
    width: 800,
    height: 533,
    alt: "Mentoring student cohort and career development discussion",
    title: "Student Mentorship & Code Guidance",
    category: "Speaking",
    badge: "Mentorship",
  },
  {
    src: "/images/events/12.jpeg",
    width: 720,
    height: 868,
    alt: "Speaker spotlight during community conference",
    title: "Speaker Spotlight & Panel Session",
    category: "Speaking",
    badge: "Speaker",
  },
  {
    src: "/images/events/13.jpeg",
    width: 720,
    height: 866,
    alt: "Panel discussion with industry mentors and developers",
    title: "Product Growth & Automation Ecosystem",
    category: "Meetups",
    badge: "Panel Discussion",
  },
  {
    src: "/images/events/14.jpeg",
    width: 720,
    height: 526,
    alt: "Organizers and core contributors team picture",
    title: "Organizing Team & Community Leads",
    category: "Meetups",
    badge: "Team Leads",
  },
];

/* ------------------------------------------------------------------ */
/*  Featured Projects                                                 */
/* ------------------------------------------------------------------ */

export type TerminalLine = { kind: "cmd" | "out" | "dim" | "accent"; text: string };
export type Badge = { label: string; tone: "achievement" | "featured" };

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  dates: string;
  description: string;
  stack: string[];
  domain: string;
  live: string;
  repo: string;
  logo: { src: string } | { monogram: string };
  cover?: ImageAsset & { crop: string };
  pipeline?: string[];
  badges: Badge[];
  outcomes?: string[];
  underTheHood?: string;
  terminal: { title: string; lines: TerminalLine[] };
};

export const projects: Project[] = [
  {
    slug: "phishnet-sentinel",
    title: "PhishNet Sentinel",
    tagline: "AI-powered real-time phishing detection and communication threat mitigation.",
    dates: "2025 — 2026",
    description:
      "An intelligent threat detection system designed to analyze and neutralize communication-based threats in real time. It examines URL structures, domain lexical patterns, and message vectors using machine learning classifiers and heuristic security checks to block malicious attempts before compromise.",
    stack: ["Python", "TensorFlow", "Scikit-Learn", "OSINT Tooling", "Threat Intelligence", "FastAPI"],
    domain: "phishnet.dhwanil.dev",
    live: "https://dhwanilbhavsar.vercel.app/",
    repo: "https://github.com/dhwanill/phishnet-sentinel",
    logo: { monogram: "PS" },
    badges: [
      { label: "AI & Threat Detection", tone: "featured" },
      { label: "Real-time Heuristics", tone: "achievement" },
    ],
    outcomes: [
      "Extracts lexical, domain reputation, and TLS structural signals from communication payloads",
      "Trained on categorized phishing and benign dataset vectors with multi-feature evaluation",
      "Designed for privacy-first real-time threat scoring without retaining personal message contents",
    ],
    underTheHood:
      "PhishNet Sentinel evaluates threats across multiple vectors: domain age, homoglyph character spoofing, redirect chains, and ML confidence scoring to flag suspicious communications instantaneously.",
    terminal: {
      title: "phishnet-sentinel/classifier.py",
      lines: [
        { kind: "cmd", text: "python -m sentinel.inspect --target 'suspicious-payload'" },
        { kind: "out", text: "[+] Parsing URL entropy & lexical structure…" },
        { kind: "out", text: "[+] Checking DNS WHOIS & TLS certificate issuer age…" },
        { kind: "accent", text: "[ALERT] Homoglyph spoofing detected: cyrillic 'a' in domain label" },
        { kind: "out", text: "[+] TensorFlow inference score: 0.942 [HIGH RISK]" },
        { kind: "cmd", text: "sentinel: payload quarantined & threat report logged" },
      ],
    },
  },
  {
    slug: "ship-it",
    title: "Walkover: Ship It!",
    tagline: "A fast-paced 2D delivery platformer built on tight physics and precision movement.",
    dates: "2026",
    description:
      "A retro-styled 2D side-scrolling platformer crafted around agile delivery runs and momentum mechanics. Players navigate escalating obstacles, time constraints, and multi-level platforms, developed entirely from the ground up with Phaser 3 and JavaScript.",
    stack: ["Phaser 3", "JavaScript", "HTML5 Canvas", "Arcade Physics", "Web Audio API"],
    domain: "shipit.walkover.dev",
    live: "https://dhwanilbhavsar.vercel.app/",
    repo: "https://github.com/dhwanill/ship-it",
    logo: { monogram: "SI" },
    badges: [
      { label: "Game Dev", tone: "featured" },
      { label: "Phaser 3 Canvas", tone: "achievement" },
    ],
    outcomes: [
      "Custom velocity curves and jump buffers calibrated for satisfying platforming feel",
      "Optimized 60fps render loop running smoothly on vanilla HTML5 Canvas without heavy dependencies",
      "Dynamic obstacle generation and countdown delivery mechanics",
    ],
    underTheHood:
      "Physics routines decouple horizontal dash inertia from gravity ticks, allowing players to perform micro-adjustments in mid-air while preserving speed on level slopes.",
    terminal: {
      title: "ship-it/src/player.js",
      lines: [
        { kind: "cmd", text: "npm run build:game" },
        { kind: "out", text: "phaser: arcade physics engine initialized (gravity: 850)" },
        { kind: "out", text: "spritesheet: player_run.png [16 frames sliced]" },
        { kind: "accent", text: "collision: delivery_package registered to PlayerInventory" },
        { kind: "dim", text: "level_01: loaded in 42ms · 60fps target locked" },
      ],
    },
  },
  {
    slug: "dead-county",
    title: "Dead County",
    tagline: "Atmospheric 3D narrative experience focused on environmental storytelling.",
    dates: "2025 — 2026",
    description:
      "A narrative-driven 3D exploration project built in Godot 4.4.1. Focused on environmental worldbuilding, ambient lighting, atmospheric tension, and discovering stories embedded directly within the physical landscape.",
    stack: ["Godot 4.4.1", "GDScript", "Vulkan Renderer", "3D Shaders", "Spatial Audio"],
    domain: "deadcounty.dhwanil.dev",
    live: "https://dhwanilbhavsar.vercel.app/",
    repo: "https://github.com/dhwanill/dead-county",
    logo: { monogram: "DC" },
    badges: [
      { label: "Godot 4.4.1 Engine", tone: "featured" },
      { label: "3D Environmental Storytelling", tone: "achievement" },
    ],
    outcomes: [
      "Custom volumetric fog and atmospheric lighting pipelines tuned in Godot 4",
      "Interactive world inspection cues paired with directional spatial audio triggers",
      "Narrative reveals driven purely by room topology and non-linear player discovery",
    ],
    underTheHood:
      "Built with Godot 4's Vulkan Forward+ renderer with optimized baked lightmaps and custom post-processing shaders, achieving rich cinematic tone with efficient GPU performance.",
    terminal: {
      title: "dead-county/scenes/world.tscn",
      lines: [
        { kind: "cmd", text: "godot --headless --check-only" },
        { kind: "out", text: "Godot Engine v4.4.1.stable - Vulkan Forward+" },
        { kind: "out", text: "shader: atmospheric_fog.gdshader compiled successfully" },
        { kind: "accent", text: "audio: 3D spatial bus connected to ReverbZone_AbandonedMill" },
        { kind: "dim", text: "scene tree: 48 spatial entities verified" },
      ],
    },
  },
];

/* ------------------------------------------------------------------ */
/*  Lab & Explorations                                                */
/* ------------------------------------------------------------------ */

export type Language = "TypeScript" | "JavaScript" | "HTML" | "Python";

export const languageColors: Record<Language, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  Python: "#3572a5",
};

export type LabItem = {
  title: string;
  repo: string;
  year: string;
  description: string;
  language: Language;
  live: string;
  code: string;
};

export const labItems: LabItem[] = [
  {
    title: "Hackathon Project Discovery Platform",
    repo: "hack-discover",
    year: "2026",
    description:
      "A platform exploration to organize and showcase student hackathon projects (inspired by 25+ teams at HackIndore 4.0), making submissions easily discoverable beyond scattered repositories.",
    language: "Python",
    live: "https://dhwanilbhavsar.vercel.app/",
    code: "https://github.com/dhwanill",
  },
  {
    title: "OSINT Reconnaissance Toolkit",
    repo: "osint-recon-notes",
    year: "2025",
    description:
      "A curated collection of investigative scripts, public domain scrapers, and open-source intelligence methodologies for threat analysis and research.",
    language: "Python",
    live: "https://medium.com/@dhwanill",
    code: "https://github.com/dhwanill",
  },
  {
    title: "viaSocket Workflow Integrations",
    repo: "viasocket-recipes",
    year: "2026",
    description:
      "Reusable workflow recipes, webhook triggers, and automation pipelines connecting SaaS platforms and AI agents.",
    language: "JavaScript",
    live: "https://dhwanilbhavsar.vercel.app/",
    code: "https://github.com/dhwanill",
  },
  {
    title: "Security Awareness Checklist",
    repo: "sec-awareness",
    year: "2025",
    description:
      "Interactive checklist and guide breaking down common phishing vectors, password hygiene, and social engineering defenses for students and developers.",
    language: "HTML",
    live: "https://medium.com/@dhwanill",
    code: "https://github.com/dhwanill",
  },
];

/* ------------------------------------------------------------------ */
/*  Easter egg — thoughts, quotes, and reflections                    */
/* ------------------------------------------------------------------ */

export type Fortune =
  | { kind: "commit"; text: string; source: string }
  | { kind: "joke"; text: string }
  | { kind: "quote"; text: string; source: string };

export const fortunes: Fortune[] = [
  { kind: "quote", text: "Knowing what to leave out is often the greatest product innovation.", source: "Dhwanil on Medium" },
  { kind: "quote", text: "Security is not a final destination, but an ongoing habit of curiosity and vigilance.", source: "The Hackers Meetup" },
  { kind: "joke", text: "Why do cybersecurity analysts love astrophotography? Because the stars don't have open ports." },
  { kind: "commit", text: "feat: tighten jump buffering curves in level 2", source: "Walkover: Ship It!" },
  { kind: "quote", text: "The goal of automation isn't just speed; it's freeing people to focus on high-impact thinking.", source: "50Agents exploration" },
  { kind: "joke", text: "There are two types of links: the ones you expected, and the ones that make your security team cry." },
  { kind: "commit", text: "fix: prevent homoglyph spoofing edge cases in URL entropy parser", source: "PhishNet Sentinel" },
  { kind: "quote", text: "A camera is a tool for learning how to look at the world with intentional curiosity.", source: "@starrry.lens" },
];

/* ------------------------------------------------------------------ */
/*  Contact reasons                                                   */
/* ------------------------------------------------------------------ */

export const contactReasons = [
  "Product & Growth Strategy",
  "Cybersecurity & Threat Research",
  "Community & Speaking Inquiry",
  "AI & Automation Project",
  "Photography & Creative Collaboration",
  "Just saying hello",
] as const;

export type ContactReason = (typeof contactReasons)[number];
