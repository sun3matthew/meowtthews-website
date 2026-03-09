'use client';

import Image from "next/image";
import { socialLinks } from "./lib/config";
import PhotoGallery from "./components/photo-slideshow";
import { useState, useEffect } from "react";

const quotes = [
  "I'm a game dev, not a web dev.",
  "My love of markdown is why I document code",
  "Ask me about Japanese Printmaking",
  "(was) a Diamond 1 zerg player in SC2",
  "Grew up on the Gameboy Color",
  "I can't resist something telling me to README.md",
  "Making gifts is my opportunity to learn a new trade",
  "Almost was a Classic Tetris pro player",
  "Hobbies outside of coding? I brew IPAs and Lagers",
  "I want to learn how to build a house, just in case.",
  "4:58 mile, but I enjoy running up mountains more."
];

export default function Page() {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  useEffect(() => {
    function getCurrentIndex(): number {
      let currentIndex = localStorage.getItem("quoteIndex");
      if (currentIndex === null) {
        return 0;
      } else {
        return (parseInt(currentIndex) + 1) % quotes.length;
      }
    }

    function setNewIndex(index: number) {
      localStorage.setItem("quoteIndex", index.toString());
    }

    const currentIndex = getCurrentIndex();
    setNewIndex(currentIndex);
    setCurrentQuote(quotes[currentIndex]);
  }, []);

  return (
    <>
      <div className="mt-8 mb-12">
        <PhotoGallery />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 pb-16">
  <div className="bg-white/70 backdrop-blur-sm shadow-md p-12 border border-white/20">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-light text-slate-700 mb-4 tracking-wide">Hello, I'm Matthew Sun!</h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-blue-300 to-blue-500 mx-auto"></div>
          </div>
          
          <div className="space-y-6 text-slate-600 leading-relaxed">
            <p>
              I have been <a href="https://store.steampowered.com/dev/suncats" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200 underline decoration-blue-200 underline-offset-2">making games</a> for the past 6 years, specializing in Technical Art and Graphics Programming. Shipped 3 games to 60,000+ players, with 3 more coming soon.
            </p>
            <p>
              I was previously an intern with the <a href="https://www.thesphere.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200 underline decoration-blue-200 underline-offset-2">Las Vegas Sphere</a> where I procedurally create art and help support other artists by making tools.
            </p>
            <p>
              I studied Mathematics and Computer Science at <a href="https://www.ucla.edu/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 font-medium transition-colors duration-200 underline decoration-blue-200 underline-offset-2">UCLA</a>.
            </p>
            <p>
              My main skill set is building custom tools and pipelines to build a smooth creative medium allowing artists to focus on their craft rather than the technical details. Outside of this I also love building custom shaders and solutions for computer graphics.
            </p>
            <p className="mb-4">My hobbies outside of my work are spread pretty thin, but they include:</p>
            <div className="space-y-2 ml-4">
              <div>• Japanese printmaking (my retirement hobby)</div>
              <div>• Brewing (lagers)</div>
              <div>• Dendrology (tree classification)</div>
              <div>• Jewelry making (specializing in silver)</div>
              <div>• Running (4:58 mile at my peak)</div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 pb-16">
  <div className="bg-white/70 backdrop-blur-sm shadow-md p-8 border border-white/20 text-center">
          <div className="text-slate-600 text-lg italic leading-relaxed">
            {currentQuote}
          </div>
        </div>
      </div>
    </>
  );
}
