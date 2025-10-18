export const projectsData = {
  'taskflow-pro': {
    title: 'TaskFlow Pro',
    rating: '98%',
    year: '2024',
    category: 'Productivity',
    duration: '6 months',
    timeline: 'Jan 2024 - Jun 2024',
    type: 'Full Stack Web Application',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
    heroImage: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    description: 'A comprehensive task management platform with real-time collaboration, advanced filtering, and intuitive drag-and-drop interfaces that revolutionizes team productivity.',
    fullDescription: 'TaskFlow Pro is a comprehensive task management platform designed to revolutionize team productivity. Built with React.js and Node.js, it features real-time collaboration capabilities, advanced filtering systems, and intuitive drag-and-drop interfaces. The application supports multiple project views, team member assignments, deadline tracking, and progress analytics. With its clean, modern interface and powerful backend, TaskFlow Pro helps teams stay organized and productive.',
    githubUrl: 'https://github.com/rashmihv/taskflow-pro',
    liveUrl: 'https://taskflow-pro-demo.netlify.app',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
    features: [
      'Real-time collaboration with live updates',
      'Drag-and-drop task management interface',
      'Advanced filtering and search capabilities',
      'Team member assignment and role management',
      'Progress tracking and analytics dashboard',
      'Deadline notifications and reminders',
      'Multiple project views (Kanban, List, Calendar)',
      'File attachments and comments system'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    ],
    technical: {
      frontend: [
        'React.js with TypeScript',
        'Redux for state management',
        'React DnD for drag-and-drop',
        'Tailwind CSS for styling',
        'React Router for navigation'
      ],
      backend: [
        'Node.js with Express',
        'MongoDB with Mongoose',
        'Socket.io for real-time features',
        'JWT authentication',
        'Cloudinary for file uploads'
      ]
    },
    codeExamples: [
      {
        filename: 'TaskCard.tsx',
        language: 'TypeScript React',
        code: `import React from 'react';
import { useDrag } from 'react-dnd';
import { Task } from '../types';

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onEdit }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'task',
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={\`bg-white p-4 rounded-lg shadow-md cursor-move
        \${isDragging ? 'opacity-50' : 'opacity-100'}\`}
      onClick={() => onEdit(task)}
    >
      <h3 className="font-semibold text-gray-800">{task.title}</h3>
      <p className="text-gray-600 text-sm mt-2">{task.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="text-xs text-gray-500">{task.dueDate}</span>
        <div className="flex -space-x-2">
          {task.assignees.map((assignee) => (
            <img
              key={assignee.id}
              src={assignee.avatar}
              alt={assignee.name}
              className="w-6 h-6 rounded-full border-2 border-white"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCard;`
      },
      {
        filename: 'taskController.js',
        language: 'Node.js',
        code: `const Task = require('../models/Task');
const { io } = require('../server');

// Create new task
exports.createTask = async (req, res) => {
  try {
    const { title, description, assignees, dueDate, projectId } = req.body;
    
    const task = new Task({
      title,
      description,
      assignees,
      dueDate,
      projectId,
      createdBy: req.user.id,
      status: 'todo'
    });

    await task.save();
    await task.populate('assignees', 'name email avatar');

    // Emit real-time update
    io.to(projectId).emit('taskCreated', task);

    res.status(201).json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Update task status
exports.updateTaskStatus = async (req, res) => {
  try {
    const { taskId } = req.params;
    const { status } = req.body;

    const task = await Task.findByIdAndUpdate(
      taskId,
      { status, updatedAt: Date.now() },
      { new: true }
    ).populate('assignees', 'name email avatar');

    // Emit real-time update
    io.to(task.projectId).emit('taskUpdated', task);

    res.json({
      success: true,
      data: task
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};`
      }
    ]
  },

  'ai-dashboard-studio': {
    title: 'AI Dashboard Studio',
    rating: '95%',
    year: '2024',
    category: 'Data Analytics',
    duration: '4 months',
    timeline: 'Mar 2024 - Jun 2024',
    type: 'AI-Powered Analytics Platform',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
    heroImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    description: 'An AI-powered analytics dashboard that transforms complex data into beautiful, interactive visualizations with predictive insights and machine learning capabilities.',
    fullDescription: 'AI Dashboard Studio is a cutting-edge analytics platform that leverages artificial intelligence to transform complex data into actionable insights. Built with React.js and Python, it features interactive visualizations, predictive analytics, and machine learning capabilities. The platform supports multiple data sources, real-time data processing, and customizable dashboard layouts. With its intuitive interface and powerful AI algorithms, it helps businesses make data-driven decisions.',
    githubUrl: 'https://github.com/rashmihv/ai-dashboard-studio',
    liveUrl: 'https://ai-dashboard-studio.netlify.app',
    technologies: ['React.js', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    features: [
      'AI-powered predictive analytics',
      'Interactive data visualizations with D3.js',
      'Real-time data processing and updates',
      'Multiple data source integrations',
      'Customizable dashboard layouts',
      'Machine learning model training interface',
      'Automated report generation',
      'Advanced filtering and drill-down capabilities'
    ],
    screenshots: [
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    ],
    technical: {
      frontend: [
        'React.js with TypeScript',
        'D3.js for data visualizations',
        'Redux Toolkit for state management',
        'Material-UI for components',
        'Chart.js for additional charts'
      ],
      backend: [
        'Python with FastAPI',
        'TensorFlow for ML models',
        'PostgreSQL for data storage',
        'Redis for caching',
        'Celery for background tasks'
      ]
    },
    codeExamples: [
      {
        filename: 'PredictiveChart.tsx',
        language: 'TypeScript React',
        code: `import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { PredictionData } from '../types';

interface PredictiveChartProps {
  data: PredictionData[];
  width: number;
  height: number;
}

const PredictiveChart: React.FC<PredictiveChartProps> = ({ 
  data, 
  width, 
  height 
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!data.length) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 30, bottom: 40, left: 40 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = d3.scaleTime()
      .domain(d3.extent(data, d => new Date(d.date)) as [Date, Date])
      .range([0, innerWidth]);

    const yScale = d3.scaleLinear()
      .domain(d3.extent(data, d => d.value) as [number, number])
      .range([innerHeight, 0]);

    const line = d3.line<PredictionData>()
      .x(d => xScale(new Date(d.date)))
      .y(d => yScale(d.value))
      .curve(d3.curveMonotoneX);

    const g = svg.append('g')
      .attr('transform', \`translate(\${margin.left},\${margin.top})\`);

    // Add axes
    g.append('g')
      .attr('transform', \`translate(0,\${innerHeight})\`)
      .call(d3.axisBottom(xScale));

    g.append('g')
      .call(d3.axisLeft(yScale));

    // Add line
    g.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', '#3b82f6')
      .attr('stroke-width', 2)
      .attr('d', line);

    // Add prediction area
    const predictionData = data.filter(d => d.isPrediction);
    if (predictionData.length > 0) {
      g.append('path')
        .datum(predictionData)
        .attr('fill', 'rgba(239, 68, 68, 0.2)')
        .attr('stroke', '#ef4444')
        .attr('stroke-width', 2)
        .attr('stroke-dasharray', '5,5')
        .attr('d', line);
    }
  }, [data, width, height]);

  return <svg ref={svgRef} width={width} height={height} />;
};

export default PredictiveChart;`
      },
      {
        filename: 'ml_predictor.py',
        language: 'Python',
        code: `import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
import joblib

class DataPredictor:
    def __init__(self):
        self.model = RandomForestRegressor(n_estimators=100, random_state=42)
        self.scaler = StandardScaler()
        self.is_trained = False
    
    def prepare_features(self, data):
        """Prepare features for training/prediction"""
        df = pd.DataFrame(data)
        
        # Create time-based features
        df['date'] = pd.to_datetime(df['date'])
        df['day_of_week'] = df['date'].dt.dayofweek
        df['month'] = df['date'].dt.month
        df['quarter'] = df['date'].dt.quarter
        
        # Create lag features
        df['value_lag_1'] = df['value'].shift(1)
        df['value_lag_7'] = df['value'].shift(7)
        df['value_lag_30'] = df['value'].shift(30)
        
        # Create rolling statistics
        df['rolling_mean_7'] = df['value'].rolling(window=7).mean()
        df['rolling_std_7'] = df['value'].rolling(window=7).std()
        
        # Select features for model
        feature_columns = [
            'day_of_week', 'month', 'quarter',
            'value_lag_1', 'value_lag_7', 'value_lag_30',
            'rolling_mean_7', 'rolling_std_7'
        ]
        
        return df[feature_columns].dropna()
    
    def train(self, historical_data):
        """Train the prediction model"""
        features = self.prepare_features(historical_data)
        target = pd.DataFrame(historical_data)['value'][features.index]
        
        # Split data
        X_train, X_test, y_train, y_test = train_test_split(
            features, target, test_size=0.2, random_state=42
        )
        
        # Scale features
        X_train_scaled = self.scaler.fit_transform(X_train)
        X_test_scaled = self.scaler.transform(X_test)
        
        # Train model
        self.model.fit(X_train_scaled, y_train)
        self.is_trained = True
        
        # Calculate accuracy
        train_score = self.model.score(X_train_scaled, y_train)
        test_score = self.model.score(X_test_scaled, y_test)
        
        return {
            'train_accuracy': train_score,
            'test_accuracy': test_score,
            'feature_importance': dict(zip(
                features.columns, 
                self.model.feature_importances_
            ))
        }
    
    def predict(self, data, periods=30):
        """Make predictions for future periods"""
        if not self.is_trained:
            raise ValueError("Model must be trained before making predictions")
        
        predictions = []
        current_data = data.copy()
        
        for _ in range(periods):
            features = self.prepare_features(current_data)
            if len(features) == 0:
                break
                
            last_features = features.iloc[-1:].values
            scaled_features = self.scaler.transform(last_features)
            
            prediction = self.model.predict(scaled_features)[0]
            predictions.append(prediction)
            
            # Add prediction to data for next iteration
            next_date = pd.to_datetime(current_data[-1]['date']) + pd.Timedelta(days=1)
            current_data.append({
                'date': next_date.strftime('%Y-%m-%d'),
                'value': prediction
            })
        
        return predictions
    
    def save_model(self, filepath):
        """Save trained model"""
        joblib.dump({
            'model': self.model,
            'scaler': self.scaler,
            'is_trained': self.is_trained
        }, filepath)
    
    def load_model(self, filepath):
        """Load trained model"""
        data = joblib.load(filepath)
        self.model = data['model']
        self.scaler = data['scaler']
        self.is_trained = data['is_trained']`
      }
    ]
  },

  'streamflix-ui': {
    title: 'StreamFlix UI Portfolio',
    rating: '99%',
    year: '2025',
    category: 'Portfolio',
    duration: '2 months',
    timeline: 'Nov 2024 - Dec 2024',
    type: 'Netflix-Inspired Portfolio Website',
    image: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
    heroImage: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    description: 'A Netflix-inspired streaming interface with advanced search, personalized recommendations, and seamless experience portfolio.',
    fullDescription: 'StreamFlix UI Portfolio is a Netflix-inspired portfolio website that showcases projects and skills in an engaging, streaming platform format. Built with React.js and TypeScript, it features horizontal scrolling carousels, interactive hover effects, and a sophisticated dark theme. The portfolio includes auto-rotating hero sections, detailed project pages, and smooth animations that create an immersive user experience.',
    githubUrl: 'https://github.com/rashmihv/streamflix-ui-portfolio',
    liveUrl: 'https://streamflix-portfolio.netlify.app',
    technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    features: [
      'Netflix-inspired UI with dark theme',
      'Auto-rotating hero section with project highlights',
      'Horizontal scrolling carousels for projects and skills',
      'Interactive hover effects and animations',
      'Detailed project pages with code examples',
      'Responsive design for all devices',
      'Smooth scrolling navigation',
      'Professional contact and social links'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    ],
    technical: {
      frontend: [
        'React.js with TypeScript',
        'Tailwind CSS for styling',
        'Framer Motion for animations',
        'Lucide React for icons',
        'Vite for build tooling'
      ],
      backend: [
        'Static site deployment',
        'Netlify hosting',
        'GitHub integration',
        'Contact form handling',
        'Performance optimization'
      ]
    },
    codeExamples: [
      {
        filename: 'HeroCarousel.tsx',
        language: 'TypeScript React',
        code: `import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Info } from 'lucide-react';

interface HeroProject {
  title: string;
  description: string;
  image: string;
  year: string;
  rating: string;
  category: string;
}

interface HeroCarouselProps {
  projects: HeroProject[];
}

const HeroCarousel: React.FC<HeroCarouselProps> = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [projects.length, isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? projects.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const currentProject = projects[currentIndex];

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: \`url(\${currentProject.image})\` }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-2xl px-4 md:px-16 pt-20">
          {/* Project Meta */}
          <div className="flex items-center space-x-4 mb-4">
            <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold">
              FEATURED
            </span>
            <span className="text-green-400 font-semibold">
              {currentProject.rating}
            </span>
            <span className="text-gray-300">{currentProject.year}</span>
            <span className="text-gray-300">{currentProject.category}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-7xl font-bold mb-6 animate-fade-in">
            {currentProject.title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed">
            {currentProject.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-white text-black px-8 py-3 rounded font-bold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Play size={20} fill="black" />
              View Project
            </button>
            <button className="bg-gray-600/70 text-white px-8 py-3 rounded font-bold hover:bg-gray-600 transition-colors flex items-center justify-center gap-2">
              <Info size={20} />
              More Info
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={\`w-2 h-2 rounded-full transition-colors \${
                  index === currentIndex ? 'bg-white' : 'bg-gray-600'
                }\`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full transition-colors z-20"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroCarousel;`
      },
      {
        filename: 'ProjectCard.tsx',
        language: 'TypeScript React',
        code: `import React, { useState } from 'react';
import { Play, Info, Star } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  image: string;
  year: string;
  rating: string;
  category: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  onViewDetails 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-none w-64 group cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-lg">
        {/* Project Image */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className={\`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent transition-opacity duration-300 \${
          isHovered ? 'opacity-100' : 'opacity-0'
        }\`}>
          <div className="absolute bottom-4 left-4 right-4">
            {/* Project Title */}
            <h3 className="text-lg font-bold mb-2 text-white">
              {project.title}
            </h3>

            {/* Project Meta */}
            <div className="flex items-center justify-between text-sm mb-3">
              <div className="flex items-center space-x-2">
                <Star className="text-yellow-400" size={14} />
                <span className="text-green-400">{project.rating}</span>
              </div>
              <span className="text-gray-300">{project.year}</span>
            </div>

            {/* Category */}
            <div className="mb-3">
              <span className="bg-red-600 px-2 py-1 rounded text-xs font-semibold">
                {project.category}
              </span>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(project);
                }}
                className="bg-white text-black px-3 py-1 rounded text-xs font-bold hover:bg-gray-200 transition-colors flex items-center gap-1"
              >
                <Play size={12} />
                View
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewDetails(project);
                }}
                className="bg-gray-600/70 text-white px-3 py-1 rounded text-xs font-bold hover:bg-gray-600 transition-colors flex items-center gap-1"
              >
                <Info size={12} />
                Info
              </button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        <div className="absolute inset-0 bg-gray-800 animate-pulse opacity-0 group-hover:opacity-0" />
      </div>
    </div>
  );
};

export default ProjectCard;`
      }
    ]
  },

  'ecocommerce': {
    id: 'ecocommerce',
    title: 'EcoNest Website',
    rating: '92%',
    year: '2024',
    category: 'E-commerce',
    duration: '5 months',
    timeline: 'Feb 2024 - Jun 2024',
    type: 'Sustainable E-commerce Platform',
    image: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
    heroImage: 'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    description: 'Sustainable e-commerce platform promoting eco-friendly products with carbon footprint tracking',
    fullDescription: 'EcoNest is a comprehensive e-commerce platform dedicated to promoting sustainable living through eco-friendly products. The platform features advanced sustainability metrics, carbon footprint tracking, and educational content about environmental impact. Built with modern web technologies, it provides a seamless shopping experience while encouraging conscious consumer choices.',
    githubUrl: 'https://github.com/Rashmi0607/EcoNest-Website',
    liveUrl: 'https://ecocommerce-demo.vercel.app',
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    features: [
      'Sustainable product marketplace',
      'Carbon footprint tracking for orders',
      'Green shipping and packaging options',
      'Sustainability scoring system',
      'Advanced product filtering and search',
      'User reviews and ratings',
      'Educational environmental content',
      'Secure payment processing with Stripe'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'https://images.pexels.com/photos/3985063/pexels-photo-3985063.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'https://images.pexels.com/photos/3985064/pexels-photo-3985064.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
    ],
    technical: {
      frontend: [
        'Next.js with TypeScript',
        'Tailwind CSS for styling',
        'React Hook Form for forms',
        'SWR for data fetching',
        'Framer Motion for animations'
      ],
      backend: [
        'Next.js API routes',
        'PostgreSQL with Prisma ORM',
        'Stripe for payments',
        'NextAuth.js for authentication',
        'Cloudinary for image management'
      ]
    },
    codeExamples: [
      {
        filename: 'ProductCard.tsx',
        language: 'TypeScript React',
        code: `import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, Star, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (productId: string) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const sustainabilityColor = {
    high: 'text-green-500',
    medium: 'text-yellow-500',
    low: 'text-red-500'
  }[product.sustainabilityScore];

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-200">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        {product.isEcoFriendly && (
          <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
            <Leaf size={12} />
            Eco-Friendly
          </div>
        )}
        <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
          -{product.carbonFootprint}kg CO₂
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <Link href={\`/products/\${product.id}\`}>
          <h3 className="font-semibold text-gray-800 hover:text-green-600 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-gray-600 text-sm mt-1 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={i < Math.floor(product.rating) 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300'
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            ({product.reviewCount})
          </span>
        </div>

        {/* Sustainability Score */}
        <div className="flex items-center mt-2">
          <Leaf className={\`\${sustainabilityColor} mr-1\`} size={16} />
          <span className={\`text-sm font-medium \${sustainabilityColor}\`}>
            {product.sustainabilityScore.toUpperCase()} Impact
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between mt-4">
          <div>
            <span className="text-lg font-bold text-gray-800">
              \${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through ml-2">
                \${product.originalPrice}
              </span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(product.id)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;`
      },
      {
        filename: 'checkout.ts',
        language: 'TypeScript API',
        code: `import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { prisma } from '../../lib/prisma';
import { getSession } from 'next-auth/react';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const session = await getSession({ req });
    if (!session?.user?.email) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    const { items, shippingAddress, shippingMethod } = req.body;

    // Calculate totals and carbon footprint
    let subtotal = 0;
    let totalCarbonFootprint = 0;
    const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

    for (const item of items) {
      const product = await prisma.product.findUnique({
        where: { id: item.productId }
      });

      if (!product) {
        return res.status(404).json({ 
          message: \`Product \${item.productId} not found\` 
        });
      }

      const itemTotal = product.price * item.quantity;
      subtotal += itemTotal;
      totalCarbonFootprint += product.carbonFootprint * item.quantity;

      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
            images: [product.image],
            metadata: {
              carbonFootprint: product.carbonFootprint.toString(),
              sustainabilityScore: product.sustainabilityScore,
            }
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: item.quantity,
      });
    }

    // Add shipping cost
    const shippingCost = shippingMethod === 'green' ? 0 : 5.99;
    if (shippingCost > 0) {
      lineItems.push({
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Shipping',
            description: shippingMethod === 'green' 
              ? 'Carbon-neutral shipping' 
              : 'Standard shipping'
          },
          unit_amount: Math.round(shippingCost * 100),
        },
        quantity: 1,
      });
    }

    // Create Stripe checkout session
    const checkoutSession = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: \`\${req.headers.origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}\`,
      cancel_url: \`\${req.headers.origin}/cart\`,
      customer_email: session.user.email,
      metadata: {
        userId: session.user.id,
        totalCarbonFootprint: totalCarbonFootprint.toString(),
        shippingMethod,
      },
      shipping_address_collection: {
        allowed_countries: ['US', 'CA'],
      },
    });

    // Create order record
    const order = await prisma.order.create({
      data: {
        userId: session.user.id,
        stripeSessionId: checkoutSession.id,
        status: 'pending',
        subtotal,
        shippingCost,
        total: subtotal + shippingCost,
        carbonFootprint: totalCarbonFootprint,
        shippingMethod,
        shippingAddress: JSON.stringify(shippingAddress),
        items: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          }))
        }
      }
    });

    res.status(200).json({ 
      sessionId: checkoutSession.id,
      orderId: order.id 
    });

  } catch (error) {
    console.error('Checkout error:', error);
    res.status(500).json({ 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}`
      }
    ]
  },

  'financetracker-pro': {
    title: 'FinanceTracker Pro',
    rating: '94%',
    year: '2023',
    category: 'Finance',
    duration: '4 months',
    timeline: 'Aug 2023 - Nov 2023',
    type: 'Personal Finance Management App',
    image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
    heroImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    description: 'A comprehensive personal finance management application with expense tracking, budget planning, and investment portfolio monitoring.',
    fullDescription: 'FinanceTracker Pro is a comprehensive personal finance management application that helps users track expenses, plan budgets, and monitor investment portfolios. Built with React.js and Firebase, it features real-time synchronization, advanced analytics, and secure data encryption. The app includes automated categorization, bill reminders, and detailed financial reports.',
    githubUrl: 'https://github.com/rashmihv/financetracker-pro',
    liveUrl: 'https://financetracker-pro.netlify.app',
    technologies: ['React.js', 'Firebase', 'Chart.js', 'Material-UI', 'PWA'],
    features: [
      'Expense tracking with automated categorization',
      'Budget planning and monitoring',
      'Investment portfolio tracking',
      'Bill reminders and notifications',
      'Financial analytics and reports',
      'Bank account synchronization',
      'Goal setting and progress tracking',
      'Secure data encryption and backup'
    ],
    screenshots: [
      'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'https://images.pexels.com/photos/7947664/pexels-photo-7947664.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    ],
    technical: {
      frontend: [
        'React.js with TypeScript',
        'Material-UI for components',
        'Chart.js for data visualization',
        'React Router for navigation',
        'PWA capabilities'
      ],
      backend: [
        'Firebase Authentication',
        'Firestore for data storage',
        'Firebase Cloud Functions',
        'Firebase Hosting',
        'Plaid API for bank integration'
      ]
    },
    codeExamples: [
      {
        filename: 'ExpenseChart.tsx',
        language: 'TypeScript React',
        code: `import React, { useMemo } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Expense, ExpenseCategory } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface ExpenseChartProps {
  expenses: Expense[];
  type: 'bar' | 'doughnut';
  period: 'week' | 'month' | 'year';
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ 
  expenses, 
  type, 
  period 
}) => {
  const chartData = useMemo(() => {
    // Group expenses by category
    const categoryTotals = expenses.reduce((acc, expense) => {
      const category = expense.category;
      acc[category] = (acc[category] || 0) + expense.amount;
      return acc;
    }, {} as Record<ExpenseCategory, number>);

    const categories = Object.keys(categoryTotals) as ExpenseCategory[];
    const amounts = Object.values(categoryTotals);

    const colors = {
      food: '#FF6384',
      transportation: '#36A2EB',
      entertainment: '#FFCE56',
      utilities: '#4BC0C0',
      healthcare: '#9966FF',
      shopping: '#FF9F40',
      other: '#FF6384'
    };

    return {
      labels: categories.map(cat => 
        cat.charAt(0).toUpperCase() + cat.slice(1)
      ),
      datasets: [
        {
          label: 'Expenses',
          data: amounts,
          backgroundColor: categories.map(cat => colors[cat]),
          borderColor: categories.map(cat => colors[cat]),
          borderWidth: type === 'bar' ? 1 : 0,
        },
      ],
    };
  }, [expenses, type]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: type === 'doughnut' ? 'right' : 'top' as const,
      },
      title: {
        display: true,
        text: \`Expenses by Category - \${period.charAt(0).toUpperCase() + period.slice(1)}\`,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.parsed.y || context.parsed;
            return \`\${label}: $\${value.toFixed(2)}\`;
          }
        }
      }
    },
    scales: type === 'bar' ? {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '$' + value.toFixed(0);
          }
        }
      }
    } : undefined,
  };

  return (
    <div className="h-64 w-full">
      {type === 'bar' ? (
        <Bar data={chartData} options={options} />
      ) : (
        <Doughnut data={chartData} options={options} />
      )}
    </div>
  );
};

export default ExpenseChart;`
      },
      {
        filename: 'budgetService.ts',
        language: 'TypeScript',
        code: `import { 
  collection, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Budget, BudgetCategory, BudgetPeriod } from '../types';

export class BudgetService {
  private static instance: BudgetService;
  private readonly collectionName = 'budgets';

  public static getInstance(): BudgetService {
    if (!BudgetService.instance) {
      BudgetService.instance = new BudgetService();
    }
    return BudgetService.instance;
  }

  async createBudget(
    userId: string, 
    budgetData: Omit<Budget, 'id' | 'createdAt' | 'updatedAt'>
  ): Promise<string> {
    try {
      const budget = {
        ...budgetData,
        userId,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      };

      const docRef = await addDoc(
        collection(db, this.collectionName), 
        budget
      );
      
      return docRef.id;
    } catch (error) {
      console.error('Error creating budget:', error);
      throw new Error('Failed to create budget');
    }
  }

  async getUserBudgets(userId: string): Promise<Budget[]> {
    try {
      const q = query(
        collection(db, this.collectionName),
        where('userId', '==', userId),
        orderBy('createdAt', 'desc')
      );

      const querySnapshot = await getDocs(q);
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt.toDate(),
        updatedAt: doc.data().updatedAt.toDate(),
      })) as Budget[];
    } catch (error) {
      console.error('Error fetching budgets:', error);
      throw new Error('Failed to fetch budgets');
    }
  }

  async updateBudget(
    budgetId: string, 
    updates: Partial<Omit<Budget, 'id' | 'userId' | 'createdAt'>>
  ): Promise<void> {
    try {
      const budgetRef = doc(db, this.collectionName, budgetId);
      
      await updateDoc(budgetRef, {
        ...updates,
        updatedAt: Timestamp.now(),
      });
    } catch (error) {
      console.error('Error updating budget:', error);
      throw new Error('Failed to update budget');
    }
  }

  async deleteBudget(budgetId: string): Promise<void> {
    try {
      const budgetRef = doc(db, this.collectionName, budgetId);
      await deleteDoc(budgetRef);
    } catch (error) {
      console.error('Error deleting budget:', error);
      throw new Error('Failed to delete budget');
    }
  }

  calculateBudgetProgress(
    budget: Budget, 
    expenses: number
  ): {
    percentage: number;
    remaining: number;
    status: 'on-track' | 'warning' | 'over-budget';
  } {
    const percentage = (expenses / budget.amount) * 100;
    const remaining = budget.amount - expenses;

    let status: 'on-track' | 'warning' | 'over-budget';
    if (percentage <= 75) {
      status = 'on-track';
    } else if (percentage <= 100) {
      status = 'warning';
    } else {
      status = 'over-budget';
    }

    return {
      percentage: Math.min(percentage, 100),
      remaining,
      status,
    };
  }

  generateBudgetRecommendations(
    budgets: Budget[], 
    expenses: Record<BudgetCategory, number>
  ): {
    category: BudgetCategory;
    currentBudget: number;
    recommendedBudget: number;
    reason: string;
  }[] {
    const recommendations = [];

    for (const budget of budgets) {
      const categoryExpenses = expenses[budget.category] || 0;
      const utilizationRate = categoryExpenses / budget.amount;

      if (utilizationRate > 1.2) {
        // Over budget by 20% or more
        recommendations.push({
          category: budget.category,
          currentBudget: budget.amount,
          recommendedBudget: Math.ceil(categoryExpenses * 1.1),
          reason: 'Consistently exceeding budget, consider increasing allocation'
        });
      } else if (utilizationRate < 0.5) {
        // Under budget by 50% or more
        recommendations.push({
          category: budget.category,
          currentBudget: budget.amount,
          recommendedBudget: Math.ceil(categoryExpenses * 1.2),
          reason: 'Underutilized budget, consider reducing allocation'
        });
      }
    }

    return recommendations;
  }

  async getBudgetAnalytics(
    userId: string, 
    period: BudgetPeriod
  ): Promise<{
    totalBudget: number;
    totalSpent: number;
    categoryBreakdown: Record<BudgetCategory, {
      budgeted: number;
      spent: number;
      remaining: number;
    }>;
    trends: {
      month: string;
      budgeted: number;
      spent: number;
    }[];
  }> {
    // Implementation would fetch and analyze budget data
    // This is a simplified version
    const budgets = await this.getUserBudgets(userId);
    
    const analytics = {
      totalBudget: budgets.reduce((sum, b) => sum + b.amount, 0),
      totalSpent: 0, // Would be calculated from expenses
      categoryBreakdown: {} as any,
      trends: [] as any[]
    };

    return analytics;
  }
}

export const budgetService = BudgetService.getInstance();`
      }
    ]
  },

  'social-connect': {
    title: 'Social Connect',
    rating: '91%',
    year: '2023',
    category: 'Social',
    duration: '3 months',
    timeline: 'May 2023 - Jul 2023',
    type: 'Social Networking Platform',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=600',
    heroImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    description: 'A modern social networking platform with real-time messaging, content sharing, and community features designed for meaningful connections.',
    fullDescription: 'Social Connect is a modern social networking platform that focuses on creating meaningful connections between users. Built with React.js and Socket.io, it features real-time messaging, content sharing, community groups, and advanced privacy controls. The platform emphasizes user safety and authentic interactions through verified profiles and content moderation.',
    githubUrl: 'https://github.com/rashmihv/social-connect',
    liveUrl: 'https://social-connect-demo.netlify.app',
    technologies: ['React.js', 'Socket.io', 'Express.js', 'MongoDB', 'Cloudinary'],
    features: [
      'Real-time messaging and chat rooms',
      'Content sharing with media support',
      'Community groups and forums',
      'Advanced privacy and security controls',
      'Profile verification system',
      'Content moderation and reporting',
      'Friend recommendations algorithm',
      'Mobile-responsive design'
    ],
    screenshots: [
      'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400',
      'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600&h=400'
    ],
    technical: {
      frontend: [
        'React.js with TypeScript',
        'Socket.io Client for real-time features',
        'React Query for data management',
        'Styled Components for styling',
        'React Hook Form for forms'
      ],
      backend: [
        'Node.js with Express',
        'Socket.io for real-time communication',
        'MongoDB with Mongoose',
        'Cloudinary for media storage',
        'JWT authentication with refresh tokens'
      ]
    },
    codeExamples: [
      {
        filename: 'ChatRoom.tsx',
        language: 'TypeScript React',
        code: `import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import { Send, Smile, Paperclip, MoreVertical } from 'lucide-react';
import { Message, User } from '../types';
import MessageBubble from './MessageBubble';
import EmojiPicker from './EmojiPicker';

interface ChatRoomProps {
  roomId: string;
  currentUser: User;
  onLeaveRoom: () => void;
}

const ChatRoom: React.FC<ChatRoomProps> = ({ 
  roomId, 
  currentUser, 
  onLeaveRoom 
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [typingUsers, setTypingUsers] = useState<string[]>([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    // Initialize socket connection
    const newSocket = io(process.env.REACT_APP_SERVER_URL || 'http://localhost:5000', {
      auth: {
        token: localStorage.getItem('authToken'),
        userId: currentUser.id,
      }
    });

    setSocket(newSocket);

    // Join room
    newSocket.emit('joinRoom', { roomId, user: currentUser });

    // Listen for messages
    newSocket.on('message', (message: Message) => {
      setMessages(prev => [...prev, message]);
    });

    // Listen for typing indicators
    newSocket.on('userTyping', ({ userId, username }: { userId: string, username: string }) => {
      if (userId !== currentUser.id) {
        setTypingUsers(prev => 
          prev.includes(username) ? prev : [...prev, username]
        );
      }
    });

    newSocket.on('userStoppedTyping', ({ userId, username }: { userId: string, username: string }) => {
      setTypingUsers(prev => prev.filter(user => user !== username));
    });

    // Listen for online users
    newSocket.on('roomUsers', (users: User[]) => {
      setOnlineUsers(users);
    });

    // Load message history
    newSocket.emit('getMessageHistory', roomId);
    newSocket.on('messageHistory', (history: Message[]) => {
      setMessages(history);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [roomId, currentUser]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.trim() || !socket) return;

    const message: Omit<Message, 'id' | 'timestamp'> = {
      content: newMessage.trim(),
      senderId: currentUser.id,
      senderName: currentUser.username,
      senderAvatar: currentUser.avatar,
      roomId,
      type: 'text'
    };

    socket.emit('sendMessage', message);
    setNewMessage('');
    handleStopTyping();
  };

  const handleTyping = (value: string) => {
    setNewMessage(value);

    if (!socket) return;

    if (!isTyping) {
      setIsTyping(true);
      socket.emit('typing', { roomId, user: currentUser });
    }

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Set new timeout
    typingTimeoutRef.current = setTimeout(() => {
      handleStopTyping();
    }, 1000);
  };

  const handleStopTyping = () => {
    if (isTyping && socket) {
      setIsTyping(false);
      socket.emit('stopTyping', { roomId, user: currentUser });
    }
    
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
  };

  const handleEmojiSelect = (emoji: string) => {
    setNewMessage(prev => prev + emoji);
    setShowEmojiPicker(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !socket) return;

    // Handle file upload logic here
    const formData = new FormData();
    formData.append('file', file);
    formData.append('roomId', roomId);
    formData.append('senderId', currentUser.id);

    // This would typically be handled by a separate API call
    // socket.emit('uploadFile', formData);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <h2 className="text-lg font-semibold">Room: {roomId}</h2>
          <span className="text-sm text-gray-500">
            {onlineUsers.length} online
          </span>
        </div>
        <button
          onClick={onLeaveRoom}
          className="text-gray-500 hover:text-gray-700"
        >
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isOwn={message.senderId === currentUser.id}
          />
        ))}
        
        {/* Typing Indicator */}
        {typingUsers.length > 0 && (
          <div className="text-sm text-gray-500 italic">
            {typingUsers.join(', ')} {typingUsers.length === 1 ? 'is' : 'are'} typing...
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => handleTyping(e.target.value)}
              placeholder="Type a message..."
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            
            {/* Emoji Picker */}
            <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="text-gray-500 hover:text-gray-700"
              >
                <Smile size={20} />
              </button>
              
              {showEmojiPicker && (
                <div className="absolute bottom-full right-0 mb-2">
                  <EmojiPicker onEmojiSelect={handleEmojiSelect} />
                </div>
              )}
            </div>
          </div>

          {/* File Upload */}
          <label className="cursor-pointer text-gray-500 hover:text-gray-700">
            <Paperclip size={20} />
            <input
              type="file"
              className="hidden"
              onChange={handleFileUpload}
              accept="image/*,video/*,.pdf,.doc,.docx"
            />
          </label>

          {/* Send Button */}
          <button
            type="submit"
            disabled={!newMessage.trim()}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white p-2 rounded-full transition-colors"
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;`
      },
      {
        filename: 'socketHandlers.js',
        language: 'Node.js',
        code: `const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');
const Message = require('../models/Message');
const User = require('../models/User');
const Room = require('../models/Room');

class SocketHandler {
  constructor(server) {
    this.io = new Server(server, {
      cors: {
        origin: process.env.CLIENT_URL || "http://localhost:3000",
        methods: ["GET", "POST"]
      }
    });

    this.connectedUsers = new Map();
    this.roomUsers = new Map();
    
    this.setupMiddleware();
    this.setupEventHandlers();
  }

  setupMiddleware() {
    // Authentication middleware
    this.io.use(async (socket, next) => {
      try {
        const token = socket.handshake.auth.token;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const user = await User.findById(decoded.userId).select('-password');
        if (!user) {
          return next(new Error('User not found'));
        }

        socket.userId = user._id.toString();
        socket.user = user;
        next();
      } catch (error) {
        next(new Error('Authentication failed'));
      }
    });
  }

  setupEventHandlers() {
    this.io.on('connection', (socket) => {
      console.log(\`User \${socket.user.username} connected\`);
      
      // Store connected user
      this.connectedUsers.set(socket.userId, {
        socketId: socket.id,
        user: socket.user,
        lastSeen: new Date()
      });

      // Handle joining rooms
      socket.on('joinRoom', async ({ roomId, user }) => {
        try {
          await this.handleJoinRoom(socket, roomId, user);
        } catch (error) {
          socket.emit('error', { message: 'Failed to join room' });
        }
      });

      // Handle leaving rooms
      socket.on('leaveRoom', async ({ roomId }) => {
        try {
          await this.handleLeaveRoom(socket, roomId);
        } catch (error) {
          socket.emit('error', { message: 'Failed to leave room' });
        }
      });

      // Handle sending messages
      socket.on('sendMessage', async (messageData) => {
        try {
          await this.handleSendMessage(socket, messageData);
        } catch (error) {
          socket.emit('error', { message: 'Failed to send message' });
        }
      });

      // Handle typing indicators
      socket.on('typing', ({ roomId, user }) => {
        socket.to(roomId).emit('userTyping', { 
          userId: user.id, 
          username: user.username 
        });
      });

      socket.on('stopTyping', ({ roomId, user }) => {
        socket.to(roomId).emit('userStoppedTyping', { 
          userId: user.id, 
          username: user.username 
        });
      });

      // Handle message history requests
      socket.on('getMessageHistory', async (roomId) => {
        try {
          const messages = await Message.find({ roomId })
            .sort({ timestamp: -1 })
            .limit(50)
            .populate('sender', 'username avatar')
            .lean();

          socket.emit('messageHistory', messages.reverse());
        } catch (error) {
          socket.emit('error', { message: 'Failed to load message history' });
        }
      });

      // Handle disconnection
      socket.on('disconnect', () => {
        this.handleDisconnect(socket);
      });
    });
  }

  async handleJoinRoom(socket, roomId, user) {
    // Verify room exists or create it
    let room = await Room.findById(roomId);
    if (!room) {
      room = new Room({
        _id: roomId,
        name: \`Room \${roomId}\`,
        participants: [user.id],
        createdBy: user.id
      });
      await room.save();
    }

    // Join socket room
    socket.join(roomId);

    // Track room users
    if (!this.roomUsers.has(roomId)) {
      this.roomUsers.set(roomId, new Set());
    }
    this.roomUsers.get(roomId).add(socket.userId);

    // Get current room users
    const roomUserIds = Array.from(this.roomUsers.get(roomId));
    const roomUsers = await User.find({ 
      _id: { $in: roomUserIds } 
    }).select('username avatar status');

    // Notify room about new user
    this.io.to(roomId).emit('userJoined', {
      user: socket.user,
      message: \`\${socket.user.username} joined the room\`
    });

    // Send current room users to all participants
    this.io.to(roomId).emit('roomUsers', roomUsers);

    console.log(\`User \${socket.user.username} joined room \${roomId}\`);
  }

  async handleLeaveRoom(socket, roomId) {
    socket.leave(roomId);

    // Remove from room users tracking
    if (this.roomUsers.has(roomId)) {
      this.roomUsers.get(roomId).delete(socket.userId);
      
      // Clean up empty room tracking
      if (this.roomUsers.get(roomId).size === 0) {
        this.roomUsers.delete(roomId);
      }
    }

    // Notify room about user leaving
    socket.to(roomId).emit('userLeft', {
      user: socket.user,
      message: \`\${socket.user.username} left the room\`
    });

    // Update room users list
    if (this.roomUsers.has(roomId)) {
      const roomUserIds = Array.from(this.roomUsers.get(roomId));
      const roomUsers = await User.find({ 
        _id: { $in: roomUserIds } 
      }).select('username avatar status');
      
      this.io.to(roomId).emit('roomUsers', roomUsers);
    }

    console.log(\`User \${socket.user.username} left room \${roomId}\`);
  }

  async handleSendMessage(socket, messageData) {
    // Create and save message
    const message = new Message({
      content: messageData.content,
      sender: socket.userId,
      roomId: messageData.roomId,
      type: messageData.type || 'text',
      timestamp: new Date()
    });

    await message.save();
    await message.populate('sender', 'username avatar');

    // Broadcast message to room
    this.io.to(messageData.roomId).emit('message', {
      id: message._id,
      content: message.content,
      senderId: message.sender._id,
      senderName: message.sender.username,
      senderAvatar: message.sender.avatar,
      roomId: message.roomId,
      type: message.type,
      timestamp: message.timestamp
    });

    console.log(\`Message sent in room \${messageData.roomId} by \${socket.user.username}\`);
  }

  handleDisconnect(socket) {
    console.log(\`User \${socket.user.username} disconnected\`);
    
    // Remove from connected users
    this.connectedUsers.delete(socket.userId);

    // Remove from all room tracking
    for (const [roomId, users] of this.roomUsers.entries()) {
      if (users.has(socket.userId)) {
        users.delete(socket.userId);
        
        // Notify room about user disconnection
        socket.to(roomId).emit('userLeft', {
          user: socket.user,
          message: \`\${socket.user.username} disconnected\`
        });

        // Clean up empty rooms
        if (users.size === 0) {
          this.roomUsers.delete(roomId);
        }
      }
    }
  }

  // Utility methods
  getUsersInRoom(roomId) {
    return this.roomUsers.get(roomId) || new Set();
  }

  isUserOnline(userId) {
    return this.connectedUsers.has(userId);
  }

  sendToUser(userId, event, data) {
    const userConnection = this.connectedUsers.get(userId);
    if (userConnection) {
      this.io.to(userConnection.socketId).emit(event, data);
    }
  }
}

module.exports = SocketHandler;`
      }
    ]
  },

  'spotify-clone': {
    id: 'spotify-clone',
    title: 'Spotify Clone',
    description: 'Full-featured music streaming application with playlist management and audio controls',
    fullDescription: 'A comprehensive Spotify clone that replicates the core functionality of the popular music streaming platform. Features include user authentication, playlist creation and management, music search, audio playback controls, and a responsive design that works seamlessly across devices. Built with modern web technologies to provide a smooth and intuitive music streaming experience.',
    heroImage: 'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    screenshots: [
      'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'https://images.pexels.com/photos/3756766/pexels-photo-3756766.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
    ],
    technologies: ['React.js', 'JavaScript', 'CSS3', 'HTML5', 'Web Audio API'],
    githubUrl: 'https://github.com/Rashmi0607/Spotify-Clone-',
    liveUrl: 'https://spotify-clone-demo.vercel.app',
    year: '2024',
    rating: '96%',
    duration: '3 months',
    timeline: 'March 2024 - May 2024',
    type: 'Music Streaming Platform',
    features: [
      'User authentication and profile management',
      'Music search and discovery',
      'Playlist creation and management',
      'Audio playback controls with seek functionality',
      'Responsive design for all devices',
      'Like/unlike songs and save to library',
      'Recently played tracks history',
      'Volume control and shuffle/repeat modes'
    ],
    technical: {
      frontend: [
        'React.js with functional components and hooks',
        'Context API for state management',
        'CSS3 with Flexbox and Grid layouts',
        'Web Audio API for music playback',
        'Responsive design with media queries'
      ],
      backend: [
        'Local storage for user preferences',
        'JSON data for music library',
        'Audio file management',
        'Browser APIs integration'
      ]
    },
    codeExamples: [
      {
        filename: 'MusicPlayer.jsx',
        language: 'JavaScript',
        code: `import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';

const MusicPlayer = ({ currentSong, playlist, onNext, onPrevious }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener('timeupdate', updateTime);
      audio.addEventListener('loadedmetadata', updateDuration);
      return () => {
        audio.removeEventListener('timeupdate', updateTime);
        audio.removeEventListener('loadedmetadata', updateDuration);
      };
    }
  }, []);

  const updateTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const updateDuration = () => {
    setDuration(audioRef.current.duration);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * duration;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div className="music-player">
      <audio
        ref={audioRef}
        src={currentSong?.audioUrl}
        volume={volume}
      />
      <div className="player-controls">
        <button onClick={onPrevious}>
          <SkipBack size={20} />
        </button>
        <button onClick={togglePlayPause} className="play-button">
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </button>
        <button onClick={onNext}>
          <SkipForward size={20} />
        </button>
      </div>
      <div className="progress-bar">
        <input
          type="range"
          min="0"
          max="100"
          value={(currentTime / duration) * 100 || 0}
          onChange={handleSeek}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;`
      },
      {
        filename: 'PlaylistManager.jsx',
        language: 'JavaScript',
        code: `import React, { useState, useContext } from 'react';
import { MusicContext } from '../context/MusicContext';
import { Plus, Heart, MoreHorizontal } from 'lucide-react';

const PlaylistManager = () => {
  const { playlists, createPlaylist, addToPlaylist } = useContext(MusicContext);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newPlaylistName, setNewPlaylistName] = useState('');

  const handleCreatePlaylist = (e) => {
    e.preventDefault();
    if (newPlaylistName.trim()) {
      createPlaylist({
        id: Date.now(),
        name: newPlaylistName,
        songs: [],
        createdAt: new Date().toISOString()
      });
      setNewPlaylistName('');
      setShowCreateForm(false);
    }
  };

  return (
    <div className="playlist-manager">
      <div className="playlist-header">
        <h2>Your Playlists</h2>
        <button 
          onClick={() => setShowCreateForm(true)}
          className="create-playlist-btn"
        >
          <Plus size={16} />
          Create Playlist
        </button>
      </div>

      {showCreateForm && (
        <form onSubmit={handleCreatePlaylist} className="create-form">
          <input
            type="text"
            value={newPlaylistName}
            onChange={(e) => setNewPlaylistName(e.target.value)}
            placeholder="Enter playlist name"
            autoFocus
          />
          <div className="form-actions">
            <button type="submit">Create</button>
            <button 
              type="button" 
              onClick={() => setShowCreateForm(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="playlists-grid">
        {playlists.map(playlist => (
          <div key={playlist.id} className="playlist-card">
            <div className="playlist-cover">
              <img 
                src={playlist.coverImage || '/default-playlist.jpg'} 
                alt={playlist.name}
              />
            </div>
            <div className="playlist-info">
              <h3>{playlist.name}</h3>
              <p>{playlist.songs.length} songs</p>
            </div>
            <button className="playlist-menu">
              <MoreHorizontal size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaylistManager;`
      }
    ]
  },

  'skin-cancer-detection': {
    id: 'skin-cancer-detection',
    title: 'Skin Cancer Detection Android App',
    heroImage: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    fullDescription: 'Built a mobile application in Android Studio for early skin cancer detection, improving accessibility to AI-driven healthcare tools. The app uses CNN models to classify skin lesion images with 70% accuracy and provides real-time analysis.',
    features: [
      'CNN model integration with 70% accuracy in skin lesion classification',
      'Real-time image analysis and prediction capabilities',
      'Python-based AI model integration with mobile app',
      'Optimized image upload and prediction feature',
      'User-friendly interface for healthcare accessibility',
      'Reduced analysis time for enhanced user experience',
      'Early detection support for skin cancer screening',
      'Mobile-first design for accessibility'
    ],
    technologies: ['Android Studio', 'Python', 'TensorFlow', 'CNN', 'Java', 'AI/ML'],
    githubUrl: 'https://github.com/Rashmi0607',
    liveUrl: '#',
    year: '2024',
    rating: '94% Match',
    duration: '4 months',
    timeline: 'January 2024 - April 2024',
    type: 'Healthcare AI Application',
    screenshots: [
      'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'https://images.pexels.com/photos/4386465/pexels-photo-4386465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
    ],
    codeExamples: [
      {
        filename: 'MainActivity.java',
        language: 'Java',
        code: `public class MainActivity extends AppCompatActivity {
    private ImageView imageView;
    private Button selectImageBtn, predictBtn;
    private TextView resultText;
    private Bitmap selectedImage;
    
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        
        initializeViews();
        setupClickListeners();
    }
    
    private void initializeViews() {
        imageView = findViewById(R.id.imageView);
        selectImageBtn = findViewById(R.id.selectImageBtn);
        predictBtn = findViewById(R.id.predictBtn);
        resultText = findViewById(R.id.resultText);
    }
    
    private void setupClickListeners() {
        selectImageBtn.setOnClickListener(v -> selectImage());
        predictBtn.setOnClickListener(v -> predictSkinCondition());
    }
    
    private void predictSkinCondition() {
        if (selectedImage != null) {
            // Process image and get prediction
            String prediction = processImageWithModel(selectedImage);
            resultText.setText("Prediction: " + prediction);
        }
    }
}`
      },
      {
        filename: 'model_prediction.py',
        language: 'Python',
        code: `import tensorflow as tf
import numpy as np
from PIL import Image
import cv2

class SkinCancerPredictor:
    def __init__(self, model_path):
        self.model = tf.keras.models.load_model(model_path)
        self.classes = ['Benign', 'Malignant']
    
    def preprocess_image(self, image_path):
        """Preprocess image for model prediction"""
        image = cv2.imread(image_path)
        image = cv2.resize(image, (224, 224))
        image = image / 255.0
        image = np.expand_dims(image, axis=0)
        return image
    
    def predict(self, image_path):
        """Make prediction on skin lesion image"""
        processed_image = self.preprocess_image(image_path)
        prediction = self.model.predict(processed_image)
        confidence = np.max(prediction)
        predicted_class = self.classes[np.argmax(prediction)]
        
        return {
            'prediction': predicted_class,
            'confidence': float(confidence),
            'accuracy': '70%'
        }

# Usage
predictor = SkinCancerPredictor('skin_cancer_model.h5')
result = predictor.predict('skin_lesion.jpg')`
      }
    ],
    technical: {
      frontend: [
        'Android Studio for mobile development',
        'Java for Android application logic',
        'XML for UI layout design',
        'Custom image processing components',
        'Real-time camera integration'
      ],
      backend: [
        'Python for AI model development',
        'TensorFlow for CNN implementation',
        'OpenCV for image preprocessing',
        'NumPy for numerical computations',
        'Model optimization for mobile deployment'
      ]
    }
  },

  'mental-health-prediction': {
    id: 'mental-health-prediction',
    title: 'Mental Health Prediction using Machine Learning',
    heroImage: 'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    fullDescription: 'Developed a comprehensive classification system using Random Forest, Naive Bayes, and Logistic Regression for mental health analysis. The system analyzes survey and user response data to identify indicators of potential mental health issues with 94% accuracy.',
    features: [
      'Multiple ML algorithms: Random Forest, Naive Bayes, Logistic Regression',
      '94% overall accuracy in mental health prediction',
      'Survey and user response data analysis',
      'Comparative algorithm evaluation for optimal performance',
      'Real-world deployment ready model',
      'Comprehensive data preprocessing pipeline',
      'Feature importance analysis and selection',
      'Cross-validation for model reliability'
    ],
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/Rashmi0607',
    liveUrl: '#',
    year: '2024',
    rating: '96% Match',
    duration: '3 months',
    timeline: 'February 2024 - April 2024',
    type: 'Machine Learning Classification System',
    screenshots: [
      'https://images.pexels.com/photos/3683107/pexels-photo-3683107.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800&h=600',
      'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&w=800&h=600'
    ],
    codeExamples: [
      {
        filename: 'mental_health_predictor.py',
        language: 'Python',
        code: `import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score, classification_report

class MentalHealthPredictor:
    def __init__(self):
        self.models = {
            'Random Forest': RandomForestClassifier(n_estimators=100, random_state=42),
            'Naive Bayes': GaussianNB(),
            'Logistic Regression': LogisticRegression(random_state=42)
        }
        self.scaler = StandardScaler()
        self.best_model = None
        self.best_accuracy = 0
    
    def preprocess_data(self, data):
        """Preprocess survey data for model training"""
        # Handle missing values
        data = data.fillna(data.mean())
        
        # Feature scaling
        features = data.drop('mental_health_condition', axis=1)
        target = data['mental_health_condition']
        
        features_scaled = self.scaler.fit_transform(features)
        return features_scaled, target
    
    def train_models(self, X, y):
        """Train and evaluate multiple ML models"""
        X_train, X_test, y_train, y_test = train_test_split(
            X, y, test_size=0.2, random_state=42
        )
        
        results = {}
        
        for name, model in self.models.items():
            # Train model
            model.fit(X_train, y_train)
            
            # Make predictions
            y_pred = model.predict(X_test)
            accuracy = accuracy_score(y_test, y_pred)
            
            # Cross-validation
            cv_scores = cross_val_score(model, X, y, cv=5)
            
            results[name] = {
                'accuracy': accuracy,
                'cv_mean': cv_scores.mean(),
                'cv_std': cv_scores.std()
            }
            
            # Track best model
            if accuracy > self.best_accuracy:
                self.best_accuracy = accuracy
                self.best_model = model
        
        return results
    
    def predict(self, user_data):
        """Make prediction for new user data"""
        if self.best_model is None:
            raise ValueError("Model not trained yet!")
        
        user_data_scaled = self.scaler.transform([user_data])
        prediction = self.best_model.predict(user_data_scaled)[0]
        probability = self.best_model.predict_proba(user_data_scaled)[0]
        
        return {
            'prediction': prediction,
            'confidence': max(probability),
            'risk_level': 'High' if max(probability) > 0.7 else 'Moderate'
        }

# Usage Example
predictor = MentalHealthPredictor()
data = pd.read_csv('mental_health_survey.csv')
X, y = predictor.preprocess_data(data)
results = predictor.train_models(X, y)

print("Model Performance:")
for model, metrics in results.items():
    print(f"{model}: {metrics['accuracy']:.2%} accuracy")`
      },
      {
        filename: 'data_analysis.py',
        language: 'Python',
        code: `import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import confusion_matrix

def analyze_model_performance(models, X_test, y_test):
    """Analyze and visualize model performance"""
    fig, axes = plt.subplots(2, 2, figsize=(15, 12))
    
    for idx, (name, model) in enumerate(models.items()):
        if idx >= 3:  # Only plot first 3 models
            break
            
        y_pred = model.predict(X_test)
        cm = confusion_matrix(y_test, y_pred)
        
        # Plot confusion matrix
        row, col = idx // 2, idx % 2
        sns.heatmap(cm, annot=True, fmt='d', ax=axes[row, col])
        axes[row, col].set_title(f'{name} - Confusion Matrix')
        axes[row, col].set_xlabel('Predicted')
        axes[row, col].set_ylabel('Actual')
    
    plt.tight_layout()
    plt.show()

def feature_importance_analysis(model, feature_names):
    """Analyze feature importance for Random Forest"""
    if hasattr(model, 'feature_importances_'):
        importances = model.feature_importances_
        indices = np.argsort(importances)[::-1]
        
        plt.figure(figsize=(12, 8))
        plt.title("Feature Importance in Mental Health Prediction")
        plt.bar(range(len(importances)), importances[indices])
        plt.xticks(range(len(importances)), 
                  [feature_names[i] for i in indices], rotation=45)
        plt.tight_layout()
        plt.show()
        
        return dict(zip([feature_names[i] for i in indices], 
                       importances[indices]))`
      }
    ],
    technical: {
      frontend: [
        'Python for data analysis and visualization',
        'Matplotlib and Seaborn for data visualization',
        'Jupyter Notebook for interactive development',
        'Pandas for data manipulation',
        'Custom dashboard for result presentation'
      ],
      backend: [
        'Scikit-learn for machine learning algorithms',
        'NumPy for numerical computations',
        'Cross-validation for model validation',
        'Feature engineering and selection',
        'Model comparison and optimization'
      ]
    }
  }
};

// Helper function to get project by slug
export const getProjectBySlug = (slug: string) => {
  return projectsData[slug as keyof typeof projectsData] || null;
};

// Helper function to get all project slugs
export const getAllProjectSlugs = () => {
  return Object.keys(projectsData);
};