import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface UpToStartProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
}

const UpToStart = forwardRef<HTMLDivElement, UpToStartProps>(
  ({ children, delay = 1.5, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={className}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

UpToStart.displayName = 'UpToStart';

export default UpToStart;
