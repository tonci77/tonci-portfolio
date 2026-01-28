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

                <div className="absolute top-[5%] md:top-[6%] right-0 w-full md:w-[90%] h-[500px] md:h-[750px] pointer-events-none z-0 overflow-hidden">
                    <motion.video
                        autoPlay
                        loop
                        muted
                        playsInline
                        initial={{ opacity: 0, scale: 1.2 }}
                        whileInView={{ opacity: 1, scale: [1.2, 1.3, 1.2] }}
                        viewport={{ once: true }}
                        transition={{
                            opacity: { duration: 1.5 },
                            scale: { duration: 20, repeat: Infinity, ease: "linear" }
                        }}
                        className="w-full h-full object-cover md:object-contain object-center md:object-right-top mix-blend-screen opacity-80 md:opacity-100"
                        style={{
                            maskImage: 'radial-gradient(circle at center, black 30%, rgba(0,0,0,0.5) 70%, transparent 100%)',
                            WebkitMaskImage: 'radial-gradient(circle at center, black 30%, rgba(0,0,0,0.5) 70%, transparent 100%)'
                        }}
                    >
                        <source src={`${process.env.PUBLIC_URL || ''}/images/animated_domains.webm`} type="video/webm" />
                    </motion.video>

                    {/* Text Protection Overlay - Optimized for Mobile Readability */}
                    <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-b md:bg-gradient-to-r from-black via-black/60 md:via-black/90 to-transparent z-10" />

                    {/* Refined Cinematic Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10 md:hidden" />
                    <div className="hidden md:block absolute inset-0 bg-gradient-to-l from-black/0 via-black/5 to-black z-10" />
                    <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-black via-black/80 to-transparent z-20" />
                </div>

                {/* Industry Cards Container */}
                <motion.div
                    {...FADE_UP}
                    className="relative pt-24 md:pt-48 space-y-4"
                >
                    {industries.map((industry, idx) => (
                        <IndustryCard key={industry.id} industry={industry} index={idx} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
