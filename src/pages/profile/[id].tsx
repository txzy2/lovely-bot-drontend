import { FadeIn } from '@/shared/animations';
import useStorage from '@/store/storage';
import React from 'react';
import { useParams } from 'react-router-dom';

const Profile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user } = useStorage();

  if (!user || user.chat_id !== id) {
    return <div>Пользователь не найден или доступ ограничен</div>;
  }

  return (
    <FadeIn className='w-[90%] h-[80vh] flex flex-col items-center justify-center m-auto'>
      <h1>Профиль пользователя</h1>
      <p>Chat ID: {user.chat_id}</p>
      <p>Имя: {user.first_name}</p>
      <p>Username: {user.username}</p>
    </FadeIn>
  );
};

export default Profile;
