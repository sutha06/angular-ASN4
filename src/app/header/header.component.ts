import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() name: string = 'Sheridan College';
  today: Date;
  constructor() {
    this.today = new Date();
  }
}
