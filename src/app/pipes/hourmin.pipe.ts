import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "hourmin",
})
export class HourminPipe implements PipeTransform {
  transform(minutes: string): string {
    let min = parseInt(minutes);
    let hours = Math.floor(min / 60);
    let remainingMinutes = min % 60;
    return hours + "h" + " " + remainingMinutes + "m";
  }
}
