import { Component } from '@angular/core';
import { DoctorCard } from '../doctor-card/doctor-card';

@Component({
  selector: 'app-top-speakers',
  imports: [DoctorCard],
  templateUrl: './top-speakers.html',
  styleUrl: './top-speakers.scss'
})
export class TopSpeakers {
webinars = [1,2,3,4,5,6,7]
}
