import React from 'react';
import { Loader } from 'lucide-react';

import { FadeIn } from '@/shared/animations';

interface LoaderProps {
  iconSize?: number;
  className?: string;
  title: {
    need: boolean;
    text?: string;
    size?: number;
  };
  sub?: boolean;
}

const LoaderComponent: React.FC<LoaderProps> = props => {
  return (
    <div className={props.className || 'flex items-center gap-2'}>
      <Loader className='animate-spin' size={props.iconSize || 16} />

      <div className='flex items-center gap-1'>
        {props.title.need && (
          <FadeIn delay={1}>
            <h3
              className={`text-[${props.title.size ? props.title.size : 16}px] `}
            >
              {props.title.text || ''}
            </h3>
          </FadeIn>
        )}

        {props.sub && (
          <FadeIn delay={2}>
            <a className='flex items-center' href='#'>
              <img src='/logo.png' alt='logo' width={100} />

              {/* <img src='heart.gif' width={40} alt='' /> */}
            </a>
          </FadeIn>
        )}
      </div>
    </div>
  );
};

export default LoaderComponent;
