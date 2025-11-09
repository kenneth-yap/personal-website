'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import EducationCard from '@/components/EducationCard';
import AwardCard from '@/components/AwardCard';
import { projects, education, achievements } from '@/data/content';
import AchievementYear from '@/components/AchievementYear';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="mb-4 text-blue-400">
            📍 Cambridge, United Kingdom
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Kenneth Yap
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            Doctoral Scholar @ University of Cambridge
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto mb-4">
            Kenneth holds a Master of Engineering from Imperial College London and ETH Zurich, 
            Master of Research from the University of Cambridge and a Master of Science from 
            WorldQuant University. He has been awarded the Associateship of the 
            City and Guilds Institute and the Associate Fellowship of the 
            Higher Education Academy. 
           </p> 
            
           <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Kenneth is affiliated with Queens' College, EPSRC Centre for Doctoral Training in 
            Future Infrastructure and Built Environment (FIBE2 CDT), and the Distributed Information & Automation Laboratory (DIAL)
            at the Institute for Manufacturing (IfM).
          </p>
        </motion.div>
      </section>

{/* Education Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Academic journey spanning civil engineering, infrastructure research, and financial engineering
          </p>
          
          <div className="max-w-4xl mx-auto">
            {education.map((item, index) => (
              <EducationCard key={index} item={item} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

 {/* Achievements Timeline Section */}
 <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Achievements Timeline</h2>
          <p className="text-center text-gray-400 mb-12">
            Six years of continuous recognition in academia, research, and innovation
          </p>
          
          <div className="max-w-5xl mx-auto">
            {achievements.map((yearData, index) => (
              <AchievementYear 
                key={yearData.year} 
                year={yearData.year}
                items={yearData.items}
                index={index}
              />
            ))}
          </div>

          {/* Summary stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
          >
            <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400">6</div>
              <div className="text-sm text-gray-400">Years</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400">20+</div>
              <div className="text-sm text-gray-400">Achievements</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400">10+</div>
              <div className="text-sm text-gray-400">Awards</div>
            </div>
            <div className="bg-slate-800/50 rounded-lg p-4 text-center border border-slate-700/50">
              <div className="text-3xl font-bold text-blue-400">5</div>
              <div className="text-sm text-gray-400">Scholarships</div>
            </div>
          </motion.div>
        </motion.div>
      </section>
```
      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Kenneth Yap. All rights reserved.</p>
      </footer>
    </main>
  );
}
