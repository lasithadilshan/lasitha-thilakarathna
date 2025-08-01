/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

/**
 * Components
*/
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: 'Home',
    href: '#home'
  },
  {
    label: 'About',
    href: '#about'
  },
  {
    label: 'Work',
    href: '#work'
  },
  {
    label: 'Reviews',
    href: '#reviews'
  },
  {
    label: 'Contact me',
    href: '#contact'
  }
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://www.github.com/lasithadilshan'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lasitha-t-3027ab120/'
  },
  {
    label: 'Twitter X',
    href: 'https://x.com/dilshantilakar1'
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lasitha_dilshan_/'
  },
  {
    label: 'Facebook',
    href: 'https://web.facebook.com/lasithadilshantilakaratne/'
  }
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <a href="mailto:dilshantilakaratne29@gmail.com">
              <ButtonPrimary
                label="Start project"
                icon="chevron_right"
                classes="reveal-up"
              />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

            <div className="flex items-center justify-between pt-10 mb-8">
              <a
                href="/"
                className="logo reveal-up"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.svg`}
                  width={40}
                  height={40}
                  alt="Logo"
                />
              </a>
              <p className="text-zinc-500 text-sm reveal-up">
                &copy; 2025 <span className="text-zinc-200">lasithadilshan</span>
              </p>
            </div>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer