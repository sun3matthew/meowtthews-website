import { notFound } from "next/navigation";
import { CustomMDX } from "../../components/mdx";
import { getProjects } from "../../lib/posts";
import Image from "next/image";

export async function generateStaticParams() {
  let projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }) {
  let project = getProjects().find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  let {
    title,
    description,
    image,
  } = project.metadata;
  let ogImage = image
    ? image
    : `/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Project({ params }) {
  let project = getProjects().find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechArticle",
            headline: project.metadata.title,
            description: project.metadata.description,
            image: project.metadata.image,
            author: {
              "@type": "Person",
              name: "Matthew Sun",
            },
          }),
        }}
      />
      
      {project.metadata.image && (
        <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden rounded-lg shadow-xl">
          <Image
            src={project.metadata.image}
            alt={project.metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="bg-white/70 backdrop-blur-sm shadow-xl p-8 md:p-12 border border-white/20 rounded-lg">
        <article className="prose prose-slate max-w-none prose-headings:text-slate-700 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-rose-500 prose-a:no-underline hover:prose-a:text-rose-600 prose-strong:text-slate-700 prose-code:text-slate-700 prose-code:bg-slate-100 prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-200">
          <CustomMDX source={project.content} />
        </article>
      </div>
    </section>
  );
}
