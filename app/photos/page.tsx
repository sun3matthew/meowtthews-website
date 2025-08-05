import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium">Photos</h1>
      <ImageGrid
        columns={3}
        images={[
          {
            src: "/photos/12: Childhood Fears.png",
            alt: "Childhood Fears",
          },
          {
            src: "/photos/3: Visions of Ice - 3.png",
            alt: "Visions of Ice - 3",
          },
          {
            src: "/photos/6: Crow Fall.png",
            alt: "Crow Fall",
          },
          {
            src: "/photos/8: Dreams of Home.png",
            alt: "Dreams of Home",
          },
          {
            src: "/photos/IMG_0764.PNG",
            alt: "Photo IMG_0764",
          },
          {
            src: "/photos/IMG_1953 2.jpg",
            alt: "Photo IMG_1953",
          },
          {
            src: "/photos/IMG_3014.JPG",
            alt: "Photo IMG_3014",
          },
          {
            src: "/photos/IMG_4348.png",
            alt: "Photo IMG_4348",
          },
          {
            src: "/photos/IMG_4387.png",
            alt: "Photo IMG_4387",
          },
          {
            src: "/photos/IMG_4393.png",
            alt: "Photo IMG_4393",
          },
          {
            src: "/photos/IMG_4557.png",
            alt: "Photo IMG_4557",
          },
          {
            src: "/photos/IMG_4596.png",
            alt: "Photo IMG_4596",
          },
          {
            src: "/photos/asdf.png",
            alt: "Photo asdf",
          },
          {
            src: "/photos/out.png",
            alt: "Photo out",
          },
        ]}
      />
    </section>
  );
}
