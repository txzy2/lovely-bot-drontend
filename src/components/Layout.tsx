import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Header } from '@/components';
import { FadeIn } from '@/shared/animations';
import { UseTg } from '@/shared/hooks/useTg';
import { Loader, Selector } from '@/shared/ui';
import useStorage from '@/store/storage';

const Layout: React.FC = () => {
  const { tg, user } = UseTg();
  const { setUser, guide, setGuide } = useStorage();
  const navigate = useNavigate()

  const [loader, setLoader] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoader(false);
    }, 4000);

    tg.ready();
    tg.expand();


    setUser({
      chat_id: user?.chat_id || '123',
      first_name: user?.first_name || 'kamaeff',
      username: user?.username || 'kamaeff',
      avatar: user?.photo_url || 'https://picsum.photos/200/300',
    });

    return () => clearTimeout(timeout);
  }, [tg, user, setUser]);

  const goToGuide = () => {
    navigate('/guide');
    setGuide(true);
  };

  const goToMain = () => {
    navigate('/');
    setGuide(true);
  }

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

  if (!guide) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-gray-50 opacity-10"></div>

        <div className="w-[90%] relative bg-white p-8 rounded-lg z-10 shadow-lg max-w-md ">
          <div className="text-center mb-4 text-xl text-black font-bold">
            <p>Привет, {user?.first_name}!</p>
            <p className='text-[14px] leading-none'>Как насчет того, чтобы пройти гайд и узнать больше?</p>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={goToGuide}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Пройти
            </button>
            <button
              onClick={goToMain}
              className="px-4 py-2 bg-gray-300 text-black rounded-lg"
            >
              Нет
            </button>
          </div>
        </div>
      </div>
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
