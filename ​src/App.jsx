import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, Code2, 
  Terminal, BookOpen, Users, Phone 
} from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    { name: 'JavaScript (ES6+)', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'HTML5 / CSS3', category: 'frontend' },
    { name: 'Bootstrap', category: 'frontend' },
    { name: 'Python', category: 'backend' },
    { name: 'Flask', category: 'backend' },
    { name: 'Java', category: 'backend' },
    { name: 'SQL', category: 'database' },
    { name: 'DBMS', category: 'database' },
    { name: 'Pandas / NumPy', category: 'data' },
    { name: 'Data Structures & Algorithms', category: 'core' },
    { name: 'Git & GitHub', category: 'tools' },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full backdrop-blur-md bg-slate-950/80 border-b border-slate-800 z-50 px-6 py-4 flex justify-between items-center">
        <span className="text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
          PALAK.DEV
        </span>
        <div className="space-x-6 text-sm font-medium text-slate-400 hidden md:block">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition">Experience</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 max-w-5xl mx-auto flex flex-col justify-center min-h-screen">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold w-fit mb-6">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          Available for MERN / Web Dev Roles
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-500">Palak Shukla</span>.
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Full-Stack Web Developer & CS Undergrad building data-driven platforms, real-time analytics engines, and responsive web applications.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition shadow-lg shadow-cyan-500/20">
            View Projects
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 font-semibold transition">
            Get In Touch
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400 flex items-center gap-2">
          <BookOpen className="w-6 h-6" /> About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 text-slate-300 leading-relaxed space-y-4">
            <p>
              I am a Computer Science & Engineering student at East West College of Engineering (VTU), Bengaluru, expected to graduate in June 2027[span_0](start_span)[span_0](end_span).
            </p>
            <p>
              My focus centers on solving real-world challenges through code—whether that's standardizing multi-platform e-commerce pricing data using Python and SQL[span_1](start_span)[span_1](end_span) or delivering fast, location-aware emergency safety alerts via the Geolocation API[span_2](start_span)[span_2](end_span).
            </p>
          </div>
          <div className="p-6 rounded-xl border border-slate-800 bg-slate-900/50 space-y-3">
            <div className="text-sm text-slate-400">Education</div>
            <div className="font-semibold text-slate-200">B.E. in Computer Science & Engineering[span_3](start_span)[span_3](end_span)</div>
            <div className="text-xs text-slate-500">East West College of Engineering (VTU) • 2023 - 2027[span_4](start_span)[span_4](end_span)</div>
          </div>
        </div>
      </section>

      {/* Interactive Tech Stack */}
      <section id="skills" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-bold mb-6 text-cyan-400 flex items-center gap-2">
          <Code2 className="w-6 h-6" /> Technical Stack
        </h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {['all', 'frontend', 'backend', 'database', 'data', 'tools'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold capitalize transition ${
                activeTab === tab 
                  ? 'bg-cyan-500 text-slate-950' 
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {filteredSkills.map((skill, idx) => (
            <div key={idx} className="p-4 rounded-xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/50 transition">
              <span className="text-sm font-medium text-slate-200">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400 flex items-center gap-2">
          <Terminal className="w-6 h-6" /> Featured Projects
        </h2>

        <div className="space-y-8">
          
          {/* Project 1 */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Analytics Platform</span>
                <h3 className="text-2xl font-bold text-slate-100 mt-1">Fairlytics</h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">Mar 2026 – Present[span_5](start_span)[span_5](end_span)</span>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              AI-driven dynamic pricing platform that aggregates, cleans, and standardizes product pricing data across Amazon, Flipkart, Nykaa, Myntra, Ajio, and Meesho to detect fake discounts and display authentic pricing trends[span_6](start_span)[span_6](end_span).
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['Flask', 'Pandas', 'NumPy', 'SQL', 'Python'].map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono">{t}</span>
              ))}
            </div>
            <div className="flex gap-4 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1 cursor-not-allowed opacity-60">
                <Github className="w-4 h-4" /> Repository (Coming Soon)
              </span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30 hover:border-slate-700 transition">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Web Application</span>
                <h3 className="text-2xl font-bold text-slate-100 mt-1">Real-Time Crime Alert Web Application</h3>
              </div>
              <span className="text-xs text-slate-500 font-mono">Sep 2025 – Jan 2026[span_7](start_span)[span_7](end_span)</span>
            </div>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              Mobile-first emergency warning web app leveraging the Geolocation API and Bootstrap to provide localized real-time crime and safety alerts optimized for fast execution across low-bandwidth networks[span_8](start_span)[span_8](end_span).
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {['JavaScript', 'HTML5', 'Bootstrap', 'Geolocation API', 'Git'].map((t, i) => (
                <span key={i} className="px-3 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-mono">{t}</span>
              ))}
            </div>
            <div className="flex gap-4 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1 cursor-not-allowed opacity-60">
                <Github className="w-4 h-4" /> Repository (Coming Soon)
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership & Community */}
      <section id="experience" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-bold mb-8 text-cyan-400 flex items-center gap-2">
          <Users className="w-6 h-6" /> Leadership & Community
        </h2>
        <div className="p-8 rounded-2xl border border-slate-800 bg-slate-900/30">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-100">Social Media & Community Lead[span_9](start_span)[span_9](end_span)</h3>
            <span className="text-xs text-slate-500 font-mono">2024 – Present[span_10](start_span)[span_10](end_span)</span>
          </div>
          <div className="text-cyan-400 text-sm font-medium mb-4">OSCode EWCE (Official Campus Tech Club)[span_11](start_span)[span_11](end_span)</div>
          <ul className="list-disc list-inside text-slate-400 text-sm space-y-2 leading-relaxed">
            <li>Managed digital channels and outreach for the campus developer community[span_12](start_span)[span_12](end_span).</li>
            <li>Designed campaigns that boosted hackathon and technical workshop attendance by 25%[span_13](start_span)[span_13](end_span).</li>
            <li>Co-organized coding bootcamps and hands-on version control workshops[span_14](start_span)[span_14](end_span).</li>
          </ul>
        </div>
      </section>

      {/* Contact Footer */}
      <footer id="contact" className="py-20 px-6 max-w-5xl mx-auto border-t border-slate-900 text-center">
        <h2 className="text-3xl font-bold mb-4 text-slate-100">Let's Connect</h2>
        <p className="text-slate-400 max-w-md mx-auto mb-8 text-sm">
          Interested in working together or reviewing my project code? Feel free to reach out directly.
        </p>
        <div className="flex justify-center gap-6 mb-12">
          <a href="mailto:Palakshukla9876@gmail.com" className="p-3 rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition">
            <Mail className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/palak-shukla-ab4155401/" target="_blank" rel="noreferrer" className="p-3 rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="tel:+917760263883" className="p-3 rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/50 transition">
            <Phone className="w-5 h-5" />
          </a>
        </div>
        <p className="text-xs text-slate-600">© 2026 Palak Shukla. Built with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}
