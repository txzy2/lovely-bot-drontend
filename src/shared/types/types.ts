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


