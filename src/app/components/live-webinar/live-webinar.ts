import { Component, Input } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-live-webinar',
  imports: [Card],
  templateUrl: './live-webinar.html',
  styleUrl: './live-webinar.scss',
})
export class LiveWebinar {
  @Input() webinarData: any;
  @Input() webinarType!: String;
}
