import React from "react";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <article className="glass rounded-2xl overflow-hidden group">
      <div className="relative h-48 sm:h-56 md:h-60">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={!!project.featured}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600/90">
              Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg md:text-xl font-semibold leading-snug">
              {project.title}
            </h3>
            <p className="text-sm text-blue-300 mt-1">{project.type}</p>
          </div>
        </div>

        <p className="text-gray-200/90 mt-4 leading-relaxed">
          {project.description}
        </p>

        {project.highlights?.length ? (
          <ul className="mt-4 space-y-2 text-sm text-gray-200/90">
            {project.highlights.slice(0, 3).map((h, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-400" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags?.slice(0, 6).map((tag, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-6">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 transition text-sm font-medium shadow-lg shadow-blue-600/20"
            >
              Live
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 transition text-sm font-medium"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
