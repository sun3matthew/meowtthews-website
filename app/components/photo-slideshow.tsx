'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    src: '/banners/sphere-dead.webp', 
    alt: 'Sphere Tools - Environment',
    caption: 'A project that I worked on for Grateful Dead\'s residency at the <a href="/projects/sphere-tools">Sphere</a>. I helped build many asset importers for C4D.',
    link: '/projects/sphere-tools'
  },
  {
    src: '/banners/grass-1.jpg',
    alt: 'The Lonely Tree', 
    caption: 'A screenshot from my <a href="/projects/the-lonely-tree">game</a> built using Vulkan, showing stylized volumetric cloud rendering and real-time grass rendering.',
    link: '/projects/the-lonely-tree'
  },
  {
    src: '/banners/sphere-new-years-2.png', 
    alt: 'Sphere Tools - Environment',
    caption: 'One of many projects utilizing a suite of tools I built for the <a href="/projects/sphere-tools">Sphere</a>, to help fix and remove seams for 360° videos.',
    link: '/projects/sphere-tools'
  },
  {
    src: '/banners/sphere-drone.jpg',
    alt: 'Sphere Tools',
    caption: 'A <a href="/projects/sphere-tools">drone pre-visualization tool</a> I built for our digital twin, converting drone flight files to Niagara particle systems.',
    link: '/projects/sphere-tools'
  },
  {
    src: '/banners/grass-3.png',
    alt: 'Environmental Graphics',
    caption: 'A screenshot from my <a href="/projects/the-lonely-tree">game</a> built in Vulkan, showcasing a field of highly dynamic grass and flowers rendered in real-time.',
    link: '/projects/the-lonely-tree'
  },
  {
    src: '/banners/sphere-pi-2.png',
    alt: 'Technical Art',
    caption: 'A project that I worked on for <a href="/projects/sphere-tools">Sphere</a> that combined my love for Math, Art and Programming.',
    link: '/projects/sphere-tools'
  },
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
