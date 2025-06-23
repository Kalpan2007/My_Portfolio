import { ProjectDetail } from "../components/ProjectModel";

// Comprehensive project data with all details needed for both cards and modals
const projectsData: ProjectDetail[] = [
  {
  id: 1,
  title: "JobFusion",
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
  tags: ["Full Stack"],
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
  tags: ["Hackathon", "Full Stack"],
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
  title: "Nike Landing Page Redesign",
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
  id:4,
  title: "Chrome Task Reminder Extension",
  description: "A productivity-focused Chrome Extension for hourly task reminders.",
  longDescription:
    "This Chrome Extension helps users stay productive by allowing them to create task lists and receive hourly reminders. Users can add tasks, get notified every hour, and mark them as complete. " +
    "The extension is built using vanilla JavaScript, HTML, and CSS, and leverages the Chrome Storage API and Notification API for persistent data and real-time alerts. " +
    "It features a clean, minimal interface and is optimized for performance. Developed and deployed within just 2 days on January 1st and 2nd, 2025.",
  images: [
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750684563/Screenshot_2025-01-02_190656_fiw6mo.png",
    "https://res.cloudinary.com/dxdrzit6x/image/upload/v1750684563/Screenshot_2025-01-02_173619_dbdfh1.png"
  ],
  tags: ["Chrome Extension"],
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
  id:5,
  title: "YouTube Clone",
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
  id:6,
  title: "React Multi-API Explorer",
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
  tags: ["React", "Frontend",],
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
  id:7,
  title: "Expense Tracker",
  description: "Expense management app with dark/light mode toggle and categorized tracking.",
  longDescription:
    "This Expense Tracker application allows users to manage their daily spending by adding expenses with descriptions, categories, and amounts. " +
    "Users can view a summarized table of all expenses, including category-wise breakdowns and total amount spent. Built with React, the app includes a dark/light mode toggle, form validations, and real-time updates. " +
    "Each expense entry can be dynamically added or deleted, and the total updates automatically. The UI is responsive and styled with modern CSS for a clean user experience.",
  images: [
    "/images/expense-tracker-1.png",
    "/images/expense-tracker-2.png",
    "/images/expense-tracker-3.png"
  ],
  tags: ["HTML5","CSS3","JS"],
  githubUrl: "https://github.com/Kalpan2007/expense-tracker", // replace with actual repo
  liveUrl: "https://kalpan-expense-tracker.vercel.app", // replace if deployed
  videoUrl: "https://www.youtube.com/embed/your-demo-id", // optional
  technologies: [
    "React",
    "JavaScript",
    "useState Hook",
    "LocalStorage",
    "CSS3"
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

];

export default projectsData;