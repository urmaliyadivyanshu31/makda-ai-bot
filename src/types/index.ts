export interface UserData {
    age: number;
    dailyStreak: number;
    telegramPremium: boolean;
    points: number;
  }
  
  export interface Task {
    id: number;
    name: string;
    points: number;
  }
  
  export interface Friend {
    id: number;
    handle: string;
  }