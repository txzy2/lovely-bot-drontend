import { Heart, Star } from 'lucide-react';
import React from 'react';
import { useParams } from 'react-router-dom';

import { LeftToRight, UpToStart } from '@/shared/animations';
import useStorage from '@/store/storage';

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useStorage();


  if (!user || user.chat_id !== id) {
    return <div>Пользователь не найден или доступ ограничен</div>;
  }

  return (
    <div className='w-[90%] h-[80vh] flex flex-col items-center gap-5 m-auto'>
      <UpToStart delay={1}>
        <img
          className='rounded-full object-cover'
          src='/sample.jpg'
          width={300} alt='icon'
        />
      </UpToStart>

      <LeftToRight delay={1}>
        <div className='flex items-center gap-1'>
          <Star size={35} color='orange' strokeWidth={2} />

          <span className='text-[40px] font-bold'>{user.first_name}, 23</span>
        </div>

        <div className='flex items-center gap-1'>
          <Heart />

          <span>1000</span>
        </div>
      </LeftToRight>
    </div>
  );
};

export default Profile;
