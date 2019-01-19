import { Component, OnInit } from "@angular/core";
import { Response } from "./../models/reponse";
import { SearchService } from "./../services/search.service";
import { Flight } from "./../models/flight";

@Component({
  selector: "app-flight-results",
  templateUrl: "./flight-results.component.html",
  styleUrls: ["./flight-results.component.css"],
})
export class FlightResultsComponent implements OnInit {
  responses;
  isLoading = true;
  legs = [];
  flights = [];
  segments = [];
  pollInterval;
  offers = [];
  flightDetails = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.pollServer();
  }

  pollServer(): void {
    this.pollInterval = setInterval(() => {
      this.searchService.getResults().subscribe((data: Response) => {
        this.responses = data;
        if (
          data.Legs !== null ||
          data.Offers !== null ||
          data.Flights !== null ||
          data.Segments !== null
        ) {
          this.legs = [...this.legs, ...data.Legs];
          this.flights = [...this.flights, ...data.Flights];
          this.segments = [...this.segments, ...data.Segments];
          this.offers = [...this.offers, ...data.Offers];
          if (data.Done === true) {
            this.flights.forEach((flight: Flight) => {
              if (flight) {
                this.generatetFlightDetails(
                  flight.SegmentIndexes,
                  flight.TicketClass
                );
                this.isLoading = false;
              }
            });
            clearInterval(this.pollInterval);
          }
        }
      });
    }, 2000);
  }

  generatetFlightDetails(segmentIndexes, ticketClass) {
    const legs = this.getFlightLegs(segmentIndexes);
    this.flightDetails = [...this.flightDetails, ...legs];

    this.offers.forEach(offer => {
      const offerIndex = offer.FlightIndex;
      this.flightDetails.find((element, index) => {
        if (offerIndex === index) {
          element.Price = offer.Price;
          element.Deeplink = offer.Deeplink;
          element.Supplier = offer.Supplier;
          element.TicketClass = ticketClass;
          return true;
        } else {
          return false;
        }
      });
    });
    //console.log(this.flightDetails);
  }

  getFlightLegs(segmentIndexes) {
    const flightLeg = [];
    segmentIndexes.forEach(item => {
      this.legs.find((element, index) => {
        if (index === item) {
          flightLeg.push(element);
          return true;
        } else {
          return false;
        }
      });
    });
    return flightLeg;
  }
}
