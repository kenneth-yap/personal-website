'use client';

import { motion } from 'framer-motion';

interface Award {
  title: string;
  year: string;
  achievement?: string;
  institution?: string;
  description?: string;
  type?: string;
}

interface AwardCardProps {
  award: Award;
  index: number;
}

export default function AwardCard({ award, index }: AwardCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-sm font-semibold text-white leading-tight pr-2">
          {award.title}
        </h4>
        <span className="text-xs text-blue-400 font-medium whitespace-nowrap">
          {award.year}
        </span>
      </div>
      
      {award.achievement && (
        <p className="text-xs text-green-400 mb-1">{award.achievement}</p>
      )}
      
      {award.institution && (
        <p className="text-xs text-gray-400">{award.institution}</p>
      )}
      
      {award.description && (
        <p className="text-xs text-gray-400">{award.description}</p>
      )}
      
      {award.type && (
        <p className="text-xs text-gray-400">{award.type}</p>
      )}
    </motion.div>
  );
}