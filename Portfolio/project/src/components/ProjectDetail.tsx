import React from 'react';
import { X, Github, ExternalLink, Calendar, Clock, Star, Code, Play } from 'lucide-react';

interface ProjectDetailProps {
  project: any;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/90 z-50 overflow-y-auto">
      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={onClose}
               className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full transition-colors flex items-center gap-2 font-semibold"
              >
                <X size={20} />
                <span className="text-sm font-semibold">Back to Portfolio</span>
              </button>
              <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="bg-green-600 px-3 py-1 rounded text-sm font-semibold">
                {project.rating} Match
              </span>
              <span className="text-gray-300">{project.year}</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mb-8 rounded-lg overflow-hidden">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-64 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex flex-wrap gap-4 mb-4">
                {project.technologies.map((tech: string, index: number) => (
                  <span
                    key={index}
                    className="bg-red-600 px-3 py-1 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 rounded font-bold hover:bg-gray-200 transition-colors flex items-center gap-2"
                >
                  <Github size={20} />
                  View Code
                </a>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-600/70 text-white px-6 py-3 rounded font-bold hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Project Info Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-4">About This Project</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {project.fullDescription}
              </p>
              
              <h3 className="text-xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-2 text-gray-300">
                {project.features.map((feature: string, index: number) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Star className="text-red-500 mt-1 flex-shrink-0" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Stats */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Calendar className="text-red-500" size={20} />
                    <span className="font-semibold">Duration</span>
                  </div>
                  <p className="text-gray-300">{project.duration}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="text-red-500" size={20} />
                    <span className="font-semibold">Timeline</span>
                  </div>
                  <p className="text-gray-300">{project.timeline}</p>
                </div>
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <Code className="text-red-500" size={20} />
                    <span className="font-semibold">Type</span>
                  </div>
                  <p className="text-gray-300">{project.type}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Code Examples</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.codeExamples.map((example: any, index: number) => (
                <div key={index} className="bg-gray-900 rounded-lg overflow-hidden">
                  <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-300">
                      {example.filename}
                    </span>
                    <span className="text-xs text-gray-400">{example.language}</span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm">
                    <code className="text-gray-300">{example.code}</code>
                  </pre>
                </div>
              ))}
            </div>
          </div>

          {/* Screenshots */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Screenshots</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.screenshots.map((screenshot: string, index: number) => (
                <div key={index} className="relative group cursor-pointer">
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <Play className="text-white" size={32} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="bg-gray-900 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-400">Frontend</h3>
                <ul className="space-y-2 text-gray-300">
                  {project.technical.frontend.map((item: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-400">Backend & Tools</h3>
                <ul className="space-y-2 text-gray-300">
                  {project.technical.backend.map((item: string, index: number) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;