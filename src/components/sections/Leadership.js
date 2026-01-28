import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { coreCompetencies } from '../../data/competencies';
import { FADE_UP } from '../../constants/animations';

const publicUrl = process.env.PUBLIC_URL || '';

export default function Leadership() {
    return (
        <section id="leadership" className="py-24 bg-black relative overflow-hidden">
            <div className="section-divider absolute top-0" />

            {/* Ambient Brand Glow */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.08, 0.03],
                    x: [0, -40, 0]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-amber/10 rounded-full blur-[150px] pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle subtitle="Bridging the gap between complex engineering roadmaps and high-level organizational objectives to accelerate global business value.">
                    Strategic Leadership
                </SectionTitle>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 mt-16">
                    {coreCompetencies.map((comp, idx) => (
                        <motion.div
                            key={idx}
                            {...FADE_UP}
                            transition={{ ...FADE_UP.transition, delay: idx * 0.1 }}
                            className="group p-10 glass-card rounded-[3rem] hover:-translate-y-2"
                        >
                            <div className="w-14 h-14 bg-white/5 rounded-[1.25rem] flex items-center justify-center mb-10 border border-white/10 group-hover:bg-brand-amber/10 group-hover:border-brand-amber/40 transition-all duration-500">
                                <comp.icon className="w-6 h-6 text-gray-500 group-hover:text-brand-amber transition-colors" />
                            </div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-amber/60 group-hover:text-brand-amber mb-6 transition-colors">
                                {comp.category}
                            </h4>
                            <ul className="space-y-5">
                                {comp.items.map((item, i) => (
                                    <li key={i} className="text-gray-400 text-sm font-light flex items-start gap-4 group/item">
                                        <div className="w-1 h-1 bg-brand-amber/20 rounded-full mt-2 group-hover/item:bg-brand-amber transition-all duration-300" />
                                        <span className="group-hover/item:text-white transition-colors leading-snug font-body">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Management Thought Leadership Section */}
                <div className="grid lg:grid-cols-12 gap-20 items-center max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="lg:col-span-7 order-2 lg:order-1"
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-16 h-px bg-brand-amber" />
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-amber">THE PSYCHOLOGY OF SCALE</span>
                        </div>

                        <h3 className="text-4xl md:text-5xl lg:text-7xl font-heading font-light tracking-tighter mb-10 leading-[0.9]">
                            Business Scaling <br />
                            <span className="text-brand-amber italic font-normal opacity-90 pr-4">Beyond the Technical</span>
                        </h3>

                        <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light font-body">
                            What differentiates my approach to high-growth engineering is a foundation in <span className="text-white font-medium">organizational psychology</span>. I believe that while technology moves fast, human systems are the real multipliers of success.
                        </p>

                        <div className="p-10 bg-brand-amber/[0.03] border-l-[3px] border-brand-amber mb-12 rounded-r-3xl">
                            <p className="text-xl text-gray-300 italic font-light leading-relaxed">
                                "In my published book, I explore the spectrum of management personas: Are You a Shark, a Whale, or a Turtle? Understanding these behavioral drivers is how we scale culture alongside code."
                            </p>
                        </div>


                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, rotate: 2 }}
                        whileInView={{ opacity: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="lg:col-span-5 order-1 lg:order-2"
                    >
                        <div className="relative aspect-[3/4] max-w-sm mx-auto w-full groupPerspective">
                            <div className="absolute inset-0 bg-brand-amber/20 blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                            <div className="relative h-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.8)] border border-white/10 group-hover:border-brand-amber/30 transition-all duration-700">
                                <img
                                    src={`${publicUrl}/images/peak_performance.png`}
                                    alt="Peak Performance Book Cover"
                                    className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-1000"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent" />
                            </div>

                            <motion.a
                                href="https://www.amazon.com/Peak-Performance-Mindset-Tools-Managers-ebook/dp/B0DKTV2WBT"
                                target="_blank"
                                rel="noopener noreferrer"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -bottom-6 -right-6 glass-card px-8 py-5 rounded-3xl group/amazon flex items-center gap-4 hover:bg-[#FF9900] hover:text-black transition-all duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)] active:scale-95 border border-white/10"
                            >
                                <div className="flex flex-col items-start leading-none gap-1">
                                    <span className="text-[8px] font-black uppercase tracking-[0.3em] opacity-60">Shop on</span>
                                    <span className="text-[14px] font-black uppercase tracking-[0.1em]">Amazon</span>
                                </div>
                                <div className="w-px h-6 bg-white/20 group-hover/amazon:bg-black/20" />
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.93 17.136c-1.472.822-4.14 1.353-5.32 1.353-1.895 0-1.895-.87-1.895-1.127 0-.325.215-.89.513-1.22l.858-.93c.12-.132.32-.303.655-.303.414 0 .524.364.675.76.108.283.332.61.64.61s.414-.144.593-.306c.204-.15.4-.537.4-.954 0-.48-.12-.76-.328-1.04-.338-.456-.7-1.464-.7-2.345 0-2.31 2.057-3.692 3.82-3.692 1.764 0 2.228 1.135 2.228 1.95 0 1.2-.843 1.972-1.954 1.972-1.11 0-1.825-.86-1.825-1.93 0-.17.02-.338.05-.515-.157-.033-.31-.053-.45-.053-.556 0-1.13.254-1.336.883-.153.46-.118 1.05.105 1.543.14.312.38.56.7.74.57.34 2.203.35 2.76.35.54 0 .805-.41.805-.732 0-.317-.184-.522-.442-.647-.25-.125-.494-.125-.494-.482 0-.256.242-.486.536-.486.34 0 .973.204.973.992l-.004 3.098c0 .28.258.452.486.452l.462-.036c.15-.027.288.083.315.22.02.106-.05.213-.157.252-.403.16-1.15.267-1.574.267a.784.784 0 0 1-.767-.798l.006-.46zm-2.12-4.8c.84 0 1.096-.6 1.096-1.163 0-.584-.28-.973-.815-.973-.556 0-.822.422-.822 1.077 0 .61.21 1.06.54 1.06zm-7.97 7.042c-2.306-.97-4.11-2.903-4.11-6.19 0-3.924 3.518-7.14 7.843-7.14 3.39 0 5.674 1.88 6.574 3.92.176.4.004.836-.372 1-.368.163-.787.012-.976-.35-1.178-2.2-3.51-3.415-5.265-3.415-3.606 0-6.234 2.724-6.234 6.014 0 2.375 1.486 4.314 3.197 5.16.273.134.426.433.364.72-.06.287-.315.483-.62.483l-.4-.002z" />
                                </svg>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
