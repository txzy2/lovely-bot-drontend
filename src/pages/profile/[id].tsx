import { LeftToRight, UpToStart } from '@/shared/animations';
import useStorage from '@/store/storage';
import { Heart, Star, UserCog } from 'lucide-react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";




const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useStorage();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  if (!user || user.chat_id !== id) {
    return <div>Пользователь не найден или доступ ограничен</div>;
  }

  return (
    <div className='w-[90%] h-[80vh] relative flex flex-col items-center gap-2 m-auto'>
      <UpToStart delay={1} className='flex flex-col items-center gap-10'>

        <Slider {...settings} className='w-[80vw]'>
          <div>
            <img
              className='rounded-full object-cover m-auto'
              src={user.avatar}
              width={300}
              alt='icon'
            />
          </div>
          <div>
            <img
              className='rounded-full object-cover m-auto'
              src={user.avatar}
              width={300}
              alt='icon'
            />
          </div>

        </Slider>

        <button className="flex items-center gap-1 px-3 py-1 bg-indigo-300 text-[#1c1c1c] font-bold rounded-lg"><UserCog /> Редактировать</button>
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
