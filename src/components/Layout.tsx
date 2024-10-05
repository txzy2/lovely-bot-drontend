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
      chat_id: user?.chat_id || '',
      first_name: user?.first_name || '',
      username: user?.username || ''
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
      <Selector />
      <footer className='h-[5vh] text-[13px] flex items-center justify-center'>
        <code>
          <Hover>
            <a className='font-bold hover:underline' href='#' target='_blank'>
              Условия пользования
            </a>
          </Hover>
        </code>
      </footer>
    </>
  );
};

export default Layout;
