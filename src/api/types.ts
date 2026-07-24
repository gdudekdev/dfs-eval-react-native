export interface Stats {
  sessions: number;
  spentTime: number;
  kcal: number;
}

export interface Goal {
  title: string;
  target: string;
}

export interface Dashboard {
  stats: Stats;
  goals: Goal[];
}
