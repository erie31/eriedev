import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const TypingText = () => {
    // Aquí ponemos tus frases de "Solution" y las anteriores
    const phrases = [
        "Solution Development & Programming",
        "Gamification Expert",
        "Minimalist Design",
        "Ideas in solid code.",
        "Product Engineer"
    ];

    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
        if (subIndex === phrases[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000);
            return;
        }
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % phrases.length);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 50 : 100);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <span className="inline-block">
            {phrases[index].substring(0, subIndex)}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[2px] h-[1em] bg-emerald-500 align-middle ml-1"
            />
        </span>
    );
};

export default TypingText;