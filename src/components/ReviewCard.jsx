/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import PropTypes from "prop-types";

const ratings = new Array(5).fill({
    icon: 'star',
    style: { fontVariationSettings: '"FILL" 1' }
});

const ReviewCard = ({
    content,
    imgSrc,
    name,
    company
}) => {
  return (
    <div className="bg-zinc-900/80 border border-zinc-800/80 p-6 rounded-2xl min-w-[320px] flex flex-col lg:min-w-[420px] shadow-lg shadow-black/30 hover:border-zinc-700 transition-all duration-200">

        <div className="flex items-center gap-1 mb-4" aria-label="5 out of 5 stars">
            {ratings.map(({ icon, style }, key) => (
                <span 
                    key={key}
                    className="material-symbols-rounded text-amber-400 text-[18px]"
                    style={style}
                    aria-hidden="true"
                >
                    {icon}
                </span>
            ))}
        </div>

        <p className="text-zinc-300 text-sm leading-relaxed mb-6 italic">
            &ldquo;{content}&rdquo;
        </p>

        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-zinc-800/60">
            <figure className="img-box rounded-full w-11 h-11 ring-2 ring-amber-400/30 shrink-0">
                <img 
                    src={imgSrc}
                    alt={name}
                    width={44}
                    height={44}
                    loading="lazy"
                    className="img-cover"
                />
            </figure>

            <div>
                <p className="text-zinc-100 font-medium text-sm">{name}</p>
                <p className="text-xs text-zinc-400 tracking-wider">
                    {company}
                </p>
            </div>
        </div>

    </div>
  );
};

ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
};

export default ReviewCard;