import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-actioncard',
  imports: [],
  templateUrl: './actioncard.html',
  styleUrl: './actioncard.scss'
})
export class Actioncard {

@Input() webinar: any;

}
