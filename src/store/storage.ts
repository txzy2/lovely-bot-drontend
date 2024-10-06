import { create } from 'zustand';

import { User, StorageState } from '@/shared/types/types';

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
