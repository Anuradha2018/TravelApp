import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { FlightResultsComponent } from "./flight-results/flight-results.component";
import { SortPipe } from "./pipes/sort.pipe";
import { HourminPipe } from "./pipes/hourmin.pipe";

@NgModule({
  declarations: [AppComponent, FlightResultsComponent, SortPipe, HourminPipe],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
