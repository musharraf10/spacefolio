export const navigationGuide = {
  home: [
    {
      label: "Go to Skills",
      route: "/skills",
      script: "Let’s explore my skills.",
    },
    {
      label: "View Projects",
      route: "/projects",
      script: "Here are my projects.",
    },
    {
      label: "My Journey",
      route: "/journey",
      script: "This is my learning journey.",
    },
  ],

  skills: [
    {
      label: "View Projects",
      route: "/projects",
      script: "Moving to projects.",
    },
    {
      label: "My Experience",
      route: "/experience",
      script: "Here’s my experience.",
    },
    { label: "Back to Home", route: "/", script: "Returning to home." },
  ],

  projects: [
    {
      label: "Skills Used",
      route: "/skills",
      script: "These skills power my projects.",
    },
    { label: "Journey", route: "/journey", script: "This shows how I grew." },
    { label: "Back to Home", route: "/", script: "Going back home." },
  ],

  journey: [
    {
      label: "Experience",
      route: "/experience",
      script: "Here’s my experience.",
    },
    { label: "Projects", route: "/projects", script: "Let’s see projects." },
    { label: "Home", route: "/", script: "Back to home." },
  ],

  experience: [
    {
      label: "Projects",
      route: "/projects",
      script: "Projects showcase my work.",
    },
    { label: "Contact Me", route: "/contact", script: "Let’s connect." },
    { label: "Home", route: "/", script: "Returning home." },
  ],

  contact: [
    { label: "Home", route: "/", script: "Back to home." },
    { label: "Projects", route: "/projects", script: "Let’s review projects." },
  ],
};
