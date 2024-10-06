import React, { useMemo, useState } from 'react';
import { Search, Trophy, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Hover, LeftToRight } from '@/shared/animations';
import useStorage from '@/store/storage';

interface SelectorOption {
  name: 'top' | 'search' | 'user';
  icon: JSX.Element;
  delay: number;
  link: string;
}

const Selector: React.FC = () => {
  const { user } = useStorage();

  const [selector, setSelector] = useState<'search' | 'top' | 'user'>('search');

  const selectorOptions = useMemo(
    (): SelectorOption[] => [
      {
        name: 'top',
        icon: <Trophy size={35} color='#1c1c1c' />,
        delay: 1,
        link: '/top'
      },
      {
        name: 'search',
        icon: <Search size={35} color='#1c1c1c' />,
        delay: 1.3,
        link: '/'
      },
      {
        name: 'user',
        icon: <UserRound size={35} color='#1c1c1c' />,
        delay: 1.7,
        link: user && user?.chat_id ? `/profile/${user.chat_id}` : '/'
      }
    ],
    [user]
  );

  const selectorHandler = (name: 'top' | 'search' | 'user') => {
    setSelector(name);
  };

  return (
    <div className='h-[10%] w-[95%] absolute bottom-5 flex items-center justify-between m-auto'>
      {selectorOptions.map(({ name, icon, delay, link }: SelectorOption) => (
        <LeftToRight key={name} delay={delay}>
          <Hover>
            <Link
              to={link}
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
