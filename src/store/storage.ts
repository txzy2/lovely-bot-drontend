import { create } from 'zustand';

export type User = {
  chat_id: string;
  first_name: string;
  username: string;
};

type StorageState = {
  user: User | null;
  guide: boolean;
  setUser: (user: User) => void;
  setGuide: (guide: boolean) => void;
};

const getInitialGuideState = () => {
  const storedGuideState = localStorage.getItem('guide');
  return storedGuideState ? JSON.parse(storedGuideState) : false;
};

const useStorage = create<StorageState>(set => ({
  user: null,
  guide: getInitialGuideState(),
  setUser: (user: User) => set({ user }),
  setGuide: (guide: boolean) => {
    localStorage.setItem('guide', JSON.stringify(guide));
    set({ guide });
  },
}));

export default useStorage;
