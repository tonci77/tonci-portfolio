import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { experiences } from '../../data/experiences';
import { FADE_UP } from '../../constants/animations';

export default function Experience() {
    return (
        <section id="experience" className="py-24 bg-black relative z-10">
            <div className="section-divider absolute top-0" />

            <div className="container mx-auto px-6">
                <SectionTitle subtitle="A career defined by organizational scaling and business growth across diverse global markets.">
                    Career Journey
                </SectionTitle>

                <div className="space-y-6 max-w-5xl mx-auto mt-20">
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            {...FADE_UP}
                            transition={{ ...FADE_UP.transition, delay: idx * 0.1 }}
                            className="group relative grid lg:grid-cols-12 gap-8 p-12 glass-card rounded-[2.5rem] overflow-hidden"
                        >
                            {/* Accent Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-amber/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="lg:col-span-2">
                                <span className="text-brand-amber font-heading font-black text-2xl tracking-tighter opacity-80">
                                    {exp.year}
                                </span>
                            </div>

                            <div className="lg:col-span-4">
                                <h4 className="text-3xl font-heading font-light mb-1 tracking-tight text-white group-hover:text-brand-amber transition-colors duration-300">
                                    {exp.title}
                                </h4>
                                <p className="text-brand-amber font-bold uppercase text-[10px] tracking-[0.3em] opacity-60 group-hover:opacity-100 transition-opacity">
                                    {exp.company}
                                </p>
                            </div>

                            <div className="lg:col-span-6">
                                <p className="text-gray-400 mb-8 text-lg leading-relaxed font-light font-body">
                                    {exp.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {exp.focus.map((f, i) => (
                                        <span key={i} className="px-4 py-1.5 bg-white/5 border border-white/5 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-white group-hover:border-brand-amber/30 transition-all">
                                            {f}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
