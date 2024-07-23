export interface Result {
  id: string;
  tracks: Track[];
  totalToWin: number;
  startTime: string;
  addOns: string[];
}

export interface Track {
  id: number;
  name: string;
}

export interface Race {
  id: string;
  tracks: Track[];
  starts: Start[];
  totalToWin: number;
  startTime: string;
  number: number;
  name: string;
}

export interface Start {
  number: number;
  horse: Horse;
  id: string;
  driver: Driver;
}

export interface Horse {
  name: string;
  trainer: Trainer;
  pedigree: Pedigree;
}

export interface Driver {
  firstName: string;
  lastName: string;
}

export interface Trainer {
  firstName: string;
  lastName: string;
}

export interface Pedigree {
  father: Father;
}

export interface Father {
  id: number;
  name: string;
}

export type GameTypes = "V75" | "V86" | "GS75";
