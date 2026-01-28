import React from 'react';
import { motion } from 'framer-motion';
import { FADE_UP, getMetricPulse, getColorPulse } from '../../constants/animations';

export default function Metrics() {
    const stats = [
        { value: "20", symbol: "+", label: "Years" },
        { value: "4", symbol: "", label: "Business Domains" },
        { value: "40", symbol: "+", label: "Leadership Scale" }
    ];

    return (
        <section className="relative z-20 py-8 px-6">
            <motion.div
                {...FADE_UP}
                className="max-w-6xl mx-auto"
            >
                <div className="glass-card rounded-[50px] px-8 md:px-24 py-10 relative overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                animate={getMetricPulse(index)}
                                className="flex flex-col items-center group cursor-default"
                            >
                                <div className="text-fluid-stats font-outfit font-light mb-2 tracking-tighter flex items-start">
                                    <motion.span animate={getColorPulse(index)}>
                                        {stat.value}
                                        {stat.symbol && (
                                            <span className="text-[0.5em] mt-2 ml-1 font-normal text-brand-amber">
                                                {stat.symbol}
                                            </span>
                                        )}
                                    </motion.span>
                                </div>
                                <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-gray-500 group-hover:text-brand-amber/80 transition-colors">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
