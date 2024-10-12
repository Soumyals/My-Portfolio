//import { afterImage } from "three/examples/jsm/nodes/Nodes.js";

import { AfterimagePass } from "three/examples/jsm/postprocessing/AfterimagePass.js";

import {
    analytics,
    developer,
    research,
    ai,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    python,
    C,
    Unity,
    Blender,
    OpenGL,
    GO,
    R,
    Hadoop,
    HIVE,
    Kafka,
    SQL,
    Chroma,
    nodejs,
    mongodb,
    git,
    figma,
    cog,
    pesu,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    pencil,
    expense,
    inventory,
    parkinson,
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Machine Leaning Engineer",
      icon: ai,
    },
    {
      title: "AI/ML researcher",
      icon: research,
    },
    {
      title: "Data Analyst",
      icon: analytics,
    },
    {
      "title": "Software Engineer",
      "icon": developer
    },
  ];
  
  const technologies = [
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    // {
    //   name: "Tailwind CSS",
    //   icon: tailwind,
    // },
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
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
    {
      name: "python",
      icon: python,
    },
    // {
    //   name: "C",
    //   icon: C,
    // },
    {
      name: "R Language",
      icon: R,
    },
    {
      name: "GO Language",
      icon: GO,
    },
    {
      name: "SQL",
      icon: SQL,
    },
    // {
    //   name: "Chroma DB",
    //   icon: Chroma,
    // },
    {
      name: "Hadoop",
      icon: Hadoop,
    },
    {
      name: "HIVE",
      icon: HIVE,
    },
    // {
    //   name: "Kafka",
    //   icon: Kafka,
    // },
    {
      name: "OpenGL",
      icon: OpenGL,
    },
    // {
    //   name: "Blender",
    //   icon: Blender,
    // },
    // {
    //   name: "Unity",
    //   icon: Unity,
    // },
  ];
  
  const experiences = [
    {
      title: "Machine Learning intern",
      company_name: "Cognitive Clouds Solutions",
      icon: cog,
      iconBg: "#383E56",
      date: "June 2024 - August 2024",
      points: [
        "Developed advanced machine learning models using linear regression, lasso regression and random forest to predict non- invasive HbA1c value and diabetes risk using food intake data and CGM values.",
        "It also suggests a nutrient intake regime.",
        "Incorporated feature engineering techniques to enhance the model and achieved 87% accuracy and successfully met user need specifications.",
      ],
    },
    {
      title: "AI/ML Research Intern",
      company_name: "Centre of Data Science and Applied Machine Learning, PES University",
      icon: pesu,
      iconBg: "#E6DEDD",
      date: "June 2024 - October 2024",
      points: [
        "Built a Generative AI solution and crafted a Natural Language Processing (NLP) project utilizing a Large Language Model to enhance football performance analysis with real-time data integration.",
        "Implemented RAG pipeline and fine-tuning methods to optimize results, leveraging tools such as HuggingFace for model training, Chroma DB for storing and retrieving vectors embeddings, used retrieval methods such as similarity search and parent document retriever for relevant information retrieval. Utilized libraries such as Langchain and Pytorch for implementation.",
        "Produced avg hallucinations of 0.04 and F1 score of nearly 1 on training data giving a perfectly optimized model.",
      ],
    },
  //   {
  //     title: "Web Developer",
  //     company_name: "Shopify",
  //     icon: shopify,
  //     iconBg: "#383E56",
  //     date: "Jan 2022 - Jan 2023",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
  //   {
  //     title: "Full stack Developer",
  //     company_name: "Meta",
  //     icon: meta,
  //     iconBg: "#E6DEDD",
  //     date: "Jan 2023 - Present",
  //     points: [
  //       "Developing and maintaining web applications using React.js and other related technologies.",
  //       "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //       "Implementing responsive design and ensuring cross-browser compatibility.",
  //       "Participating in code reviews and providing constructive feedback to other developers.",
  //     ],
  //   },
   ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Pencil Sketch Converter",
      description:
        "This project involves creating a Python-based application that transforms images into artistic pencil sketches using OpenCV. By employing edge detection and image processing techniques, the application successfully simulates hand-drawn effects, allowing users to achieve precise control over the transformation process.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "OpenCV",
          color: "green-text-gradient",
        },
        {
          name: "Tkinter",
          color: "pink-text-gradient",
        },
      ],
      image: pencil,
      source_code_link: "https://github.com/Soumyals/pencil-sketch-converter.git",
    },
    {
      name: "Expense Tracket",
      description:
        "This project presents an Expense Tracking System designed to help users effectively track and manage their expenses. Developed using the MERN stack, this application provides a user-friendly interface for recording, categorizing, and analyzing expenses. The project showcases my expertise in full-stack development, database management, and agile development methodologies.",
      tags: [
        {
          name: "Mongo DB",
          color: "blue-text-gradient",
        },
        {
          name: "React JS",
          color: "green-text-gradient",
        },
        {
          name: "HTML",
          color: "pink-text-gradient",
        },
      ],
      image: expense,
      source_code_link: "https://github.com/Soumyals/Expense-Tracker.git",
    },
    {
      name: "Inventory Management",
      description:
        "This project involves the conceptualization and automation of an Inventory Tracking System using C programming. The system is designed to manage inventory efficiently by utilizing fundamental data structures, including stacks, queues, and linked lists. By leveraging these data structures and algorithms, the system ensures smooth operations for tracking inventory",
      tags: [
        {
          name: "C ",
          color: "blue-text-gradient",
        },
        {
          name: "Data Structures",
          color: "green-text-gradient",
        },
        {
          name: "Algorithms",
          color: "pink-text-gradient",
        },
      ],
      image: inventory,
      source_code_link: "https://github.com/Soumyals/Inventory_Tracker.git",
    },
    {
      name: "Parkinson's Detection",
      description:
        "This project focuses on detecting Parkinson’s disease using machine learning techniques. By applying Support Vector Machines (SVM) for classification, I developed a model that effectively diagnoses Parkinson’s disease. The model underwent various data handling and pre-processing steps to ensure high accuracy and reliability, ultimately achieving an 89% accuracy in predictions.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Machine Learning",
          color: "green-text-gradient",
        },
        {
          name: "SVM",
          color: "pink-text-gradient",
        },
      ],
      image: parkinson,
      source_code_link: "https://github.com/Soumyals/Parkinson-s-Detection.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };