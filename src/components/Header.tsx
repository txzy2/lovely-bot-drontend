import React from 'react';
import { Link } from 'react-router-dom';

import { LeftToRight, Hover } from '@/shared/animations';

const Header: React.FC = () => {
  return (
    <div className='h-[10vh] flex items-center justify-center gap-2 px-10'>
      <LeftToRight delay={0.5}>
        <Hover scale={1.1}>
          <Link className='font-bold' to='/'>
            <img src='/logo.png' alt='Logo' width={150} />
          </Link>
        </Hover>
      </LeftToRight>
    </div>
  );
};

export default Header;
