export const siteConfig = {
  name: "Dagmawi Yohannes",
  title: "Full Stack Engineer",
  description: "Building playful, high-performance web experiences.",
  email: "dagmawi@example.com",
  socials: {
    github: "https://github.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/in/",
  },
  nav: [
    { label: "Work", href: "#work" },
    { label: "Lab", href: "#lab" },
    { label: "Notes", href: "/blog" },
  ],
  projects: [
    {
      title: "Project Alpha",
      description: "Real-time collaboration platform for remote teams causing 30% reduction in meeting times.",
      tags: ["SvelteKit", "WebSockets", "Redis"],
      category: "Full Stack",
      type: "Work",
      link: "#",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200", 
      stats: "2k+ Users",
      size: "wide"
    },
    {
      title: "Neon Dashboard",
      description: "High-performance data visualization kit used by financial analysts.",
      tags: ["React", "D3.js", "Tailwind"],
      category: "Frontend",
      type: "Work",
      link: "#",
      image: "https://images.unsplash.com/photo-1551288049-bbdac8626ad1?auto=format&fit=crop&q=80&w=1200",
      stats: "60fps",
      size: "normal"
    },
     {
      title: "Audio Phonic",
      description: "Browser-based audio synthesis engine capable of complex waveform generation.",
      tags: ["Rust", "WASM", "WebAudio"],
      category: "System",
      type: "Personal",
      link: "#",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=1200",
      stats: "Zero Latency",
      size: "normal"
    },
    {
      title: "Go-Micro",
      description: "A lightweight microservices framework written in Go.",
      tags: ["Go", "gRPC", "Docker"],
      category: "Backend",
      type: "Course",
      link: "#",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1200",
      stats: "3k stars",
      size: "wide"
    },
    {
      title: "Hyper Tesseract",
      description: "4D geometric visualization library for educational purposes.",
      tags: ["Three.js", "WebGL", "TypeScript"],
      category: "Frontend",
      type: "Personal",
      link: "#",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200",
      stats: "Featured",
      size: "normal"
    },
    {
      title: "Cache Flow",
      description: "Distributed caching layer optimization tool for heavy-load APIs.",
      tags: ["Redis", "Node", "Lua"],
      category: "Backend",
      type: "Work",
      link: "#",
      image: "https://images.unsplash.com/photo-1518433278984-132ef53f4d3d?auto=format&fit=crop&q=80&w=1200",
      stats: "10x Speedup",
      size: "normal"
    },
    {
      title: "Neural Painter",
      description: "AI-assisted digital painting application using canvas API.",
      tags: ["Python", "TensorFlow", "React"],
      category: "Full Stack",
      type: "Personal",
      link: "#",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200",
      stats: "Beta",
      size: "wide"
    },
    {
      title: "Vim Motion",
      description: "A gamified typing tutor for learning Vim keybindings.",
      tags: ["Svelte", "Vim", "Keyboard"],
      category: "Frontend",
      type: "Course",
      link: "#",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1200",
      stats: "Open Source",
      size: "normal"
    }
  ],
  experience: [
    {
      role: "Senior Frontend Engineer",
      company: "TechCorp",
      period: "2022 - Present",
      description: "Spearheading the migration to SvelteKit. Reduced load times by 40% and improved dev velocity.",
    },
    {
      role: "Software Engineer",
      company: "StartUp Inc",
      period: "2020 - 2022",
      description: "Built the MVP from scratch. Wore many hats, from DevOps to UI design. Shipped fast, broke things, fixed them faster.",
    },
  ],
  education: [
    {
      degree: "BSc in Computer Science",
      school: "University of Technology",
      year: "2020",
    },
  ],
  certificates: [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      link: "#",
    },
    {
      name: "Google UX Design Professional Certificate",
      issuer: "Coursera",
      year: "2021",
      link: "#",
    },
  ],
  openSource: {
    contributions: [
      {
        project: "sveltejs/svelte",
        description: "Fixed a hydration edge case in list rendering.",
        link: "#",
        status: "Merged",
      },
      {
        project: "vitejs/vite",
        description: "Improved HMR performance for large dependency graphs.",
        link: "#",
        status: "Merged",
      },
    ],
    libraries: [
      {
        name: "svelte-motion",
        description: "A spring animation library for Svelte, inspired by Framer Motion.",
        stats: "1.2k stars",
        link: "#",
      },
      {
        name: "tiny-store",
        description: "Zero-dependency state management for vanilla JS.",
        stats: "300 stars",
        link: "#",
      },
    ],
  },
  experiments: [
    {
      name: "Shader Playground",
      description: "Interactive WebGL shader editor built with Three.js.",
      link: "#",
      tags: ["WebGL", "GLSL"],
    },
    {
      name: "Generative Art Bot",
      description: "Twitter bot that generates daily abstract art using canvas API.",
      link: "#",
      tags: ["Node.js", "Canvas"],
    },
  ],
};
