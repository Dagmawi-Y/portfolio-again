import type { CertificateSchema, EducationSchema } from "./schemas";
import { z } from "zod";

type Education = z.infer<typeof EducationSchema>;
type Certificate = z.infer<typeof CertificateSchema>;

export const education: Education[] = [
  {
    degree: "Software Engineering",
    school: "Holberton School",
    year: "2023 - 2025",
    logo: "/holbterton-logo.png",
    link: "https://www.holbertonschool.com/",
    description: [
      "Intensive project-based software engineering program.",
      "Focused on full-stack development, Low-level programming, and System engineering.",
    ],
  },
  {
    degree: "BSc in Computer Software Engineering",
    school: "Debre Birhan University",
    year: "2019 - 2024",
    logo: "/dbu-logo.png",
    link: "#",
    description: [
      "Major in Software Engineering with focus on system architecture.",
      "Studied distributed systems and software quality assurance.",
    ],
  },
  {
    degree: "Certified Data Scientist",
    school: "ExploreAI Academy",
    year: "2023 - 2024",
    logo: "/exploreai-logo.png",
    link: "#",
    description: [
      "Specialization in machine learning and data engineering.",
      "Hands-on experience with statistical analysis and data visualization.",
    ],
  },
  {
    degree: "BA in Business Administration",
    school: "Debre Birhan University",
    year: "2019 - 2024",
    logo: "/dbu-logo.png",
    link: "#",
    description: [
      "Concurrent degree focusing on organizational leadership.",
      "Studied startup management and business strategy.",
    ],
  },
];

export const certificates: Certificate[] = [
  {
    name: "Software Engineering",
    issuer: "Holberton School",
    year: "2024",
    link: "https://savanna.alxafrica.com/certificates/T3NZJmSrnM",
    image: "/cert-holberton.png",
  },
  {
    name: "Data Science",
    issuer: "ExploreAI Academy",
    year: "2024",
    link: "https://savanna.alxafrica.com/certificates/2h8FxNp63T",
    image: "/cert-exploreai.png",
  },
  {
    name: "Android Developer Fundamentals",
    issuer: "Udacity",
    year: "2024",
    link: "https://www.udacity.com/certificate/e/5629a6b4-4e6d-11ef-bc29-77fe0175c37d",
    image: "/cert-udacity.png",
  },
  {
    name: "Responsive Web Design",
    issuer: "freeCodeCamp",
    year: "2022",
    link: "https://www.freecodecamp.org/certification/daggyTheDev/responsive-web-design",
    image:
      "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Founder Academy",
    issuer: "ALX / Holberton",
    year: "2023",
    link: "https://savanna.alxafrica.com/certificates/SZ8PR9GHsF",
    image: "/cert-founder.png",
  },
];
