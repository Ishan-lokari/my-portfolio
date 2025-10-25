import project1 from "../assets/projects/Project1.png";
import project2 from "../assets/projects/Project2.png";
import project3 from "../assets/projects/Project3.png";
import project4 from "../assets/projects/Project4.png";




export const HERO_CONTENT = "I am a motivated full stack developer and engineering student, passionate about transforming ideas into impactful digital solutions. I enjoy building meaningful user experiences and solving real-world problems through technology. With a strong sense of initiative and a focus on continuous improvement, I strive to create products that are both practical and forward-thinking.";

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [ ];

export const PROJECTS = [
  {
    title: "QuickCare",
    image: project1,
    description:
      "QuickCare is a hospital management system that provides separate dashboards for admins and patients. Admins can manage doctors, appointments, and bed availability, while patients can book OPD appointments and request beds. It includes real-time queue tracking for efficiency and a smooth hospital workflow.",
    technologies: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "FeedBot",
    image: project2,
    description:
      "FeedBot is a feedback analysis system that classifies course and faculty feedback into positive, neutral, or negative sentiments using a custom machine learning model. It enables users to submit feedback and allows admins to monitor trends and sentiment statistics for better decision-making.",
    technologies: ["React", "TailwindCSS", "MongoDB", "Node.js", "Python"],
  },
  {
    title: "MERN Machine Test",
    image: project3,
    description:
      "A web application that reads client or customer data from CSV files and distributes it among agents for management and tracking. It includes CRUD functionality, REST APIs, and a responsive interface to handle agent assignments and data visualization efficiently.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "OneBoxx",
    image: project4,
    description:
      "OneBoxx is an email unification platform that integrates multiple inboxes via IMAP, categorizes emails using Groq AI, and utilizes ElasticSearch for lightning-fast search and indexing. It provides a unified inbox with intelligent categorization and real-time sync.",
    technologies: ["React", "Node.js", "ElasticSearch", "Groq AI", "IMAP"],
  },
];


export const CONTACT = {
  address: "Belgaum, Karnataka",
  phoneNo: "+91 6363863292 ",
  email: "ishanlokari05@gmail.com",
};
