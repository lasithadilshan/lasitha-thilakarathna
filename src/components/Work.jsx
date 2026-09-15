/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-1.webp`,
    title: 'Machine Learning App',
    tags: ['ML', 'MVC', 'Python', 'Streamlit'],
    projectLink: 'https://ld-machinelearning.streamlit.app/'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-2.webp`,
    title: 'Gen AI App',
    tags: ['Generative AI', 'OpenAI', 'GPT-4', 'FastAPI'],
    projectLink: 'https://github.com/lasithadilshan/MscResearchProject'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-3.webp`,
    title: 'Enterprise CRUD App',
    tags: ['Angular 11', 'TypeScript', 'CRUD', 'REST API'],
    projectLink: 'https://github.com/lasithadilshan/Angular11CRUD'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-4.webp`,
    title: 'DMusic Android Player',
    tags: ['Android', 'Java', 'Audio', 'Mobile UX'],
    projectLink: 'https://github.com/lasithadilshan/DMusic'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-5.webp`,
    title: 'FoodGarage eCommerce',
    tags: ['eCommerce', 'Full Stack', 'Payment', 'Web App'],
    projectLink: 'https://github.com/lasithadilshan/foodgarage'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-6.webp`,
    title: 'Modern Portfolio',
    tags: ['React', 'TailwindCSS', 'GSAP', 'Vite'],
    projectLink: 'https://github.com/lasithadilshan/lasitha-thilakarathna'
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="section relative"
    >
      <div className="ambient-glow-amber top-1/2 -right-24" aria-hidden="true" />
      <div className="container relative z-10">
        <h2 className="headline-2 mb-3 reveal-up">
          My portfolio highlights
        </h2>
        <p className="text-zinc-400 mb-8 max-w-[50ch] reveal-up">
          Explore a selection of recent featured projects spanning full-stack development, AI applications, and mobile engineering.
        </p>
        <div className="grid gap-x-4 gap-y-6 grid-cols-[repeat(auto-fill,minmax(300px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;