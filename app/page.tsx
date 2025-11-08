'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectCard from '@/components/ProjectCard';
import TimelineItem from '@/components/TimelineItem';
import { projects, timeline2024, timeline2023 } from '@/data/content';

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
            Doctoral Scholar at EPSRC Centre for Doctoral Training in Future Infrastructure and Built Environment
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Kenneth holds a Master of Engineering from Imperial College London and ETH Zurich, 
            a Master of Research from the University of Cambridge and a Master of Science from 
            WorldQuant University. In 2028, he will graduate with a Doctor of Philosophy in 
            Engineering from the University of Cambridge. He is awarded the Associateship of the 
            City and Guilds Institute, and is working towards an Associate Fellowship of the 
            Higher Education Academy.
          </p>
        </motion.div>
      </section>

      {/* Journey Timeline */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">My Journey</h2>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold mb-6 text-blue-400">2024</h3>
            <div className="space-y-6 mb-12">
              {timeline2024.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6 text-blue-400">2023</h3>
            <div className="space-y-6">
              {timeline2023.map((item, index) => (
                <TimelineItem key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.blockquote
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl italic text-center text-gray-300 max-w-3xl mx-auto border-l-4 border-blue-500 pl-6"
        >
          School is one thing. Education is another. The two don&apos;t always overlap.
        </motion.blockquote>
      </section>

      {/* Data Science Portfolio */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Data Science Portfolio</h2>
          <p className="text-center text-gray-400 mb-12 text-lg">Kenneth is typing ...</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Kenneth Yap. All rights reserved.</p>
      </footer>
    </main>
  );
}
