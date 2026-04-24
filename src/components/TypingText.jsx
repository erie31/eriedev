import React, { useState, useEffect } from 'react';

const TypingText = () => {
    const phrases = ["Gamification", "Minimalist", "Ideas in solid code.", "Product Engineer"];
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
        <span>{phrases[index].substring(0, subIndex)}<span className="animate-pulse">|</span></span>
    );
};

export default TypingText;
