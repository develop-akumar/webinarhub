import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Common {
  getTimeDifference(start: Date, end: Date): string {
  const diffMs = end.getTime() - start.getTime(); // difference in ms

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24)); // total days
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // remainder → hours
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60)); // remainder → minutes

  let output = '';
  if (days > 0) {
    output += `${days}d `;
  }
  if (hours > 0) {
    output += `${hours}h `;
  }
  if (minutes > 0) {
    output += `${minutes}m`;
  }

  if(output.length > 0){
    output = "Expiring in " + output
  }

  return output.trim() || '';
}
}
