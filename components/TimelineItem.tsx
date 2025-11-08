'use client';

import { motion } from 'framer-motion';

interface TimelineItemData {
  month: string;
  content: string;
}

interface TimelineItemProps {
  item: TimelineItemData;
  index: number;
}

export default function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="flex gap-4 group"
    >
      <div className="flex-shrink-0 w-24 pt-1">
        <span className="text-blue-400 font-semibold">{item.month}</span>
      </div>
      <div className="flex-grow pb-8 border-l-2 border-slate-700 pl-6 group-hover:border-blue-500 transition-colors">
        <p className="text-gray-300 leading-relaxed">{item.content}</p>
      </div>
    </motion.div>
  );
}
