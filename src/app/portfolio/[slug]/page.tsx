import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/data/projects";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Rishvin Labs Projects`,
    description: project.summary,
    keywords: project.keywords.join(", "),
    category: project.category,
    alternates: {
      canonical: `https://rishvinreddy.vercel.app/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Rishvin Labs`,
      description: project.summary,
      url: `https://rishvinreddy.vercel.app/portfolio/${project.slug}`,
      siteName: "Rishvin Reddy Portfolio",
      images: [
        {
          url: `https://rishvinreddy.vercel.app${project.ogImage}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Rishvin Labs`,
      description: project.summary,
      images: [`https://rishvinreddy.vercel.app${project.ogImage}`],
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Generate hyper-SEO JSON-LD graph for the project
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `https://rishvinreddy.vercel.app/portfolio/${project.slug}#software`,
        "name": project.title,
        "applicationCategory": project.category,
        "operatingSystem": "All",
        "description": project.description,
        "softwareVersion": "1.0",
        "author": {
          "@id": "https://rishvinreddy.vercel.app/#person",
        },
        "creator": {
          "@id": "https://rishvinreddy.vercel.app/#person",
        },
        "dateCreated": project.dateCreated,
        "dateModified": project.dateUpdated,
        "keywords": project.keywords.join(", "),
        "image": `https://rishvinreddy.vercel.app${project.coverImage}`,
        "featureList": project.features.join(", "),
        "codeRepository": `https://github.com/RishvinReddy/${project.github}`,
        "url": project.demo || `https://github.com/RishvinReddy/${project.github}`
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://rishvinreddy.vercel.app/portfolio/${project.slug}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://rishvinreddy.vercel.app/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Portfolio",
            "item": "https://rishvinreddy.vercel.app/portfolio"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": project.title,
            "item": `https://rishvinreddy.vercel.app/portfolio/${project.slug}`
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": `https://rishvinreddy.vercel.app/portfolio/${project.slug}#webpage`,
        "url": `https://rishvinreddy.vercel.app/portfolio/${project.slug}`,
        "name": `${project.title} - Project Overview`,
        "description": project.summary,
        "isPartOf": {
          "@id": "https://rishvinreddy.vercel.app/#website"
        },
        "about": {
          "@id": `https://rishvinreddy.vercel.app/portfolio/${project.slug}#software`
        },
        "breadcrumb": {
          "@id": `https://rishvinreddy.vercel.app/portfolio/${project.slug}#breadcrumb`
        }
      },
      {
        "@type": "CreativeWork",
        "@id": `https://rishvinreddy.vercel.app/portfolio/${project.slug}#creativework`,
        "name": `${project.title} Source Code & Architecture`,
        "author": {
          "@id": "https://rishvinreddy.vercel.app/#person"
        },
        "about": {
          "@id": `https://rishvinreddy.vercel.app/portfolio/${project.slug}#software`
        }
      }
    ]
  };

  return (
    <main className="flex-grow pt-24 pb-16 bg-gradient-to-b from-slate-50 to-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-6 lg:px-16 max-w-4xl">
        {/* Breadcrumb Visual */}
        <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-mono">
          <a href="/" className="hover:text-primary transition-colors">Home</a>
          <span>/</span>
          <a href="/portfolio" className="hover:text-primary transition-colors">Portfolio</a>
          <span>/</span>
          <span className="text-slate-900 font-bold">{project.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-full mb-6">
            {project.category}
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mb-8">
            {project.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`https://github.com/RishvinReddy/${project.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-slate-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              View on GitHub
            </a>
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-slate max-w-none prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-p:leading-relaxed">
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest m-0 mb-2">Industry</h3>
              <p className="text-slate-900 font-medium m-0">{project.industry}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest m-0 mb-2">Status</h3>
              <p className="text-slate-900 font-medium m-0">{project.status}</p>
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest m-0 mb-2">Read Time</h3>
              <p className="text-slate-900 font-medium m-0">{project.readingTime}</p>
            </div>
          </div>

          <h2>Executive Summary</h2>
          <p>{project.description}</p>

          <h2>Problem Statement</h2>
          <p>{project.problemStatement}</p>

          <h2>Technical Architecture</h2>
          <p>{project.architecture}</p>

          <h2>Key Features</h2>
          <ul>
            {project.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <h2>Tech Stack</h2>
          <div className="not-prose flex flex-wrap gap-2 mt-4">
            {project.techStack.concat(project.languages, project.frameworks).map((tech, idx) => (
              <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-bold rounded-md">
                {tech}
              </span>
            ))}
          </div>

        </article>
      </div>
    </main>
  );
}
