import React, { useState } from 'react';
import { PROJECTS, WHATSAPP_LINK } from '../constants';
import { Project, ProjectCategory } from '../types';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = PROJECTS.filter(project => 
    filter === 'all' ? true : project.category === filter
  );

  const getButtonClasses = (category: ProjectCategory | 'all') => {
    return `px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
      filter === category ? 'bg-primary text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-200'
    }`;
  };

  return (
    <section id="projects" className="py-20 bg-slate-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Projelerimiz</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Çarpıcı iç ve dış mekan LED kurulum portföyümüzü keşfedin.
          </p>
        </div>

        <div className="flex justify-center space-x-2 md:space-x-4 mb-12">
          <button onClick={() => setFilter('all')} className={getButtonClasses('all')}>Tümü</button>
          <button onClick={() => setFilter(ProjectCategory.Indoor)} className={getButtonClasses(ProjectCategory.Indoor)}>İç Mekan</button>
          <button onClick={() => setFilter(ProjectCategory.Outdoor)} className={getButtonClasses(ProjectCategory.Outdoor)}>Dış Mekan</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: Project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        <div className="text-center mt-16">
            <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-secondary hover:bg-secondary-hover text-white font-bold py-4 px-10 rounded-full text-lg uppercase transition-all duration-300 transform hover:scale-105"
            >
                Teklif Alın
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;