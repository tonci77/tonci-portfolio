import React, { useState, useEffect } from 'react';
import { Award, Linkedin, BookOpen, ArrowUpRight } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeExp, setActiveExp] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      year: "2024–Present",
      title: "Head of Engineering",
      company: "Casumo",
      description: "Leading product delivery and organizational transformation for gambling platform. Driving business growth through team excellence and technical innovation across distributed operations.",
      focus: ["Business Growth", "Team Leadership", "Product Delivery"]
    },
    {
      year: "2022–2024",
      title: "Manager / Team Lead",
      company: "Studion",
      description: "Co-led 36-person engineering organization. Established engineering standards, onboarding programs, and built internship academy from ground up.",
      focus: ["Team Scaling", "Engineering Culture", "Mentorship Programs"]
    },
    {
      year: "2023–2025",
      title: "Supervisory Board Member",
      company: "Parkovi i Nasadi d.o.o.",
      description: "Strategic governance and advisory for municipal infrastructure organization.",
      focus: ["Governance", "Strategic Planning", "Public Sector"]
    },
    {
      year: "2020–2025",
      title: "IT Consultant",
      company: "TONCIK Consulting & Solutions",
      description: "Architectural evaluations, ITS consulting, and Smart City functional design. Working with municipalities and enterprises on digital transformation.",
      focus: ["Architecture Review", "Smart Cities", "Digital Strategy"]
    },
    {
      year: "2020–2022",
      title: "Solution Architect",
      company: "Hrvatski Telekom",
      description: "Built R&D office. Delivered enterprise telecom product catalog, rule engine and order capture modules.",
      focus: ["R&D Setup", "Telecom Systems", "Product Development"]
    },
    {
      year: "2018–2020",
      title: "Team Lead",
      company: "Fortuna Entertainment",
      description: "Led engineering team for virtual gaming systems in regulated gambling market.",
      focus: ["Team Leadership", "Compliance", "Performance"]
    },
    {
      year: "2004–2018",
      title: "Solution Architect",
      company: "Kron d.o.o.",
      description: "Custom telecom solutions, process optimization, and senior architecture leadership across 14 years. Foundation of technical expertise.",
      focus: ["Telecom Solutions", "Process Engineering", "Architecture"]
    }
  ];

  const expertise = [
    {
      category: "Leadership & Strategy",
      items: [
        "Engineering team building and scaling",
        "Technology strategy and roadmap planning",
        "Cross-functional delivery and stakeholder management",
        "Digital transformation initiatives"
      ]
    },
    {
      category: "Technology Enablement",
      items: [
        "Enterprise architecture and system design",
        "Cloud infrastructure (AWS, Kubernetes, Docker)",
        "Distributed systems (Kafka, RabbitMQ)",
        "Database architecture (Oracle, PostgreSQL, MySQL)"
      ]
    },
    {
      category: "Industries",
      items: [
        "Telecommunications and network systems",
        "Gambling and gaming platforms",
        "Smart City, Business Process digitalization and municipal infrastructure",
        "Life sciences and healthcare technology"
      ]
    }
  ];

  const technologies = {
    "Cloud & Infrastructure": ["AWS", "Kubernetes", "Docker"],
    "Distributed Systems": ["Kafka", "RabbitMQ"],
    "Databases": ["Oracle", "PostgreSQL", "MySQL", "MSSQL"],
    "Development": ["Java", ".NET", "Spring Boot", "ELK Stack"]
  };

  const parallaxOffset = scrollY * 0.3;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        <div
          className="absolute top-20 right-0 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${-parallaxOffset * 0.5}px)` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-xl font-light tracking-wider">TONĆI KUČIĆ</h1>
              <span className="text-xs text-gray-500 tracking-wide">Business Growth Leadership</span>
            </div>
            <div className="hidden md:flex gap-8 text-sm">
              {[
                  { name: 'Experience', id: 'experience' },
                  { name: 'Expertise', id: 'expertise' },
                  { name: 'Contact', id: 'contact' }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group cursor-pointer"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div className="grid lg:grid-cols-5 gap-16 items-center">
              <div className="lg:col-span-3 space-y-8">
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full">
                    <span className="text-sm text-cyan-400 tracking-wide">Available for Leadership Opportunities</span>
                  </div>

                  <h2 className="text-6xl lg:text-7xl font-light leading-tight">
                    <span className="font-normal text-cyan-400">Driving</span>
                    <br />
                    business growth.
                  </h2>
                </div>

                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                  20+ years scaling organizations and driving measurable business impact across telecommunications, gambling, life sciences, and smart city sectors. Leading transformations through high-performance delivery teams, strategic execution, and results-focused leadership.
                </p>

                <div className="grid grid-cols-3 gap-6 pt-6">
                  <div>
                    <div className="text-3xl font-light text-cyan-400 mb-1">20+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Years</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-cyan-400 mb-1">4</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Sectors</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light text-cyan-400 mb-1">40+</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wide">Team Size</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="https://www.linkedin.com/in/toncikucic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 border border-white/20 rounded-sm hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2"
                  >
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="lg:col-span-2 relative max-w-md mx-auto lg:mx-0">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

                  <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden border border-white/10">
                    <img
                      src={process.env.PUBLIC_URL + "/images/tkucic_profile.png"}
                      alt="Tonći Kučić"
                      className="w-full aspect-square object-cover"
                    />

                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/90 to-transparent">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-xs text-gray-400 uppercase tracking-wide">Currently at</span>
                      </div>
                      <p className="text-xl font-light">Casumo</p>
                      <p className="text-cyan-400 text-sm">Head of Engineering</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="relative py-8 z-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-20">
              <h3 className="text-4xl font-light mb-4">Career Path</h3>
              <p className="text-gray-400 text-lg">Two decades of building, leading, and delivering.</p>
            </div>

            <div className="space-y-1">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveExp(idx)}
                  className={`group relative transition-all duration-300 cursor-pointer ${activeExp === idx ? 'bg-white/5' : 'hover:bg-white/[0.02]'}`}
                >
                  <div className="grid lg:grid-cols-12 gap-8 p-8 items-start">
                    <div className="lg:col-span-2">
                      <span className={`text-sm font-medium tracking-wide ${activeExp === idx ? 'text-cyan-400' : 'text-gray-500'} transition-colors`}>
                        {exp.year}
                      </span>
                    </div>

                    <div className="lg:col-span-4">
                      <h4 className={`text-2xl font-light mb-1 ${activeExp === idx ? 'text-white' : 'text-gray-300'} transition-colors`}>
                        {exp.title}
                      </h4>
                      <p className="text-gray-500">{exp.company}</p>
                    </div>

                    <div className="lg:col-span-6">
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.focus.map((item, i) => (
                          <span
                            key={i}
                            className={`text-xs px-3 py-1 rounded-full border transition-colors ${
                              activeExp === idx
                                ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400'
                                : 'bg-white/5 border-white/10 text-gray-500'
                            }`}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 transition-opacity duration-300 ${activeExp === idx ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise Areas */}
        <section id="expertise" className="relative py-8 z-10 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-20">
              <h3 className="text-4xl font-light mb-4">Core Expertise</h3>
              <p className="text-gray-400 text-lg">Strategic capabilities that deliver measurable results.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {expertise.map((area, idx) => (
                <div key={idx} className="bg-white/[0.02] border border-white/5 p-8 hover:border-cyan-400/30 transition-all duration-300">
                  <h4 className="text-xl font-light mb-6 text-cyan-400">{area.category}</h4>
                  <ul className="space-y-3">
                    {area.items.map((item, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-start gap-3">
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="relative py-8 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-20">
              <h3 className="text-4xl font-light mb-4">Technical Foundation</h3>
              <p className="text-gray-400 text-lg">Core technologies across cloud, data, and enterprise systems.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(technologies).map(([category, techs], idx) => (
                <div key={idx} className="space-y-4">
                  <h4 className="text-sm text-gray-500 uppercase tracking-wider font-medium">{category}</h4>
                  <div className="space-y-2">
                    {techs.map((tech, i) => (
                      <div
                        key={i}
                        className="px-4 py-3 bg-white/[0.02] border border-white/5 hover:border-cyan-400/30 hover:bg-white/[0.04] transition-all duration-300 text-sm text-gray-300"
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Publications */}
        <section className="relative py-8 z-10 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-3xl font-light mb-8">Education & Credentials</h3>

                <div className="space-y-8">
                  <div className="border-l-2 border-cyan-400/30 pl-6">
                    <Award className="w-8 h-8 mb-4 text-cyan-400" />
                    <h4 className="text-xl font-light mb-2">Master of Science in Electrical Engineering</h4>
                    <p className="text-gray-500">FESB Split, 1996–2002</p>
                  </div>

                  <div className="border-l-2 border-white/10 pl-6">
                    <h4 className="text-lg font-light mb-4 text-gray-400">Certifications</h4>
                    <ul className="space-y-2 text-sm text-gray-500">
                      <li>• Leadership Academy</li>
                      <li>• CTO Career Guide</li>
                      <li>• Medable DCT Suite</li>
                      <li>• Influence & Leadership Nano Tips</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-light mb-8">Publication</h3>

                <div className="bg-gradient-to-br from-white/[0.02] to-transparent border border-white/5 p-8 hover:border-cyan-400/30 transition-all duration-300">
                  <a
                    href="https://www.amazon.com/Peak-Performance-Mindset-Tools-Managers-ebook/dp/B0DKTV2WBT"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <BookOpen className="w-8 h-8 mb-6 text-cyan-400 hover:scale-110 transition-transform duration-300" />
                  </a>
                  <h4 className="text-xl font-light mb-3">Peak Performance: Mindset Tools for Managers</h4>
                  <p className="text-gray-400 mb-4">Co-author</p>
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-gray-500 mb-2">Chapter Contribution:</p>
                    <p className="text-gray-400 italic">"Are You a Shark, a Whale, or a Turtle?"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-8 z-10">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h3 className="text-5xl font-light mb-6">Let's Connect</h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Let's discuss how I can accelerate your organization's growth.
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://www.linkedin.com/in/toncikucic"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-medium hover:bg-cyan-400 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5" />
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative border-t border-white/5 py-12 z-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
              <div>© 2025 Tonći Kučić. All rights reserved.</div>
              <div className="flex gap-6">
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  export default App;