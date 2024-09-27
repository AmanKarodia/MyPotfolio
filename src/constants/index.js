import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    Jbs,
    carrent,
    shopify,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Development",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "React Native Developer",
      company_name: "JBS Enterprise",
      icon: Jbs,
      iconBg: "#E6DEDD",
      date: "Jul 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: " Freelance Web Developer",
      company_name: "Kantara",
      icon: shopify,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Nov 2023",
      points: [
        "Developed user-oriented visuals and features using front-end languages to increase site traffic.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Maintained up-to-date knowledge of emerging trends in web development technology through continuous learning opportunities.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "JBS Enterprise",
      description:
        "website for a Construction company code will be available in a week",
      tags: [
        {
          name: " figma",
          color: "blue-text-gradient",
        },
        {
          name: "React Native",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };