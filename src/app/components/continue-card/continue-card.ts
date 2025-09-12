import { Component, OnInit } from '@angular/core';
import { continueData } from '../../../data/continueWatchingData';
import { LiveWebinar } from '../../../models/LiveWebinar.model';

@Component({
  selector: 'app-continue-card',
  imports: [],
  templateUrl: './continue-card.html',
  styleUrl: './continue-card.scss',
})
export class ContinueCard implements OnInit {
  webinars! : LiveWebinar[]

  ngOnInit() {
    this.webinars  = continueData;

    // console.log('this.webinars = ', this.webinars);
  }
}
