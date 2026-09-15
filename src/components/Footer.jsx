/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
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
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section border-t border-zinc-800/40">
      <div className="container">

        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>
            <ButtonPrimary
              href="mailto:dilshantilakaratne29@gmail.com"
              label="Start project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div>
              <p className="mb-3 font-medium text-zinc-200 reveal-up">Sitemap</p>

              <ul className="space-y-1">
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-amber-400 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

            <div>
              <p className="mb-3 font-medium text-zinc-200 reveal-up">Socials</p>

              <ul className="space-y-1">
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-amber-400 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>

            </div>

            <div className="col-span-2 flex items-center justify-between pt-10 pb-8 border-t border-zinc-800/40 mt-6">
              <a
                href="#home"
                className="logo reveal-up focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
                aria-label="Lasitha Thilakarathna - Return to top"
              >
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.svg`}
                  width={40}
                  height={40}
                  alt="Logo"
                />
              </a>
              <p className="text-zinc-500 text-sm reveal-up">
                &copy; {currentYear} <span className="text-zinc-300 font-medium">lasithadilshan</span>. All rights reserved.
              </p>
            </div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;