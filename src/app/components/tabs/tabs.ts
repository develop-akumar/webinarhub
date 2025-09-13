import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs implements OnChanges{
  tabs: string[] = ['For you', 'Live', 'Upcoming'];
  selectedTab: number = 0; // Default to "Upcoming"

  @Output() tabChange = new EventEmitter<string>();
  @Input() currentTab:string = ""

  selectTab(index: number) {
    this.selectedTab = index;
    this.tabChange.emit(this.tabs[index]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('simpleChanges = ', changes);
    if(changes['currentTab']?.currentValue ){
      this.tabChange.emit(changes['currentTab']?.currentValue);
    }
  }

}
