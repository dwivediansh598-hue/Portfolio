import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Menu, X, ExternalLink, Code, Palette, Smartphone, Database, Download, ArrowUp, Award, Briefcase, GraduationCap } from 'lucide-react';
import { Button, IconButton, Chip, TextField, LinearProgress } from '@mui/material';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React', category: 'Frontend', icon: Code, level: 90 },
    { name: 'JavaScript', category: 'Programming', icon: Code, level: 85 },
    { name: 'TypeScript', category: 'Programming', icon: Code, level: 80 },
    { name: 'HTML5', category: 'Frontend', icon: Code, level: 95 },
    { name: 'CSS3', category: 'Frontend', icon: Palette, level: 90 },
    { name: 'UI/UX Design', category: 'Design', icon: Palette, level: 75 },
    { name: 'SQL', category: 'Database', icon: Database, level: 80 },
  ];

  const experience = [
    {
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      period: '2023 - Present',
      description: 'Developed multiple full-stack applications including Netflix clone and E-commerce platform',
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'KIET Group of Institutions',
      period: '2023 - 2027',
      description: 'Computer Science & Engineering (Artificial Intelligence)',
    },
  ];

  const achievements = [
    { title: 'Netflix Clone', description: 'Built a fully functional streaming platform clone' },
    { title: 'E-Commerce Platform', description: 'Developed complete online shopping solution' },
    { title: 'UI/UX Design', description: 'Designed modern interior design studio interface' },
    { title: 'Modern Tech Stack', description: 'Proficient in React, TypeScript, and SQL' },
  ];

  const projects = [
    {
      title: 'Netflix Clone',
      description: 'A fully responsive Netflix clone featuring user authentication, movie browsing with dynamic search, trailer integration, and a modern UI replicating the Netflix experience. Built with React and integrated with TMDB API for real-time movie data.',
      tags: ['React', 'JavaScript', 'CSS3', 'TMDB API', 'Firebase'],
      image: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
      highlights: [
        'User authentication and personalized profiles',
        'Dynamic movie browsing with API integration',
        'Responsive design for all devices',
        'Trailer playback functionality'
      ]
    },
    {
      title: 'E-Commerce Website',
      description: 'Full-stack e-commerce platform with secure payment processing, product catalog management, shopping cart functionality, and order tracking. Includes admin dashboard for inventory and order management.',
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      highlights: [
        'Secure payment gateway integration',
        'Product search and filtering',
        'Shopping cart and checkout system',
        'Admin dashboard for management',
        'Order tracking and user accounts'
      ]
    },
    {
      title: 'Modern Interior Design Studio',
      description: 'Comprehensive UI/UX design project for a contemporary interior design studio. Features elegant layouts, sophisticated color palettes, and intuitive user flows showcasing portfolio work, services, and client testimonials.',
      tags: ['UI/UX Design', 'Figma', 'Prototyping', 'User Research'],
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=600&fit=crop',
      highlights: [
        'Modern and elegant design system',
        'Interactive prototypes and user flows',
        'Responsive layouts for all devices',
        'Client portfolio showcase design',
        'Comprehensive style guide creation'
      ]
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/src/imports/Ansh_Dwivedi__3_.pdf';
    link.download = 'Ansh_Dwivedi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been received. (Form submission will be connected to a backend)`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="size-full overflow-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-md z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Ansh Dwivedi
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-white transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-white transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-white transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white transition-colors">
                Contact
              </button>
            </div>

            <div className="hidden md:block">
              <Button
                variant="outlined"
                size="small"
                startIcon={<Download size={16} />}
                onClick={handleDownloadResume}
                sx={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  color: 'white',
                  '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }
                }}
              >
                Resume
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)} sx={{ color: 'white' }}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </IconButton>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-white/10">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                Contact
              </button>
              <button onClick={handleDownloadResume} className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-md transition-colors">
                Download Resume
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">Ansh Dwivedi</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Full Stack Developer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate about building scalable web applications with modern technologies. Experienced in developing full-stack solutions from concept to deployment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollToSection('projects')}
              sx={{
                background: 'linear-gradient(to right, #0ea5e9, #06b6d4)',
                '&:hover': { background: 'linear-gradient(to right, #0284c7, #0891b2)' }
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToSection('contact')}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white',
                '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Get In Touch
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Download />}
              onClick={handleDownloadResume}
              sx={{
                borderColor: 'rgba(255,255,255,0.3)',
                color: 'white',
                '&:hover': { borderColor: 'white', backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              Download Resume
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">About Me</h2>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">7+</div>
              <div className="text-sm text-gray-400">Technologies</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">3+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">2027</div>
              <div className="text-sm text-gray-400">Graduating In</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a results-driven Full Stack Developer with a strong foundation in modern web technologies including React,
              TypeScript, and SQL. I specialize in building responsive, user-centric applications that deliver exceptional
              performance and seamless user experiences.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With proven experience in developing production-ready applications such as a Netflix clone featuring real-time
              API integration and secure authentication, and a comprehensive e-commerce platform with payment gateway integration,
              I bring both technical expertise and problem-solving skills to every project. Additionally, my UI/UX design work on
              projects like the Modern Interior Design Studio demonstrates my ability to create elegant, user-centered interfaces
              that bridge the gap between aesthetics and functionality.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm passionate about writing clean, maintainable code and staying current with industry best practices.
              I thrive in collaborative environments and am committed to delivering solutions that drive business value
              and exceed user expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-400">{skill.category}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-300">
                      <span>Proficiency</span>
                      <span>{skill.level}%</span>
                    </div>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 8,
                        borderRadius: 4,
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        '& .MuiLinearProgress-bar': {
                          background: 'linear-gradient(to right, #0ea5e9, #06b6d4)',
                          borderRadius: 4,
                        }
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Achievements Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl"
                >
                  <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full mb-4">
                    <Award className="text-white" size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-400 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden border border-white/20 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-cyan-300 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="text-xs text-gray-400 flex items-start">
                          <span className="text-cyan-400 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-cyan-300 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Chip
                          key={tagIndex}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: 'rgba(14, 165, 233, 0.2)',
                            color: 'white',
                            borderColor: 'rgba(14, 165, 233, 0.5)',
                            border: '1px solid'
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="text"
                    endIcon={<ExternalLink size={16} />}
                    sx={{ color: '#22d3ee' }}
                  >
                    View Project
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">Experience & Education</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Experience */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mr-4">
                  <Briefcase className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>
              <div className="space-y-6">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                    <p className="text-cyan-300 mb-2">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg mr-4">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-cyan-300 mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-400 mb-3">{edu.period}</p>
                    <p className="text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 text-center">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <a href="mailto:dwivediansh598@gmail.com" className="text-white hover:text-cyan-300 transition-colors">
                      dwivediansh598@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Github className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <a href="https://github.com/dwivediansh598-hue" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300 transition-colors">
                      github.com/dwivediansh598-hue
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
                    <Linkedin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/ansh-dwivedi07/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-300 transition-colors">
                      linkedin.com/in/ansh-dwivedi07
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-gray-300 mb-4">Follow me on social media</p>
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

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-xl">
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
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
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
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
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
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.3)' },
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
                    background: 'linear-gradient(to right, #9333ea, #ec4899)',
                    '&:hover': { background: 'linear-gradient(to right, #7e22ce, #db2777)' }
                  }}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-md border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400">
            © 2026 Ansh Dwivedi. Built with React and Tailwind CSS.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="text-white" size={24} />
        </button>
      )}
    </div>
  );
}