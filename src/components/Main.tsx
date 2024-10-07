import { useAnimate } from 'framer-motion';
import { Menu, Sparkles, Star, X } from 'lucide-react';
import React from 'react';
import Slider from "react-slick";
import UpToStart from '@/shared/animations/UpToStart';


const Main: React.FC = () => {
  const [scopeClose, animateClose] = useAnimate();
  const [scopeStar, animateStar] = useAnimate();
  const [scopeHeart, animateHeart] = useAnimate();

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,  // Set vertical scrolling
    verticalSwiping: true,
  };

  const handleTap = (scope: any, animate: any) => {
    animate(scope.current, {
      scale: [1, 1.2, 1],
      transition: { duration: 0.1, ease: 'easeInOut' }
    });
  };

  return (
    <UpToStart className='h-[80vh] flex flex-col items-center' delay={0.5}>
      <div className='h-[95%] w-[95%] relative card xl:w-[30%]'>
        <div className='w-[90%] absolute top-5 left-5 flex items-center justify-between z-10'>
          <div className='flex items-center gap-1 text-[30px]'>
            <Star size={25} color='orange' />
            <span className='font-bold'>Anton, 23</span>
          </div>
          <Menu size={30} color='black' />
        </div>

        <Slider {...sliderSettings} className='h-full rounded-xl '>
          <div>
            <img
              src='/sample.jpg'
              alt='card1'
              className='object-cover w-full h-full rounded-xl'
            />
          </div>
          <div>
            <img
              src='/sample.jpg'
              alt='card2'
              className='object-cover rounded-xl h-full'
            />
          </div>
        </Slider>

        <div className='w-full absolute bottom-5'>
          <div className='w-[90%] flex items-center justify-between m-auto'>
            <UpToStart
              delay={1}
              className='cursor-pointer bg-[rgba(255,255,225,0.5)] px-3 py-1 rounded-[20px]'
              ref={scopeClose}
              onClick={() => handleTap(scopeClose, animateClose)}
            >
              <X size={40} color='#000' />
            </UpToStart>

            <UpToStart
              delay={1.2}
              className='cursor-pointer bg-[rgba(255,255,225,0.5)] px-3 py-1 rounded-[20px]'
              ref={scopeStar}
              onClick={() => handleTap(scopeStar, animateStar)}
            >
              <Sparkles size={40} color='orange' />
            </UpToStart>

            <UpToStart
              delay={1.4}
              className='cursor-pointer bg-[rgba(255,255,225,0.5)] px-3 py-1 rounded-[20px]'
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
