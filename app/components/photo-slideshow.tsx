'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    src: '/project-images/sphere.jpg',
    alt: 'Sphere Tools',
    caption: 'Procedural art creation and artist tool development for the <a href="/projects/sphere-tools">Las Vegas Sphere</a>.',
    link: '/projects/sphere-tools'
  },
  {
    src: '/project-images/destined-to-die.jpg', 
    alt: 'Destined to Die',
    caption: 'A narrative-driven game exploring themes of mortality and choice in a procedural <a href="/projects/destined-to-die">fantasy world</a>.',
    link: '/projects/destined-to-die'
  },
  {
    src: '/project-images/the-lonely-tree.png',
    alt: 'The Lonely Tree', 
    caption: 'OpenGL game engine with custom grass rendering and <a href="/projects/the-lonely-tree">zen artistic direction</a>.',
    link: '/projects/the-lonely-tree'
  },
  {
    src: '/project-images/water-rain.jpg',
    alt: 'Water Rain',
    caption: 'Fluid dynamics simulation exploring <a href="/projects/water-rain">procedural water effects</a> and particle systems.',
    link: '/projects/water-rain'
  },
  {
    src: '/project-images/gameboy-development.png',
    alt: 'Gameboy Development',
    caption: 'Assembly programming and ROM hacking for <a href="/projects/gameboy-development">Game Boy Color development</a>.',
    link: '/projects/gameboy-development'
  }
];

export default function PhotoSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoAdvancing, setIsAutoAdvancing] = useState(true);

  useEffect(() => {
    if (!isAutoAdvancing) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [isAutoAdvancing]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoAdvancing(false);
    setTimeout(() => setIsAutoAdvancing(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoAdvancing(false);
    setTimeout(() => setIsAutoAdvancing(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoAdvancing(false);
    setTimeout(() => setIsAutoAdvancing(true), 10000);
  };

  return (
    <div className="slideshow-container max-w-5xl relative mx-auto mb-16 bg-white shadow-lg overflow-hidden">
      <div className="slide-container relative">
        <Link href={slides[currentSlide].link} className="block">
          <Image
            src={slides[currentSlide].src}
            alt={slides[currentSlide].alt}
            width={1000}
            height={562}
            className="w-full h-[576px] object-cover cursor-pointer"
            priority
          />
        </Link>
        <button
          onClick={prevSlide}
          className="prev absolute top-1/2 left-0 -mt-6 px-3 py-3 text-white/80 hover:text-white font-light text-2xl transition-all duration-300 hover:bg-black/20 cursor-pointer select-none rounded-full z-10"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="next absolute top-1/2 right-0 -mt-6 px-3 py-3 text-white/80 hover:text-white font-light text-2xl transition-all duration-300 hover:bg-black/20 cursor-pointer select-none rounded-full z-10"
        >
          →
        </button>
      </div>
      <div className="px-6 py-4 bg-gradient-to-r from-rose-50 to-blue-50">
        <div 
          className="caption text-center text-sm text-slate-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: slides[currentSlide].caption }}
        />
        
        <div className="text-center mt-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="dot inline-block mx-1.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-rose-400"
              style={{
                width: '7px',
                height: '7px',
                backgroundColor: index === currentSlide ? '#f43f5e' : '#fecdd3'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
