import React from 'react';
import { motion } from 'framer-motion';

const publicUrl = process.env.PUBLIC_URL || '';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16 mesh-gradient">
            {/* Ambient Background Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1],
                        x: [0, 30, 0],
                        y: [0, -20, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-amber/10 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.1, 0.05],
                        x: [0, -30, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 left-1/3 w-[700px] h-[700px] bg-white/5 rounded-full blur-[150px]"
                />

                {/* Executive Grid Layer */}
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-7 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="inline-block px-5 py-2 border border-brand-amber/30 bg-brand-amber/5 text-brand-amber text-[10px] font-bold uppercase tracking-[0.4em] rounded-full mb-8"
                        >
                            Split, Croatia • Global Scale
                        </motion.div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-light tracking-tight leading-[0.9] mb-8 py-2">
                            Engineering Executive <br />
                            <span className="text-brand-amber font-normal italic pr-4 inline-block py-2 opacity-90">& Business Value Leader</span> <br />
                            <span className="text-gray-500 text-3xl md:text-4xl lg:text-5xl block mt-2 tracking-tight">Strategic Transformation</span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 font-light">
                            High-impact technology executive with <span className="text-white font-medium">20+ years of experience</span> bridging the gap between <span className="text-white">complex engineering</span> and <span className="text-brand-amber">bottom-line business results</span>.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 bg-white text-black font-heading font-bold rounded-full text-sm tracking-widest shadow-2xl hover:bg-brand-amber hover:text-black transition-all duration-300"
                            >
                                INDUSTRIAL FOOTPRINT
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                                className="px-10 py-5 border border-white/10 bg-white/5 backdrop-blur-md text-white font-heading font-bold rounded-full text-sm tracking-widest hover:border-brand-amber/50 hover:text-brand-amber transition-all duration-300"
                            >
                                GET IN TOUCH
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-brand-amber/10 rounded-[4rem] blur-[80px]"></div>
                            <div className="relative h-full w-full rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl glass-card">
                                <img
                                    src={`${publicUrl}/images/profile.jpg`}
                                    alt="Tonći Kučić"
                                    className="w-full h-full object-cover transition-all duration-1000 scale-[1.08] object-[center_35%]"
                                />
                            </div>

                            {/* Handwritten Signature - World Class Sentiment */}
                            <div className="absolute -bottom-4 -right-4 z-50 transform -rotate-12 pointer-events-none mix-blend-screen">
                                <span className="text-[3rem] text-brand-amber/30 font-normal select-none blur-[0.3px]"
                                    style={{ fontFamily: '"Mrs Saint Delafield", cursive', textShadow: '0px 0px 8px rgba(251,191,36,0.3)' }}>
                                    Tonći Kučić
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator - Brand Anchored */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <div className="w-px h-16 bg-gradient-to-b from-brand-amber via-brand-amber/50 to-transparent shadow-[0_0_10px_rgba(251,191,36,0.5)]"></div>
                <span className="text-[8px] text-gray-500 uppercase tracking-[0.5em] font-black">Explore Leadership</span>
            </motion.div>
        </section>
    );
}
