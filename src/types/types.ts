export interface Track {
  id: number;
  name: string;
}

export interface Race {
  id: string;
  tracks: Track[];
  totalToWin: number;
  startTime: string;
}
