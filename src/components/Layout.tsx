import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components';
import { Loader } from '@/shared/ui';
import { FadeIn, Hover } from '@/shared/animations';

const Layout: React.FC = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  if (loader) {
    return (
      <FadeIn>
        <Loader
          className='h-screen flex items-center justify-center gap-1'
          iconSize={25}
          title={{ need: true, text: 'Created by' }}
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
