import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechBar = ({ category, items, details }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-10 border-b border-zinc-800 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex items-center justify-between gap-6">
                <h3 className="text-2xl font-bold text-white tracking-tight">{category}</h3>
                <span className={`text-4xl text-zinc-600 font-light transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                    +
                </span>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden"
                    >
                    <div className="pt-8 space-y-6">
                <p className="text-zinc-400 font-light leading-relaxed max-w-3xl">
                    {details}
                </p>
                <div className="flex flex-wrap gap-2.5">
                    {items.map((item, index) => (
                        <span key={index}
                            className="text-sm font-medium text-white bg-zinc-900 px-6 py-2.5 rounded-full border border-zinc-700">
                            {item}
                        </span>
                    ))}
                </div>
        </div>
          </motion.div >
        )}
      </AnimatePresence >
    </div >
  );
};

export default TechBar;