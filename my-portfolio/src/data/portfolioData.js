export const portfolioData = {
  personal: {
    name: "Alex Johnson",
    headline: "Full-Stack Developer & UI Enthusiast",
    bio: "I'm a passionate developer with 5+ years of experience building web applications that solve real problems. I love creating clean, responsive, and user-friendly interfaces. When I'm not coding, I'm probably playing chess or hiking.",
    uniqueFact: "🏔️ I climbed Mount Kilimanjaro in 2022",
    email: "alex.johnson@example.com",
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
      title: "DailyWell — Wellness & Habit Tracker Mobile App",
      role: "Designed and implemented the end-to-end Android app",
      description: [
        "Developed a native Android app to help users build healthier routines through habit tracking, mood logging, and hydration monitoring.",
        "Implemented reminders/notifications, achievement progress, and a home-screen widget with a clean Material-style UI and local persistence."
      ],
      technologies: ["Kotlin", "Gradle ", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/600x400/4F46E5/FFFFFF?text=E-Commerce+Platform",
      liveLink: "https://example.com/project1",
      githubLink: "https://github.com/yourusername/project1",
      caseStudy: {
        keyFeatures: [
          "Personalized habit tracking with streaks and progress charts",
          "Daily mood logging with insights over time",
          "Smart reminders for hydration and routine building"
        ],
        technologiesUsed: ["Kotlin", "Android Jetpack", "Room", "Firebase"],
        contribution: "Led the end-to-end architecture, UI design, and implementation of core habit and notification flows.",
        keyLearnings: [
          "Designing mobile experiences that encourage long-term engagement",
          "Balancing local persistence with cloud sync for performance",
          "Implementing accessible, minimalistic interfaces for daily-use apps"
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
      title: "Task Management App",
      role: "Full Stack Developer",
      description: [
        "Collaborative task management tool with real-time updates, team workspaces, and analytics dashboard."
      ],
      technologies: ["React", "Socket.io", "Express", "PostgreSQL", "Tailwind"],
      image: "https://via.placeholder.com/600x400/10B981/FFFFFF?text=Task+Management+App",
      liveLink: "https://example.com/project2",
      githubLink: "https://github.com/yourusername/project2",
      caseStudy: {
        keyFeatures: [
          "Real-time task updates with WebSocket-powered collaboration",
          "Team workspaces with role-based permissions",
          "Analytics dashboard for productivity tracking"
        ],
        technologiesUsed: ["React", "Socket.io", "Express", "PostgreSQL", "Tailwind CSS"],
        contribution: "Implemented real-time collaboration features and designed the analytics dashboard.",
        keyLearnings: [
          "Structuring WebSocket events for multi-tenant apps",
          "Designing intuitive task hierarchies for teams"
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
      title: "Weather Dashboard",
      role: "Frontend Developer",
      description: [
        "Real-time weather app with 5-day forecast, interactive maps, and weather alerts."
      ],
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
      image: "https://via.placeholder.com/600x400/F59E0B/FFFFFF?text=Weather+Dashboard",
      liveLink: "https://example.com/project3",
      githubLink: "https://github.com/yourusername/project3",
      caseStudy: {
        keyFeatures: [
          "Location-based current conditions and 5-day forecast",
          "Interactive temperature and precipitation charts",
          "Severe weather alerts with clear visual emphasis"
        ],
        technologiesUsed: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
        contribution: "Owned the UI implementation and data visualization layer.",
        keyLearnings: [
          "Handling third-party API rate limits gracefully",
          "Designing dashboards that remain readable on mobile"
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
      title: "Social Media Analytics",
      role: "UI/UX Developer",
      description: [
        "Analytics dashboard for social media managers with engagement metrics and campaign tracking."
      ],
      technologies: ["React", "D3.js", "Firebase", "Material-UI"],
      image: "https://via.placeholder.com/600x400/EF4444/FFFFFF?text=Analytics+Dashboard",
      liveLink: "https://example.com/project4",
      githubLink: "https://github.com/yourusername/project4",
      caseStudy: {
        keyFeatures: [
          "Cross-channel performance overview at a glance",
          "Campaign-level drill-down with audience segments",
          "Customizable reports exportable for stakeholders"
        ],
        technologiesUsed: ["React", "D3.js", "Firebase", "Material UI"],
        contribution: "Designed and implemented the dashboard UI and data visualizations.",
        keyLearnings: [
          "Working with complex, high-density visualizations",
          "Balancing aesthetics with readability in analytics tools"
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
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
    dribbble: "https://dribbble.com/yourusername"
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