import { Component, OnInit } from '@angular/core';
import { LiveWebinar } from '../live-webinar/live-webinar';
import { liveWebinarData } from '../../../data/liveWebinarData';
import { ContinueCard } from '../continue-card/continue-card';
import { TopSpeakers } from '../top-speakers/top-speakers';
import { Tabs } from '../tabs/tabs';
import { Main } from '../listComp/main/main';



@Component({
  selector: 'app-content',
  imports: [LiveWebinar,
    ContinueCard,
    TopSpeakers,
    Tabs,
    Main
  ],
  templateUrl: './content.html',
  styleUrl: './content.scss',
})
export class Content implements OnInit {
  liveWebinarData1: any = liveWebinarData;

  ngOnInit(): void {
    this.liveWebinarData1 = liveWebinarData;
  }

  onTabChange(tab: string): void {
    console.log('Tab changed to:', tab);
    // Add filtering by tab if needed
  }


}
