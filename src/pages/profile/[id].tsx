import useStorage from '@/store/storage';
import React from 'react';
import { useParams } from 'react-router-dom';

const Profile: React.FC = () => {
  const { chat_id } = useParams<{ chat_id: string }>();
  const { user } = useStorage();

  if (!user || user.chat_id !== chat_id) {
    return <div>Пользователь не найден или доступ ограничен</div>;
  }

  return (
    <div className=''>
      <h1>Профиль пользователя</h1>
      <p>Chat ID: {user.chat_id}</p>
      <p>Имя: {user.first_name}</p>
      <p>Username: {user.username}</p>
    </div>
  );
};

export default Profile;
