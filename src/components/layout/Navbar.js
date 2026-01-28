import React from 'react';
import { Linkedin } from 'lucide-react';
import { cn } from '../../utils';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 px-6 py-6 transition-all duration-500">
            <div className="max-w-7xl mx-auto flex justify-between items-center glass-card px-8 py-4 rounded-full">
                <div className="flex flex-col">
                    <span className="text-xl md:text-2xl font-heading font-black tracking-tight text-white leading-none mb-1">TONĆI KUČIĆ</span>
                    <span className="text-[8px] md:text-[10px] text-gray-500 uppercase tracking-[0.3em] font-black opacity-70">
                        Engineering Executive • Business Value & Strategy
                    </span>
                </div>

                <div className="hidden lg:flex gap-10">
                    {['Leadership', 'Industries', 'Experience', 'Stacks'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 hover:text-brand-amber transition-all duration-300 relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-brand-amber transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </div>

                <a
                    href="https://www.linkedin.com/in/toncikucic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 bg-white text-black text-[10px] font-black rounded-full hover:bg-brand-amber transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
                >
                    CONNECT <Linkedin className="w-3.5 h-3.5" strokeWidth={3} />
                </a>
            </div>
        </nav>
    );
}
