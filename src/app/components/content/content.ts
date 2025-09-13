import { Component, OnInit } from '@angular/core';
import { LiveWebinar } from '../live-webinar/live-webinar';
import { liveWebinarData } from '../../../data/liveWebinarData';
import { ContinueCard } from '../continue-card/continue-card';
import { TopSpeakers } from '../top-speakers/top-speakers';
import { Tabs } from '../tabs/tabs';
import { Main } from '../listComp/main/main';

@Component({
  selector: 'app-content',
  imports: [LiveWebinar, ContinueCard, TopSpeakers, Tabs, Main],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content implements OnInit {
  liveWebinarData1: any = liveWebinarData;
  currentTab: string = 'For you';
  
  ngOnInit(): void {
    this.liveWebinarData1 = liveWebinarData;
    this.currentTab = 'For you';
    console.log('Tab changed to:');

  }

  onTabChange(tab: string): void {
    console.log('Tab changed to:', tab);
    // LiveWebinar, For you, upcoming
    // Add filtering by tab if needed
    this.currentTab = tab;
  }
}
