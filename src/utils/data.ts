export const skills = [
  {
    name: "HTML",
    icon: "/assets/html.png",
  },
  {
    name: "CSS",
    icon: "/assets/css.png",
  },
  {
    name: "JS",
    icon: "/assets/javascript.png",
  },
  {
    name: "SASS",
    icon: "/assets/sass.png",
  },
  {
    name: "TailwindCSS",
    icon: "/assets/tailwindcss.png",
  },
  {
    name: "CSS-in-JS",
    icon: "/assets/styled-components.png",
  },
  {
    name: "Typescript",
    icon: "/assets/typescript.png",
  },
  {
    name: "React",
    icon: "/assets/react.png",
  },
  {
    name: "Redux",
    icon: "/assets/redux.png",
  },
  {
    name: "Storybook",
    icon: "/assets/storybook.png",
  },
  {
    name: "Jest",
    icon: "/assets/jest.png",
  },
  {
    name: "Testing Library",
    icon: "/assets/react-testing-library.png",
  },
  {
    name: "Cypress",
    icon: "/assets/cypress.png",
  },
  {
    name: "NextJS",
    icon: "/assets/next.png",
  },
  {
    name: "GraphQL",
    icon: "/assets/graphql.png",
  },
  {
    name: "NodeJS",
    icon: "/assets/node.png",
  },
  {
    name: "Docker",
    icon: "/assets/docker.webp",
  },
  {
    name: "AWS",
    icon: "/assets/aws.png",
  },
  {
    name: "Vercel",
    icon: "/assets/vercel.png",
  } /* ,
  {
    name: "Figma",
    icon: "/assets/figma.png",
  },
  {
    name: "AdobeXD",
    icon: "/assets/adobexd.png",
  }, */,
];

export const experiences = [
  {
    year: "Mar 2022 - Dec 2022",
    works: [
      {
        name: "Full-stack Developer",
        company: "Atik Soluciones S.A",
        desc: [
          "Development of a sales and inventory management system, with electronic invoicing, branch management and statistics. ReactJS was used and NodeJS was used in the backend, Microsoft SQL Server as the database, Amazon S3 for uploading images and files, SendGrid for sending emails, among other technologies. The deployment was done in the AWS cloud with the help of the ECS (Elastic Container Service) and ELB (Elatic Load Balance) service, which carried out a horizontal scaling of the system.",
          "Development of the deployment pipeline for test and production environments with the help of AWS ECR, AWS CodeBuild and AWS CodeDeploy.",
          "Use of AWS Lambda for extra system functionalities, reducing workload and increasing application performance.",
        ],
      },
    ],
  },
  {
    year: "Jan 2021 - Feb 2022",
    works: [
      {
        name: "Full-stack Developer",
        company: "Chamorro Solutions S.A.C",
        desc: [
          "Development and supervision of web applications made with ReactJS, helping to improve performance.",
          "Development of REST services with NodeJS and MongoDB as database.",
          "Construction of Continuous Integration workflow for various projects with AWS CodePipeline, for its subsequent deployment in EC2 instances.",
        ],
      },
    ],
  },
  {
    year: "Sep 2020 - Jan 2021",
    works: [
      {
        name: "Front-end Web Developer",
        company: "Autónomo",
        desc: [
          "Landing page layout built with HTML, SASS and Javascript.",
          "Design of administrative panels with ReactJS, VueJS, SASS and Bootstrap (Frontend).",
        ],
      },
    ],
  },
];

export const projects = [
  {
    imgUrl: "/assets/projects/mitienda.gif",
    name: "mitienda-app",
    title: "MiTienda",
    description:
      "An application to create your own store made with NextJS,Typescript, TailwindCSS, NodeJS, ExpressJS, Docker and PostgreSQL",
    projectLink: "https://mitienda.hacero.me",
    codeLink: "https://github.com/acerohernan/mitienda-frontend",
    tags: ["ReactJS", "Web"],
  },
  {
    imgUrl: "/assets/projects/tinder-dogs.gif",
    name: "tinder-dogs",
    title: "Tinder Dogs",
    description:
      "An tinder clon made with ReactJS, SASS, Redux, NodeJS, Express and MongoDB",
    projectLink: "https://hotdogs.hacero.me",
    codeLink: "https://github.com/acerohernan/hot-dogs",
    tags: ["ReactJS", "Web"],
  },
  {
    imgUrl: "/assets/projects/code-store.gif",
    name: "code-store",
    title: "Code Store",
    description:
      "An store made with ReactJS, Typescript, SASS, Redux, NodeJS, Express and MongoDB",
    projectLink: "https://code.hacero.me",
    codeLink: "https://github.com/acerohernan/code-store",
    tags: ["ReactJS", "Web"],
  },
  {
    imgUrl: "/assets/projects/hernan-store.gif",
    name: "hernan-store",
    title: "Hernan Store",
    description:
      "An store made with ReactJS, Typescript, SASS, Redux, NodeJS, Express and MongoDB",
    projectLink: "https://store.hacero.me",
    codeLink: "https://github.com/acerohernan/store_react_ts",
    tags: ["ReactJS", "Web"],
  },
  {
    imgUrl: "/assets/projects/delivery-app.gif",
    name: "delivery-app",
    title: "Delivery App",
    description:
      "A delivery app made with React Native, Typescript, Redux, Expo, NodeJS, Express, MongoDB",
    projectLink: "https://delivery-app-by-hernan.uptodown.com/android",
    codeLink: "https://github.com/acerohernan/delivery-app-react-native",
    tags: ["ReactJS", "Mobile"],
  },
];

export const abouts = [
  {
    title: "Hi, I'm Hernan",
    imgUrl: "/assets/profile2.png",
    desc: [
      "Front-end developer with more than 2 years and 5 months of professional experience creating and implementing design systems with Javascript. I am qualified and familiar with a wide range of utilities and technologies in the front web development. You can see part of me work below.",
      "I am interested in job opportunities where I can contribute, learn and grow at the same time. Regarding soft skills, I am communicative and have no problems with teamwork. If you have any opportunity for me, do not hesitate to contact me.",
    ],
  },
];
