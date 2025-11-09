'use client';

import { motion } from 'framer-motion';

interface EducationItem {
  year: string;
  degree: string;
  institution: string;
  details: string;
  highlights: string;
}

interface EducationCardProps {
  item: EducationItem;
  index: number;
}

export default function EducationCard({ item, index }: EducationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 pb-12 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors group"
    >
      {/* Timeline dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900 group-hover:scale-125 transition-transform"></div>
      
      {/* Year badge */}
      <div className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-blue-400 bg-blue-500/10 rounded-full">
        {item.year}
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2">{item.degree}</h3>
      <p className="text-lg text-gray-300 mb-2">{item.institution}</p>
      <p className="text-gray-400 mb-3">{item.details}</p>
      
      {/* Highlights */}
      {item.highlights && (
        <div className="flex flex-wrap gap-2">
          {item.highlights.split(' | ').map((highlight, i) => (
            <span
              key={i}
              className="px-3 py-1 text-sm bg-slate-800 text-blue-300 rounded-full"
            >
              {highlight}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}
