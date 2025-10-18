import React, { useState, useEffect, useRef } from 'react';
import ProjectDetail from './components/ProjectDetail';
import { projectsData } from './data/projects';
import {
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Play,
  Code,
  Palette,
  Zap,
  Search,
  Bell,
  User,
  ChevronLeft,
  ChevronRight,
  Star,
  Calendar,
  Clock,
  Award,
  Briefcase,
  GraduationCap,
} from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [currentHero, setCurrentHero] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroProjects.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const heroProjects = [
    {
      title: 'TaskFlow Pro',
      description:
        'A comprehensive task management platform with real-time collaboration, advanced filtering, and intuitive drag-and-drop interfaces that revolutionizes team productivity.',
      image:
        'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      year: '2024',
      rating: '98% Match',
      duration: '6 months',
      category: 'Productivity',
    },
    {
      title: 'AI Dashboard Studio',
      description:
        'An AI-powered analytics dashboard that transforms complex data into beautiful, interactive visualizations with predictive insights and machine learning capabilities.',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      year: '2024',
      rating: '95% Match',
      duration: '4 months',
      category: 'Data Analytics',
    },
    {
      title: 'StreamFlix UI portfolio',
      description:
        'A Netflix-inspired streaming interface with advanced search, personalized recommendations, and seamless experience portfolio.',
      image:
        'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
      year: '2025',
      rating: '99% Match',
      duration: '2 months',
      category: 'Portfolio',
    },
  ];

  const projects = [
    {
      id: 'taskflow-pro',
      title: 'TaskFlow Pro',
      image:
        'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
      year: '2024',
      rating: '98%',
      category: 'Productivity',
    },
    {
      id: 'ai-dashboard-studio',
      title: 'AI Dashboard Studio',
      image:
        'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
      year: '2024',
      rating: '95%',
      category: 'Analytics',
    },
    {
      id: 'streamflix-ui',
      title: 'StreamFlix UI Portfolio',
      image:
        'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
      year: '2025',
      rating: '99%',
      category: 'Portfolio',
    },
    {
      id: 'skin-cancer-detection',
      title: 'Skin Cancer Detection App',
      image:
        'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
      year: '2024',
      rating: '94%',
      category: 'Healthcare AI',
    },
    {
      id: 'mental-health-prediction',
      title: 'Mental Health Prediction',
      image:
        'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
      year: '2024',
      rating: '96%',
      category: 'Machine Learning',
    },
    {
      id: 'spotify-clone',
      title: 'Spotify Clone',
      image:
        'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
      year: '2024',
      rating: '96%',
      category: 'Music Streaming',
    },
    {
      id: 'ecocommerce',
      title: 'EcoNest Website',
      image:
        'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
      year: '2024',
      rating: '92%',
      category: 'E-commerce',
    },
  ];

  const skillCategories = [
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React.js', icon: '⚛️' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'Next.js', icon: '⚫' },
        { name: 'Vue.js', icon: '💚' },
        { name: 'HTML5', icon: '🧡' },
        { name: 'CSS3', icon: '💙' },
        { name: 'Tailwind CSS', icon: '🎨' },
      ],
    },
    {
      title: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: '💚' },
        { name: 'Express.js', icon: '⚡' },
        { name: 'Python', icon: '🍃' },
        { name: 'SQL', icon: '🐘' },
        { name: 'Java', icon: '🔥' },
        { name: 'AI/ML', icon: '⚡' },
        { name: 'REST APIs', icon: '🔗' },
      ],
    },
    {
      title: 'Tools & Deployment',
      skills: [
        { name: 'Git & GitHub', icon: '🐙' },
        { name: 'AWS', icon: '☁️' },
        { name: 'Vercel', icon: '▲' },
        { name: 'Netlify', icon: '🌐' },
        { name: 'Vite', icon: '⚡' },
      ],
    },
    {
      title: 'Design & UX',
      skills: [
        { name: 'Figma', icon: '🎨' },
        { name: 'Adobe XD', icon: '🎭' },
        { name: 'Responsive Design', icon: '📱' },
        { name: 'UI/UX Design', icon: '✨' },
        { name: 'Prototyping', icon: '🔧' },
        { name: 'User Research', icon: '🔍' },
        { name: 'Accessibility', icon: '♿' },
  
      ],
    },
  ];

  const scrollSkills = (direction: 'left' | 'right') => {
    if (skillsRef.current) {
      const scrollAmount = 300;
      skillsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsRef.current) {
      const scrollAmount = 300;
      projectsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleProjectClick = (projectId: string) => {
    const projectData = projectsData[projectId as keyof typeof projectsData];
    if (projectData) {
      setSelectedProject(projectData);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectDetail
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Netflix Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gradient-to-b from-black/80 to-transparent">
        <div className="flex items-center justify-between px-4 md:px-16 py-4">
          <div className="flex items-center space-x-8">
            <div className="text-red-600 text-2xl md:text-3xl font-bold">
              RASHMI HV
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="hover:text-gray-300 transition-colors">
                Home
              </a>
              <a
                href="#projects"
                className="hover:text-gray-300 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-gray-300 transition-colors"
              >
                Skills
              </a>
              <a
                href="#about"
                className="hover:text-gray-300 transition-colors"
              >
                About
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="hover:text-gray-300 transition-colors"
            >
              <Search size={20} />
            </button>
            <Bell
              size={20}
              className="hover:text-gray-300 transition-colors cursor-pointer"
            />
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
              <User size={16} />
            </div>
          </div>
        </div>

        {showSearch && (
          <div className="px-4 md:px-16 pb-4">
            <input
              type="text"
              placeholder="Search projects, skills..."
              className="w-full bg-black/70 border border-gray-600 rounded px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-white"
            />
          </div>
        )}
      </header>

      {/* Hero Section - Netflix Style */}
      <section className="relative h-screen flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url(${heroProjects[currentHero].image})`,
            transform: `scale(${1 + scrollY * 0.0005})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="relative z-10 max-w-2xl px-4 md:px-16 pt-20">
          <div className="mb-4 flex items-center space-x-4">
            <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold">
              FEATURED
            </span>
            <span className="text-green-400 font-semibold">
              {heroProjects[currentHero].rating}
            </span>
            <span className="text-gray-300">
              {heroProjects[currentHero].year}
            </span>
            <span className="text-gray-300">
              {heroProjects[currentHero].duration}
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
            {heroProjects[currentHero].title}
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
            {heroProjects[currentHero].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Play size={20} fill="black" />
              View Project
            </button>
            <button className="bg-gray-600/70 text-white px-8 py-3 rounded font-bold hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
              <ExternalLink size={20} />
              More Info
            </button>
          </div>

          {/* Hero Navigation Dots */}
          <div className="flex space-x-2">
            {heroProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHero(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentHero ? 'bg-white' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white" size={32} />
        </div>
      </section>

      {/* About Section - Netflix Style */}
      <section className="py-16 px-4 md:px-16 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            About Rashmi HV
          </h2>

          {/* Main About Content */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Profile & Description */}
            <div>
              <div className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto">
                  RH
                </div>
                <h3 className="text-xl font-semibold mb-4 text-red-500 text-center">
                  Frontend Developer
                </h3>
                <p className="text-gray-300 leading-relaxed text-center">
                  Passionate about creating quality user experiences with modern web technologies.
                </p>
              </div>
            </div>

            {/* Key Strengths */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">
                Key Strengths
              </h4>
              <div className="space-y-4">
                <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <Code className="text-red-500" size={20} />
                    <span className="font-semibold">
                      Clean Code Architecture
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Writing maintainable, scalable code that follows industry
                    best practices
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <Palette className="text-red-500" size={20} />
                    <span className="font-semibold">UI/UX Excellence</span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Designing intuitive interfaces that users love to interact
                    with
                  </p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <Zap className="text-red-500" size={20} />
                    <span className="font-semibold">
                      Performance Optimization
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">
                    Building lightning-fast applications that scale efficiently
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Stats */}
            <div>
              <h4 className="text-xl font-semibold mb-6 text-white">
                Professional Highlights
              </h4>
              <div className="space-y-4">
                <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Award className="text-red-500" size={20} />
                      <span className="font-semibold">Experience</span>
                    </div>
                    <span className="text-red-400 font-bold">6+ Months</span>
                  </div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Briefcase className="text-red-500" size={20} />
                      <span className="font-semibold">Projects</span>
                    </div>
                    <span className="text-red-400 font-bold">7 Completed</span>
                  </div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Star className="text-red-500" size={20} />
                      <span className="font-semibold">Satisfaction</span>
                    </div>
                    <span className="text-red-400 font-bold">98% Rate</span>
                  </div>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <GraduationCap className="text-red-500" size={20} />
                      <span className="font-semibold">Education</span>
                    </div>
                    <span className="text-red-400 font-bold">B.Tech IT (8 CGPA)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div className="bg-gray-900 p-8 rounded-lg mb-12">
            <div className="max-w-4xl mx-auto">
              <h4 className="text-2xl font-semibold mb-6 text-center text-red-500">
                My Approach to Development
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Aspiring Cloud & DevOps Engineer with a B.Tech. in Information Technology 
                    and a foundation in cloud platforms, automation, and CI/CD practices. 
                    I create interactive web experiences that combine clean design with 
                    seamless functionality, specializing in React.js and modern web technologies.
                  </p>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Skilled in scripting, version control, and containerization, with a strong 
                    interest in Infrastructure as Code and scalable systems. I focus on building 
                    responsive, engaging interfaces and reliable software delivery systems.
                  </p>
                </div>
                <div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    With experience in QA Manual Testing and Cloud Infrastructure, I bring 
                    a comprehensive understanding of software development lifecycle. My focus 
                    is on creating quality user experiences while ensuring robust, scalable solutions.
                  </p>
                  <p className="text-red-400 font-semibold text-lg">
                    ✨ Seeking opportunities to contribute to reliable software delivery 
                    while growing through hands-on experience and mentorship.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Technologies */}
          <div className="text-center">
            <h4 className="text-2xl font-semibold mb-8 text-white">
              Core Technologies I Master
            </h4>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                'React.js',
                'JavaScript',
                'Node.js',
                'Python',
                'AWS',
                'MySQL',
                'Git & GitHub',
              ].map((tech, index) => (
                <div
                  key={index}
                  className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-8 rounded-lg max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold mb-4">
                Ready to Build Something Amazing?
              </h4>
              <p className="text-lg mb-6 opacity-90">
                Let's discuss how I can help bring your next project to life
                with the same quality and attention to detail you see here.
              </p>
              <button className="bg-white text-red-600 px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* New Experience Timeline Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Professional Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-600 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8 mb-4 md:mb-0">
                  <div className="bg-black p-6 rounded-lg hover:bg-gray-800 transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="text-red-500" size={20} />
                      <span className="text-red-400 font-semibold">October 2024 - November 2024</span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">QA Manual Tester - Tenth Planet Technologies</h4>
                    <p className="text-gray-300">
                       Learned cloud infrastructure concepts and helped configure virtual environments.
                       Contributed to documentation and testing of cloud-hosted applications.
                    </p>
                  </div>
                </div>
                <div className="hidden md:block w-4 h-4 bg-red-600 rounded-full relative z-10"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="hidden md:block w-4 h-4 bg-red-600 rounded-full relative z-10"></div>
                <div className="md:w-1/2 md:pl-8 mb-4 md:mb-0">
                  <div className="bg-black p-6 rounded-lg hover:bg-gray-800 transition-colors">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="text-red-500" size={20} />
                      <span className="text-red-400 font-semibold">
                        October 2023 - November 2023
                      </span>
                    </div>
                    <h4 className="text-xl font-bold mb-2">
                      Cloud Intern - CEI India Pvt Ltd
                    </h4>
                    <p className="text-gray-300">
                       Learned cloud infrastructure concepts and helped configure virtual environments.
                       Contributed to documentation and testing of cloud-hosted applications.
                    </p>
                  </div>
                </div>
              </div>
              
              </div>
            </div>
          </div>
      </section>

      {/* Projects Section - Netflix Carousel */}
      <section id="projects" className="py-8 px-4 md:px-16">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Projects</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => scrollProjects('left')}
              className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scrollProjects('right')}
              className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div
          ref={projectsRef}
          className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex-none w-64 group cursor-pointer transition-transform duration-300 hover:scale-105"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-400">
                      {project.rating} Match
                    </span>
                    <span className="text-gray-300">{project.year}</span>
                  </div>
                  <div className="flex space-x-2 mt-2">
                    <button 
                      className="bg-white text-black px-3 py-1 rounded text-xs font-bold hover:bg-gray-200 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.id);
                      }}
                    >
                      <Play size={12} className="inline mr-1" />
                      View
                    </button>
                    <button 
                      className="bg-gray-600/70 text-white px-3 py-1 rounded text-xs font-bold hover:bg-gray-600 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleProjectClick(project.id);
                      }}
                    >
                      + Info
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section - Netflix Categories */}
      <section id="skills" className="py-16 px-4 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Technical Skills
        </h2>

        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">{category.title}</h3>
              <div className="flex space-x-2">
                <button
                  onClick={() => scrollSkills('left')}
                  className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={() => scrollSkills('right')}
                  className="bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div
              ref={categoryIndex === 0 ? skillsRef : null}
              className="flex space-x-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="flex-none bg-gray-900 hover:bg-gray-800 p-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group min-w-[200px]"
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-white group-hover:text-red-400 transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Contact Section - Netflix Style */}
      <section id="contact" className="py-16 px-4 md:px-16 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Ready to Create Something Amazing?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss your next project and bring your ideas to life. 
            I'm passionate about creating quality user experiences with modern web technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:rashmihv100@gmail.com"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Start a Conversation
            </a>
            <a
              href="/Rashmi_SDE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600/70 hover:bg-gray-600 px-8 py-4 rounded font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <ExternalLink size={20} />
              View Resume
            </a>
          </div>

          <div className="flex justify-center space-x-8">
            <a
              href="https://github.com/Rashmi0607"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <Github size={32} />
            </a>
            <a
              href="https://www.linkedin.com/in/rashmi-hv-759773309/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="mailto:rashmihv100@gmail.com"
              className="text-gray-400 hover:text-white transition-colors transform hover:scale-110"
            >
              <Mail size={32} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer - Netflix Style */}
      <footer className="bg-black py-12 px-4 md:px-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Projects</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Applications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Skills</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Frontend Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Backend Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Full Stack
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Certifications
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href=" https://www.linkedin.com/in/rashmi-hv-759773309/" className="hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Rashmi0607" className="hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href=" rashmihv100@gmail.com" className="hover:text-white transition-colors">
                    Email
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 pt-8 border-t border-gray-800">
            <p>
              © 2025 Rashmi HV
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
