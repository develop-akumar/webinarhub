import { Component, inject, Input, OnInit } from '@angular/core';
import { LiveWebinar } from '../../../models/LiveWebinar.model';
import { Common } from '../../services/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-card',
  imports: [DatePipe],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card implements OnInit {
  commonService = inject(Common);
  @Input() webinar!: LiveWebinar;
  currentDate = new Date('2025-09-12T01:00:00');
  remTime: any;

  constructor() {}

  ngOnInit(): void {
    this.remTime = this.commonService.getTimeDifference(this.currentDate, this.webinar.creditsExpiry );
    // console.log('remTime = ', this.remTime);
  }
}
