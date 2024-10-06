export type TopDTO = {
  id: number;
  name: string;
  score: number;
  rank: number;
}

export type SelectorOption = {
  name: 'top' | 'search' | 'user' | 'guide';
  icon: React.ReactNode;
  delay: number;
  link: string;
  title?: string;
};

export type User = {
  chat_id: string;
  first_name: string;
  username: string;
  avatar?: string;
};

export type StorageState = {
  user: User | null;
  guide: boolean;
  setUser: (user: User) => void;
  setGuide: (guide: boolean) => void;
};



