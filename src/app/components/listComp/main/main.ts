import { Component, OnInit } from '@angular/core';
import { Webinar } from '../../../../models/webinar.model';
import { CommonModule } from '@angular/common';
import { Actioncard } from '../actioncard/actioncard';
import { Sidebar } from '../sidebar/sidebar';
import { webinar } from '../../../../data/webinar';

@Component({
  selector: 'app-main',
  imports: [CommonModule, Actioncard, Sidebar],
  templateUrl: './main.html',
  styleUrl: './main.scss',
})
export class Main {
  registeredWebinars: any[] = [];
  nextWeekWebinars: any[] = [];
  webinar = webinar;

  constructor() {}

  ngOnInit(): void {
    this.registeredWebinars = this.webinar.filter((w) => w.category === 'registered');
    this.nextWeekWebinars = this.webinar.filter((w) => w.category === 'next-week');
  }

  onTabChange(tab: string): void {
    console.log('Tab changed to:', tab);
    // Add filtering by tab if needed
  }
}
