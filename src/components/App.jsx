import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "./Header";
import Hero from "./Hero";
import TechStackAccordion from "./TechStackAccordion";
import Footer from "./Footer";
import ProjectBar from "./ProjectBar"; // Importación vital
import { techStack } from "../data/data_portfolio.js";

const PROJECTS = [
    {
        id: 1,
        title: "Dublin Fotocabinas",
        stack: "PWA / Firebase",
        description: "Gestión integral de eventos y tarjetas virtuales con QR para cabinas fotográficas.",
        image: "/assets/dublin-preview.jpg",
        link: "https://dublinfotocabinas.web.app",
        tags: ["React", "Firebase", "QR-Engine", "PWA"]
    },
    {
        id: 2,
        title: "Rust Core Architecture",
        stack: "Rust / Axum / Tauri",
        description: "Migración de infraestructura crítica de Node.js a una arquitectura nativa de alto rendimiento.",
        image: "/assets/rust-preview.jpg",
        link: "#",
        tags: ["Rust", "Axum", "Tauri", "Backend"]
    },
    {
        id: 3,
        title: "Reward Calculator",
        stack: "Vanilla JS / Algorithms",
        description: "Calculadora especializada en lógica de recompensas para optimización de inventarios.",
        image: "/assets/botin.png",
        link: "https://erie31.github.io/DCRFN/",
        tags: ["Logic", "JavaScript", "Tools"]
    },
    {
        id: 4,
        title: "Merakicakes",
        stack: "E-commerce / Vercel",
        description: "Plataforma de venta online optimizada para pastelería artesanal con enfoque en UX.",
        image: "/assets/dublin-preview.jpg",
        link: "https://meraki-eight.vercel.app",
        tags: ["React", "Tailwind", "Responsive"]
    },
    {
        id: 5,
        title: "EerieScore",
        stack: "Board Games Tool",
        description: "Aplicación web dedicada al seguimiento y gestión de puntuaciones en juegos de mesa.",
        image: "/assets/eriiescore.png",
        link: "https://erie31.github.io/EerieScore/",
        tags: ["Gaming", "UI/UX", "React"]
    }
];

function App() {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white selection:bg-emerald-500 selection:text-black font-sans">
            <Header onGalleryToggle={() => setIsGalleryOpen(!isGalleryOpen)} />

            <main className="container mx-auto px-6 max-w-4xl relative z-10">
                <Hero />

                <section className="mt-16 mb-24">
                    <h2 className="text-[10px] uppercase tracking-[0.5em] text-emerald-500 mb-8 text-center">
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
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col h-full pt-32 px-6 overflow-y-auto scrollbar-hide"
                    >
                        <div className="container mx-auto max-w-4xl">
                            <h2 className="text-2xl font-light mb-12 text-center text-white tracking-widest uppercase text-sm">
                                Selected Projects
                            </h2>

                            <div className="flex flex-col gap-2 pb-32">
                                {PROJECTS.map((project) => (
                                    <ProjectBar key={project.id} {...project} />
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