import { ProjectDetail } from "../components/ProjectModel";

// Comprehensive project data with all details needed for both cards and modals
const projectsData: ProjectDetail[] = [
  {
  id: 1,
  title: "JobFusion",
  type: "development",
  category: "fullstack",
  description: "A complete job portal with AI-based resume scoring, job filtering, and smart resume builder.",
  longDescription:
    "JobFusion is an end-to-end job portal platform built using the MERN stack. " +
    "It allows users to create professional resumes, check ATS scores using integrated AI logic, and receive improvement suggestions. " +
    "The platform fetches live job listings via the Adzuna API and offers role-based dashboards for candidates, recruiters, and admins. " +
    "It also includes a journey-sharing module for users to post about their hiring experiences. Built with React, Tailwind CSS, and Node.js, " +
    "JobFusion features Cloudinary for media uploads, JWT authentication, and a fully responsive custom UI.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750666584/Screenshot_2025-06-23_134609_gltegu.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750666582/Screenshot_2025-06-23_134549_p96eib.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750679784/Screenshot_2025-06-23_172347_qwxxgw.png"
  ],
  tags: ["Full Stack","MERN","Job Portal"],
  githubUrl: "https://github.com/Kalpan2007/jobfusion",
  liveUrl: "https://jobfusionofficial.netlify.app/",
  videoUrl: "https://www.youtube.com/embed/q2cRGliiPNk", 
  technologies: [
    "React", 
    "Node.js", 
    "Express.js", 
    "MongoDB", 
    "Mongoose", 
    "Tailwind CSS", 
    "Cloudinary",
    "JWT", 
    "Adzuna API",
    "Responsive Design"
  ],
  features: [
    "AI-based resume scoring and suggestions",
    "Live job listings via Adzuna API",
    "Role-based dashboards for candidate, recruiter, and admin",
    "Smart job filtering and resume builder",
    "Cloudinary integration for image and resume uploads",
    "Secure JWT authentication",
    "Responsive UI built with Tailwind CSS",
    "Journey-sharing module for hired users"
  ]
},
  {
  id:2,
  title: "WorkNest",
  type: "development",
  category: "fullstack",
  description: "A gig-based freelance platform built during a 48-hour hackathon using the MERN stack.",
  longDescription:
    "WorkNest is a gig marketplace platform developed in just 48 hours during a hackathon. It allows users to register as sellers or buyers, post gigs, manage orders, and make secure payments through Stripe. " +
    "The platform supports advanced features such as keyword-based search, role-based access, user dashboards, star-rated reviews, and order tracking. " +
    "Cloudinary is used for seamless image uploads, and the backend was fully engineered using Node.js, Express.js, and MongoDB with Mongoose. " +
    "The frontend, styled with SCSS, offers a clean, responsive user experience for both desktop and mobile users.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750681853/Screenshot_2025-06-23_175924_dd0l0j.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750681856/Screenshot_2025-06-23_175948_xospsy.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750681852/Screenshot_2025-06-23_180027_ucz85m.png"
  ],
  tags: ["Hackathon", "Full Stack","Gig Marketplace"],
  githubUrl: "https://github.com/Kalpan2007/WorkNest-hackwithGujarat",
  liveUrl: "https://work-nest-hackwith-gujarat.vercel.app",
  videoUrl: "https://www.youtube.com/embed/gvADEsOXH28", // Replace with your real demo video ID
  technologies: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "SCSS",
    "Cloudinary",
    "Stripe API",
    "JWT",
    "Vercel"
  ],
  features: [
    "Role-based access for sellers and buyers",
    "Gig creation, editing, and deletion",
    "Buyer reviews with star ratings",
    "Keyword-based search and filtering",
    "Stripe payment integration",
    "Cloudinary-based image uploads",
    "My Orders and Dashboard views",
    "Responsive SCSS-based UI",
    "Built in 48 hours during a hackathon"
  ]
},
{
  id:3,
  type: "development",
  category: "fullstack",
  title: "HealthSync – Real-Time Ambulance Booking (Open Source Contribution)",
  description: "Added real-time ambulance booking and ride status system using Socket.io in a live healthcare platform.",
  longDescription:
    "Contributed to the HealthSync open-source healthcare platform by building a real-time ambulance booking and management system. " +
    "Users can instantly book ambulances, and available drivers receive ride requests on a live dashboard powered by Socket.io. " +
    "Drivers can accept rides and update booking statuses dynamically (Pending → Running → Completed). The system allows smooth ride transitions, enabling drivers to immediately accept new requests upon completion. " +
    "This feature reduces response time and enhances emergency efficiency through real-time communication and smart ride handling.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750693506/Screenshot_2025-06-23_211209_kfei5f.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750693506/Screenshot_2025-06-23_211236_ukp0jg.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750693507/Screenshot_2025-06-23_211302_sgwhar.png"
  ],
  tags: ["Full Stack", "Open Source Contribution"],
  githubUrl: "https://github.com/Kalpan2007/health_sync",
  liveUrl: "https://www.linkedin.com/posts/3kz_opensource-mern-buildinpublic-activity-7308423486153101312-MZyT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFK3InMB4lMCoxiEfGzxn3IyfD8t1swZqEI",
  technologies: [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Socket.io",
    "JWT",
    "Mongoose"
  ],
  features: [
    "Real-time ambulance booking and driver dashboard",
    "Live ride request broadcasting using Socket.io",
    "Dynamic status updates: Pending → Running → Completed",
    "Driver-side ride acceptance and transition management",
    "Seamless ride queue handling for continuous operations",
    "Contributed as part of an open-source team project"
  ]
},
{
  id:4,
  title: "Nike Landing Page Redesign",
  type: "development",
  category: "frontend",
  description: "A modern, responsive Nike landing page clone built with React and Tailwind CSS.",
  longDescription:
    "This project is a clean and responsive Website With Great Design, built using React.js and Tailwind CSS to sharpen frontend development and UI/UX design skills. " +
    "It features animated hero sections, product display grids, sticky headers, and mobile responsiveness. The layout mimics real-world brand aesthetics with custom utility styling and optimized layout structure. " +
    "This project highlights strong attention to design details and component structuring using Tailwind's utility-first approach.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750685452/Screenshot_2025-06-23_185919_tybcvb.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750685450/Screenshot_2025-06-23_185939_ycrhht.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750685451/Screenshot_2025-06-23_190013_tsm0ow.png"
  ],
  tags: ["Frontend", "React", "Tailwind CSS"],
  githubUrl: "https://github.com/Kalpan2007/nike-landing",
  liveUrl: "https://nikeby3k.vercel.app/", 
  technologies: [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Responsive Design",
    "Vercel"
  ],
  features: [
    "Fully responsive design across devices",
    "Tailwind-based custom layout and spacing",
    "Hero banner with brand-style visuals",
    "Sticky navigation bar and smooth scroll",
    "Reusable components for clean structure",
    "Built for UI/UX skill enhancement"
  ]
},
  {
  id:5,
  title: "Chrome Task Reminder Extension",
  type: "development",
  category: "extension",
  description: "A productivity-focused Chrome Extension for hourly task reminders.",
  longDescription:
    "This Chrome Extension helps users stay productive by allowing them to create task lists and receive hourly reminders. Users can add tasks, get notified every hour, and mark them as complete. " +
    "The extension is built using vanilla JavaScript, HTML, and CSS, and leverages the Chrome Storage API and Notification API for persistent data and real-time alerts. " +
    "It features a clean, minimal interface and is optimized for performance. Developed and deployed within just 2 days on January 1st and 2nd, 2025.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750684563/Screenshot_2025-01-02_190656_fiw6mo.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750684563/Screenshot_2025-01-02_173619_dbdfh1.png"
  ],
  tags: ["Chrome Extension","JS","Productivity"],
  githubUrl: "https://github.com/Kalpan2007/Extention-To-Do",
  technologies: [
    "JavaScript",
    "HTML5",
    "CSS3",
    "Chrome Extension APIs",
    "Chrome Storage",
    "Chrome Notifications"
  ],
  features: [
    "Add, manage, and remove daily tasks",
    "Hourly reminders for active tasks",
    "Chrome Storage API for persistent data",
    "Real-time browser notifications",
    "Clean and responsive interface",
    "Built and deployed in 2 days (Jan 1–2, 2025)"
  ]
},
{
  id:6,
  title: "YouTube Clone",
  type: "development",
  category: "frontend",
  description: "A responsive YouTube clone using the public YouTube API with real-time search, filtering, and video preview.",
  longDescription:
    "This YouTube clone replicates key features of the original platform using the YouTube Data API. Built entirely with React.js and styled using modern CSS, the app supports real-time search functionality, sidebar category filtering, and dynamic video rendering. " +
    "Users can view video results with live data (thumbnails, views, titles), filter content by trending and category, and play videos directly inside a custom-built pop-up player. " +
    "The UI is optimized for responsiveness and performance, structured with reusable components and hooks to manage API data and state efficiently.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750686290/Screenshot_2025-06-23_191333_g0usks.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750686286/Screenshot_2025-06-23_191415_irfhqg.png"
  ],
  tags: ["React", "YouTube API","Frontend"],
  githubUrl: "https://github.com/Kalpan2007/yt-react",
  liveUrl: "https://yt-react.vercel.app", 
  technologies: [
    "React",
    "JavaScript (ES6+)",
    "YouTube Data API",
    "CSS3",
    "Axios",
    "React Hooks",
    "Vercel"
  ],
  features: [
    "Real-time video search using YouTube API",
    "Video playback in custom pop-up player",
    "Video count filter display",
    "Reusable React components and clean routing",
    "API data management with useEffect and Axios"
  ]
},
{
  id:7,
  title: "React Multi-API Explorer",
  type: "development",
  category: "frontend",
  description: "A dynamic web app using 5 different public APIs with filtering, search, and responsive layouts.",
  longDescription:
    "This React-based project integrates five different public APIs, each showcased through a dedicated component and clean UI. " +
    "APIs used include: Cocktail API, Meal DB, Random User, Bank Info API, and the Harry Potter API. The app includes powerful data filtering and searching, allowing users to interactively explore content like drinks, food, bank details, characters, and more. " +
    "React Hooks (useState, useEffect) and conditional rendering were used for real-time updates and loading states. Each API is encapsulated in a separate route using React Router for maintainable, scalable architecture.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750688528/Screenshot_2025-06-23_195029_lmn5ij.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750688527/Screenshot_2025-06-23_195045_t6vstr.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750688518/Screenshot_2025-06-23_195135_qxerww.png"
  ],
  tags: ["React", "Frontend","APIs"],
  githubUrl: "https://github.com/Kalpan2007/React-Api-Project",
  liveUrl: "https://react-api-project-1lql.vercel.app", 
  technologies: [
    "React",
    "JavaScript (ES6+)",
    "React Router",
    "Axios",
    "Tailwind CSS",
    "Public APIs (Cocktail, MealDB, Bank, HP, Random User)",
    "Vercel"
  ],
  features: [
    "Integrated 5 unique public APIs with isolated routes",
    "Interactive filtering and search functionality",
    "Responsive layout with Tailwind CSS",
    "State management with React Hooks",
    "Conditional rendering and loading UI",
    "Routing with React Router for clean separation",
    "Clean, reusable component structure"
  ]
},
{
  id:8,
  title: "Expense Tracker",
  type: "development",
  category: "frontend",
  description: "Expense management app with dark/light mode toggle and categorized tracking.",
  longDescription:
    "This Expense Tracker application allows users to manage their daily spending by adding expenses with descriptions, categories, and amounts. " +
    "Users can view a summarized table of all expenses, including category-wise breakdowns and total amount spent. Built with React, the app includes a dark/light mode toggle, form validations, and real-time updates. " +
    "Each expense entry can be dynamically added or deleted, and the total updates automatically. The UI is responsive and styled with modern CSS for a clean user experience.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750689804/Screenshot_2025-06-23_201228_p9a8jq.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750689797/Screenshot_2025-06-23_201242_whoi6o.png",
  ],
  tags: ["HTML5","CSS3","JS"],
  githubUrl: "https://github.com/Kalpan2007/Expense-Tracker", 
  liveUrl: "https://expense-tracker-drab-seven.vercel.app/", 
  technologies: [
    "HTML5",
    "CSS3",
    "JavaScript",
  ],
  features: [
    "Add and delete expenses in real-time",
    "Categorize expenses with dropdown selector",
    "Display total expense dynamically",
    "Toggle between Dark and Light mode",
    "Responsive UI for all screen sizes",
    "Clean and minimal component structure"
  ]
},
{
  id:9,
  title: "Taskify – React To-Do App",
  type: "development",
  category: "frontend",
  description: "A simple yet powerful to-do list app with edit, delete, and complete task features using React.",
  longDescription:
    "Taskify is a responsive task management web application built with React. Users can add, update, mark complete, or delete tasks dynamically. Each task updates in real-time with visual feedback, including checkbox toggling, strike-through styling for completed tasks, and inline editing. " +
    "Styled with a custom dark-themed UI, this app showcases strong React fundamentals including state handling, controlled components, and conditional rendering. The component-based structure ensures smooth performance and reusability.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750694982/Screenshot_2025-06-23_213848_k821o4.png",
  ],
  tags: ["React","Frontend","To-Do App"],
  githubUrl: "https://github.com/Kalpan2007/TO-Do-React", 
  liveUrl: "https://to-do-react-lake.vercel.app/", 
  technologies: [
    "React",
    "JavaScript",
    "CSS3",
    "useState Hook",
    "Conditional Rendering"
  ],
  features: [
    "Add new tasks with input validation",
    "Mark tasks as completed with checkbox & strikethrough",
    "Edit tasks inline with update mode",
    "Delete tasks instantly",
    "Dark-themed UI for better experience",
    "Responsive design for mobile and desktop"
  ]
},
{
  id :10,
  title: "LinkedIn Clone Backend – CRUD API",
  type: "development",
  category: "backend",
  description: "A backend-only Node.js project simulating LinkedIn-like features using RESTful APIs with MongoDB.",
  longDescription:
    "This project provides a set of RESTful APIs built using Node.js, Express.js, and MongoDB that simulate key backend features of a LinkedIn-style platform. " +
    "It includes full CRUD operations for user profiles, connections, posts, and direct messages. Each endpoint is designed following RESTful standards and supports JSON-based request handling. " +
    "This backend application is ideal for learning how to build scalable APIs, structure Express routes, connect to MongoDB with Mongoose, and apply HTTP methods correctly in a real-world use case.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750695604/Screenshot_2025-06-23_214829_pd2qro.png"
  ],
  tags: ["Node.js","Backend","MongoDB"],
  githubUrl: "https://github.com/Kalpan2007/linkedin-backend-api", // Replace with actual
  liveUrl: "https://documenter.getpostman.com/view/39216913/2sAYQUptiS", 
    technologies: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "REST API",
    "Postman"
  ],
  features: [
    "Create, Read, Update, Delete (CRUD) for user profiles",
    "Add and remove connections between users",
    "CRUD operations for posts and feed items",
    "Send and retrieve direct messages between users",
    "RESTful architecture with clean route structure",
    "Used Postman for API testing and validation",
    "Built entirely using backend technologies (no frontend)"
  ]
},
{
  id: 11,
  title: "JobFusion – UI/UX Design",
  type: "uiux",
  category: "uiux",
  description: "A complete UI/UX design system for the JobFusion job portal, built using Figma.",
  longDescription:
    "This project is a full-scale UI/UX design of the JobFusion platform, focused on job seekers and recruiters. Designed in Figma, the system includes wireframes, high-fidelity mockups, and responsive layouts for desktop and mobile. " +
    "The design covers all essential pages including onboarding, resume builder, job filtering, AI-based resume score results, and journey-sharing features. It reflects modern UI practices with clean layouts, proper spacing, and user-centric UX flows.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750751815/Screenshot_2025-06-24_132636_ycedei.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750751814/Screenshot_2025-06-24_132542_x4l6x9.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750751814/Screenshot_2025-06-24_132610_clnwpu.png"
  ],
  tags: ["Figma", "UI/UX", "Job Portal"],
  figmaUrl: "https://www.figma.com/design/JKSVgQ6t0zfMdbniBUAsEy/JobFusion?node-id=0-1&t=FzVbwQKklg3XruXb-1", 
  technologies: [
    "Figma",
    "Wireframing",
    "Prototyping",
    "User-Centered Design"
  ],
  features: [
    "Full UI/UX flow for a job portal platform",
    "Resume builder and ATS score result UI",
    "Job filtering and role-based dashboard design",
    "Journey-sharing feature layout",
    "Clean, accessible, and mobile-responsive UI",
    "Built using design best practices and grid systems"
  ]
},
{
  id: 12,
  title: "Eduztrik – UI/UX Design for Document Scanning & Comparison Platform",
  type: "uiux",
  category: "uiux",
  description: "A clean and professional UI/UX design for Eduztrik – a platform to scan, compare, and manage documents.",
  longDescription:
    "Eduztrik is a smart document management platform designed with a modern, professional UI. The Figma-based design focuses on simplicity, clarity, and productivity. Users can scan documents, compare versions visually, store them in folders, and manage access easily. " +
    "The design system features well-balanced typography, a consistent color palette, and illustrations that support the user flow. It includes dashboard screens, scanning views, comparison overlays, upload modules, and dark/light mode options. The layout ensures smooth usability and fast onboarding.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750754155/Screenshot_2025-06-24_140351_vfpegp.png" ,
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750754154/Screenshot_2025-06-24_140439_noj7ay.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750754154/Screenshot_2025-06-24_140450_xzeaiy.png"
  ],
  tags: ["Figma", "UI/UX", "Document Scanner"],
  githubUrl: "",
  figmaUrl: "https://www.figma.com/design/lYkWNFfz7KwzHdVqVxgwR4/Eduztrik?node-id=2-6&t=WhnP5YekxN6XKtnf-1", 
  technologies: [
    "Figma",
    "Illustrations",
    "Typography",
    "Component-Based Design",
    "Responsive Layouts",
    "Color Theory",
    "Prototyping"
  ],
  features: [
    "Clean and intuitive dashboard for managing documents",
    "Document scanning & side-by-side visual comparison UI",
    "Modern color palette with accessible contrast",
    "Custom illustrations and icon sets for better guidance",
    "Modular layout using components and auto-layouts",
    "Mobile and desktop responsive views",
    "Built with professional UI/UX design best practices"
  ]
},
{
  id: 13,
  title: "ElectroMart – Responsive UI/UX Design for Electronics Store",
  type: "uiux",
  category: "uiux",
  description: "A professional UI/UX design for an electronics eCommerce website, optimized for desktop, tablet, and mobile screens.",
  longDescription:
    "ElectroMart is a fully responsive eCommerce website design tailored for an electronics store. Built in Figma, it includes three complete screen sizes: desktop, tablet, and mobile. The design system uses consistent spacing, bold product imagery, and clean typography for an intuitive shopping experience. " +
    "Pages include a product listing grid, filters, detailed product view, cart system, and responsive header/footer navigation. Designed to reflect modern online store UI patterns, the layout offers smooth adaptability across all devices while maintaining a consistent brand tone and excellent usability.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750755073/Screenshot_2025-06-24_142058_zfc5rk.png" 
  ],
  tags: ["Figma", "eCommerce", "Responsive Design"],
  githubUrl: "",
  figmaUrl: "https://www.figma.com/design/6I6QMcQJmxf7uNJmY8TBlJ/EcoomerceFor-Practies?node-id=0-1&t=Yp0YL3h11yrwrgJA-1", 
  technologies: [
    "Figma",
    "Responsive Grids",
    "Design Tokens",
    "Typography",
    "Component Design",
    "Product UI",
    "Mobile-First UX"
  ],
  features: [
    "Designed for desktop, tablet, and mobile views",
    "Modern product listing with filters and quick view",
    "Detailed product pages with specs and pricing",
    "Clean and consistent layout with visual hierarchy",
    "Responsive header, footer, and navigation menus",
    "Cart page with product management UI",
    "Color-consistent and brand-focused visual identity"
  ]
},
{
  id: 14,
  title: "FruitEase – Mobile UI/UX Design for Fruit Delivery App",
  type: "uiux",
  category: "uiux",
  description: "A clean and colorful mobile-first UI/UX design for a fruit delivery app built in Figma.",
  longDescription:
    "FruitEase is a mobile-first UI/UX design for a fruit delivery application. Designed in Figma, it focuses on simplicity, soft color tones, and intuitive navigation tailored for small screens. " +
    "The app design includes user flows for browsing fruits, viewing item details, adding to cart, and smooth checkout — all optimized for mobile ergonomics. It uses consistent spacing, clear CTA buttons, and visual balance, making it ideal for learning and demonstrating mobile design principles. " +
    "The overall experience is clean, minimal, and user-friendly, helping users complete purchases with ease.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750754763/Screenshot_2025-06-24_140855_afwidu.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750754762/Screenshot_2025-06-24_140907_qhfqou.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750754763/Screenshot_2025-06-24_140942_n9m5md.png" 
  ],
  tags: ["Mobile Design", "Figma", "UI/UX"],
  githubUrl: "",
  figmaUrl: "https://www.figma.com/design/SJ0Ki4luOi3ix6h17krbs0/Fruits-Mobile-App?node-id=0-1&t=cgX0lUNtm0SKkcQl-1", 
  technologies: [
    "Figma",
    "Mobile UI/UX",
    "Typography",
    "Color Theory",
    "Component Design",
    "Auto Layout",
    "Responsive Grids"
  ],
  features: [
    "Mobile-first UI/UX layout",
    "Simple and soft color palette for fresh feel",
    "Clear CTA buttons and card-based item display",
    "User flow from browsing to checkout",
    "Clean spacing and alignment throughout",
    "Designed for performance and ease of use",
    "Great practice in mobile app design fundamentals"
  ]
},
{
  id: 15,
  title: "Instagram UI/UX Clone – Figma Prototype",
  type: "uiux",
  category: "uiux",
  description: "A mini UI/UX clone of Instagram created in Figma with full user flow and interactive prototyping.",
  longDescription:
    "This project is a UI/UX mobile app clone of Instagram built in Figma. It includes essential screens such as login, main feed, stories view, search, reels, profile, messages, and upload. Each screen follows Instagram’s original design closely while being structured for educational and layout practice purposes. " +
    "The entire user flow is connected via clickable prototype links, allowing full interaction simulation. The layout is pixel-aligned with mobile spacing standards, and iconography, fonts, and color usage mimic the real app. This design exercise helped reinforce concepts in interaction design, consistency, and mobile navigation best practices.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750755316/Screenshot_2025-06-24_142500_lc22wl.png"
  ],
  tags: ["Mobile UI", "Prototyping", "Clone Design"],
  githubUrl: "",
  figmaUrl: "https://www.figma.com/design/sY3Zxf1IHMmCclGKiuTA3w/INSTAGRAM-CLONE?node-id=0-1&t=32y28ESJWUtpdZLn-1", 
  technologies: [
    "Figma",
    "Prototyping",
    "Mobile Design",
    "Interaction Flow",
    "Component Design"
  ],
  features: [
    "Login, feed, profile, messaging, upload, and story screens",
    "Fully linked prototype with user flow simulation",
    "Pixel-perfect spacing and mobile grid alignment",
    "Replicates Instagram’s core UI behaviors",
    "Designed for mobile-first experience",
    "Focus on consistency, icon use, and UX standards"
  ]
}
];

export default projectsData;