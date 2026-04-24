import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypingText = ({ text, delay = 0 }) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        let timer;
        if (displayedText.length < text.length) {
            timer = setTimeout(() => {
                setDisplayedText(text.slice(0, displayedText.length + 1));
            }, 50); // Speed of typing
        } else {
            setIsComplete(true);
        }
        return () => clearTimeout(timer);
    }, [displayedText, text]);

    return (
        <span className="inline-block">
            {displayedText}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className={`inline-block w-[2px] h-[1em] bg-emerald-500 align-middle ml-1 ${isComplete ? 'hidden' : ''}`}
            />
        </span>
    );
};

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center text-center pt-20 pb-16">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative mb-8"
            >
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-zinc-800 shadow-[0_0_30px_rgba(16,185,129,0.15)] p-1">
                    <img
                        src="/profile.jpg"
                        alt="Erié. Profile"
                        className="w-full h-full object-cover rounded-full"
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="max-w-2xl"
            >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4 text-white">
                    <TypingText text="AI-Driven Development & Programming." />
                </h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2.5 }}
                    className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide font-light max-w-xl mx-auto mt-6"
                >
                    Immersive digital experiences. Focusing on high performance and scalable solutions.
                </motion.p>
            </motion.div>
        </section>
    );
}