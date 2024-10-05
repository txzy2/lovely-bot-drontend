import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Search, Star, Trophy, UserRound, X } from 'lucide-react';

import { UseTg } from '@/shared/hooks/useTg';
import { Hover } from '@/shared/animations';
import UpToStart from '@/shared/animations/UpToStart';

const Main: React.FC = () => {
  const { tg, user } = UseTg();

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, [tg]);

  return (
    <div className='h-[85vh] flex flex-col  items-center gap-2'>
      <div className='h-[90%] w-[95%] relative'>
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
            >
              <X size={30} color='#000' />
            </UpToStart>

            <UpToStart
              delay={1.5}
              className='cursor-pointer bg-[#fffdd0] p-2 rounded-full'
            >
              <Star size={30} color='orange' />
            </UpToStart>

            <UpToStart
              delay={2}
              className='cursor-pointer bg-[#fffdd0] p-2 rounded-full'
            >
              <Heart size={30} color='#ff9aaa' />
            </UpToStart>
          </div>
        </div>
      </div>

      <div className='h-[10%] w-[90%] flex items-center justify-between'>
        <Hover>
          <Trophy size={35} />
        </Hover>

        <Hover>
          <Search size={35} />
        </Hover>

        <Hover>
          <UserRound size={35} />
        </Hover>
      </div>
    </div>
  );
};

export default Main;
