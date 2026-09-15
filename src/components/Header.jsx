/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full h-20 flex
      items-center z-40 bg-zinc-950/70 backdrop-blur-xl border-b border-zinc-800/40 transition-all"
    >
      <div
        className="max-w-screen-2xl w-full mx-auto px-4 
        flex justify-between items-center md:px-6 md:grid
        md:grid-cols-[1fr,3fr,1fr]"
      >
        <div>
          <a
            href="#home"
            className="logo flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-lg"
            aria-label="Lasitha Thilakarathna - Return to top"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/logo.svg`}
              width={40}
              height={40}
              alt="Lasitha Thilakarathna Logo"
            />
          </a>
        </div>

        <div className="relative md:justify-self-center">
          <button
            type="button"
            className="menu-btn md:hidden"
            onClick={() => setNavOpen((prev) => !prev)}
            aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={navOpen}
          >
            <span className="material-symbols-rounded" aria-hidden="true">
              {navOpen ? 'close' : 'menu'}
            </span>
          </button>
          <Navbar navOpen={navOpen} closeNav={() => setNavOpen(false)} />
        </div>

        <a
          href="#contact"
          className="btn btn-secondary max-md:hidden md:justify-self-end"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
};

export default Header;
