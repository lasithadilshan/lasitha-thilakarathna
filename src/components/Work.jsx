/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import ProjectCard from './ProjectCard';

const works = [
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-devfixhub.webp`,
    title: 'DevFixHub',
    desc: 'Open-source developer error solutions, programming tutorials, and free client-side dev tools built for modern engineers.',
    tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel'],
    projectLink: 'https://devfixhub.vercel.app/',
    repoLink: 'https://github.com/lasithadilshan/DevFixHub'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-hallucination-detector.webp`,
    title: 'LLM Hallucination Detector',
    desc: 'UQML-powered platform using uncertainty quantification to determine whether Large Language Model outputs are factually grounded.',
    tags: ['Python', 'UQML', 'Streamlit', 'LangChain', 'Gemini'],
    projectLink: 'https://hallucination-detector-app.streamlit.app/',
    repoLink: 'https://github.com/lasithadilshan/Hallucination-Detector-App'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-meetingmind-ai.webp`,
    title: 'MeetingMind AI',
    desc: 'Automated video transcription and executive meeting minutes generator powered by Google Gemini multimodal models.',
    tags: ['Python', 'Gemini AI', 'Streamlit', 'Audio Analysis'],
    projectLink: 'https://video-transcription-app.streamlit.app/',
    repoLink: 'https://github.com/lasithadilshan/streamlit-gemini-ai-video-transcription-app'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-parking-monitor.webp`,
    title: 'AI Parking Monitor & OCR',
    desc: 'Computer vision pipeline combining YOLOv8 tracking, EasyOCR license plate extraction, virtual zones, and SQLite telemetry.',
    tags: ['YOLOv8', 'Computer Vision', 'EasyOCR', 'Streamlit'],
    projectLink: 'https://github.com/lasithadilshan/Streamlit-AI-Parking-Monitor-and-License-Plate-Locator-App',
    repoLink: 'https://github.com/lasithadilshan/Streamlit-AI-Parking-Monitor-and-License-Plate-Locator-App'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-doc-chatbot.webp`,
    title: 'Policy Document Intelligence',
    desc: 'Conversational RAG document intelligence system enabling contextual Q&A with precise source citations across multi-page PDFs.',
    tags: ['LangChain', 'Gemini', 'FAISS', 'RAG', 'FastAPI'],
    projectLink: 'https://document-chatbot-app.streamlit.app/',
    repoLink: 'https://github.com/lasithadilshan/document-chatbot'
  },
  {
    imgSrc: `${import.meta.env.BASE_URL}images/project-linknote-studio.webp`,
    title: 'LinkNote Studio',
    desc: 'Client-side React markdown notepad with local browser storage, AES note encryption, import/export, and shareable snapshot links.',
    tags: ['React', 'TypeScript', 'Crypto', 'Markdown', 'PWA'],
    projectLink: 'https://lasithadilshan.github.io/linknote-studio/',
    repoLink: 'https://github.com/lasithadilshan/linknote-studio'
  }
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
          Featured Projects & Open Source
        </h2>
        <p className="text-zinc-400 mb-8 max-w-[55ch] reveal-up">
          A showcase of production-ready AI applications, autonomous agents, developer tools, and full-stack systems from my GitHub portfolio.
        </p>
        <div className="grid gap-x-5 gap-y-6 grid-cols-[repeat(auto-fill,minmax(320px,_1fr))]">
          {works.map(({ imgSrc, title, desc, tags, projectLink, repoLink }, key) => (
            <ProjectCard 
              key={key}
              imgSrc={imgSrc}
              title={title}
              desc={desc}
              tags={tags}
              projectLink={projectLink}
              repoLink={repoLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;