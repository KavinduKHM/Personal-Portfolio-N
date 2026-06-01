export const portfolioData = {
  personal: {
    name: "Nilumi Dakshika",
    headline: "Full-Stack Developer",
    bio: "I'm an Information Technology undergraduate with a strong academic foundation and an insatiable curiosity for how things work under the hood. I don't just write code, I engineer solutions that are efficient, scalable, and user-focused. Every project is an opportunity to apply theoretical concepts to real challenges, and I embrace new technologies with enthusiasm rather than hesitation. As a natural collaborator, I believe the best software emerges from teams that communicate openly and push each other to improve. My goal? To grow into a software developer who doesn't just ship features, but delivers genuine value.",
    email: "nilumi.dakshika@gmail.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    resumeLink: "/resume.pdf"
  },
  skills: [
    "React", "Node.js", "Python", "MongoDB", "SQL", "Express", 
    "TypeScript", "Tailwind CSS", "Next.js", "Java", "Kotlin",
  ],
  projects: [
    {
      id: 1,
      title: "VERTEX - Smart Campus",
      role: "A full-stack web application for managing campus facilities, bookings, and maintenance workflows.",
      description: [
        "Built a full‑stack Smart Campus web application for managing campus resources - bookings, QR check‑in, tickets, and user roles - with a RESTful Java backend and a responsive React frontend.",
        "Implemented OAuth2 authentication, real‑time notifications, admin user management, file uploads, and SQL migrations, plus a clean Tailwind/Vite UI and API integrations for campus workflows."],
      technologies: ["Java", "Spring Boot", "Maven", "React", "Vite", "JavaScript (JSX)", "Tailwind CSS", "Node.js", "PostgreSQL / SQL", "OAuth2", "GitHub"],
      image: "photos/vertex.png",
      liveLink: "https://example.com/project1",
      githubLink: "https://github.com/nilumi-d/vertex-smart-campus",
      caseStudy: {
        keyFeatures: [
        "Implemented OAuth2 / token-based authentication and role-based access control (Admin, Technician, HR, User) across backend and frontend",
        "Built bookings system with calendar view, sequential booking records, QR check‑in flow, and admin approval workflows",
        "Developed ticketing module for issue reporting and file attachments with server-side upload handling",
        "Implemented real‑time notification flow and notification dropdowns for user and admin alerts",
        "Added user management and role administration with profile updates and secure password flows (reset, forgot, OAuth2 flows)",
        "Created responsive dashboards and analytics views for admins using charts and aggregated metrics",
        "Enabled report export and SQL migration management for production data (Postgres/SQL scripts)",
        "Built a centralized API layer (Axios) with auth interceptors, error handling, and token refresh support",
        "Implemented environment‑aware configuration and local persistence for uploads and application settings"
        ],
        technologiesUsed: ["Java", "Spring Boot", "Maven", "React", "Vite", "JavaScript (JSX)", "Tailwind CSS", "Node.js (dev tooling)", "PostgreSQL / SQL", "OAuth2", "Axios", "JWT (token flows)"],
        
        contribution: [
        "Designed and implemented the full‑stack architecture: Spring Boot REST API backend and React + Vite frontend",
        "Implemented secure authentication and authorization (OAuth2/token flows) and role-based UI routing",
        "Built booking workflows (create, update, calendar view, QR check‑in) and ticketing with file uploads",
        "Developed centralized API integration using axios with interceptors for auth and global error handling",
        "Created admin dashboards, user management screens, and notification components for operational visibility",
        "Authored SQL migration and seed scripts and integrated file upload handling on the backend",
        "Improved UX with responsive Tailwind-based UI and reusable React components"
        ],
        keyLearnings: [
        "Designing a maintainable Java + React architecture with clear API boundaries",
        "Implementing production-ready authentication patterns (OAuth2, token management, refresh flows)",
        "Translating campus workflows (bookings, QR check‑in, tickets) into robust backend logic and frontend UX",
        "Building centralized API clients and handling auth/errors consistently across the app",
        "Balancing responsive UI, accessibility, and state management in a large React codebase",
        "Managing file uploads and persistence while keeping security and data integrity in mind"
        ],
        images: [
        "https://via.placeholder.com/800x450/0EA5A4/FFFFFF?text=Bookings+Dashboard",
        "https://via.placeholder.com/800x450/2563EB/FFFFFF?text=QR+Check-In+Flow"
        ],
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
        }
      },
    {
      id: 2,
      title: "Internship & Job Preparation Platform",
      role: "Internship & Job Preparation Platform",
      description: [
        "Developed a full‑stack Internship & Job Preparation Platform to streamline hiring: company job postings, student applications, AI‑evaluated screening exams, and interview workflows.", 
        "Implemented identity verification (OCR + in‑browser face detection), exam integrity controls (tab/visibility monitoring, violation logging, auto‑termination), AI scoring with feedback, PDF/report exports, and role‑based dashboards for students, companies, and admins."
      ],
      technologies: ["Next.js", "TypeScript", "tRPC", "Prisma (SQLite)", "Tailwind CSS", "face-api.js", "Tesseract.js", "NextAuth.js"],
      image: "photos/intern3.png",
      liveLink: "https://example.com/project1",
      githubLink: "https://github.com/nilumi-d/Internship-and-Job-preparation-platform",
      caseStudy: {
        keyFeatures: [
            "Built AI-evaluated screening flow: question bank → exam submission → automated AI evaluation and pass/fail filtering",
            "Applicant identity verification using OCR (Tesseract.js) and face checks (face-api.js) before exam access",
            "Exam integrity controls: tab-switch / fullscreen exit / copy-paste prevention, violation logging and automatic termination",
            "Role-based access control and multi-role UI (Student, Company, Admin) with protected pages and admin fallbacks",
            "Job & application management: company job posts, student applications, per-application exam state and results",
            "Prep-quiz module for candidate practice with attempts tracking and scoring",
            "Evaluation pipeline with structured results (score, percentage, AI feedback, CV upload gating)",
            "Prisma data models for full domain (users, companies, jobs, questions, applications, evaluations, violations)",
            "tRPC-backed API layer with typed procedures and centralized client integration in the frontend",
            "ID upload + OCR cross-check against registered student record to prevent fraud",
            "PDF/report utilities and server/client-side helpers (pdf-lib, pdfkit) for exports and reporting",
            "Email / OTP utilities (nodemailer) and Playwright tests for end-to-end flows (dev tooling)",
            "Client-side face model assets included in /public/models for in-browser face detection",
            "Detailed UX: responsive pages, reusable components, and security-first exam UX"
            ],
            technologiesUsed: [
            "Next.js", "TypeScript", "tRPC", "Prisma (SQLite)", "Tailwind CSS", "face-api.js", "Tesseract.js", "NextAuth.js"
            ],
            githubLinks: {
            repository: "https://github.com/nilumi-d/Internship-and-Job-preparation-platform"
            },
            contribution: [
            "Designed the full-stack architecture using the T3-inspired stack (Next.js + tRPC + Prisma) and organized domain modules (Company, Student, Exam, AI Evaluation)",
            "Modeled complex application state in Prisma: users, companies, jobs, questions, exam answers, violations, and evaluation results",
            "Implemented secure verification UX: ID upload, OCR extraction, and in-browser face detection with face-api.js",
            "Built the exam integrity system: client-side guards (tab/visibility monitoring), violation recording, and server-side processing",
            "Developed the AI evaluation pipeline (server-side procedures) to score exam answers, persist evaluation results, and gate CV upload",
            "Created modular, typed tRPC procedures and integrated them with the React frontend via a centralized API layer",
            "Implemented authentication and role-aware routing using NextAuth, session types, and server-side guards",
            "Authored responsive, reusable UI components and pages (apply flow, company dashboard, admin evaluation tools)",
            "Added export/reporting utilities (PDF generation) and test scaffolding (Playwright) to support QA and demos"
            ],
            keyLearnings: [
            "Designing maintainable full-stack TypeScript apps with tRPC + Prisma and strong typing across client/server",
            "Implementing real-time client-side verification (OCR + face detection) and handling media as base64 safely",
            "Translating exam integrity requirements into concrete UI and backend checks (visibility API, violation types, auto-termination)",
            "Building an AI-assisted evaluation pipeline that maps free-text answers to structured scores and feedback",
            "Modeling complex recruitment workflows in Prisma (one-to-many relations, enums, evaluation snapshots, uniqueness constraints)",
            "Balancing UX and security: clear user flow for verification while avoiding blocking user progress prematurely",
            "Using Playwright for end-to-end verification and integrating PDF/report generation for operational reporting"
            ],
            images: [
            "https://via.placeholder.com/1200x675/0EA5E9/ffffff?text=Applicant+Verification+Flow",
            "https://via.placeholder.com/1200x675/8B5CF6/ffffff?text=AI+Evaluation+Results+Dashboard"
            ],
            videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
            }
      },
    
    {
      id: 3,
      title: "DailyWell",
      role: "Wellness & Habit Tracker Mobile App",
      description: [
        "Developed a native Android app to help users build healthier routines through habit tracking, mood logging, and hydration monitoring.",
        "Implemented reminders/notifications, achievement progress, and a home-screen widget with a clean Material-style UI and local persistence."
      ],
      technologies: ["Kotlin", "Gradle ", "Java", "AndroidX", "GitHub"],
      image: "photos/dailywell2.png",
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
      id: 4,
      title: "TaleGo",
      role: "Reading & Writing Mobile Application",
      description: [
        "Built an Android app that lets users discover books/stories, read or listen to content, and publish their own writing.",
        "Designed a multi-screen experience with onboarding, authentication, library/home navigation, profile, and reading/listening flows."
      ],
      technologies: ["Kotlin", "Gradle ", "Java", "AndroidX", "GitHub"],
      image: "photos/Talego.png",
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
      id: 5,
      title: "CocoSmart",
      role: "Full-Stack Operations & E-Commerce Platform",
      description: [
        "Developed a full-stack MERN application for a coconut/agri-business platform integrating e-commerce, inventory management, finance tracking, and operational workflows.",
        "Implemented a scalable system with role-based dashboards (Admin, HR, Worker) and secure JWT authentication, enabling seamless coordination between business operations and customer-facing services."
      ],
      technologies: ["React", "Node", "Express", "MongoDB", "Tailwind CSS", "Axios", "Recharts", "Framer Motion", "SweetAlert2", "react-hot-toast", "jsPDF", "html2canvas", "QRCode", "Swiper"],
      image: "photos/coco.png",
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
      id: 6,
      title: "Online School Information Management System",
      role: "Full-Stack OOP Project",
      description: [
        "Set up the foundation for a Java-based school management web application using Jakarta EE (JSP/Servlets).",
        "Established the project structure and server configuration to support future modules like student/teacher/course management and admin workflows."
      ],
      technologies: ["Java", "Jakarta EE (JSP / Servlets)", "Apache Tomcat 9", "Eclipse WTP (Dynamic Web Project)", "GitHub"],
      image: "photos/school.png",
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
      degree: "Bsc(hons) in Information Technology Specialization in Information Technology (Undergraduate)",
      institution: "SLIIT",
      year: "2023 - Present",
      gpa: "3.8/4.0"
    }
  ]
};