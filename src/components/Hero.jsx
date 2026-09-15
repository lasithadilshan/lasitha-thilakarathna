/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import { ButtonPrimary, ButtonOutline } from "./Button";
import CV from "../asset/pdf/Lasitha_Dilshan_Thilakarathna_CV.pdf";

const Hero = () => {
    return (
        <section
            id="home"
            className="pt-28 lg:pt-36 relative overflow-hidden"
        >
            {/* Ambient Lighting */}
            <div className="ambient-glow-amber -top-20 -left-20" aria-hidden="true" />
            <div className="ambient-glow-sky top-1/3 -right-20" aria-hidden="true" />

            <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10 relative z-10">
                <div>
                    <div className="flex items-center gap-3">
                        <figure className="img-box w-9 h-9 rounded-lg ring-1 ring-zinc-700/50">
                            <img
                                src={`${import.meta.env.BASE_URL}images/avatar-1.jpg`}
                                width={40}
                                height={40}
                                alt="Lasitha Dilshan Thilakarathna"
                                className="img-cover"
                            />
                        </figure>

                        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                            <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
                            </span>

                            Available for work
                        </div>
                    </div>

                    <h1 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
                        Building Scalable Modern Websites for the Future
                    </h1>

                    <div className="flex items-center gap-3 flex-wrap">
                        <ButtonPrimary
                            href={CV}
                            download="Lasitha_Dilshan_Thilakarathna_CV.pdf"
                            label="Download CV"
                            icon="download"
                        />

                        <ButtonOutline
                            href="#about"
                            label="Scroll down"
                            icon="arrow_downward"
                        />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-amber-400/20 via-25% via-sky-400/20 to-65% rounded-[60px] overflow-hidden p-1 ring-1 ring-zinc-700/40 shadow-2xl shadow-sky-500/10">
                        <picture>
                            <source srcSet={`${import.meta.env.BASE_URL}images/hero-banner.webp`} type="image/webp" />
                            <img
                                src={`${import.meta.env.BASE_URL}images/hero-banner.png`}
                                width={656}
                                height={800}
                                alt="Lasitha Dilshan Thilakarathna portrait"
                                className="w-full h-auto object-cover rounded-[56px]"
                                fetchPriority="high"
                                loading="eager"
                            />
                        </picture>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;