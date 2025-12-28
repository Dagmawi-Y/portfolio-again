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
      description: "A real-time collaboration tool for remote teams.",
      tags: ["SvelteKit", "WebSockets", "Redis"],
      link: "#",
      color: "from-blue-400 to-purple-500", // Gradient example
    },
    {
      title: "Neon Dashboard",
      description: "Glassmorphism data visualization kit.",
      tags: ["React", "D3.js", "Tailwind"],
      link: "#",
      color: "from-green-400 to-cyan-500",
    },
     {
      title: "Audio Phonic",
      description: "Browser-based audio synthesis engine.",
      tags: ["WebAudio API", "Rust", "WASM"],
      link: "#",
      color: "from-orange-400 to-red-500",
    },
  ],
};
