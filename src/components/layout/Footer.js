import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ArrowUp } from 'lucide-react';
import { FADE_UP } from '../../constants/animations';

export default function Footer() {
    return (
        <footer id="contact" className="py-24 bg-black relative overflow-hidden">
            <div className="section-divider absolute top-0" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    {...FADE_UP}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-8xl font-heading font-light tracking-tighter leading-[0.9] mb-8">
                        Let's Design <br />
                        <span className="text-brand-amber italic font-normal inline-block py-1 pr-6 opacity-90">Our Next Journey</span>
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl font-light max-w-3xl mx-auto font-body">
                        Aligning values, vision, and execution to architect high-performance digital ecosystems that drive business growth and sustainable revenue.
                    </p>
                </motion.div>

                <div className="flex flex-col lg:flex-row justify-center items-center gap-12 md:gap-24 mb-32">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="mailto:tonci.kucic@gmail.com"
                        className="text-2xl md:text-4xl font-heading font-light text-white hover:text-brand-amber transition-all duration-300 border-b border-white/5 hover:border-brand-amber/30 pb-4 tracking-tight"
                    >
                        tonci.kucic@gmail.com
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="https://www.linkedin.com/in/toncikucic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 text-2xl md:text-4xl font-heading font-light text-white hover:text-brand-amber transition-all duration-300 border-b border-white/5 hover:border-brand-amber/30 pb-4 tracking-tight"
                    >
                        LinkedIn <Linkedin className="w-8 h-8" />
                    </motion.a>
                </div>

                <div className="flex flex-col items-center mb-24">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="w-20 h-20 rounded-full glass-card flex items-center justify-center text-brand-amber hover:border-brand-amber transition-all duration-500 group"
                    >
                        <ArrowUp className="w-8 h-8 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                    <span className="mt-6 text-[10px] uppercase tracking-[0.5em] text-gray-600 font-black">Scroll to Top</span>
                </div>

                <div className="flex flex-col justify-center items-center py-12 border-t border-white/5 gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <span className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-black">© 2026 Tonći Kučić</span>
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-[1px] bg-brand-amber/30" />
                            <span className="text-[9px] text-gray-700 uppercase tracking-[0.2em] font-bold">Executive Technology Leadership</span>
                            <div className="w-2 h-[1px] bg-brand-amber/30" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Cinematic Background Identifier */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[30vw] font-heading font-black text-white/[0.01] pointer-events-none select-none tracking-tighter leading-none translate-y-1/2 opacity-20">
                KUČIĆ
            </div>
        </footer>
    );
}
