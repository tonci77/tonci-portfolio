import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import IndustryCard from '../ui/IndustryCard';
import { industries } from '../../data/industries';
import { FADE_UP } from '../../constants/animations';

export default function Industries() {
    return (
        <section id="industries" className="py-12 bg-black relative overflow-hidden">
            {/* Visual Continuity Segment */}
            <div className="section-divider absolute top-0" />

            <div className="container mx-auto px-6">
                <SectionTitle subtitle="Strategic leadership across Telecommunications, Smart Cities, iGaming, and Life Sciences. Bridging the gap between deep technical architecture and executive business strategy to drive value in regulated, high-performance environments.">
                    Industrial Footprint
                </SectionTitle>

                <div className="hidden lg:block absolute top-[6%] right-0 w-[90%] h-[750px] pointer-events-none z-0 overflow-hidden">
                    <motion.img
                        src={`${process.env.PUBLIC_URL || ''}/images/animated_domains.gif`}
                        alt="Animated Domains"
                        initial={{ x: "5%", opacity: 0 }}
                        whileInView={{ x: 0, opacity: 0.98 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full h-full object-contain object-right-top mix-blend-screen scale-110 origin-top-right"
                        loading="lazy"
                        style={{
                            maskImage: 'radial-gradient(ellipse at 85% 30%, black 40%, rgba(0,0,0,0.5) 75%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(ellipse at 85% 30%, black 40%, rgba(0,0,0,0.5) 75%, transparent 100%)'
                        }}
                    />

                    {/* Text Protection Overlay - Deeper and wider for premium readability */}
                    <div className="absolute inset-y-0 left-0 w-3/4 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />

                    {/* Refined Cinematic Overlays - Smooth edge transitions */}
                    <div className="absolute inset-0 bg-gradient-to-l from-black/0 via-black/5 to-black z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/95 to-transparent z-20" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-64 bg-gradient-to-tl from-black via-black/80 to-transparent z-20" />
                </div>

                {/* Industry Cards Container */}
                <motion.div
                    {...FADE_UP}
                    className="relative pt-48 space-y-4"
                >
                    {industries.map((industry, idx) => (
                        <IndustryCard key={industry.id} industry={industry} index={idx} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
