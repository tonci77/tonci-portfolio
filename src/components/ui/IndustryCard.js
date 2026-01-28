import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../../utils';
import { STAGGER_CONTAINER } from '../../constants/animations';

export default function IndustryCard({ industry, index }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.98, 1, 1, 0.98]);
    const bgTextY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
    const Icon = industry.icon;

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale }}
            className="relative min-h-[50vh] flex items-center justify-center py-4 overflow-hidden"
        >
            {/* Background Parallax text - World Class Detail */}
            <motion.div
                style={{ y: bgTextY }}
                className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden"
            >
                <span className="text-[18vw] font-heading font-black text-white/[0.02] tracking-tighter block w-full text-center uppercase leading-none">
                    {industry.bgText}
                </span>
            </motion.div>

            <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
                {/* Perspective Card Effect - Now on the left for anchoring */}
                <div className="order-1 lg:order-1 lg:col-span-5 relative aspect-square rounded-[3rem] group shadow-2xl shadow-black border border-white/5 max-w-md lg:ml-0 w-full bg-black overflow-hidden">
                    <motion.div
                        style={{ y }}
                        animate={
                            industry.id === 'telecom' ? {
                                x: [0, 2, -2, 0],
                                scale: [1.12, 1.15, 1.12],
                                opacity: [0.8, 1, 0.8]
                            } : industry.id === 'smartcity' ? {
                                x: [-20, 20],
                                y: [-10, 10],
                                rotate: [0.2, -0.2]
                            } : industry.id === 'igaming' ? {
                                rotateY: [0, 15, -15, 0],
                                rotateX: [0, 10, -10, 0],
                                scale: [1.1, 1.15, 1.1]
                            } : { // default / lifescience
                                scale: [1.05, 1.15, 1.05],
                                y: [15, -15],
                                filter: ["brightness(0.7)", "brightness(0.9)", "brightness(0.7)"]
                            }
                        }
                        transition={{
                            duration: industry.id === 'telecom' ? 4 : industry.id === 'smartcity' ? 30 : industry.id === 'igaming' ? 12 : 18,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-x-0 -top-20 -bottom-20 z-0 scale-[1.15]"
                    >
                        <img
                            src={industry.image}
                            alt={industry.title}
                            loading="lazy"
                            className={cn(
                                "w-full h-full object-cover transition-all duration-1000 blur-0 group-hover:scale-110 brightness-[0.75] group-hover:brightness-100"
                            )}
                        />
                        {/* Deep All-Around Blending Mask - Refined for Smoother Transition */}
                        <div
                            className="absolute inset-0 z-10 pointer-events-none"
                            style={{
                                background: 'radial-gradient(circle at center, transparent 20%, rgba(0,0,0,0.4) 60%, black 95%)',
                                mixBlendMode: 'multiply'
                            }}
                        />
                        <div className={cn("absolute inset-0 bg-gradient-to-br opacity-20 mix-blend-overlay transition-opacity group-hover:opacity-10", industry.color)}></div>
                    </motion.div>

                    {/* Final Bottom Edge Softener */}
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-20"></div>
                </div>

                <motion.div
                    variants={STAGGER_CONTAINER}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="order-2 lg:order-2 lg:col-span-7 space-y-8 lg:pl-12"
                >
                    <div className="space-y-4">
                        <motion.div
                            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
                            className="flex items-center gap-3 text-brand-amber font-heading font-semibold tracking-[0.3em] uppercase text-[10px]"
                        >
                            <Icon className="w-4 h-4" />
                            <span>Industrial Expertise</span>
                        </motion.div>

                        <div className="flex flex-col">
                            <motion.span
                                variants={{ hidden: { opacity: 0 }, visible: { opacity: 0.4 } }}
                                className="text-[10px] font-black uppercase tracking-[0.4em] text-brand-amber mb-2"
                            >
                                {industry.years} YEARS SUCCESS
                            </motion.span>
                            <motion.h2
                                variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                className="text-4xl md:text-5xl lg:text-6xl xl:text-5xl 2xl:text-7xl font-heading font-light leading-[0.9] tracking-tight whitespace-normal break-words md:whitespace-nowrap pr-4 md:pr-10"
                            >
                                {industry.title}
                            </motion.h2>
                        </div>
                    </div>

                    <motion.p
                        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                        className="text-lg text-gray-400 leading-relaxed max-w-lg font-body"
                    >
                        {industry.description}
                    </motion.p>

                    <motion.div
                        variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                        className="flex flex-wrap gap-3 pt-6"
                    >
                        {['Strategic Growth', 'Tech Leadership', 'Global Teams'].map((tag, i) => (
                            <span key={i} className="px-5 py-2 glass-card rounded-full text-[9px] uppercase tracking-widest text-gray-300 font-bold hover:text-white hover:border-brand-amber/40 transition-all cursor-default">
                                {tag}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Pouring effect bridge */}
            <div className="absolute bottom-0 h-px w-1/2 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </motion.div>
    );
}
