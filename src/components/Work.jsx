/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

/**
 * Components
 */
import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: '/images/project-1.png',
    title: 'Machine Learning App',
    tags: ['ML', 'MVC', 'Development'],
    projectLink: 'https://ld-machinelearning.streamlit.app/'
  },
  {
    imgSrc: '/images/project-2.png',
    title: 'Gen AI App',
    tags: ['Generative AI', 'OpenAi', 'Development', 'gpt-4'],
    projectLink: 'https://github.com/lasithadilshan/MscResearchProject'
  },
  {
    imgSrc: '/images/project-3.png',
    title: 'CRUD',
    tags: ['Development', 'Angular', 'CRUD'],
    projectLink: 'https://github.com/lasithadilshan/Angular11CRUD'
  },
  {
    imgSrc: '/images/project-4.png',
    title: 'Music Player Android App',
    tags: ['Mobile-design', 'Development'],
    projectLink: 'https://github.com/lasithadilshan/DMusic'
  },
  {
    imgSrc: '/images/project-5.png',
    title: 'eCommerce website',
    tags: ['eCommerce', 'Development'],
    projectLink: 'https://github.com/lasithadilshan/foodgarage'
  },
  {
    imgSrc: '/images/project-6.png',
    title: 'vCard Personal portfolio',
    tags: ['Web-design', 'Development'],
    projectLink: 'https://github.com/codewithsadee/vcard-personal-portfolio'
  },
];

const Work = () => {
  return (
    <section
      id="work"
      className="section"
    >
      <div className="container">
        <h2 className="headline-2 mb-8 reveal-up">
          My portfolio highlights
        </h2>
        <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,minmax(280px,_1fr))]">
          {works.map(({ imgSrc, title, tags, projectLink },
           key) => (
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
  )
}

export default Work