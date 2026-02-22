export const projects = [
  {
    title: "Sparkling Event Planners",
    description: "An event booking app.",
    image: "/images/P9.png",
    tags: [
      "React",
      "React-router-dom",
      "react-phone-number-input",
      "axios",
      "Tailwindcss",
    ],
    source: "https://github.com/petergambo/Sparkling-Event",
    visit: "https://Sparkling-Event.vercel.app/",
    id: 9,
  },
  {
    title: "Stellaux Global",
    description:
      "A fully functional and responsive web app to book consultation for your events",
    image: "/images/P4.png",
    tags: ["ReactJS", "Tailwindcss", "JavaScript"],
    source: "https://github.com/Longsparfa/next-stella",
    visit: "https://stellauxglobal.com",
    id: 4,
    overview: [],
    proChallenge: [],
    devResearch: [],
    devApproach: [],
    theSolution: [],
  },
  {
    title: "Healthcare Dashboard",
    description:
      "Fetch all patients from an API and displays patient info like diagnosis history, diagnosis list, lab results, and other personal data of patient depending on which patient is clicked.",
    image: "/images/P5.png",
    tags: ["ReactJs", "Tailwindcss", "Patients API"],
    source: "https://github.com/Longsparfa/tech-care",
    visit: "https://tech-care-eta.vercel.app",
    id: 5,
  },
  {
    title: "Frontend Amazon Clone",
    description: "Displays available products in a visually appealling way. ",
    image: "/images/P8.png",
    tags: ["React/Redux", "Tailwindcss", "JavaScript"],
    source: "https://github.com/Longsparfa/amazon-clone",
    visit: "https://frontend-amazon-clone-sable.vercel.app/",
    id: 8,
  },
  {
    title: "A Movie Discovery Website",
    description:
      "This is a movie discovery web app that allows users to search for movies and view details about them. It was developed with data consumed from the TMDB API",
    image: "/images/P6.png",
    tags: ["ReactJS", "Tailwindcss", "TMDB API"],
    source: "https://github.com/Longsparfa/movie-discovery",
    visit: "https://movie-discovery-zeta.vercel.app/",
    id: 6,
  },

  {
    title: "Under Construction",
    description:
      "This is a modern E-commerce website built with the following fascinating technologies.",
    image: "/images/P1.png",
    tags: ["React", "Tailwindcss", "Firebase", "Stripe"],
    source: "https://github.com/Longsparfa/my-Eshop",
    visit: "https://my-eshop-cyan.vercel.app/",
    id: 1,
  },

  {
    title: "Ideosphere clone",
    description:
      "While building this website i learned few advanced React & JavaScript topics, as well as tailwindcss grid.",
    image: "/images/P2.png",
    tags: ["React", "Tailwindcss"],
    source: "https://https://github.com/Longsparfa/Ideosphere",
    visit: "https://parfa-ideosphereclone.vercel.app/",
    id: 2,
  },
  {
    title: "An Image Gallery",
    description:
      "A fully functional and responsive image gallery that showcases a collection of images in a visually appealling way. It allwows a user to Login to the gallery page if registered. Once users are logged in they would be able to drag and drop images as well as effortlessly rearrange them within the gallery ",
    image: "/images/P7.png",
    tags: ["ReactJS", "Tailwindcss", "JavaScript"],
    source: "https://github.com/Longsparfa/image-gallery",
    visit: "https://comforting-ganache-393e38.netlify.app/",
    id: 7,
  },

  {
    title: "Personal Finance Tracker",
    description:
      "The Personal Finance tracker allows users to track their finances or even make their budget by adding items to the list of transactions as well as editing and deleting.",
    image: "/images/P3.png",
    tags: ["React", "Tailwindcss"],
    source: "https://github.com/Longsparfa/budget-tracker",
    visit: "https://budget-tracker-sooty-one.vercel.app/",
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2022, text: "Started my journey" },
  { year: 2023, text: "Working as a freelance Front-end developer" },
  { year: 2023, text: "Shared my projects with the world" },
  { year: 2024, text: "Frontend instructor at nHub Foundation Africa" },
  { year: 2024, text: "Frontend Mentor & Developer at Bluehouse Technologies" },
  { year: 2025, text: "Freelancer" },
];

export function getProjectById(id) {
  return projects.find((project) => project.id === Number(id));
}
