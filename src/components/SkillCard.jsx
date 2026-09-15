/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes = ''
}) => {
  return (
    <div className={`flex items-center gap-3 ring-1 ring-inset ring-zinc-800 rounded-2xl p-3 bg-zinc-900/60 hover:bg-zinc-800/80 hover:ring-zinc-700 transition-all duration-200 group ${classes}`.trim()}>
        <figure className="bg-zinc-800/80 rounded-xl overflow-hidden w-12 h-12 p-2.5 group-hover:bg-zinc-900 group-hover:scale-105 transition-all">
            <img 
                src={imgSrc} 
                width={32}
                height={32}
                alt={`${label} icon`}
                loading="lazy"
            />
        </figure>
        <div>
            <h3 className="text-zinc-100 font-medium text-sm group-hover:text-amber-400 transition-colors">{label}</h3>
            <p className="text-zinc-400 text-xs">
                {desc}
            </p>
        </div>
    </div>
  );
};

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string
};

export default SkillCard;