import React, { useState, useEffect } from 'react';
import {
  Download,
  Menu,
  X,
  Code2,
  Database,
  Layout,
  Terminal,
  Cpu,
  Globe,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  GraduationCap,
  Briefcase,
  ArrowUp,
  User,
  Sparkles,
  Layers,
  ChevronRight,
  Trophy,
  Award,
  Zap,
  Star
} from 'lucide-react';
import { TextField, Button, IconButton } from '@mui/material';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you for reaching out! Your message has been sent.');
    setFormData({ name: '', email: '', message: '' });
  };

  // Data Structures
  const skills = [
    { name: 'React.js', category: 'frontend', level: 90, icon: <Layout className="text-cyan-400" size={20} /> },
    { name: 'JavaScript (ES6+)', category: 'frontend', level: 88, icon: <Code2 className="text-yellow-400" size={20} /> },
    { name: 'Tailwind CSS', category: 'frontend', level: 92, icon: <Layout className="text-cyan-300" size={20} /> },
    { name: 'HTML5 / CSS3', category: 'frontend', level: 95, icon: <Layout className="text-orange-400" size={20} /> },
    { name: 'Node.js', category: 'backend', level: 82, icon: <Terminal className="text-green-400" size={20} /> },
    { name: 'Express.js', category: 'backend', level: 80, icon: <Terminal className="text-gray-300" size={20} /> },
    { name: 'Python', category: 'backend', level: 85, icon: <Code2 className="text-blue-400" size={20} /> },
    { name: 'REST APIs', category: 'backend', level: 88, icon: <Globe className="text-indigo-400" size={20} /> },
    { name: 'MongoDB', category: 'database', level: 78, icon: <Database className="text-emerald-400" size={20} /> },
    { name: 'SQL', category: 'database', level: 75, icon: <Database className="text-blue-500" size={20} /> },
    { name: 'RAG & Vector Search', category: 'ai', level: 82, icon: <Cpu className="text-purple-400" size={20} /> },
    { name: 'Git & GitHub', category: 'tools', level: 90, icon: <Github className="text-red-400" size={20} /> },
    { name: 'Figma', category: 'tools', level: 85, icon: <Layers className="text-pink-400" size={20} /> },
  ];

  const achievements = [
    {
      title: 'Full Stack & AI Web Integration',
      description: 'Successfully built and deployed production-ready applications incorporating Gemini API, FAISS Vector Search, and custom RAG implementations.',
      icon: <Zap className="text-amber-400" size={24} />,
      metric: 'RAG & Vector DB'
    },
    {
      title: 'Responsive UI Design Systems',
      description: 'Architected multiple responsive Figma design sets including full-scale music system interfaces and dark glassmorphic layouts.',
      icon: <Star className="text-cyan-400" size={24} />,
      metric: '10+ Layout Sets'
    },
    {
      title: 'Algorithmic Optimization',
      description: 'Engineered high-performance backend pipelines and optimized REST API endpoint response times for web client integrations.',
      icon: <Trophy className="text-emerald-400" size={24} />,
      metric: 'High Efficiency'
    },
    {
      title: 'End-to-End Application Deployment',
      description: 'Deployed multiple scalable React and Node.js applications with automated continuous integration and continuous delivery.',
      icon: <Award className="text-purple-400" size={24} />,
      metric: 'Vercel / Cloud'
    }
  ];

  const projects = [
    {
      title: 'AI Resume Analyser',
      description: 'Interactive resume parsing and analysis platform matching user skill sets against targeted job descriptions with automated optimization feedback.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1200&auto=format&fit=crop',
      tags: ['React.js', 'Node.js', 'Tailwind CSS', 'OpenAI / Gemini API'],
      github: 'https://github.com/dwivediansh598-hue',
      demo: 'https://portfolio-ill5-ch2bvdtvt-ansh07.vercel.app',
      category: 'ai'
    },
    {
      title: 'SupportX',
      description: 'An AI customer agent utilizing Retrieval-Augmented Generation (RAG), FAISS vector embeddings, and Gemini API to deliver rapid dynamic support.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop',
      tags: ['React', 'Python', 'RAG', 'FAISS', 'Gemini API'],
      github: 'https://github.com/dwivediansh598-hue',
      demo: 'https://portfolio-ill5-ch2bvdtvt-ansh07.vercel.app',
      category: 'ai'
    },
    {
      title: 'Modern Design Studio',
      description: 'Comprehensive UI/UX design suite featuring modern glassmorphism components, dark gradient themes, and custom application screen structures.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop',
      tags: ['Figma', 'UI/UX Design', 'Glassmorphism', 'Tailwind CSS'],
      github: 'https://github.com/dwivediansh598-hue',
      demo: 'https://portfolio-ill5-ch2bvdtvt-ansh07.vercel.app',
      category: 'design'
    }
  ];

  const experiences = [
    {
      role: 'Full Stack Developer & UI Designer',
      company: 'Freelance / Projects',
      period: '2024 - Present',
      description: 'Designing and deploying responsive user interfaces in Figma and React. Building backend APIs and integrating AI-driven workflows like RAG and vector databases.'
    },
    {
      role: 'Frontend Development Collaborator',
      company: 'Client Projects',
      period: '2023 - 2024',
      description: 'Engineered web interface frames, glassmorphic layouts, component libraries, and integrated dynamic REST API pipelines for web platforms.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology / Science in Computer Science',
      institution: 'University / Institute',
      period: '2021 - 2025',
      description: 'Focused on software development, algorithmic complexity analysis, database management systems, and full-stack architecture.'
    }
  ];

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#080d1a] text-white font-sans selection:bg-cyan-500 selection:text-white relative">
      {/* =========================================
          1. NAVBAR (Matches Deployed Screenshot)
         ========================================= */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080d1a]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-cyan-400 hover:opacity-90 transition-opacity">
            Ansh Dwivedi
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-cyan-400 transition-colors">Achievements</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-white/30 px-4 py-1.5 rounded text-sm font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition-all uppercase tracking-wide"
            >
              <Download size={16} />
              RESUME
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col space-y-4 px-2">
            <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">Home</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">About</a>
            <a href="#skills" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">Skills</a>
            <a href="#achievements" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">Achievements</a>
            <a href="#projects" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">Projects</a>
            <a href="#experience" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">Experience</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-cyan-400">Contact</a>
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center justify-center gap-2 border border-white/30 px-4 py-2 rounded text-sm font-semibold text-white hover:border-cyan-400 hover:text-cyan-400 transition-all uppercase"
            >
              <Download size={16} />
              RESUME
            </a>
          </div>
        )}
      </nav>

      {/* =========================================
          2. HERO SECTION (Matches Deployed Screenshot)
         ========================================= */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20 relative">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
            Hi, I'm <span className="bg-gradient-to-r from-cyan-400 to-teal-300 bg-clip-text text-transparent">Ansh Dwivedi</span>
          </h1>

          <p className="text-xl sm:text-2xl font-medium text-gray-200 tracking-wide">
            Full Stack Developer
          </p>

          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Passionate about building scalable web applications with modern technologies. Experienced in developing full-stack solutions from concept to deployment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded text-sm tracking-wider uppercase transition-all shadow-lg hover:shadow-cyan-500/20"
            >
              VIEW MY WORK
            </a>

            <a
              href="#contact"
              className="border border-white/20 hover:border-white/50 text-white font-semibold px-6 py-3 rounded text-sm tracking-wider uppercase transition-all bg-white/5 hover:bg-white/10"
            >
              GET IN TOUCH
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white font-semibold px-6 py-3 rounded text-sm tracking-wider uppercase transition-all bg-white/5 hover:bg-white/10"
            >
              <Download size={16} />
              DOWNLOAD RESUME
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* =========================================
          3. ABOUT SECTION
         ========================================= */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#0a1124]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">About Me</h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I specialize in <span className="text-cyan-400 font-semibold">Architecting Modern Web & Intelligent AI Architectures</span>, building high-performance full-stack applications, scalable backend APIs, and vector-driven retrieval systems.
              </p>
              <p>
                My technical journey centers around web development and modern AI integration. From crafting high-performance glassmorphic user interfaces to developing retrieval systems powered by RAG and Vector DBs, I focus on delivering end-to-end software solutions.
              </p>
              <p>
                When I am not coding, I am experimenting with interactive UI designs in Figma, analyzing complex data structures, or expanding my understanding of cloud architectures.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-cyan-400 font-bold text-xl">10+</h4>
                  <p className="text-sm text-gray-400">Projects Completed</p>
                </div>
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h4 className="text-cyan-400 font-bold text-xl">Full Stack</h4>
                  <p className="text-sm text-gray-400">Specialization</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 p-8 rounded-2xl border border-white/10 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <User className="text-cyan-400" /> Key Focus Areas
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-cyan-400 shrink-0 mt-1" size={18} />
                  <span><strong>Frontend Engineering:</strong> React.js, Tailwind CSS, responsive single-page applications.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-cyan-400 shrink-0 mt-1" size={18} />
                  <span><strong>Backend & APIs:</strong> Node.js, Express, RESTful API architecture, Python pipelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-cyan-400 shrink-0 mt-1" size={18} />
                  <span><strong>AI Solutions:</strong> RAG frameworks, FAISS vector search, LLM integrations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <ChevronRight className="text-cyan-400 shrink-0 mt-1" size={18} />
                  <span><strong>UI/UX Design:</strong> Figma prototyping, dark gradient themes, glassmorphism layout sets.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          4. SKILLS SECTION
         ========================================= */}
      <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">Technical Skills</h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
            <p className="text-gray-400 mt-4">Technologies and tools I work with daily</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/10 rounded-lg">{skill.icon}</div>
                    <span className="font-semibold text-white">{skill.name}</span>
                  </div>
                  <span className="text-sm text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/50 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-teal-400 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          5. KEY ACHIEVEMENTS SECTION (Added Back)
         ========================================= */}
      <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#0a1124]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">Key Achievements</h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
            <p className="text-gray-400 mt-4">Milestones and highlights from my development work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((item, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 flex items-start gap-6 group hover:-translate-y-1"
              >
                <div className="p-4 bg-white/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    <span className="text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 rounded-full font-medium">
                      {item.metric}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          6. FEATURED PROJECTS SECTION (With Images)
         ========================================= */}
      <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-wide">Featured Projects</h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mt-4 rounded-full" />
          </div>

          {/* Project Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {['all', 'ai', 'design'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider transition-all ${
                  activeTab === category
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Cards with Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080d1a] via-transparent to-transparent opacity-80" />
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <Sparkles className="text-cyan-400" size={18} />
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 px-2.5 py-1 rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div className="p-6 pt-0 flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors ml-auto"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          7. EXPERIENCE SECTION
         ========================================= */}
      <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#0a1124]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg mr-4 shadow-lg">
              <Briefcase className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white">Experience</h3>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-lg"
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                  <span className="text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 px-3 py-1 rounded-full font-semibold">
                    {exp.period}
                  </span>
                </div>
                <p className="text-cyan-300 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          8. EDUCATION SECTION
         ========================================= */}
      <section id="education" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mr-4 shadow-lg">
              <GraduationCap className="text-white" size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 sm:p-8 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 shadow-lg"
              >
                <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                <p className="text-cyan-300 mb-2">{edu.institution}</p>
                <p className="text-sm text-gray-400 mb-3">{edu.period}</p>
                <p className="text-gray-300">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          9. CONTACT SECTION
         ========================================= */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 border-t border-white/5 bg-[#0a1124]">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center tracking-wide">Get In Touch</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto -mt-4 mb-12 rounded-full" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <a
                        href="mailto:dwivediansh598@gmail.com"
                        className="text-white hover:text-cyan-300 transition-colors font-medium"
                      >
                        dwivediansh598@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow">
                      <Github className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">GitHub</p>
                      <a
                        href="https://github.com/dwivediansh598-hue"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-300 transition-colors font-medium"
                      >
                        github.com/dwivediansh598-hue
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg shadow">
                      <Linkedin className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">LinkedIn</p>
                      <a
                        href="https://www.linkedin.com/in/ansh-dwivedi07/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-cyan-300 transition-colors font-medium"
                      >
                        linkedin.com/in/ansh-dwivedi07
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-gray-300 mb-4 font-medium">Follow me on social media</p>
                <div className="flex gap-4">
                  <IconButton
                    component="a"
                    href="https://github.com/dwivediansh598-hue"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      '&:hover': { backgroundColor: 'rgba(14, 165, 233, 0.5)' }
                    }}
                  >
                    <Github />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/ansh-dwivedi07/"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'white',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      '&:hover': { backgroundColor: 'rgba(14, 165, 233, 0.5)' }
                    }}
                  >
                    <Linkedin />
                  </IconButton>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <TextField
                  fullWidth
                  label="Your Name"
                  variant="outlined"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                      '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                      '&.Mui-focused fieldset': { borderColor: '#0ea5e9' },
                    },
                    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#0ea5e9' },
                  }}
                />

                <TextField
                  fullWidth
                  label="Your Email"
                  type="email"
                  variant="outlined"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                      '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                      '&.Mui-focused fieldset': { borderColor: '#0ea5e9' },
                    },
                    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#0ea5e9' },
                  }}
                />

                <TextField
                  fullWidth
                  label="Your Message"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: 'white',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                      '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.5)' },
                      '&.Mui-focused fieldset': { borderColor: '#0ea5e9' },
                    },
                    '& .MuiInputLabel-root': { color: 'rgba(255,255,255,0.7)' },
                    '& .MuiInputLabel-root.Mui-focused': { color: '#0ea5e9' },
                  }}
                />

                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{
                    background: 'linear-gradient(to right, #0ea5e9, #2563eb)',
                    fontWeight: 'bold',
                    py: 1.5,
                    '&:hover': { background: 'linear-gradient(to right, #0284c7, #1d4ed8)' }
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          10. FOOTER
         ========================================= */}
      <footer className="bg-[#050812] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            © 2026 Ansh Dwivedi. Built with React, Tailwind CSS, and Material UI.
          </p>
        </div>
      </footer>

      {/* =========================================
          11. SCROLL TO TOP BUTTON
         ========================================= */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110 z-50 text-white"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
}
