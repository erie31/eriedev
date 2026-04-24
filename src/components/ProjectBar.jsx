import React from "react";

const ProjectBar = ({ title, stack, description, image, link, tags }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block py-10 border-b border-zinc-900 hover:bg-zinc-950/50 transition-all px-4 -mx-4 rounded-2xl"
    >
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* PREVIEW IMAGE */}
        <div className="w-full md:w-64 h-40 rounded-xl overflow-hidden border border-zinc-800/50 bg-zinc-900">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
          />
        </div>

        {/* CONTENT */}
        <div className="flex-1 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-2xl font-medium tracking-tight text-white group-hover:text-emerald-500 transition-colors">
              {title}
            </h3>
            <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-900/50 px-3 py-1 rounded-full border border-zinc-800">
              {stack}
            </span>
          </div>

          <p className="text-zinc-400 font-light leading-relaxed text-sm max-w-2xl">
            {description}
          </p>

          {/* TAGS OPTIMIZADOS */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-[10px] font-medium text-emerald-500/90 bg-emerald-500/5 px-2.5 py-1 rounded-md border border-emerald-500/10 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectBar;