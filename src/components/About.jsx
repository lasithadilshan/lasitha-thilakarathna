/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: 'Projects completed',
    number: 45
  },
  {
    label: 'Years of experience',
    number: 10
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="section"
    >
      <div className="container">
        <div className="bg-zinc-900/80 border border-zinc-800/80 p-7 rounded-3xl md:p-12 reveal-up shadow-xl backdrop-blur-sm">
          <p className="text-zinc-300 mb-6 md:mb-10 md:text-xl md:max-w-[62ch] leading-relaxed">
            Welcome! I&apos;m Lasitha, a professional full-stack web developer with a passion for crafting visually stunning, high-performing websites. Combining creativity and technical engineering, I transform ideas into scalable digital experiences that excel in both aesthetic beauty and raw performance.
          </p>

          <div className="flex flex-wrap items-center gap-6 md:gap-10 pt-4 border-t border-zinc-800/60">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-1">
                    <span className="text-3xl font-bold md:text-4xl text-zinc-100">{number}</span>
                    <span className="text-amber-400 font-bold text-2xl md:text-3xl ml-0.5">+</span>
                  </div>
                  <p className="text-sm font-medium text-zinc-400">{label}</p>
                </div>
              ))
            }
            <img
              src={`${import.meta.env.BASE_URL}images/logo.svg`}
              alt="Lasitha Thilakarathna Logo mark"
              width={40}
              height={40}
              className="ml-auto opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;