import React from 'react';
import { motion } from 'framer-motion';
import { FADE_UP } from '../../constants/animations';

export default function SectionTitle({ children, subtitle }) {
    return (
        <div className="mb-24 relative z-10 text-center lg:text-left">
            <motion.h3
                {...FADE_UP}
                className="text-5xl md:text-6xl lg:text-8xl font-heading font-light mb-8 tracking-tighter leading-[0.9]"
            >
                {children}
            </motion.h3>
            {subtitle && (
                <motion.p
                    {...FADE_UP}
                    transition={{ ...FADE_UP.transition, delay: 0.1 }}
                    className="text-gray-400 text-lg md:text-2xl max-w-4xl mx-auto lg:mx-0 font-body font-light leading-relaxed opacity-80"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    );
}
