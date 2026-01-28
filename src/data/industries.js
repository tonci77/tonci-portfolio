import { Shield, Globe, Zap, Cpu } from 'lucide-react';

const publicUrl = process.env.PUBLIC_URL || '';

export const industries = [
    {
        id: 'igaming',
        title: 'iGaming',
        subtitle: 'High-Performance Platforms',
        description: 'Leading digital transformation in regulated gambling markets. Architecting systems for scale, compliance, and user engagement for Tier-1 operators.',
        image: `${publicUrl}/images/igaming.png`,
        color: 'from-yellow-500/20 to-amber-600/20',
        icon: Shield,
        bgText: 'GAMING',
        years: '4+'
    },
    {
        id: 'telecom',
        title: 'Telecommunications',
        subtitle: 'Global Connectivity',
        description: 'Delivering enterprise-scale product catalogs and rule engines for major telecommunications providers like Hrvatski Telekom.',
        image: `${publicUrl}/images/telecom.png`,
        color: 'from-blue-500/20 to-purple-500/20',
        icon: Globe,
        bgText: 'CONNECT',
        years: '16'
    },
    {
        id: 'lifescience',
        title: 'Life Sciences',
        subtitle: 'Future of Healthcare',
        description: 'Innovating at the intersection of technology and biology. Building systems for clinical trials and decentralized healthcare solutions.',
        image: `${publicUrl}/images/lifescience.png`,
        color: 'from-emerald-500/20 to-teal-500/20',
        icon: Zap,
        bgText: 'SCIENCE',
        years: '2'
    },
    {
        id: 'smartcity',
        title: 'Smart Cities',
        subtitle: 'Urban Innovation',
        description: 'Designing functional architectures for modern cities. Integrating IoT, mobility, and sustainable infrastructure for urban digital transformation.',
        image: `${publicUrl}/images/smartcity.png`,
        color: 'from-orange-500/20 to-red-500/20',
        icon: Cpu,
        bgText: 'URBAN',
        years: '7'
    }
];
