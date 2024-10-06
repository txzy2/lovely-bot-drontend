import React, { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

/**
 * The FadeIn component fades in an element with the specified delay.
 *
 * @param {object} props - The component properties.
 * @param {React.ReactNode} props.children - The child elements to be wrapped with the animation.
 * @param {string} [props.className] - The class name to be applied to the element.
 *
 * @returns {JSX.Element} An animated element wrapping the child elements.
 */

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
