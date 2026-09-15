/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ProjectCard = ({
    imgSrc,
    title,
    tags,
    projectLink,
    classes = ''
}) => {
  return (
    <div className={`relative p-5 rounded-2xl bg-zinc-900/80 hover:bg-zinc-800/90 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between ${classes}`.trim()}>
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

            <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                    <h3 className="title-1 mb-2 text-zinc-100 group-hover:text-amber-400 transition-colors">
                        {title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5">
                        {tags.map((label, key) => (
                            <span
                                key={key}
                                className="h-7 text-xs font-medium text-zinc-400 bg-zinc-800/80 border border-zinc-700/40 grid items-center px-2.5 rounded-md"
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="w-10 h-10 rounded-xl grid place-items-center bg-amber-400 text-zinc-950 shrink-0 group-hover:bg-amber-300 group-hover:scale-110 transition-all shadow-md shadow-amber-400/20">
                    <span 
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        arrow_outward
                    </span>
                </div>
            </div>
        </div>

        {projectLink && (
            <a 
                href={projectLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label={`Open ${title} in a new tab`}
            />
        )}
    </div>
  );
};

ProjectCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string
};

export default ProjectCard;