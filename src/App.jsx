/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import { ReactLenis } from 'lenis/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Work from "./components/Work";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {
    useGSAP(() => {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const elements = gsap.utils.toArray('.reveal-up');

        if (prefersReducedMotion) {
            elements.forEach((element) => {
                gsap.set(element, { y: 0, opacity: 1 });
            });
            return;
        }

        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: '-150 bottom',
                    end: 'bottom 85%',
                    scrub: true
                },
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.out'
            });
        });
    });

    return (
        <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>
            <Header />
            <main id="main-content">
                <Hero />
                <About />
                <Skill />
                <Work />
                <Review />
                <Contact />
            </main>
            <Footer />
        </ReactLenis>
    );
};

export default App;