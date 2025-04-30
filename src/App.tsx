import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, CheckCircle, PlayCircle, Tv,
  BarChart3, Settings, Menu, X,
  Link, Star, Film, Award, Globe
} from 'lucide-react';
import logo from '/logo.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  // Pulse animation for glow effects
  const pulseGlow = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section
          id="top"
          className="scroll-mt-48 relative bg-black pt-32 pb-32 px-4 sm:px-6 lg:px-8 mt-36 mb-48 overflow-hidden"
        >
          {/* Animated Floating Emojis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 overflow-hidden pointer-events-none z-0"
          >
            {[...Array(20)].map((_, i) => {
              const emojis = ["🎬", "📺", "🎞️", "🎥"];
              const emoji = emojis[Math.floor(Math.random() * emojis.length)];

              const fontSize = Math.random() * 2 + 2; // 2rem – 4rem
              const top = Math.random() * 100;
              const left = Math.random() * 100;

              const travelX = Math.random() * 200 - 100; // -100 to +100 px
              const travelY = Math.random() * 300 - 150; // -150 to +150 px
              const rotation = Math.random() * 60 - 30;

              return (
                <motion.span
                  key={i}
                  className="absolute text-red-500 opacity-10"
                  style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    fontSize: `${fontSize}rem`,
                  }}
                  animate={{
                    x: [0, travelX, 0],
                    y: [0, travelY, 0],
                    rotate: [0, rotation, 0],
                    opacity: [0.05, 0.15, 0.05],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 8, // 8–18s
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: Math.random() * 6,
                  }}
                >
                  {emoji}
                </motion.span>
              );
            })}
          </motion.div>

          {/* Cinematic lighting effects */}
          <motion.div 
            className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-red-500/20 blur-3xl"
            variants={pulseGlow}
            initial="initial"
            animate="animate"
          />
          
          <motion.div 
            className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-orange-500/20 blur-3xl"
            variants={pulseGlow}
            initial="initial"
            animate="animate"
            style={{ animationDelay: "1.5s" }}
          />

          {/* Main Hero Content */}
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={0}
            >
              Get Your Film Seen & Monetized!
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-300 mb-8"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              FAST Channel Development & Indie Film Distribution
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                "FAST Platform Development",
                "Traditional Indie Film Distribution",
                "Revenue Optimization",
              ].map((text, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-lg text-gray-300"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index + 2}
                >
                  <Star className="w-6 h-6 text-red-500 mr-2" />
                  {text}
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-red-700 hover:to-orange-600 transition-colors shadow-lg shadow-red-900/30"
            >
              Submit Your Film or Content Today
            </motion.button>

            {/* Spinning reel effect */}
            <motion.div
              className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 opacity-10"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-64 h-64 rounded-full border-8 border-dashed border-red-500"></div>
            </motion.div>


            {/* Decorative film reel element */}
            <motion.div 
                className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 opacity-10"
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <div className="w-64 h-64 rounded-full border-8 border-dashed border-red-500"></div>
            </motion.div>
          </div>
        </section>

        {/* Problem Section with Wavy Top */}
        <section className="relative bg-gradient-to-br from-red-800 via-orange-700 to-yellow-600 pb-16 px-4 sm:px-6 lg:px-8" style={{ marginTop: '-2px' }}>
          {/* Wavy Top Edge */}
          <div className="absolute top-0 left-0 right-0 w-full overflow-hidden" style={{ height: '70px', transform: 'translateY(-99%)' }}>
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="absolute bottom-0 left-0 w-full h-full"
            >
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0V0Z" 
                className="fill-current text-red-800"
              ></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 pt-8">
              Most filmmakers and content owners are sitting on gold and don't even know it.
            </h2>
            <div className="bg-gray-900 border border-red-800/50 rounded-2xl p-8 shadow-lg shadow-red-900/30">
              <p className="text-xl text-gray-300 mb-8">
                In today's market, if you're not leveraging FAST platforms or digital distribution networks, you're leaving money and reach on the table.
              </p>
              <motion.div className="text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
                <p className="text-2xl mb-10 font-semibold text-red-400">
                  Are you struggling to:
                </p>
              </motion.div>
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {[
                  "Get your film or series accepted on platforms like Tubi or Amazon?",
                  "Understand how to launch your own FAST channel?",
                  "Navigate the technical, legal, and metadata maze of distribution?",
                  "Monetize through ad revenue, licensing, and global placement?"
                ].map((text, index) => (
                  <motion.div 
                    key={index}
                    className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-md hover:shadow-red-900/30 transform hover:scale-105 transition-all duration-300" 
                    variants={fadeUp}
                    custom={index}
                  >
                    <div className="flex items-start mb-4">
                      <Film className="w-8 h-8 text-red-500 mr-3 flex-shrink-0" />
                    </div>
                    <p className="text-lg text-gray-300">{text}</p>
                  </motion.div>
                ))}
              </motion.div>
              <motion.div className="text-center" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
                <p className="text-2xl font-semibold text-red-400">
                  Witease Media is your strategic solution.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black relative">
          {/* Background graphic element */}
          <div className="absolute inset-0 overflow-hidden opacity-5">
            <div className="absolute top-0 left-0 w-full h-full">
              {[...Array(10)].map((_, i) => (
                <div 
                  key={i} 
                  className="absolute bg-red-500" 
                  style={{
                    height: '1px',
                    width: '100%',
                    top: `${i * 10}%`,
                    opacity: 0.3,
                  }}
                />
              ))}
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div className="flex justify-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-center relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300">
                  We specialize in two high-growth lanes of distribution
                </span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 text-center shadow-lg shadow-red-900/10"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                custom={1}
              >
                <motion.h3
                  className="text-xl font-bold mb-4 text-red-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  FAST Platform Distribution
                </motion.h3>
                <motion.div
                  className="relative mx-auto max-w-xs mb-10 rounded overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent z-10"></div>
                  <img
                    src="/fast.png"
                    alt="FAST Distribution"
                    className="border border-red-900/30 h-auto object-contain"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 text-center shadow-lg shadow-red-900/10"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                custom={2}
              >
                <motion.h3
                  className="text-xl font-bold mb-4 text-red-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Traditional Indie Film Distribution
                </motion.h3>
                <motion.div
                  className="relative mx-auto max-w-xs mb-10 rounded overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 to-transparent z-10"></div>
                  <img
                    src="/indie.png"
                    alt="Indie Distribution"
                    className="border border-red-900/30 h-auto object-contain"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Cinematic Divider */}
        <div className="-mt-1 w-full overflow-hidden leading-none"> 
          <svg className="w-[200%] h-32 animate-waveMotion" viewBox="0 0 1440 320" preserveAspectRatio="none" > 
            <path fill="#991b1b" d="M0,0 C360,160 1080,-80 1440,80 L1440,320 L0,320 Z" /> 
          </svg> 
        </div>

        {/* How It Works Section */}
        <section className="pt-0 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-800 to-red-900 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div className="flex justify-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold relative inline-block">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-red-100 to-white">
                  How It Works
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white via-red-100 to-white"></div>
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                "Tell us about your film or content. We'll evaluate where it fits best.",
                "Whether FAST or traditional, we craft a custom roadmap for monetization and visibility.",
                "We distribute, optimize, and support your content through every stage. You collect the revenue."
              ].map((step, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gray-900 border border-red-700/30 p-6 rounded-xl relative overflow-hidden shadow-lg shadow-red-900/20" 
                  variants={fadeUp} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  custom={index}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 -mr-10 -mt-10 bg-red-500/10 rounded-full blur-xl"></div>
                  <h3 className="text-xl font-bold mb-2 text-red-400">Step {index + 1}</h3>
                  <p className="text-gray-300">{step}</p>
                </motion.div>
              ))}
            </div>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              className="mt-10 bg-white text-red-800 px-6 py-3 rounded-full font-semibold shadow-lg shadow-red-900/30 hover:bg-gray-200 transition-colors"
            >
              Submit My Project
            </motion.button>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-center relative inline-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300">
                  Why Witease Media?
                </span>
                
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "FAST + Indie = Flexibility",
                  description: "We're one of the few teams offering both under one roof.",
                  icon: <Film className="w-8 h-8 text-red-500" />
                },
                {
                  title: "Strategic Distribution",
                  description: "Not just 'upload and hope'—we guide you with intent.",
                  icon: <Globe className="w-8 h-8 text-red-500" />
                },
                {
                  title: "Creative Control",
                  description: "Your voice. Your brand. We just amplify it.",
                  icon: <Star className="w-8 h-8 text-red-500" />
                },
                {
                  title: "Global Reach, Indie Ethos",
                  description: "We work with creators, not against them.",
                  icon: <Award className="w-8 h-8 text-red-500" />
                }
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  className="relative overflow-hidden rounded-xl transition-all duration-300"
                  variants={fadeUp} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  custom={index}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-900/30">
                    <div className="absolute top-0 right-0 w-24 h-24 -mr-8 -mt-8 bg-red-500/10 rounded-full blur-xl"></div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gray-800 rounded-lg">
                        {feature.icon}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-red-400">{feature.title}</h3>
                        <p className="text-gray-300">{feature.description}</p>
                      </div>
                    </div>
                    
                    {hoveredCard === index && (
                      <div className="absolute inset-0 bg-gradient-to-t from-red-500/20 to-transparent opacity-60 pointer-events-none"></div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Work With Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900 relative">
          {/* Film strip decoration */}
          <div className="absolute left-0 top-0 h-full w-8 flex flex-col opacity-20">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-8 w-full bg-black border border-gray-700"></div>
            ))}
          </div>
          <div className="absolute right-0 top-0 h-full w-8 flex flex-col opacity-20">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="h-8 w-full bg-black border border-gray-700"></div>
            ))}
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-center mb-12">
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-center relative inline-block"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={0}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300">
                  Who We Work With
                </span>
              </motion.h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🎬",
                  title: "Indie Filmmakers",
                  description: "With completed films or shorts"
                },
                {
                  icon: "📺",
                  title: "Content Owners",
                  description: "With episodic series, catalogs, or unsold pilots"
                },
                {
                  icon: "🎥",
                  title: "Brands and Studios",
                  description: "Looking to launch their own FAST channels"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700 shadow-lg text-center relative overflow-hidden" 
                  variants={fadeUp} 
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true }} 
                  custom={index}
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(239, 68, 68, 0.1), 0 10px 10px -5px rgba(239, 68, 68, 0.04)" }}
                >
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>
                  <div className="text-4xl mb-4 bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-4 text-red-400">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;