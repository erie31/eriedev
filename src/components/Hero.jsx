import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// El componente TypingText ahora se encarga solo de la parte rotativa
const TypingText = () => {
    const phrases = [
        "Immersive digital experiences.",
        "Gamification Expert.",
        "Minimalist Design.",
        "Ideas in solid code.",
        "Product Engineer."
    ];

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        const currentPhrase = phrases[index];

        if (subIndex === currentPhrase.length + 1 && !reverse) {
            const timeout = setTimeout(() => setReverse(true), 2000);
            return () => clearTimeout(timeout);
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % phrases.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 40 : 70);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <span className="text-emerald-500 font-medium">
            {phrases[index].substring(0, subIndex)}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1em] bg-emerald-500 align-middle ml-1"
            />
        </span>
    );
};

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center pt-20 pb-16">
            {/* Imagen de Perfil */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mb-8"
            >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-zinc-800 shadow-[0_0_30px_rgba(16,185,129,0.15)] p-1">
                    <img
                        src="/profile.jpg"
                        alt="Erié Profile"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-3xl px-4"
            >
                {/* TÍTULO FIJO */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-white tracking-tight">
                    Solutions Development <br className="md:hidden" /> & Programming
                </h1>

                {/* SUBTÍTULO DINÁMICO */}
                <div className="text-gray-400 text-lg md:text-xl leading-relaxed tracking-wide font-light max-w-xl mx-auto mt-6 min-h-[2em]">

                    <TypingText />
                </div>
            </motion.div>
        </section>
    );
}