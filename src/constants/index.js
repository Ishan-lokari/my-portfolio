import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";


export const HERO_CONTENT = "I am a motivated full stack developer and engineering student, passionate about transforming ideas into impactful digital solutions. I enjoy building meaningful user experiences and solving real-world problems through technology. With a strong sense of initiative and a focus on continuous improvement, I strive to create products that are both practical and forward-thinking.";

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [ ];

export const PROJECTS = [
  {
    title: "Quickcare",
    image: project1,
    description:
      "A hospital management web application with user and admin dashboard and authentication",
    technologies: [ "React", "Node.js", "Postgresql"],
  },
  {
    title: "FeedBot",
    image: project2,
    description:
      "An application for analyzing and categorizing feedback using sentiment analysis. It allows users to submit feedback, view sentiment results, and track the overall performance of courses and faculty.",
    technologies: ["react", "tailwind", "Mongo", "flask"],
  },
];

export const CONTACT = {
  address: "Belgaum, Karnataka",
  phoneNo: "+91 6363863292 ",
  email: "coolishanlokari@gmail.com",
};
