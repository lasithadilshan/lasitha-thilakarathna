/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ProjectCard = ({
    imgSrc,
    title,
    desc,
    tags,
    projectLink,
    repoLink,
    classes = ''
}) => {
  return (
    <div className={`p-5 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between ${classes}`.trim()}>
        <div>
            <figure className="img-box aspect-[16/10] rounded-xl mb-4 overflow-hidden bg-zinc-800">
                <img 
                    src={imgSrc}
                    alt={`${title} project preview`}
                    width={600}
                    height={375}
                    loading="lazy"
                    className="img-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
            </figure>

            <div className="mb-3">
                <h3 className="title-1 mb-1.5 text-zinc-100 group-hover:text-amber-400 transition-colors">
                    {title}
                </h3>
                {desc && (
                    <p className="text-zinc-400 text-xs line-clamp-2 mb-3 leading-relaxed">
                        {desc}
                    </p>
                )}
                <div className="flex flex-wrap items-center gap-1.5">
                    {tags.map((label, key) => (
                        <span
                            key={key}
                            className="h-6 text-[11px] font-medium text-zinc-400 bg-zinc-800/80 border border-zinc-700/40 grid items-center px-2 rounded-md"
                        >
                            {label}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        <div className="flex items-center gap-2 pt-3 border-t border-zinc-800/60 mt-2">
            {projectLink && (
                <a
                    href={projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 h-9 rounded-lg bg-amber-400 text-zinc-950 text-xs font-semibold flex items-center justify-center gap-1.5 hover:bg-amber-300 transition-colors shadow-sm"
                    aria-label={`Open live demo for ${title}`}
                >
                    <span>Live Demo</span>
                    <span className="material-symbols-rounded text-sm" aria-hidden="true">arrow_outward</span>
                </a>
            )}

            {repoLink && (
                <a
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-3 rounded-lg border border-zinc-700 text-zinc-300 text-xs font-medium flex items-center justify-center gap-1.5 hover:bg-zinc-800 hover:text-white transition-colors"
                    aria-label={`View ${title} source code on GitHub`}
                >
                    <span>Code</span>
                    <span className="material-symbols-rounded text-sm" aria-hidden="true">code</span>
                </a>
            )}
        </div>
    </div>
  );
};

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    repoLink: PropTypes.string,
    classes: PropTypes.string
};

export default ProjectCard;