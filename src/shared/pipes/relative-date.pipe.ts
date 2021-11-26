/*
Al usar este PIPE, combierte el tiempo en "hace cuanto tiempo pasó"
 * Turn Date into realtive date (e.g. 5 days ago)
 * Usage:
 *   value | relativeDate
 * Example:
 *   {{ 86400 |  relativeDate}}
 *   formats to: '1 day ago'
*/

import { Pipe, PipeTransform } from "@angular/core";

// Epochs
const epochs: any = [
  ["año", 31536000],
  ["mese", 2592000],
  ["dia", 86400],
  ["hora", 3600],
  ["minuto", 60],
  ["segundo", 1],
];

@Pipe({ name: "relativeDate" })
export class RelativeDatePipe implements PipeTransform {
  getDuration(timeAgoInSeconds: number) {
    for (const [name, seconds] of epochs) {
      const interval = Math.floor(Math.abs(timeAgoInSeconds) / seconds);
      if (interval >= 1) {
        return {
          interval: Math.abs(interval),
          epoch: name,
        };
      }
    }
    return {
      interval: 0,
      epoch: "seconds",
    };
  }

  transform(dateStamp: number): string {
    const timeAgoInSeconds = Math.floor(
      (new Date().getTime() - new Date(dateStamp).getTime()) / 1000
    );
    const { interval, epoch } = this.getDuration(timeAgoInSeconds);
    const suffix = interval === 1 ? "" : "s";
    const ago = timeAgoInSeconds < 0 ? "" : " de existencia";
    const _in = timeAgoInSeconds < 0 ? "" : "";

    return `${_in}${interval} ${epoch}${suffix}${ago}`;
  }
}
