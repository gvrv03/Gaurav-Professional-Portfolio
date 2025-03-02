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
    title: "GDGC Platform",
    description:
      "A platform for listing GDG events and publishing blogs, featuring a dashboard for website management and bulk emailing functionality with custom templates.",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    category: "fullstack",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "DSY Consultancy",
    description:
      "An application for diploma students to find engineering colleges based on their percentage, category, and other criteria.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "fullstack",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Campus Plant Lens",
    description:
      "An application to manage plants and flowers within an institute, including QR code generation for plant identification.",
    technologies: ["React.js", "Node.js", "MongoDB"],
    category: "fullstack",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Digital Product Selling Application",
    description:
      "An application where admins can create and publish digital products, and users can purchase them using the Razorpay payment gateway.",
    technologies: ["React.js", "Node.js", "MongoDB", "Razorpay API"],
    category: "ecommerce",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    title: "Blog Application",
    description:
      "A personal blog application where only the admin can create and publish blogs, and users can save and view them.",
    technologies: ["React.js", "Node.js", "MongoDB", "Rich Text Editor"],
    category: "cms",
    image: "/placeholder.svg?height=300&width=500",
  },
];

export const experiences = [
  {
    title: "Development Lead",
    company: "Google Developer Group (GDG) On Campus",
    period: "2024 – Present",
    description: [
      "Led a team of developers to create solutions for GDG events and activities, achieving Tier 1 position in Google Cloud Study Jam.",
      "Managed the development of a platform for listing GDG events and publishing blogs, including a dashboard for website management and bulk emailing functionality with custom templates.",
      "Collaborated with cross-functional teams to ensure timely delivery of projects and maintain high-quality standards.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "EboNow (Contract)",
    period: "2 Months",
    description: [
      "Contributed to the development of a Party Decor Application using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Enhanced application functionality and user experience, ensuring responsiveness and scalability.",
      "Worked closely with the design and product teams to implement features and fix bugs.",
    ],
  },
  {
    title: "Salesforce Intern",
    company: "ITNetworkz",
    period: "1 Month",
    description: [
      "Gained hands-on experience with Salesforce CRM and cloud-based application development.",
      "Learned about Salesforce's ecosystem, including customization, workflows, and data management.",
    ],
  },
];
