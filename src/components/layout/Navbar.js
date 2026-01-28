import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ['Leadership', 'Industries', 'Experience', 'Stacks'];

    return (
        <nav className="fixed top-0 w-full z-50 px-4 md:px-6 py-4 md:py-6 transition-all duration-500">
            <div className="max-w-7xl mx-auto flex justify-between items-center glass-card px-6 md:px-8 py-3 md:py-4 rounded-full relative z-[60]">
                <div className="flex flex-col">
                    <span className="text-lg md:text-2xl font-heading font-black tracking-tight text-white leading-none mb-1">TONĆI KUČIĆ</span>
                    <span className="text-[7px] md:text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black opacity-70">
                        Engineering Executive • Business Value & Strategy
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-10">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-brand-amber transition-all duration-300 relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-amber transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href="https://www.linkedin.com/in/toncikucic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[10px] font-black rounded-full hover:bg-brand-amber transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                    >
                        CONNECT <Linkedin className="w-3.5 h-3.5" strokeWidth={3} />
                    </a>

                    {/* Discrete Hamburger Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[55] lg:hidden"
                    >
                        {/* Backdrop with dedicated exit */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="absolute inset-0 bg-black/40 backdrop-blur-md"
                        />

                        {/* Menu Card */}
                        <motion.div
                            initial={{ y: -10, opacity: 0, scale: 0.98 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -10, opacity: 0, scale: 0.98 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="absolute top-24 left-4 right-4 glass-card rounded-[2.5rem] p-10 overflow-hidden will-change-transform"
                        >
                            <div className="flex flex-col gap-8 text-center">
                                {navItems.map((item, idx) => (
                                    <motion.a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setIsOpen(false)}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="text-lg uppercase tracking-[0.4em] font-black text-gray-400 hover:text-brand-amber transition-colors py-2"
                                    >
                                        {item}
                                    </motion.a>
                                ))}
                                <motion.a
                                    href="https://www.linkedin.com/in/toncikucic"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="sm:hidden flex items-center justify-center gap-3 px-8 py-5 bg-white text-black text-[12px] font-black rounded-full shadow-2xl mt-6 active:scale-95 transition-transform"
                                >
                                    CONNECT <Linkedin className="w-5 h-5" strokeWidth={3} />
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
