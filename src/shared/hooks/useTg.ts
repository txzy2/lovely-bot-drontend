declare const window: any;
const tg = window.Telegram.WebApp;

export const UseTg = () => {
  const onClose = (): void => {
    tg.close();
  };

  const onToggleButton = (): void => {
    tg.MainButton.isVisible ? tg.MainButton.hide() : tg.MainButton.show();
  };

  const getUserProfilePhoto = (): string | null => {
    const user = tg.initDataUnsafe?.user;
    if (user) {
      return user.photo_url || null; // Вернем URL фото профиля или null, если он отсутствует
    }
    return null; // Если user не определен, возвращаем null
  };

  return {
    tg,
    user: tg.initDataUnsafe?.user,
    onClose,
    onToggleButton,
    getUserProfilePhoto
  };
};
