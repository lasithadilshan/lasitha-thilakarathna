/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import SkillCard from './SkillCard';

const skillItem = [
  {
    imgSrc: `${import.meta.env.BASE_URL}images/python.svg`,
    label: 'Python',
    desc: 'AI, LLMs & Automation'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/typescript.svg`,
    label: 'TypeScript',
    desc: 'Type-Safe Applications'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/react.svg`,
    label: 'React',
    desc: 'Interactive UI Library'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/nextjs.svg`,
    label: 'Next.js',
    desc: 'Full-Stack React Framework'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/fastapi.svg`,
    label: 'FastAPI',
    desc: 'High-Throughput APIs'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/langchain.svg`,
    label: 'LangChain',
    desc: 'Agentic & RAG Workflows'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/postgresql.svg`,
    label: 'PostgreSQL',
    desc: 'Relational & PgVector'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/docker.svg`,
    label: 'Docker',
    desc: 'Container Deployment'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/tailwindcss.svg`,
    label: 'TailwindCSS',
    desc: 'Modern Design System'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/nodejs.svg`,
    label: 'NodeJS',
    desc: 'Backend Runtime'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/mongodb.svg`,
    label: 'MongoDB',
    desc: 'NoSQL Document Store'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/figma.svg`,
    label: 'Figma',
    desc: 'UI/UX & Prototyping'
  }
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">
          Essential Tools & Technologies
        </h2>

        <p className="text-zinc-400 mt-3 mb-8 max-w-[55ch] reveal-up">
          Discover the battle-tested tools, AI orchestration frameworks, and modern technologies I leverage to build scalable, production-grade applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,minmax(220px,_1fr))]">
          {skillItem.map(({ imgSrc, label, desc }, key) => (
            <SkillCard
              key={key}
              imgSrc={imgSrc}
              label={label}
              desc={desc}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;