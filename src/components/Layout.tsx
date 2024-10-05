import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components';
import { Loader, Selector } from '@/shared/ui';
import { FadeIn, Hover } from '@/shared/animations';
import { UseTg } from '@/shared/hooks/useTg';
import useStorage from '@/store/storage';

const Layout: React.FC = () => {
  const { tg, user } = UseTg();
  const { setUser } = useStorage();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 4000);

    tg.ready();
    tg.expand();

    setUser({
      chat_id: user?.chat_id || '12345',
      first_name: user?.first_name || 'kamaeff',
      username: user?.username || 'kamaeff'
    });

    return () => clearTimeout(timeout);
  }, [tg, user, setUser]);

  if (loader) {
    return (
      <FadeIn>
        <Loader
          className='h-screen flex items-center justify-center gap-1'
          iconSize={25}
          title={{ need: false }}
          sub={true}
        />
      </FadeIn>
    );
  }

  return (
    <>
      <Header />
      <Outlet />
      <footer className='h-[5vh] text-[13px] flex items-center justify-center'>
        <Selector />
      </footer>
    </>
  );
};

export default Layout;
