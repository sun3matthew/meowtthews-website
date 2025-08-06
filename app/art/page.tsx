import Image from "next/image";

const artworks = [
  {
    src: "/photos/12: Childhood Fears.png",
    caption: "Woodblock print of slender man, experimenting with different techniques."
  },
  {
    src: "/photos/3: Visions of Ice - 3.png", 
    caption: "Combining printmaking, rolling and post processing algorithms."
  },
  {
    src: "/photos/6: Crow Fall.png",
    caption: "Experimental printing medium, printing on transparent for depth emulation."
  },
  {
    src: "/photos/8: Dreams of Home.png",
    caption: "Collage of Japanese woodblock prints, of places and feelings of my home."
  },
  {
    src: "/photos/IMG_0764.PNG",
    caption: "Fan art for a creator I used to follow."
  },
  {
    src: "/photos/IMG_1953 2.jpg",
    caption: "Facial study of Stalin, for use in another piece I was working on."
  },
  {
    src: "/photos/IMG_3014.JPG",
    caption: "Practice for speculative biology, trying to mimic field sketches."
  },
  {
    src: "/photos/IMG_4348.png",
    caption: "Seattle Green Line - Ilford HP5 Plus 400"
  },
  {
    src: "/photos/IMG_4387.png",
    caption: "Cat up for adoption - Ilford HP5 Plus 400"
  },
  {
    src: "/photos/IMG_4393.png",
    caption: "U District Farmer's Market - Ilford HP5 Plus 400"
  },
  {
    src: "/photos/IMG_4557.png",
    caption: "Friends Cat (I really like cats) - Ilford HP5 Plus 400"
  },
  {
    src: "/photos/IMG_4596.png",
    caption: "Solitude - Ilford HP5 Plus 400"
  },
  {
    src: "/photos/asdf.png",
    caption: "First attempt at a digital piece."
  },
  {
    src: "/photos/out.png",
    caption: "Woodblock print of cats, trying to emulate a feeling of home and comfort."
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
