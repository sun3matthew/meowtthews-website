'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const items = [
  {
    src: '/banners/sphere-dead.webp',
    alt: 'Sphere Tools - Environment',
    caption: 'A project that I worked on for Grateful Dead\'s residency at the <a href="/projects/sphere-tools">Sphere</a>. I helped build many asset importers for C4D.',
    link: '/projects/sphere-tools'
  },
  {
    src: '/banners/sphere-pi-2.png',
    alt: 'Technical Art',
    caption: 'A project that I worked on for <a href="/projects/sphere-tools">Sphere</a> that combined my love for Math, Art and Programming.',
    link: '/projects/sphere-tools'
  },
  {
    src: '/banners/Cantors Screenshot-1.png',
    alt: "Cantor's Angels - Cloud Shaders",
    caption: 'Custom Worley-based volumetric pixel cloud shaders. <a href="/projects/cantors-angels">Cantor\'s Angels</a>.',
    link: '/projects/cantors-angels'
  },
  {
    src: '/banners/Cantors Screenshot-2.png',
    alt: "Cantor's Angels - Graph Visualization",
    caption: 'Compute shader drawn graph visualization with pixel art portraits. <a href="/projects/cantors-angels">Cantor\'s Angels</a>.',
    link: '/projects/cantors-angels'
  },
  {
    src: '/banners/grass-3.png',
    alt: 'Environmental Graphics',
    caption: 'A screenshot from my <a href="/projects/the-lonely-tree">game</a> built in my custom game engine, showcasing a field of highly dynamic grass and flowers rendered in real-time.',
    link: '/projects/the-lonely-tree'
  },
  {
    src: '/banners/grass-1.jpg',
    alt: 'The Lonely Tree',
    caption: 'A screenshot from my <a href="/projects/the-lonely-tree">game</a> built in my custom game engine, showing stylized volumetric cloud rendering and real-time grass rendering.',
    link: '/projects/the-lonely-tree'
  },
  {
    src: '/banners/destined-to-die.jpg',
    alt: 'Destined to Die',
    caption: 'My first big game where I learned the fundamentals of game development and discovered my undying love for game development. <a href="/projects/destined-to-die">Destined to Die</a>.',
    link: '/projects/destined-to-die'
  },
  {
    src: '/banners/Teaser2.webp',
    alt: 'Multiplayer Game Teaser',
    caption: 'Early screenshot of a multiplayer game I\'m working on, porting the grass renderer into Unity and adding lights and shadows.',
    link: '#'
  },
  {
    src: '/banners/dog.webp',
    alt: 'UE5 Vine Foliage Tool',
    caption: 'A UE5 vine foliage tool that simulates realistic vine growth around the contours of objects.',
    link: '#'
  },
  {
    src: '/banners/sphere-drone.jpg',
    alt: 'Sphere Tools',
    caption: 'A <a href="/projects/sphere-tools">drone pre-visualization tool</a> I built for our digital twin, converting drone flight files to Niagara particle systems.',
    link: '/projects/sphere-tools'
  },
];

export default function PhotoGallery() {
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  function handleClick(e: React.MouseEvent, index: number) {
    // Only intercept on touch devices
    if (!window.matchMedia('(hover: none)').matches) return;

    if (tappedIndex !== index) {
      e.preventDefault();
      setTappedIndex(index);
    }
    // If already tapped, let the Link navigate normally
  }

  return (
    <div className="max-w-7xl mx-auto px-2 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => {
          const isTapped = tappedIndex === index;
          return (
            <div
              key={index}
              className="group relative overflow-hidden bg-white shadow-md aspect-video"
            >
              <Link href={item.link} className="block w-full h-full" onClick={(e: React.MouseEvent) => handleClick(e, index)}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  priority={index < 3}
                />
                <div className={`absolute inset-0 transition-all duration-300 ${isTapped ? 'bg-black/50' : 'bg-black/0 group-hover:bg-black/50'}`} />
                <div
                  className={`absolute inset-0 flex items-end p-3 transition-opacity duration-300 ${isTapped ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                  dangerouslySetInnerHTML={{
                    __html: `<p class="text-white text-xs leading-relaxed">${item.caption}</p>`
                  }}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
