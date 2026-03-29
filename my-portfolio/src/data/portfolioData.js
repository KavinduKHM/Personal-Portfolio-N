export const portfolioData = {
  personal: {
    name: "Nilumi Dakshika",
    headline: "Full-Stack Developer",
    bio: "I'm a passionate developer with 5+ years of experience building web applications that solve real problems. I love creating clean, responsive, and user-friendly interfaces. When I'm not coding, I'm probably playing chess or hiking.",
    uniqueFact: "🏔️ I climbed Mount Kilimanjaro in 2022",
    email: "nilumi.dakshika@gmail.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    resumeLink: "/resume.pdf"
  },
  skills: [
    "React", "Node.js", "Python", "MongoDB", "Express", 
    "TypeScript", "Tailwind CSS", "GraphQL", "Docker", "AWS"
  ],
  projects: [
    {
      id: 1,
      title: "DailyWell",
      role: "Wellness & Habit Tracker Mobile App",
      description: [
        "Developed a native Android app to help users build healthier routines through habit tracking, mood logging, and hydration monitoring.",
        "Implemented reminders/notifications, achievement progress, and a home-screen widget with a clean Material-style UI and local persistence."
      ],
      technologies: ["Kotlin", "Gradle ", "Java", "AndroidX", "GitHub"],
      image: "https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=E-Commerce+Platform",
      liveLink: "https://example.com/project1",
      githubLink: "https://github.com/nilumi-d/DailyWell",
      caseStudy: {
        keyFeatures: [
          "Habit management (add/edit/delete) with daily completion tracking and progress display",
          "Mood logging with 7-day trend visualization (line chart)",
          "Hydration tracking with daily goal, history, and “quick add” flows",
          "Reminder system using scheduled notifications with time windows and goal-aware suppression",
          "Achievement badges/streak mechanics and a home-screen progress widget",
          "Simple authentication flow (login/register) gated via local session state"
        ],
        technologiesUsed: ["Kotlin", "Gradle ", "Java", "AndroidX", "GitHub"],
        contribution: [
          "Designed and implemented the end-to-end Android app: navigation structure, core tracking flows (habits/mood/hydration), and UI screens.",
          "Built the reminder system (WorkManager + notification channels + deep links into the hydration screen) and implemented a home-screen widget.",
          "Modeled and persisted user data locally (habits, daily progress, mood entries, hydration settings/intake) with a reusable preferences manager."
        ],
        keyLearnings: [
          "Building multi-screen Android apps with Fragments + navigation and keeping state consistent across UI, storage, and widgets.",
          "Built the reminder system (WorkManager + notification channels + deep links into the hydration screen) and implemented a home-screen widget.",
          "Modeled and persisted user data locally (habits, daily progress, mood entries, hydration settings/intake) with a reusable preferences manager."
        ],
        images: [
          "https://via.placeholder.com/800x450/4F46E5/FFFFFF?text=DailyWell+Overview",
          "https://via.placeholder.com/800x450/4F46E5/FFFFFF?text=Habit+Detail"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    },
    {
      id: 2,
      title: "TaleGo",
      role: "Reading & Writing Mobile Application",
      description: [
        "Built an Android app that lets users discover books/stories, read or listen to content, and publish their own writing.",
        "Designed a multi-screen experience with onboarding, authentication, library/home navigation, profile, and reading/listening flows."
      ],
      technologies: ["Kotlin", "Gradle ", "Java", "AndroidX", "GitHub"],
      image: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Task+Management+App",
      liveLink: "https://example.com/project2",
      githubLink: "https://github.com/nilumi-d/TaleGo_Reading_and_Writing_mobile_application",
      caseStudy: {
        keyFeatures: [
          "Implemented onboarding flow and authentication screens (login/sign-up).",
          "Built home + library browsing experiences with bottom navigation patterns.",
          "Created dedicated reading and “now listening” screens for consuming content.",
          "Added profile and settings screens to support user personalization.",
          "Designed a story-writing/publishing UI for creating and submitting content."
        ],
        
        technologiesUsed: ["Kotlin", "Gradle ", "Java", "AndroidX", "GitHub"],
        contribution: [
          "Developed the UI layer across core activities (home, library, reading/listening, profile, settings, and writing).",
          "Implemented navigation between screens and wired consistent theming and reusable UI components (drawables/animations).",
          "Organized resources (layouts, selectors, backgrounds) to keep the design system consistent and maintainable"
        ],
        keyLearnings: [
          "Strengthened Android UI engineering skills (activities, XML layouts, resources, stateful selectors).",
          "Learned how to structure multi-screen apps for readability and scalability (naming, resource organization, Gradle setup).",
          "Improved UX thinking around content consumption flows (read vs listen) and creator workflows (write/publish)."

        ],
        images: [
          "https://via.placeholder.com/800x450/10B981/FFFFFF?text=Tasks+Board",
          "https://via.placeholder.com/800x450/10B981/FFFFFF?text=Team+Workspace"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    },
    {
      id: 3,
      title: "CocoSmart",
      role: "Full-Stack Operations & E-Commerce Platform",
      description: [
        "Developed a full-stack MERN application for a coconut/agri-business platform integrating e-commerce, inventory management, finance tracking, and operational workflows.",
        "Implemented a scalable system with role-based dashboards (Admin, HR, Worker) and secure JWT authentication, enabling seamless coordination between business operations and customer-facing services."
      ],
      technologies: ["React", "Node", "Express", "MongoDB", "Tailwind CSS", "Axios", "Recharts", "Framer Motion", "SweetAlert2", "react-hot-toast", "jsPDF", "html2canvas", "QRCode", "Swiper"],
      image: "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Weather+Dashboard",
      liveLink: "https://example.com/project3",
      githubLink: "https://github.com/nilumi-d/cocosmart-frontend",
      caseStudy: {
        keyFeatures: [
          "Implemented JWT authentication & role-based access control for Admin, HR, Worker, and Customer roles", 
          "Built order management system with sequential order IDs, status tracking, and user/admin views ",
          "Developed inventory-aware ordering with stock validation and automatic stock updates",
          "Created finance module for income tracking and profit calculation based on order data",
          "Designed operational modules (drivers, vehicles, workers, tasks, plantations, suppliers) with full CRUD functionality",
          "Built interactive dashboards with charts and analytics using Recharts",
          "Enabled report generation & exports (PDF, print support) and QR code utilities",
          "Integrated a chat endpoint for handling conversational interactions",
          "Developed multi-role frontend navigation (storefront + admin/HR/worker dashboards)",
          "Implemented centralized API integration using Axios with auth interceptors and error handling"
        ],
        technologiesUsed: ["React", "Node", "Express", "MongoDB", "Tailwind CSS", "Axios", "Recharts", "Framer Motion", "SweetAlert2", "react-hot-toast", "jsPDF", "html2canvas", "QRCode", "Swiper"],
        githubLinks: {
          frontend: "https://github.com/nilumi-d/cocosmart-frontend",
          backend: "https://github.com/nilumi-d/cocosmart-backend"
        },
        contribution: [
            "Designed and developed the complete full-stack architecture (frontend + backend) ",
            "Implemented secure authentication and role-based authorization across all modules", 
            "Built core business logic for orders, inventory, and finance workflows ",
            "Developed modular REST APIs with clean separation (routes, controllers, models)", 
            "Created responsive dashboards and reusable UI components for multiple user roles ",
            "Integrated frontend with backend using a centralized API layer with token handling ",
            "Implemented data visualization, reporting, and export features for operational insights "
        ],
        keyLearnings: [
          "Building scalable MERN applications with multiple user roles and complex workflows ",
          "Translating real-world business logic (stock, orders, profit tracking) into reliable systems ",
          "Designing maintainable APIs and structured React applications ",
          "Implementing secure authentication and authorization patterns (JWT + bcrypt) ",
          "Managing state, routing, and UI consistency across large frontend applications ",
          "Delivering complete operations dashboards with analytics and reporting features "
        
        ],
        images: [
          "https://via.placeholder.com/800x450/F59E0B/FFFFFF?text=Forecast+Overview",
          "https://via.placeholder.com/800x450/F59E0B/FFFFFF?text=Weather+Map"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    },
    {
      id: 4,
      title: "Online School Information Management System",
      role: "Full-Stack OOP Project",
      description: [
        "Set up the foundation for a Java-based school management web application using Jakarta EE (JSP/Servlets).",
        "Established the project structure and server configuration to support future modules like student/teacher/course management and admin workflows."
      ],
      technologies: ["Java", "Jakarta EE (JSP / Servlets)", "Apache Tomcat 9", "Eclipse WTP (Dynamic Web Project)", "GitHub"],
      image: "https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Analytics+Dashboard",
      liveLink: "https://example.com/project4",
      githubLink: "https://github.com/nilumi-d/Online-School-Information-Management-System-OOP-project-",
      caseStudy: {
        keyFeatures: [
          "Initialized a Jakarta EE web application structure (webapp) with deployment metadata",
          "Configured the project to run on Apache Tomcat (Servlet 4.0 / Tomcat 9)",
          "Added an initial JSP page as a starting point for UI and routing validation",
          "Prepared the codebase for adding Java backend layers (Servlet controllers, OOP domain models, and persistence)"
        ],
        technologiesUsed: ["Java", "Jakarta EE (JSP / Servlets)", "Apache Tomcat 9", "Eclipse WTP (Dynamic Web Project)", "GitHub"],
        contribution: [
          "Created and configured the Java web application skeleton (project facets, classpath, web app structure)",
          "Set up the runtime target (Tomcat) and validated the web layer setup via a starter JSP page",
          "Defined the groundwork for an OOP-driven backend (planned separation of models/controllers/views)"
        ],
        keyLearnings: [
            "How Jakarta EE web apps are structured and deployed on Tomcat",
            "Practical setup of a JSP/Servlet development environment (project facets, runtime, web resources)",
            "How to plan an OOP domain model for a multi-entity management system before implementation"
        ],
        images: [
          "https://via.placeholder.com/800x450/EF4444/FFFFFF?text=Analytics+Overview",
          "https://via.placeholder.com/800x450/EF4444/FFFFFF?text=Campaign+Detail"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    }
  ],


  socialLinks: {
    github: "https://github.com/nilumi-d",
    linkedin: "https://linkedin.com/in/nilumi-d",
    twitter: "https://twitter.com/nilumi_d",
    dribbble: "https://dribbble.com/nilumi_d"
  },
  experience: [
    {
      company: "Tech Solutions Inc.",
      role: "Senior Frontend Developer",
      period: "2022 - Present",
      description: "Leading frontend development for enterprise applications, mentoring junior developers, and implementing best practices."
    },
    {
      company: "Digital Agency Co.",
      role: "React Developer",
      period: "2020 - 2022",
      description: "Built responsive web applications for clients across healthcare, e-commerce, and finance sectors."
    },
    {
      company: "Startup Hub",
      role: "Junior Web Developer",
      period: "2019 - 2020",
      description: "Assisted in developing and maintaining client websites and web applications."
    }
  ],
  education: [
    {
      degree: "B.S. in Computer Science",
      institution: "University of Technology",
      year: "2019",
      gpa: "3.8/4.0"
    }
  ]
};