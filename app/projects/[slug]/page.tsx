import { notFound } from "next/navigation";
import { CustomMDX } from "../../components/mdx";
import { getProjects } from "../../lib/posts";
import { MobileTOC } from "../../components/mobile-toc";
import Image from "next/image";

export async function generateStaticParams() {
  let projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  let project = getProjects().find((project) => project.slug === slug);
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

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function extractHeadings(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: { level: number; text: string; slug: string }[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({ level: match[1].length, text: match[2], slug: slugify(match[2]) });
  }
  return headings;
}

function splitSections(content: string) {
  const parts = content.split(/^(?=## )/gm);
  return parts.map((part) => part.trim()).filter(Boolean);
}

export default async function Project({ params }) {
  const { slug } = await params;
  let project = getProjects().find((project) => project.slug === slug);

  if (!project) {
    return notFound();
  }

  const headings = extractHeadings(project.content);
  const sections = splitSections(project.content);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
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
        <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden shadow-md">
          <Image
            src={project.metadata.image}
            alt={project.metadata.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      <div className="text-center mb-8 bg-white/70 backdrop-blur-sm shadow-md border border-white/20 py-8 px-6">
        <h1 className="text-3xl md:text-4xl font-medium uppercase tracking-wide text-[#555] mb-2">
          {project.metadata.title}
        </h1>
        <p className="text-sm uppercase tracking-widest text-slate-400">
          {[project.metadata.type, project.metadata.status].filter(Boolean).join(" · ")}
        </p>
      </div>

      {headings.length > 0 && <MobileTOC headings={headings} />}

      <div className="flex gap-8">
        {headings.length > 0 && (
          <nav className="hidden lg:block w-56 shrink-0 self-stretch">
            <div className="sticky top-6 bg-white/70 backdrop-blur-sm shadow-md border border-white/20 p-5 min-h-[calc(100vh-4rem)]">
              <p className="text-xs font-medium uppercase tracking-widest text-slate-400 mb-4">
                On this page
              </p>
              <ul className="space-y-1 text-[13px]">
                {headings.map((h) => (
                  <li key={h.slug}>
                    <a
                      href={`#${h.slug}`}
                      className={`block py-1.5 text-[#999] hover:text-[#555] transition-colors duration-200 no-underline border-l-2 ${
                        h.level === 2
                          ? "pl-4 border-slate-200 hover:border-[#555]"
                          : "pl-7 border-transparent"
                      }`}
                    >
                      {h.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}

        <div className="flex-1 min-w-0 space-y-6">
          {sections.map((section, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-sm shadow-md p-8 md:p-12 border border-white/20">
              <article className="prose prose-slate max-w-none prose-headings:text-slate-700 prose-p:text-slate-600 prose-p:leading-relaxed prose-li:text-slate-600 prose-a:text-blue-500 prose-a:no-underline hover:prose-a:text-blue-600 prose-strong:text-slate-700 prose-code:text-slate-700 prose-code:bg-slate-100 prose-pre:bg-slate-50 prose-pre:border prose-pre:border-slate-200">
                <CustomMDX source={section} />
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
