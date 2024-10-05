import { create } from 'zustand';

export type User = {
  chat_id: string;
  first_name: string;
  username: string;
};

type StorageState = {
  user: User | null;
  setUser: (user: User) => void;
};

const useStorage = create<StorageState>(set => ({
  user: null,
  setUser: (user: User) => set({ user })
}));

export default useStorage;
