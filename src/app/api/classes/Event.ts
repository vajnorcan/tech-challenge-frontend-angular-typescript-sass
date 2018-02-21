interface EventsInterface {
  name: string;
  date: Date;
  available_seats: number;
  price: number;
  venue: string;
  labels: string[];
}

export class Event implements EventsInterface {
  name: string;
  date: Date;
  available_seats: number;
  price: number;
  venue: string;
  labels: string[];
}
