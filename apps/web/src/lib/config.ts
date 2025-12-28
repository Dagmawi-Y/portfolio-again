export const siteConfig = {
  name: "Dagmawi Yohannes",
  title: "Building AI-Driven Experiences",
  description: "Full-stack engineer and founder. Building local-first, AI-powered mobile and web apps that scale to millions.",
  email: "daggyohannes@gmail.com",
  socials: {
    github: "https://github.com/dagmawi-y-hailu", // Infurred or placeholder
    twitter: "https://twitter.com/",
    linkedin: "https://www.linkedin.com/in/dagmawi-y-hailu",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Career", href: "#career" },
    { label: "Notes", href: "/blog" },
  ],
  projects: [
    {
      title: "Vella.ai",
      description: "Local-first web email client featuring in-browser AI inference and CRDT-based real-time sync.",
      tags: ["Local-First", "AI", "CRDT", "React"],
      category: "Full Stack",
      type: "Work",
      link: "#", // Add link if known
      image: "https://images.unsplash.com/photo-1557200130-4b2745a699eb?auto=format&fit=crop&q=80&w=1200", 
      stats: "In-Browser AI",
      size: "wide"
    },
    {
      title: "TeleTV",
      description: "Entertainment super-app player reaching 10M+ users. Implemented adaptive bitrate streaming and DRM.",
      tags: ["Mobile", "Streaming", "DRM", "React Native"],
      category: "Mobile",
      type: "Work",
      link: "#",
      image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?auto=format&fit=crop&q=80&w=1200",
      stats: "10M+ Users",
      size: "large"
    },
    {
      title: "Kidopia",
      description: "AI-powered gamified learning platform for kids in Africa. Currently founding and leading development.",
      tags: ["Founder", "EdTech", "AI", "Mobile"],
      category: "Full Stack",
      type: "Live",
      link: "#",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200",
      stats: "Founder",
      size: "wide"
    },
     {
      title: "CashGO",
      description: "Foreign remittance app driving over $1M daily volume into Ethiopia's economy.",
      tags: ["FinTech", "Mobile", "Security"],
      category: "Mobile",
      type: "Work",
      link: "#",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1200",
      stats: "$1M+ Daily",
      size: "large"
    },
    {
      title: "Dashen Super App",
      description: "Developed the merchant segment of a major banking super-app using pixel-perfect design.",
      tags: ["FinTech", "React Native", "Android/iOS"],
      category: "Mobile",
      type: "Work",
      link: "#",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1200",
      stats: "Banking",
      size: "normal"
    },
    {
      title: "IdeaSpring",
      description: "Startups-to-investors linkage platform. Designed and engineered the entire full-stack system.",
      tags: ["Full Stack", "Platform", "Web"],
      category: "Full Stack",
      type: "Work",
      link: "#",
      image: "https://images.unsplash.com/photo-1559136555-930d72f18615?auto=format&fit=crop&q=80&w=1200",
      stats: "Venture",
      size: "normal"
    },
    {
      title: "EthioFit",
      description: "Locally tuned fitness management solution with workout planner and graphical analytics.",
      tags: ["Flutter", "Health", "Analytics"],
      category: "Mobile",
      type: "Personal",
      link: "#",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200",
      stats: "Flutter",
      size: "normal"
    }
  ],
  experience: [
    {
      role: "Founder & CEO",
      company: "Kidopia",
      period: "Oct 2025 - Present",
      description: "Building the digital space our kids deserve. Leading product vision and engineering of an AI-powered gamified learning platform.",
    },
    {
      role: "Full Stack Engineer",
      company: "Vella.ai",
      period: "Jan 2025 - Sep 2025",
      description: "Architected a local-first web email client. Integrated in-browser AI inference and CRDT-based real-time sync for offline capabilities.",
    },
    {
      role: "Mobile Engineer",
      company: "EagleLion Systems",
      period: "Jul 2023 - Oct 2024",
      description: "Built high-impact apps like TeleTV (10M+ users) and CashGO ($1M+ daily). Led adaptive bitrate streaming implementation.",
    },
    {
      role: "Full Stack Engineer",
      company: "IdeaSpring",
      period: "Mar 2024 - Jun 2024",
      description: "Designed and engineered a startup-investor linkage platform from the ground up.",
    },
    {
      role: "Mobile Developer",
      company: "360 Ground",
      period: "Nov 2023 - May 2024",
      description: "Built local business management apps driving 34% profit increase for clients.",
    }
  ],
  education: [
    {
      degree: "Software Engineering",
      school: "Holberton School",
      year: "2023 - 2025",
    },
    {
      degree: "BSc in Computer Software Engineering",
      school: "Debre Birhan University",
      year: "2019 - 2024",
    },
    {
      degree: "Certified Data Scientist",
      school: "ExploreAI Academy",
      year: "2023 - 2024",
    },
    {
      degree: "BA in Business Administration",
      school: "Debre Birhan University",
      year: "2019 - 2024",
    }
  ],
  certificates: [
    {
      name: "Android Developer Fundamentals",
      issuer: "Google / Udacity",
      year: "2023",
      link: "#",
    },
    {
      name: "Founder Academy",
      issuer: "Alx / Holberton",
      year: "2023",
      link: "#",
    },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2022",
      link: "#",
    },
  ],
  openSource: {
    contributions: [
      {
        project: "Techtonic Tribe",
        description: "Founded and led a university tech club. Organized bootcamps and mentored students to build real software.",
        link: "#",
        status: "Founder",
      },
      {
        project: "jazz.tools",
        description: "Implemented CRDT sync integration for local-first apps.",
        link: "https://jazz.tools",
        status: "Used In Prod",
      },
    ],
    libraries: [
      {
        name: "TeleTV Player",
        description: "Custom video player with adaptive bitrate and DRM.",
        stats: "Proprietary",
        link: "#",
      },
      {
        name: "Local-First Store",
        description: "Storage manager for optimistic UI and offline sync.",
        stats: "Internal",
        link: "#",
      },
    ],
  },
  experiments: [
    {
      name: "In-Browser AI",
      description: "Running LLM inference purely locally in the browser for privacy.",
      link: "#",
      tags: ["WASM", "WebGPU", "AI"],
    },
    {
      name: "CRDT Sync",
      description: "Real-time multi-device synchronization research.",
      link: "#",
      tags: ["Distributed Systems", "Local-First"],
    },
  ],
};
