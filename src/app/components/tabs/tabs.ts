import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
})
export class Tabs {
  tabs: string[] = ['For you', 'Live', 'Upcoming'];
  selectedTab: number = 2; // Default to "Upcoming"

  @Output() tabChange = new EventEmitter<string>();

  selectTab(index: number) {
    this.selectedTab = index;
    this.tabChange.emit(this.tabs[index]);
  }
}
