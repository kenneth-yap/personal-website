'use client';

import { motion } from 'framer-motion';
import { education, achievements } from '@/data/content';
import AchievementYear from '@/components/AchievementYear';
import WorldMap from '@/components/WorldMap';

export default function Home() {
  return (
    <main className="min-h-screen text-white relative">
  {/* Background Image */}
  <div className="fixed inset-0 z-0">
    <img
      src="/images/bg.jpg"
      alt="Background"
      className="w-full h-full object-cover"
    />
    {/* Dark overlay to make text readable */}
    <div className="absolute inset-0 bg-slate-900/85"></div>
  </div>

  {/* All content */}
  <div className="relative z-10">

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Profile Picture */}
          <div className="mb-6 flex justify-center">
            <img
              src="/images/profile_picture.jpeg"
              alt="Kenneth Yap"
              className="w-40 h-40 rounded-full object-cover border-4 border-blue-500 shadow-xl hover:scale-105 transition-transform duration-300"
            />
          </div>

          <div className="mb-4 text-blue-400">
            📍 Cambridge, United Kingdom
          </div>
          <h1 className="text-5xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Kenneth Yap
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-8">
            Doctoral Scholar @ University of Cambridge
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Kenneth's research is on Inter-Organizational (B2B) Information Systems, specifically how Software Agents and Digital Twins can enable collaboration. He is affiliated with Queens&apos; College at the University of Cambridge, EPSRC Centre for Doctoral Training in 
            Future Infrastructure and Built Environment (FIBE2 CDT), and the Distributed Information & Automation Laboratory (DIAL)
            at the Institute for Manufacturing (IfM).
          </p>

        </motion.div>
      </section>

      {/* Education Section - Horizontal Scroll */}
      <section className="py-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">Education</h2>
            <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
              Curious at heart
            </p>
          </div>
          
          {/* Horizontal scrollable container */}
          <div className="relative">
            <div className="overflow-x-auto pb-4 hide-scrollbar">
              <div className="flex gap-6 px-4 md:px-8 lg:px-12" style={{ width: 'max-content' }}>
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-[400px] flex-shrink-0"
                  >
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300 h-full">
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
                              className="px-3 py-1 text-sm bg-slate-900/50 text-blue-300 rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Scroll hint */}
            <div className="text-center mt-4 text-gray-500 text-sm">
              <span className="hidden md:inline">← Scroll to explore →</span>
              <span className="md:hidden">Swipe to explore →</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Achievements Timeline Section */}
      <section className="container mx-auto px-4 py-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Achievements Timeline</h2>
          <p className="text-center text-gray-400 mb-8">
          My research is about stuff. It begins with a study of some stuff, and then of some other unrelated stuff but better. It does not really end. But really, it is of the utmost importance.
          </p>
          
          {/* Summary stats - MOVED TO TOP */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
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
              <div className="text-3xl font-bold text-blue-400">2</div>
              <div className="text-sm text-gray-400">Conferences</div>
            </div>
          </motion.div>

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

      {/* World Map Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Travel Log</h2>
          <p className="text-center text-gray-400 mb-12">
            30+ countries across Europe, Asia, Africa, and Oceania
          </p>
          
          <div className="max-w-6xl mx-auto bg-slate-800/30 backdrop-blur-sm rounded-lg p-4 md:p-8 border border-slate-700/50">
            <WorldMap />
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4">Get in Touch</h2>
          <p className="text-center text-gray-400 mb-12">
            Connect with me on social media and professional platforms
          </p>
          
          <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* LinkedIn */}
            <motion.a
              href="https://linkedin.com/in/hoong-hao-yap"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0077B5] rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 group"
            >
              <svg className="w-8 h-8 mx-auto mb-2 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <h3 className="text-sm font-semibold text-white">LinkedIn</h3>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/dailyyapss"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/50 group"
            >
              <svg className="w-8 h-8 mx-auto mb-2 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
              </svg>
              <h3 className="text-sm font-semibold text-white">Instagram</h3>
            </motion.a>

            {/* GitHub */}
            <motion.a
              href="https://github.com/kenneth-yap"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#181717] rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50 group"
            >
              <svg className="w-8 h-8 mx-auto mb-2 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <h3 className="text-sm font-semibold text-white">GitHub</h3>
            </motion.a>

            {/* ResearchGate */}
            <motion.a
              href="https://www.researchgate.net/profile/Hoong-Hao-Yap-2?ev=hdr_xprf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#00CCBB] rounded-lg p-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/50 group"
            >
              <svg className="w-8 h-8 mx-auto mb-2 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.586 0c.818 0 1.508.19 2.073.565.563.377.948.942 1.152 1.7.202.758.203 1.712.203 2.865v13.74c0 1.153-.001 2.107-.203 2.865-.204.758-.59 1.323-1.152 1.7-.565.376-1.255.565-2.073.565H4.414c-.818 0-1.508-.19-2.073-.565-.563-.377-.948-.942-1.152-1.7C1.002 20.977 1 20.023 1 18.87V5.13c0-1.153.002-2.107.19-2.865.204-.758.589-1.323 1.152-1.7C2.906.189 3.596 0 4.414 0zM7.2 14.995c0 .96-.2 1.686-.602 2.175-.4.49-.98.735-1.74.735-.761 0-1.34-.245-1.74-.735-.4-.49-.602-1.215-.602-2.175 0-.959.2-1.686.602-2.175.4-.49.979-.735 1.74-.735.76 0 1.34.245 1.74.735.401.49.602 1.216.602 2.175zm11.76 3.645c.11.06.218.085.316.085.121 0 .229-.037.316-.085l2.157-1.284c.087-.05.155-.12.198-.218.043-.098.043-.192 0-.29l-2.157-1.284c-.087-.05-.195-.085-.316-.085-.11 0-.218.035-.316.085l-2.157 1.284c-.087.05-.155.12-.198.218-.043.098-.043.192 0 .29l2.157 1.284zm-11.76-1.25c-.44 0-.775-.13-1.004-.392-.23-.261-.345-.655-.345-1.18 0-.526.115-.92.345-1.182.23-.261.564-.392 1.004-.392.44 0 .775.13 1.005.392.23.262.345.656.345 1.182 0 .525-.115.919-.345 1.18-.23.262-.565.392-1.005.392zm11.76.915c.33 0 .602-.109.818-.327.215-.218.323-.49.323-.817 0-.327-.108-.6-.323-.818-.216-.218-.488-.327-.818-.327-.33 0-.602.109-.818.327-.215.218-.323.49-.323.818 0 .327.108.6.323.817.216.218.488.327.818.327zm-5.14-10.41c-.44 0-.775-.13-1.005-.392-.23-.261-.345-.655-.345-1.18 0-.526.115-.92.345-1.182.23-.261.565-.392 1.005-.392.44 0 .775.13 1.004.392.23.262.345.656.345 1.182 0 .525-.115.919-.345 1.18-.23.262-.564.392-1.004.392z"/>
              </svg>
              <h3 className="text-sm font-semibold text-white">ResearchGate</h3>
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Kenneth Yap. All rights reserved.</p>
      </footer>
      </div> {/* Close relative z-10 wrapper */}
      </main>
  );
}