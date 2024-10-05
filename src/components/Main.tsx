import React, { useEffect } from 'react';
import { UseTg } from '@/shared/hooks/useTg';

const Main: React.FC = () => {
  const { tg, user } = UseTg();

  useEffect(() => {
    tg.ready();
    tg.expand();
  }, [tg]);

  return (
    <div className='h-[85vh] flex flex-col justify-center items-center gap-2'>
      Works
      <div className=''>{user}</div>
    </div>
  );
};

export default Main;
