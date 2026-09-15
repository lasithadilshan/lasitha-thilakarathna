/**
 * @copyright 2024 lasithadilshan
 * @license Apache-2.0
 */

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import ReviewCard from './ReviewCard';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reviews = [
  {
    content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
    name: 'Sophia Ramirez',
    imgSrc: `${import.meta.env.BASE_URL}images/people-1.jpg`,
    company: 'PixelForge'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Ethan Caldwell',
    imgSrc: `${import.meta.env.BASE_URL}images/people-2.jpg`,
    company: 'NexaWave'
  },
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Liam Bennett',
    imgSrc: `${import.meta.env.BASE_URL}images/people-3.jpg`,
    company: 'CodeCraft'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
    name: 'Noah Williams',
    imgSrc: `${import.meta.env.BASE_URL}images/people-4.jpg`,
    company: 'BrightWeb'
  },
  {
    content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
    name: 'Ava Thompson',
    imgSrc: `${import.meta.env.BASE_URL}images/people-5.jpg`,
    company: 'TechMosaic'
  },
  {
    content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
    name: 'Jonathan',
    imgSrc: `${import.meta.env.BASE_URL}images/people-6.jpg`,
    company: 'Skyline Digital'
  }
];

const Review = () => {
  const containerRef = useRef(null);
  const slideRef = useRef(null);

  useGSAP(() => {
    if (!slideRef.current || !containerRef.current) return;
    
    gsap.to(slideRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        end: 'bottom 20%',
        scrub: 1
      },
      x: () => -(slideRef.current.scrollWidth - containerRef.current.offsetWidth + 60),
      ease: 'none'
    });
  }, { scope: containerRef });

  return (
    <section 
      id="reviews"  
      className="section overflow-hidden"
      ref={containerRef}
    >
      <div className="container">
        <h2 className="headline-2 mb-3 reveal-up">
          What our customers say
        </h2>
        <p className="text-zinc-400 mb-8 max-w-[50ch] reveal-up">
          Testimonials from collaborators, engineering teams, and clients I have worked with.
        </p>
        <div 
          ref={slideRef}
          className="scrub-slide flex items-stretch gap-4 w-fit reveal-up"
        >
          {reviews.map(({ content, name, imgSrc, company }, key) => (
            <ReviewCard
              key={key}
              name={name}
              imgSrc={imgSrc}
              company={company}
              content={content}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;