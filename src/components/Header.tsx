import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const pulseAnimation = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: 'easeInOut'
  }
};

const Header: React.FC = () => {
  return (
    <div className='h-[10vh] flex items-center justify-center gap-2 px-10'>
      <motion.div animate={pulseAnimation}>
        <Link className='font-bold' to='/'>
          <img src='/logo.png' alt='Logo' width={150} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Header;
