import React, { useMemo, useState } from 'react';
import { CircleHelp, Search, Trophy, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Hover, LeftToRight } from '@/shared/animations';
import useStorage from '@/store/storage';
import { SelectorOption } from '@/shared/types/types';


const Selector: React.FC = () => {
  const [selector, setSelector] = useState<'search' | 'top' | 'user' | 'guide'>('search');

  const { user } = useStorage();

  console.log(user);

  const selectorOptions = useMemo(
    (): SelectorOption[] => [
      {
        name: 'top',
        icon: <Trophy size={35} color='#1c1c1c' />,
        delay: 1,
        link: '/top',
        title: 'Топ'
      },
      {
        name: 'search',
        icon: <Search size={35} color='#1c1c1c' />,
        delay: 1.3,
        link: '/',
        title: 'Поиск'
      },
      {
        name: 'user',
        icon: <UserRound size={35} color='#1c1c1c' />,
        delay: 1.7,
        link: user && user.chat_id ? `/profile/${user.chat_id}` : '/',
        title: 'Профиль'
      },
      {
        name: 'guide',
        icon: <CircleHelp size={35} color='#1c1c1c' />,
        delay: 2,
        link: '/guide',
        title: 'Руководство'
      }
    ],
    [user]
  );

  const selectorHandler = (name: 'top' | 'search' | 'user' | 'guide') => {
    setSelector(name);
  };

  return (
    <div className='h-[10%] w-[95%] absolute bottom-5  flex items-center justify-between m-auto'>
      {selectorOptions.map(({ name, icon, delay, link, title }: SelectorOption) => (
        <LeftToRight key={name} delay={delay}>
          <Hover>
            <Link
              to={link}
              title={title}
              className={`m-w-[60px] h-[50px] flex items-center justify-center py-1 px-3 rounded-xl transition-all duration-300 ${selector === name ? 'card bg-[#fffdd0]' : 'bg-transparent'
                }`}
              onClick={() => selectorHandler(name as 'top' | 'search' | 'user')}
            >
              {icon}
            </Link>
          </Hover>
        </LeftToRight>
      ))}
    </div>


  );
};

export default Selector;
