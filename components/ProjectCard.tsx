
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const positionClass =
    project.imagePosition === 'bottom'
      ? 'object-bottom'
      : project.imagePosition === 'top'
      ? 'object-top'
      : project.imagePosition === 'left'
      ? 'object-left'
      : project.imagePosition === 'right'
      ? 'object-right'
      : 'object-center';

  return (
    <div className="bg-light rounded-lg overflow-hidden shadow-md group transform transition-transform duration-300 hover:-translate-y-2 border border-slate-200">
      <div className="relative overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className={`w-full h-56 object-cover ${positionClass} transition-transform duration-500 group-hover:scale-110`} />
        <div className="absolute top-2 right-2 bg-primary/80 text-white text-xs font-bold px-2 py-1 rounded-full">
            {project.category === 'Indoor' ? 'İç Mekan' : 'Dış Mekan'}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
        <p className="text-slate-600 text-sm">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
