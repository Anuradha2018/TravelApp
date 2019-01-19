import { Offer } from "../models/offer";
import { SearchService } from "../services/search.service";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort",
  pure: false,
})
export class SortPipe implements PipeTransform {
  constructor(private searchService: SearchService) {}

  transform(flightDetails: any, Price: string): any[] {
    if (!Array.isArray(flightDetails)) {
      return;
    }
    flightDetails.sort((a: any, b: any) => {
      if (a[Price] < b[Price]) {
        return -1;
      } else if (a[Price] > b[Price]) {
        return 1;
      } else {
        return 0;
      }
    });
    return flightDetails;
  }
}
