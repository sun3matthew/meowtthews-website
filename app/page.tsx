import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    // <div className="content w-[80%] max-w-[900px] min-w-[300px] mx-auto">
    <>
      <div className="mt-10 mb-5 text-center">
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          <Image
            src="/profile.png"
            alt="Profile photo"
            className="rounded-full bg-gray-100 mx-auto grayscale hover:grayscale-0"
            unoptimized
            width={160}
            height={160}
            priority
          />
        </a>
      </div>

      <h1 className="mb-8 text-2xl font-medium uppercase text-center">Matthew Sun</h1>

      <div className="frontpagerow grid md:grid-cols-2 gap-10 mb-12">
        <div className="frontpageleftbar">
          <div className="subtitle-frontpage mb-2">Hello, I'm Matthew!</div>
          <p>
            I'm a developer, designer, and creative technologist focused on interactive media, simulation, and generative systems. I enjoy building custom tools, engines, and renderers that explore visual storytelling through code.
          </p>
          <p>
            My recent work includes developing a game engine that blends real-time rendering with narrative expression — inspired by nature, memory, and solitude.
          </p>
          <p>
            I previously studied computer science and visual computing, and have contributed to open-source renderers, indie games, and generative art installations.
          </p>
          <p>
            You can usually find me sketching in GLSL, writing C++, or wandering around trees and bookshelves.
          </p>
        </div>

        <div className="frontpagerightbar">
          <div className="subtitle-frontpage mb-2">News:</div>
          <p>2025.07.28: Just restyled this site to match the Einheitsgrafik design I admire.</p>
          <p>2025.07.20: Working on a new game about solitude and seasons. More soon.</p>
          <p>2025.07.14: Wrote about building a butterfly simulation engine using splines.</p>
          <p>2025.07.01: Published a blog post on narrative rendering and player memory.</p>
          <p><a href="/news">Older news...</a></p>
        </div>
      </div>
    {/* </div> */}
    </>
  );
}
