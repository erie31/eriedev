import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Hero from "./Hero";
import TechStackAccordion from "./TechStackAccordion";
import Footer from "./Footer";
import { techStack } from "../data/data_portfolio.js";

const PROJECTS = [
    {
        id: 1,
        title: "Dublin Fotocabinas",
        description: "PWA para gestión de eventos y tarjetas virtuales con QR.",
        previewImg: "/assets/dublin-preview.jpg",
        link: "https://dublinfotocabinas.web.app"
    },
    {
        id: 2,
        title: "Rust Core Architecture",
        description: "Migración de backend Node.js a Tauri-Native con Axum.",
        previewImg: "/assets/rust-preview.jpg",
        link: "#"
    },
    {
        id: 3,
        title: "Calculo de botín",
        description: "Calcula botines de todo tipo.",
        previewImg: "/assets/dublin-preview.jpg",
        link: "https://erie31.github.io/DCRFN/"
    },
    {
        id: 4,
        title: "Merakicakes",
        description: "Tienda online de cupcakes y pastelería.",
        previewImg: "/assets/dublin-preview.jpg",
        link: "https://merakicakes.vercel.app"
    },
];

function App() {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black">
            <Header onGalleryToggle={() => setIsGalleryOpen(!isGalleryOpen)} />

            {/* Main Content */}
            <main className="container mx-auto px-6 max-w-4xl relative z-10">
                <Hero />

                {/* TECH STACK */}
                <section className="mt-16 mb-24">
                    <h2 className="text-[10px] uppercase tracking-[0.5em] text-emerald-500 mb-8 text-center font-montserrat">
                        Technical Arsenal
                    </h2>
                    <TechStackAccordion data={techStack} />
                </section>
            </main>

            <Footer />

            {/* Project Gallery Overlay */}
            <AnimatePresence>
                {isGalleryOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col h-full pt-32 px-6 overflow-y-auto scrollbar-hide"
                    >
                        <div className="container mx-auto max-w-4xl">
                            <h2 className="text-2xl font-light mb-12 text-center text-white">Project Gallery</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-32">
                                {PROJECTS.map((project) => (
                                    <div key={project.id} className="group relative overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500/50 transition-colors">
                                        <div className="aspect-video bg-zinc-800 relative overflow-hidden group-hover:opacity-80 transition-opacity">
                                            <div className="absolute inset-0 flex items-center justify-center text-zinc-600 font-light text-sm">
                                                [Image Preview: {project.title}]
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-lg font-medium text-white mb-2">{project.title}</h3>
                                            <p className="text-gray-400 text-sm mb-4 font-light">{project.description}</p>
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-emerald-500 text-sm hover:text-emerald-400 transition-colors inline-flex items-center gap-1 font-medium"
                                            >
                                                View Deployment &rarr;
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default App;