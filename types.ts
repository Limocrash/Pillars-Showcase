
export interface Pillar {
  id: string;
  title: string;
  description: string;
  meaning: string;
  imagePlaceholder: string;
  accentColor: string;
}

export enum AppState {
  EXPLORING = 'EXPLORING',
  GENERATING = 'GENERATING',
}
