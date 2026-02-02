// export const journeyPhases = [
//   {
//     id: "phase-1",
//     order: 1,
//     title: "Discovery",
//     description:
//       "The beginning of your cosmic adventure. Explore new horizons and set your course.",
//     completed: true,
//     locked: false,
//     duration: "2 weeks",
//     milestones: [
//       "Initial exploration and research",
//       "Goal setting and planning",
//       "Resource gathering",
//       "Team formation",
//     ],
//     achievements: ["First Steps", "Explorer Badge", "Vision Setter"],
//   },
//   {
//     id: "phase-2",
//     order: 2,
//     title: "Foundation",
//     description:
//       "Build the groundwork for your journey. Establish core systems and frameworks.",
//     completed: true,
//     locked: false,
//     duration: "4 weeks",
//     milestones: [
//       "Core infrastructure setup",
//       "Process documentation",
//       "Initial prototyping",
//       "Feedback loops established",
//     ],
//     achievements: ["Builder", "Architect", "Foundation Master"],
//   },
//   {
//     id: "phase-3",
//     order: 3,
//     title: "Development",
//     description:
//       "Rapid growth and iteration. Transform ideas into tangible results.",
//     completed: false,
//     locked: false,
//     duration: "8 weeks",
//     milestones: [
//       "Feature development sprint",
//       "Quality assurance testing",
//       "User feedback integration",
//       "Performance optimization",
//     ],
//     achievements: ["Developer", "Innovator", "Problem Solver"],
//   },
//   {
//     id: "phase-4",
//     order: 4,
//     title: "Refinement",
//     description:
//       "Polish and perfect your creation. Fine-tune every detail for excellence.",
//     completed: false,
//     locked: false,
//     duration: "3 weeks",
//     milestones: [
//       "UI/UX enhancement",
//       "Bug fixes and stability",
//       "Documentation completion",
//       "Pre-launch preparation",
//     ],
//     achievements: ["Perfectionist", "Detail Master", "Quality Champion"],
//   },
//   {
//     id: "phase-5",
//     order: 5,
//     title: "Launch",
//     description:
//       "Take off into the cosmos. Share your creation with the world.",
//     completed: false,
//     locked: true,
//     duration: "1 week",
//     milestones: [
//       "Final testing and validation",
//       "Deployment to production",
//       "Marketing campaign launch",
//       "Community engagement",
//     ],
//     achievements: ["Launcher", "Pioneer", "World Changer"],
//   },
//   {
//     id: "phase-6",
//     order: 6,
//     title: "Growth",
//     description:
//       "Expand your reach and impact. Scale to new heights and dimensions.",
//     completed: false,
//     locked: true,
//     duration: "Ongoing",
//     milestones: [
//       "User acquisition and retention",
//       "Feature expansion",
//       "Market penetration",
//       "Partnership development",
//     ],
//     achievements: ["Growth Hacker", "Scale Master", "Empire Builder"],
//   },
// ];
export const journeyPhases = [
  {
    id: "origin",
    order: 1,
    state: "completed",

    phase: {
      title: "Exploration & Curiosity",
      shortLabel: "Origin",
    },

    preview: {
      headline: "Learning how things work",
      summary: "Early exploration into problem-solving and systems thinking.",
    },

    details: {
      description:
        "This phase focused on discovering interests, understanding basic concepts, and building curiosity-driven learning habits.",
      highlights: [
        "Exploration mindset",
        "Research-driven learning",
        "Goal clarity",
      ],
    },
  },

  {
    id: "foundation",
    order: 2,
    state: "completed",

    phase: {
      title: "Foundational Thinking",
      shortLabel: "Base",
    },

    preview: {
      headline: "Building strong fundamentals",
      summary: "Established core technical and logical foundations.",
    },

    details: {
      description:
        "Focused on understanding fundamentals deeply and creating a strong base for future growth.",
      highlights: [
        "Core concepts",
        "System fundamentals",
        "Consistency and discipline",
      ],
    },
  },

  {
    id: "execution",
    order: 3,
    state: "current",

    phase: {
      title: "Applied Building",
      shortLabel: "Execution",
    },

    preview: {
      headline: "Turning ideas into reality",
      summary: "Learning through hands-on implementation and iteration.",
    },

    details: {
      description:
        "This phase emphasizes building real systems, experimenting, learning from failures, and improving through feedback.",
      highlights: [
        "Project execution",
        "Iteration mindset",
        "Debugging and refinement",
      ],
    },
  },

  {
    id: "refinement",
    order: 4,
    state: "future",

    phase: {
      title: "System Refinement",
      shortLabel: "Polish",
    },

    preview: {
      headline: "Sharpening quality and clarity",
      summary: "Improving structure, performance, and design decisions.",
    },

    details: null,
  },

  {
    id: "expansion",
    order: 5,
    state: "future",

    phase: {
      title: "Growth & Expansion",
      shortLabel: "Scale",
    },

    preview: {
      headline: "Expanding impact and depth",
      summary: "Exploring advanced systems and broader problem spaces.",
    },

    details: null,
  },
];
