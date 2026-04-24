import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChevronDownIcon = ({ size }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function TechStackAccordion({ data }) {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleOpen = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
            {data.map((tech, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={index} className="border-b border-zinc-800 pb-2">
                        <button 
                            onClick={() => toggleOpen(index)}
                            className="w-full py-4 flex justify-between items-center group text-left"
                        >
                            <span className="text-xl font-light text-white group-hover:text-emerald-500 transition-colors">
                                {tech.category}
                            </span>
                            <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-gray-500 group-hover:text-emerald-500"
                            >
                                <ChevronDownIcon size={20} />
                            </motion.div>
                        </button>
                        
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-4 pt-2">
                                        <p className="text-gray-400 text-sm mb-4 font-light">
                                            {tech.details}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {tech.items.map((item, i) => (
                                                <span 
                                                    key={i} 
                                                    className="px-3 py-1 bg-zinc-900/50 text-gray-300 text-xs rounded-full border border-zinc-800"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
}
