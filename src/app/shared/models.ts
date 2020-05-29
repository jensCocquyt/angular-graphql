export interface Room {
  hasWifi: boolean;
  id: number;
  name: string;
  status: string;
}

export interface Guest {
  id: number;
  name: string;
  registerDate: Date;
}
