/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import { useRef, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const navItems = [
  { label: 'Home', link: '#home' },
  { label: 'About', link: '#about' },
  { label: 'Work', link: '#work' },
  { label: 'Reviews', link: '#reviews' },
  { label: 'Contact', link: '#contact', mobileOnly: true }
];

const Navbar = ({ navOpen, closeNav }) => {
  const [activeSection, setActiveSection] = useState('#home');
  const activeBox = useRef(null);
  const linkRefs = useRef({});

  const updateActiveBox = useCallback((targetLink) => {
    if (!targetLink || !activeBox.current) return;
    activeBox.current.style.top = `${targetLink.offsetTop}px`;
    activeBox.current.style.left = `${targetLink.offsetLeft}px`;
    activeBox.current.style.width = `${targetLink.offsetWidth}px`;
    activeBox.current.style.height = `${targetLink.offsetHeight}px`;
  }, []);

  // Update active pill position whenever active section or navOpen changes
  useEffect(() => {
    const currentLink = linkRefs.current[activeSection];
    if (currentLink) {
      updateActiveBox(currentLink);
    }
  }, [activeSection, navOpen, updateActiveBox]);

  // Handle window resize with proper cleanup
  useEffect(() => {
    const handleResize = () => {
      const currentLink = linkRefs.current[activeSection];
      if (currentLink) {
        updateActiveBox(currentLink);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeSection, updateActiveBox]);

  // Scroll spy: observe sections in viewport
  useEffect(() => {
    const sections = navItems
      .map(item => document.querySelector(item.link))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = `#${entry.target.id}`;
            setActiveSection(id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.1
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e, link) => {
    setActiveSection(link);
    const targetLink = linkRefs.current[link];
    if (targetLink) {
      updateActiveBox(targetLink);
    }
    if (closeNav) {
      closeNav();
    }
  };

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`} aria-label="Main Navigation">
      {navItems.map(({ label, link, mobileOnly }) => {
        const isActive = activeSection === link;
        return (
          <a
            href={link}
            key={link}
            ref={(el) => {
              if (el) linkRefs.current[link] = el;
            }}
            className={`nav-link ${isActive ? 'active' : ''} ${mobileOnly ? 'md:hidden' : ''}`}
            onClick={(e) => handleLinkClick(e, link)}
          >
            {label}
          </a>
        );
      })}
      <div className="active-box" ref={activeBox} aria-hidden="true" />
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
  closeNav: PropTypes.func
};

export default Navbar;