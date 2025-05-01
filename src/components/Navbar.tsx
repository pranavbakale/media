// components/Navbar.tsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../public/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const navigate = useNavigate();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-24 bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-sm fixed top-0 left-0 right-0 z-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center gap-3"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
          >
            <div className="font-bold text-2xl text-orange-500 hover:cursor-pointer">
            <img src={logo} alt="Witease" className="h-20" />
            </div>
          </motion.div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => navigate('/fastchannels')} className="text-white hover:text-orange-500 font-medium transition-colors">
              FAST Channels
            </button>
            <button onClick={() => navigate('/indiefilms')} className="text-white hover:text-orange-500 font-medium transition-colors">
              Indie Films
            </button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors hover:shadow-md"
            >
              Apply for Distribution
            </motion.button>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white hover:text-orange-500 focus:outline-none">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 right-4 w-52 bg-black text-white rounded-lg shadow-lg z-50 p-3 flex flex-col space-y-2"
          >
            <button
              onClick={() => { scrollToSection('fast-channels'); setIsMenuOpen(false); }}
              className="text-left px-3 py-2 rounded hover:bg-orange-500 transition-colors"
            >
              FAST Channels
            </button>
            <button
              onClick={() => { navigate('/indiefilms'); setIsMenuOpen(false); }}
              className="text-left px-3 py-2 rounded hover:bg-orange-500 transition-colors"
            >
              Indie Films
            </button>
            <button
              onClick={() => { setIsMenuOpen(false); }}
              className="text-left px-3 py-2 mt-1 bg-orange-500 rounded hover:bg-orange-600 transition-colors"
            >
              Apply for Distribution
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
