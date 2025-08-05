import Image from "next/image";

const artworks = [
  {
    src: "/photos/12: Childhood Fears.png",
    caption: "Childhood Fears - An exploration of memory and emotion through visual narrative."
  },
  {
    src: "/photos/3: Visions of Ice - 3.png", 
    caption: "Visions of Ice - 3 - Study of crystalline forms and frozen landscapes."
  },
  {
    src: "/photos/6: Crow Fall.png",
    caption: "Crow Fall - Dark imagery exploring themes of nature and mortality."
  },
  {
    src: "/photos/8: Dreams of Home.png",
    caption: "Dreams of Home - Nostalgic piece reflecting on place and belonging."
  },
  {
    src: "/photos/IMG_0764.PNG",
    caption: "Digital composition exploring light and shadow relationships."
  },
  {
    src: "/photos/IMG_1953 2.jpg",
    caption: "Photographic study capturing natural textures and organic forms."
  },
  {
    src: "/photos/IMG_3014.JPG",
    caption: "Visual experiment with color theory and atmospheric perspective."
  },
  {
    src: "/photos/IMG_4348.png",
    caption: "Abstract digital artwork exploring geometric patterns and depth."
  },
  {
    src: "/photos/IMG_4387.png",
    caption: "Minimalist composition focusing on form and negative space."
  },
  {
    src: "/photos/IMG_4393.png",
    caption: "Contemporary digital piece examining texture and surface quality."
  },
  {
    src: "/photos/IMG_4557.png",
    caption: "Artistic study of environmental lighting and mood creation."
  },
  {
    src: "/photos/IMG_4596.png",
    caption: "Mixed media exploration of visual rhythm and compositional balance."
  },
  {
    src: "/photos/asdf.png",
    caption: "Experimental work pushing boundaries of digital art techniques."
  },
  {
    src: "/photos/out.png",
    caption: "Output study examining the intersection of process and final result."
  }
];

export default function ArtPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-light text-slate-700 mb-4 tracking-wide">Assorted Images</h1>
        <div className="w-32 h-0.5 bg-gradient-to-r from-rose-300 to-blue-300 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {artworks.map((artwork, index) => (
          <div key={index} className="bg-white/70 backdrop-blur-sm shadow-xl overflow-hidden border border-white/20 hover:shadow-2xl transition-shadow duration-300">
            <div className="relative aspect-square">
              <Image
                src={artwork.src}
                alt={artwork.caption}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <p className="text-slate-600 text-sm leading-relaxed">
                {artwork.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
