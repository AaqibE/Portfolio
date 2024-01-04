import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    // typescript,
    html,
    css,
    // docker,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    fullstack,
    project1,
    project2,
    project3,
    project4,
    project5,



    // carrent,
    // jobit,
    // tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Gallery",
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
      title: "FullStack Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX",
      icon: creator,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git & Github",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: reactjs,
      iconBg: "#383E56",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Node.js Developer",
      company_name: "Tesla",
      icon: nodejs,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: web,
      iconBg: "#383E56",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: fullstack,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo placeat fugiat mollitia enim reprehenderit quos corrupti natus",
      name: "Sara",
      designation: "CFO",
      company: "Enterprise",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo placeat fugiat mollitia enim reprehenderit quos corrupti natus",
      name: "John Doe",
      designation: "CEO",
      company: "123 Enterprise",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo placeat fugiat mollitia enim reprehenderit quos corrupti natus",
      name: "Lisa Lee",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Realtime Chat App",
      description:"This is the Realtime Chat Web application using node.js and socket.io. In this App multiple user can easily chat. If new user join the chat then the rest of joined user get notified.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/AaqibE?tab=repositories",
    },
    {
      name: "Fullstack Todo App",
      description:"This is the MERN Full Stack Todo App with login and signup authentication using JSON Web Tokens. In this Web App users can Add, Delete and Update their Todo List",
      tags: [
        {
          name: "Bootstrap",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
        {
          name: "Express.js",
          color: "orange-text-gradient",
        },
        {
          name: "MongoDB",
          color: "white-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/AaqibE?tab=repositories",
    },
    {
      name: "Personal 3D Portfolio",
      description:
        "This is my personal 3D fully responsive portfolio Web App with interactive 3D motions. Used emailjs library for sending email from client side",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Emailjs",
          color: "pink-text-gradient",
        },
      ],
      image: project3,
      source_code_link: "https://github.com/AaqibE?tab=repositories",
    },

    {
      name: "Pinterest Clone",
      description:
        "Pinterest clone developed using Node.js, JavaScript, MongoDB, and EJS. This App enables users to register, log in, and effortlessly share their visual storiesthrough image uploads.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: project4,
      source_code_link: "https://github.com/AaqibE?tab=repositories",
    },

    {
      name: "Instagram Clone",
      description:
        "Pinterest clone developed using Node.js, JavaScript, MongoDB, and EJS. This App enables users to register, log in, and effortlessly share their visual storiesthrough image uploads.",
      tags: [
        {
          name: "Javascript",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: project5,
      source_code_link: "https://github.com/AaqibE?tab=repositories",
    },


    
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  