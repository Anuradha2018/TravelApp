import { Leg } from "./leg";
import { Segment } from "./segment";
import { Flight } from "./flight";
import { Offer } from "./offer";

export class Response {
  Done: boolean;
  ResultNumber: number;
  Flights: Flight[];
  Segments: Segment[];
  Legs: Leg[];
  Offers: Offer[];
}
