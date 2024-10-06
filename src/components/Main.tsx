import { useAnimate } from 'framer-motion';
import { Menu, Sparkles, Star, X } from 'lucide-react';
import React from 'react';


import UpToStart from '@/shared/animations/UpToStart';

const Main: React.FC = () => {
  const [scopeClose, animateClose] = useAnimate();
  const [scopeStar, animateStar] = useAnimate();
  const [scopeHeart, animateHeart] = useAnimate();

  const handleTap = (scope: any, animate: any) => {
    animate(scope.current, {
      scale: [1, 1.2, 1],
      transition: { duration: 0.1, ease: 'easeInOut' }
    });
  };

  return (
    <UpToStart className='h-[80vh] flex flex-col items-center' delay={0.5}>
      <div className='h-[95%] w-[95%] relative card'>
        <div className='w-[90%] absolute top-5 left-5 flex items-center justify-between'>
          <div className='flex items-center gap-1 text-[30px]'>
            <Star size={25} color='orange' />

            <span className='font-bold'>Anton, 23</span>
          </div>

          <Menu size={30} color='black' />
        </div>

        <img
          className='h-[100%] w-[100%] object-cover rounded-lg'
          src='/sample.jpg'
          alt='card'
        />

        <div className='w-full absolute bottom-5'>
          <div className='w-[90%] flex items-center justify-between m-auto'>
            <UpToStart
              delay={1}
              className='cursor-pointer bg-[#fffdd0] p-2 rounded-full'
              ref={scopeClose}
              onClick={() => handleTap(scopeClose, animateClose)}
            >
              <X size={40} color='#000' />
            </UpToStart>

            <UpToStart
              delay={1.2}
              className='cursor-pointer bg-[#fffdd0] p-2 rounded-full'
              ref={scopeStar}
              onClick={() => handleTap(scopeStar, animateStar)}
            >
              <Sparkles size={40} color='orange' />
            </UpToStart>

            <UpToStart
              delay={1.4}
              className='cursor-pointer bg-[#fffdd0] p-2 rounded-full'
              ref={scopeHeart}
              onClick={() => handleTap(scopeHeart, animateHeart)}
            >
              <img src='/heart.png' width={40} alt='heart' />
            </UpToStart>
          </div>
        </div>
      </div>
    </UpToStart>
  );
};

export default Main;
