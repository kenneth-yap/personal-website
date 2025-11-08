'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Project {
  title: string;
  subtitle: string;
  image: string;
  technologies?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
    >
      {project.link ? (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
          <ProjectContent project={project} />
        </a>
      ) : (
        <ProjectContent project={project} />
      )}
    </motion.div>
  );
}

function ProjectContent({ project }: { project: Project }) {
  return (
    <>
      <div className="relative h-48 bg-slate-700">
        {/* Placeholder for project image */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <span className="text-sm">Image: {project.image}</span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-3">{project.subtitle}</p>
        {project.technologies && (
          <p className="text-sm text-blue-400">{project.technologies}</p>
        )}
      </div>
    </>
  );
}
