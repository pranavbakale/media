import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            className="flex items-center gap-3 mb-4"
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
          >
            <div className="font-bold text-2xl text-orange-500 hover:cursor-pointer">WITEASE MEDIA</div>
          </motion.div>
          <p className="text-white text-sm">© 2025 Witease Media, LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;