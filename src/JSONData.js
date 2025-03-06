import {
  Briefcase,
  FileCode,
  Github,
  Home,
  Linkedin,
  Mail,
} from "lucide-react";

export const menuItems = [
  { name: "Home", href: "/", icon: <Home size={20} /> },
  { name: "Projects", href: "/Projects", icon: <FileCode size={20} /> },
  { name: "Experiences", href: "/Experiences", icon: <Briefcase size={20} /> },
  { name: "Contact", href: "#contact", icon: <Mail size={20} /> },
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/gaurav-n-503716204",
    icon: <Linkedin size={20} />,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/gvrv03",
    icon: <Github size={20} />,
    label: "GitHub",
  },
  {
    href: "mailto:gxurav.work@gmail.com",
    icon: <Mail size={20} />,
    label: "Email",
  },
];
export const projects = [
  {
    title: "Lost & Found Portal",
    description:
      "A platform for students to report lost and found items, with a dashboard for admins to manage listings.",
    technologies: ["Next.js", "AppWrite"],
    category: "Fullstack",
    image: "/Projects/FoundUs.png",
  },
  {
    title: "GDGC Event Platform",
    description:
      "A platform to list GDG events, publish blogs, and send bulk emails with custom templates for outreach.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    category: "Fullstack",
    image: "/Projects/GDGPlatform.png",
  },
  {
    title: "DSY College Finder",
    description:
      "An application for diploma students to find engineering colleges based on their eligibility criteria.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "Fullstack",
    image: "/Projects/DSYConsultancy.png",
  },

  {
    title: "Digital Product Store",
    description:
      "An application where admins can sell digital products, with payments handled via Razorpay API.",
    technologies: ["React.js", "Node.js", "MongoDB", "Razorpay API"],
    category: "Fullstack",
    image: "/Projects/WealthSummit.png",
  },
  {
    title: "Campus Plant Lens",
    description:
      "An application for plant management within a campus, featuring QR codes for plant identification.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "Fullstack",
    image: "/Projects/CampusPlantLense.png",
  },
  {
    title: "English Jr. College",
    description:
      "A website for an educational institution to manage events, updates, and student information.",
    technologies: ["WordPress"],
    category: "Client",
    image: "/Projects/ENCNer.png",
  },
  {
    title: "Wealth Summit",
    description:
      "A Ecommerce website for a startup to sell their digital products.",
    technologies: ["WordPress"],
    category: "Client",
    image: "/Projects/wealthx.png",
  },
  {
    title: "Savali NGO Website",
    description:
      "A platform for an NGO to manage data, share events, and provide updates about their initiatives.",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "Client",
    image: "/Projects/Savali.png",
  },

  {
    title: "Hyggex Landing Page",
    description:
      "A sleek and responsive landing page designed for a startup to showcase its services effectively.",
    technologies: ["React.js", "Tailwind CSS"],
    category: "Landing Page",
    image: "/Projects/hyggex.png",
  },
  {
    title: "AppforgeX Website",
    description:
      "A modern landing page designed for a startup, built with performance and UI optimization in mind.",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "Landing Page",
    image: "/Projects/appforgex.png",
  },
  {
    title: "Portfolio Website",
    description: "A portfolio website for a developer to showcase their projects and skills.",
    technologies: ["Next.js", "Tailwind CSS"],
    category: "Landing Page",
    image: "/Projects/PortfolioLandingPage.png",
  },
  {
    title: "Personal Blog App",
    description:
      "A blogging platform where only the admin can create and publish content, while users can save posts.",
    technologies: ["React.js", "Node.js", "MongoDB", "Rich Text Editor"],
    category: "Fullstack",
    image: "/Projects/BlogApp.png",
  },
];

export const experiences = [
  {
    title: "Development Lead",
    company: "Google Developer Group (GDG) On Campus",
    period: "2024 – Present",
    image: "/GDGLogo.png",

    description: [
      "Organized a National Level Hackathon for GDG On Campus, attracting 250+ participants. Developed a registration system with payment integration and QR code verification.",
      "Led a development team for GDG events, securing a Tier 1 position in the Google Cloud Study Jam.",
      "Managed the creation of a platform for listing GDG events, publishing blogs, and providing a dashboard for website management with bulk emailing and custom templates.",
      "Worked with cross-functional teams to ensure timely project delivery and maintain high-quality standards.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "EboNow (Contract)",
    period: "2 Months",
    image: "/eboLogo.webp",
    description: [
      "Contributed to the development of a Party Decor Application using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Enhanced application functionality and user experience, ensuring responsiveness and scalability.",
      "Worked closely with the design and product teams to implement features and fix bugs.",
    ],
  },
];
