export const contextCommands = {
  "/": [
    {
      label: "Explore Skills",
      speak: "Opening my skills section",
      route: "/skills",
    },
    {
      label: "View Projects",
      speak: "Showing my projects",
      route: "/projects",
    },
  ],

  "/skills": [
    {
      label: "View Projects",
      speak: "Let me show you my projects",
      route: "/projects",
    },
    {
      label: "Back to Home",
      speak: "Returning to home",
      route: "/",
    },
  ],

  "/projects": [
    {
      label: "See Skills",
      speak: "Here are my skills",
      route: "/skills",
    },
    {
      label: "Contact Me",
      speak: "Opening contact page",
      route: "/connect",
    },
  ],

  "/connect": [
    {
      label: "Back to Home",
      speak: "Going back to home",
      route: "/",
    },
  ],
};
