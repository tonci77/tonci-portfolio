import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { techStack } from '../../data/techStack';
import { FADE_UP } from '../../constants/animations';

export default function TechEcosystem() {
    return (
        <section id="stacks" className="py-24 bg-black relative">
            <div className="section-divider absolute top-0" />

            <div className="container mx-auto px-6">
                <SectionTitle subtitle="The technical foundations and modern toolsets leveraged throughout my professional journey to build high-performance organizations.">
                    Technical Ecosystem
                </SectionTitle>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
                    {techStack.map((stack, idx) => (
                        <motion.div
                            key={idx}
                            {...FADE_UP}
                            transition={{ ...FADE_UP.transition, delay: idx * 0.1 }}
                            className="p-10 glass-card rounded-[2.5rem] group"
                        >
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 mb-8 group-hover:text-brand-amber transition-colors duration-500">
                                {stack.category}
                            </h4>
                            <ul className="space-y-4">
                                {stack.items.map((item, i) => (
                                    <li key={i} className="text-gray-500 text-sm font-light flex items-center gap-3 font-body">
                                        <div className="w-1 h-1 bg-gray-800 rounded-full group-hover:bg-brand-amber transition-all duration-300" />
                                        <span className="group-hover:text-gray-300 transition-colors">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
