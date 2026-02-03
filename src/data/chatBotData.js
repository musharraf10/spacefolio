export const chatbotKnowledge = {
  intro: {
    greeting:
      "Hey, I’m Musharaf. You’re exploring my space-themed portfolio. What would you like to check out?",
    mainActions: ["Skills", "Projects", "Journey", "Experience", "Contact"],
  },

  profile: {
    name: "Shaik Musharaf",
    title: "Full-Stack Developer",
    shortBio:
      "I build full-stack web applications with a focus on clean UI, scalable systems, and real-world problem solving.",
  },

  skills: {
    summary:
      "My core skills focus on full-stack web development, with strong emphasis on frontend architecture and backend APIs.",

    corePreview: [
      {
        id: "react",
        label: "React",
        hint: "Component-driven UI & animations",
      },
      {
        id: "javascript",
        label: "JavaScript",
        hint: "Core logic & async behavior",
      },
    ],

    coreDetails: {
      react:
        "I use React to build scalable interfaces using hooks, state management, and animation libraries like Framer Motion.",
      javascript:
        "JavaScript is the backbone of my applications, handling logic, DOM interactions, and async workflows.",
      html: "I write semantic, accessible HTML with SEO and structure in mind.",
      css: "I build responsive layouts using Flexbox, Grid, and Tailwind CSS.",
      node: "I use Node.js to build backend services and REST APIs.",
      express:
        "Express helps me structure APIs, middleware, and backend routing efficiently.",
      java: "I use Java mainly for DSA and object-oriented problem solving.",
    },

    supportingStackPreview: ["MongoDB", "SQL", "Git", "REST APIs"],

    nextActions: [
      "View all skills",
      "See projects using these skills",
      "Go back to main menu",
    ],
  },

  projects: {
    summary:
      "I’ve built several full-stack and real-time applications, ranging from productivity tools to video platforms.",

    mainProject: {
      title: "FocusVault",
      pitch:
        "A study productivity PWA that helps students track sessions, streaks, and performance.",
      techHighlight: ["React", "Node", "MongoDB", "JWT", "PWA"],
    },

    majorPreview: [
      {
        id: 2,
        title: "Video Call Application",
        hint: "Real-time meetings with WebRTC",
      },
      {
        id: 3,
        title: "Blogging Platform",
        hint: "Role-based content management",
      },
    ],

    projectDetails: {
      2: "This project enables real-time video meetings with chat, screen sharing, and meeting history using WebRTC and Socket.IO.",
      3: "A blogging platform with role-based access, secure APIs, and SEO-friendly content structure.",
      4: "An online hostel booking system with map-based search and secure booking management.",
    },

    minorNote:
      "I also built smaller projects like collaborative notes, attendance systems, and this portfolio itself.",

    nextActions: [
      "View one project in detail",
      "View all projects",
      "Go back to main menu",
    ],
  },

  journey: {
    summary:
      "My journey is structured in phases, moving from curiosity to execution and future expansion.",

    phasePreview: [
      "Origin – curiosity and exploration",
      "Base – building fundamentals",
      "Execution – hands-on projects",
    ],

    phaseDetails: {
      origin:
        "This phase was about understanding how systems work and developing curiosity-driven learning habits.",
      foundation:
        "I focused on strengthening core technical and logical foundations.",
      execution:
        "I actively build real projects, learn through iteration, and refine my skills.",
    },

    futureNote:
      "Upcoming phases focus on system refinement and scaling impact.",

    nextActions: [
      "View full journey timeline",
      "See projects from this phase",
      "Back to main menu",
    ],
  },

  experience: {
    summary:
      "I’ve worked across AI training, full-stack development, and teaching roles.",

    rolePreview: [
      {
        company: "Scale AI / Outlier AI",
        role: "AI Training Data Annotator",
        status: "Ongoing",
      },
      {
        company: "Busitron IT Solutions",
        role: "Junior Full Stack Developer",
        status: "Completed",
      },
    ],

    roleDetails: {
      scaleAI:
        "I review and refine LLM outputs, evaluate code responses, and improve AI reasoning and conversational quality.",
      busitron:
        "I built production-ready MERN applications, integrated APIs, improved performance, and implemented authentication.",
      dsa: "As a DSA teaching assistant, I helped students solve over 500 algorithmic problems in Java.",
    },

    nextActions: [
      "View full experience",
      "See related projects",
      "Go to contact",
    ],
  },

  contact: {
    summary:
      "You can reach me directly through email or professional platforms.",

    primary: ["Email", "LinkedIn", "GitHub"],
    secondary: ["Instagram", "Twitter"],

    resumeAction: "Download Resume",

    nextActions: ["Send a message", "Download resume", "Back to main menu"],
  },

  fallback: {
    unknown:
      "I don’t have an action for that yet. You can explore skills, projects, or experience instead.",
    redirectSuggestion: "Would you like me to take you to the relevant page?",
  },
};
