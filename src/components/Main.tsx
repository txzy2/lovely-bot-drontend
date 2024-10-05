import React, {useEffect, useState} from 'react';
import {UseTg} from '@/shared/hooks/useTg';

const Main: React.FC = () => {
  const {tg, user} = UseTg();

  const [userState, setUserState] = useState(null);

  useEffect(() => {
    tg.ready();
    tg.expand();

    setUserState(user);
  }, [tg, user]);

  return (
    <div className='h-[85vh] flex flex-col justify-center items-center gap-2'>
      Works
      <div className=''>{userState}</div>
    </div>
  );
};

export default Main;
