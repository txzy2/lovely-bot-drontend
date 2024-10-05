import React, { useState } from 'react';
import { Hover, LeftToRight } from '@/shared/animations';
import { Search, Trophy, UserRound } from 'lucide-react';

const selectorOptions = [
  { name: 'top', icon: <Trophy size={35} color='#1c1c1c' />, delay: 1 },
  { name: 'search', icon: <Search size={35} color='#1c1c1c' />, delay: 1.3 },
  { name: 'user', icon: <UserRound size={35} color='#1c1c1c' />, delay: 1.7 }
];

const Selector: React.FC = () => {
  const [selector, setSelector] = useState<'search' | 'top' | 'user'>('search');

  const selectorHandler = (name: 'top' | 'search' | 'user') => {
    setSelector(name);
  };

  return (
    <div className='h-[10%] w-[95%] flex items-center justify-between m-auto'>
      {selectorOptions.map(({ name, icon, delay }) => (
        <LeftToRight key={name} delay={delay}>
          <Hover>
            <div
              className={`m-w-[60px] h-[50px] flex items-center justify-center py-1 px-3 rounded-xl transition-all duration-300 ${selector === name ? 'card bg-[#fffdd0]' : 'bg-transparent'
                }`}
              onClick={() => selectorHandler(name as 'top' | 'search' | 'user')}
            >
              {icon}
            </div>
          </Hover>
        </LeftToRight>
      ))}
    </div>
  );
};

export default Selector;
