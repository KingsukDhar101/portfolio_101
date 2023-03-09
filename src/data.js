import netflix_clone_img from "./assets/netflix_1.png";
import twitter_clone_img from "./assets/twitter_clone_UI.png";
import resume_creator_img from "./assets/resume_creator.png";
import todo_app_img from "./assets/todo_app.png";
import tic_tac_toe_img from "./assets/tic_tac_toe_1.png";
import random_quote_generator_img from "./assets/markdown_previewer.png";
import markdown_previewer_img from "./assets/markdown_previewer.png";
import drum_machine_img from "./assets/drum_machine_1.png";

export const personal_data = {
  name: "Kingsuk Dhar",
  about:
    "Software Engineer with knowledge in Full Stack Web Development (esp. MERN) and problem-solving using Data Structure and Algorithms. Enthusiastic towards learning new things, travelling, trekking.",
  gmail: "kingsuk.1997dhar2@gmail.com",
  linkedin_url: "https://www.linkedin.com/in/kingsukdhar/",
  github_url: "https://github.com/KingsukDhar101",
  resume_url:
    "https://docs.google.com/document/d/1wstY8RL8GK8JkG4WPNNN-ZnznInmdtv9hN1UA_fkx48/edit?usp=sharing",
  skills: [
    {
      title: "Frontend",
      text: "ReactJS, Redux, ContextAPI, HTML, CSS, NPM, BootStrap, MaterialUI, JQuery, AJAX, SEO, API Email handling, Saas, Materialize,  React, XML, JSON",
    },
    {
      title: "Backend",
      text: "Node, Express, SQL, PostgreSQL, MongoDB, Firebase",
    },
    {
      title: "Languages",
      text: "JavaScript, Java, C, C++",
    },
    {
      title: "Problem Solving & Other conecpts",
      text: "Data Structure and Algorithms, Object Oriented Programming (OOP)",
    },
  ],
  projects: [
    {
      id: 1,
      title: "NETFLIX CLONE",
      img: netflix_clone_img,
      deployed_url: "https://netflix-clone-kd1.netlify.app/",
      github_link: "https://github.com/KingsukDhar101/netflix_clone_1",
      tech_stack:
        "React, Redux, Firebase, CSS, React Router, React Hook, TMDB api",
      description: [
        "Firebase authentication, Routing, Redux for state management",
        "TMDB api for movie data.",
      ],
    },
    {
      id: 2,
      title: "RESUME CREATOR",
      img: resume_creator_img,
      deployed_url: "https://resume-builder-101.netlify.app/",
      github_link: "https://github.com/KingsukDhar101/resume_builder_1",
      tech_stack: "React, Redux, Firebase, CSS, React Router, React Hooks",
      description: [
        "Firebase authentication, Routing, Redux for state management and firebase firestore to store data",
        "UI/template change functions where users can change color, font style and used download functionality",
      ],
    },
    {
      id: 3,
      title: "TWITTER CLONE (UI)",
      img: twitter_clone_img,
      deployed_url: "https://twitter-clone-101.netlify.app/",
      github_link: "https://github.com/KingsukDhar101/twitter_clone_ui",
      tech_stack: "HTML, CSS, JavaScript",
      description: ["Twitter clone (UI) using HTML, CSS, JavaScript"],
    },
    {
      id: 4,
      title: "TODO APP",
      img: todo_app_img,
      deployed_url: "https://todo-101.netlify.app/",
      github_link: "https://github.com/KingsukDhar101/todo101",
      tech_stack: "ReactJS, HTML, CSS, JavaScript",
      description: ["Todo application using react, html, css, JavaScript"],
    },
    {
      id: 5,
      title: "TIC TAC TOE GAME",
      img: tic_tac_toe_img,
      deployed_url: "https://tictactoe201.netlify.app/",
      github_link: "https://github.com/KingsukDhar101/tic_tac_toe_1",
      tech_stack: "ReactJS, React hooks, HTML, CSS, JavaScript",
      description: ["Tic Tac Toe game using ReactJS, React hooks."],
    },
    {
      id: 6,
      title: "RANDOM QUOTE GENERATOR",
      img: random_quote_generator_img,
      deployed_url: "https://random-quote-generate-2.netlify.app/",
      github_link: "https://github.com/KingsukDhar101/random_quote_1",
      tech_stack: "ReactJS, React hooks, HTML, CSS, JavaScript",
      description: [
        "Random Quote Generator with random hexadecimal color generator.",
      ],
    },
    {
      id: 7,
      title: "MARKDOWN PREVIEWER",
      img: markdown_previewer_img,
      deployed_url: "https://markdown-previewer-101.netlify.app/",
      github_link: "https://github.com/KingsukDhar101/markdown_previewer_1",
      tech_stack: "ReactJS, HTML, CSS, JavaScript, Marked",
      description: ["Markdown previewer application."],
    },
    {
      id: 9,
      title: "DRUM MACHINE",
      img: drum_machine_img,
      deployed_url: "https://drum-machine-101.netlify.app/",
      github_link: "https://github.com/KingsukDhar101/drum_machine_1",
      tech_stack: "ReactJS, HTML, CSS, JavaScript, Audio",
      description: ["Drum machine using ReactJS, HTML, CSS, JavaScript, Audio"],
    },
  ],
};
export const exp_data = [
  {
    tag: "education",
    date: "2012",
    title: "Madhyamik / Secondary (10)",
    text: "Jagadbandhu Institution",
  },
  {
    tag: "education",
    date: "2014",
    title: "Higher Secondary (10+2)",
    text: "Jagadbandhu Institution",
  },
  {
    tag: "education",
    date: "2015 - 2019",
    title: "B.Tech (Information Technology)",
    text: "Meghnad Saha Institute of Technology",
  },
  {
    tag: "work",
    date: "April, 2022 - present",
    title: "Frontend Developer @EazyDiner Pvt. Ltd",
    text: "Responsible for creating UI using ReactJS, Redux, Javascript, CSS, JQuery, handling data and API integration, SEO, AJAX, debugging, etc.",
  },
];
