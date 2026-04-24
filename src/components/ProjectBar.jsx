const ProjectBar = ({ title, stack, description, image, link, tags }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer"
            className="group block py-12 border-b border-zinc-800 hover:bg-zinc-950 transition-all px-4 -mx-4 rounded-xl">
            <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-64 h-40 rounded-xl overflow-hidden border border-zinc-800">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="flex-1 space-y-4">
                    <div className="flex items-center justify-between gap-4">
                        <h3 className="text-3xl font-bold tracking-tight text-white group-hover:text-dublin-gold transition-colors">
                            {title}
                        </h3>
                        <span className="text-xs font-mono uppercase text-zinc-600 bg-zinc-900 px-3 py-1.5 rounded-full border border-zinc-800">
                            {stack}
                        </span>
                    </div>
                    <p className="text-zinc-400 font-light leading-relaxed">
                        {description}
                    </p>
                    <div className="flex gap-2.5 pt-2">
                        {tags.map((tag, index) => (
                            <span key={index}
                                className="text-xs font-medium text-dublin-gold/80 bg-dublin-gold/5 px-4 py-1.5 rounded-full border border-dublin-gold/10">
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