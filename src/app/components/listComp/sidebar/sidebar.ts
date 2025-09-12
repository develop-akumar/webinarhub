import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  specialties = [
    'Accupuncture',
    'Allergy and Immunology',
    'Anaesthesiology',
    'Clinical Nutrition',
    'General Practitioner',
  ];
  sectionState: Record<string, boolean> = {
    specialties: true,
    topics: false,
    speakers: false,
    pharma: false,
  };

  toggleSection(section: string): void {
    this.sectionState[section] = !this.sectionState[section];
  }
}
