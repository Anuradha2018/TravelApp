export class Leg {
  AirlineName: string;
  Arrival: Date;
  Departure: Date;
  Destination: {
    Iata: string;
    Name: string;
  };
  Duration: number;
  Origin: {
    Iata: string;
    Name: string;
  };
}
