import { ProjectDetail } from "../components/ProjectModel";

// Comprehensive project data with all details needed for both cards and modals
const projectsData: ProjectDetail[] = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio built with React and Tailwind CSS",
    longDescription: 
      "This portfolio website showcases my skills and projects with a modern UI/UX approach. " +
      "Built with React and Tailwind CSS, it features smooth animations, responsive design, and optimized performance. " +
      "The site includes dynamic project cards, animated transitions between pages, and a contact form with form validation.",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    tags: ["React", "Tailwind", "Framer Motion"],
    githubUrl: "https://github.com/yourusername/portfolio",
    liveUrl: "https://yourportfolio.com",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: [
      "React", 
      "TypeScript", 
      "Tailwind CSS", 
      "Framer Motion", 
      "Next.js",
      "Vercel"
    ],
    features: [
      "Responsive design for all device sizes",
      "Animated page transitions and UI elements",
      "3D card effects with Framer Motion",
      "Dark mode support",
      "SEO optimized with Next.js",
      "Contact form with validation"
    ]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with payment integration",
    longDescription: 
      "A complete e-commerce platform built with Next.js and MongoDB. " +
      "Features include user authentication, product catalog with filtering and search, shopping cart functionality, " +
      "secure checkout with Stripe payment integration, and an admin dashboard for product and order management. " +
      "The platform is fully responsive and optimized for performance.",
    images: [
      "/api/placeholder/800/600", 
      "/api/placeholder/800/600",
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    tags: ["Next.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/yourusername/ecommerce",
    liveUrl: "https://project2.com",
    technologies: [
      "Next.js", 
      "MongoDB", 
      "Mongoose", 
      "Stripe API", 
      "NextAuth.js",
      "Tailwind CSS",
      "Redux Toolkit"
    ],
    features: [
      "User authentication and profile management",
      "Product catalog with filtering and search",
      "Shopping cart with persistent storage",
      "Secure checkout with Stripe payment",
      "Admin dashboard for product and order management",
      "Responsive design for all device sizes",
      "Order tracking and history"
    ]
  },
  {
    id: 3,
    title: "Aceternity UI",
    description: "Customizable Tailwind CSS and Framer Motion Components",
    longDescription: 
      "Aceternity UI is a collection of beautifully designed, highly customizable UI components built with Tailwind CSS and Framer Motion. " +
      "The library includes 3D cards, animated buttons, modals, form elements, and more. " +
      "All components are fully responsive, accessible, and come with comprehensive documentation. " +
      "This project aims to make it easy for developers to create stunning interfaces with minimal effort.",
    images: [
      "/api/placeholder/800/600",
      "/api/placeholder/800/600"
    ],
    tags: ["React", "Tailwind", "Design System"],
    githubUrl: "https://github.com/yourusername/aceternity-ui",
    liveUrl: "/ui.aceternity.com",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    technologies: [
      "React", 
      "TypeScript", 
      "Tailwind CSS", 
      "Framer Motion", 
      "Storybook",
      "Jest",
      "React Testing Library"
    ],
    features: [
      "40+ customizable UI components",
      "3D effects with Framer Motion",
      "Fully responsive and accessible",
      "Dark mode support",
      "Comprehensive documentation",
      "Easy to use and customize",
      "Storybook integration"
    ]
  }
];

export default projectsData;