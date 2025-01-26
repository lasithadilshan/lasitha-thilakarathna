/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

const aboutItems = [
  {
    label: 'Project done',
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
        <p className="">
        Welcome! I&apos;m Lasitha, a professional web developer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I transform your vision into digital masterpiece that excels in both appearance and performance.
        </p>
        <div className="">
          {
            aboutItems.map((item, index) => (
              <div key={index}>
                <h3>{item.label}</h3>
                <p>{item.number}</p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default About