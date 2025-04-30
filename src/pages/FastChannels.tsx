import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle, Film } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
        },
    }),
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

const FastChannels = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Navbar />

            <main className="flex-grow">
                <section className="mt-48 px-4 sm:px-6 lg:px-8 pt-20 relative">
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
                    <div className="max-w-7xl mt-20 mx-auto text-center relative z-10">
                        <motion.div className="mb-12">
                            <motion.h1
                                className="text-4xl md:text-6xl font-bold mb-6 leading-tight relative inline-block"
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                            >
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-yellow-300">
                                Fast Channel Distribution
                                </span>
                            </motion.h1>
                            <motion.p
                                className="text-xl md:text-2xl text-gray-300 mb-12"
                                initial="hidden"
                                animate="visible"
                                variants={fadeUp}
                                custom={1}
                            >
                                Get your content seen, streamed, and paid for!
                            </motion.p>
                        </motion.div>

                        <motion.div 
                            className="relative inline-block"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <motion.button 
                                whileHover={{ scale: 1.05 }} 
                                whileTap={{ scale: 0.95 }} 
                                className="bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center shadow-lg shadow-red-900/30"
                            >
                                Apply Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </motion.button>
                            
                            {isHovered && (
                                <motion.div 
                                    className="absolute -inset-4 -z-10 bg-gradient-to-r from-red-600 to-orange-500 rounded-full blur-lg opacity-50"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                ></motion.div>
                            )}
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
            </main>

            <Footer />
        </div>
    );
};

export default FastChannels;