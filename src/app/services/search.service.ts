import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import * as uuid from "uuid";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  UUID = uuid.v4();
  searchURL = `https://stjxo8vo34.execute-api.eu-west-1.amazonaws.com/prod/flight-search/1.2/${
    this.UUID
  }`;

  constructor(private httpClient: HttpClient) {}

  getResults() {
    return this.httpClient.get(`${this.searchURL}`);
  }
}
