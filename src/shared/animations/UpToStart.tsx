import React from 'react';
import { motion } from 'framer-motion';

const UpToStart: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 1.5, className }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

export default UpToStart;
