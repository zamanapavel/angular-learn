import { Component } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent {
  displayDetails: boolean = false;
  secretPassword: string = 'I love meow'
  logList: Date[] = []

  toggleDetails() {
    this.displayDetails = !this.displayDetails
    this.logList.push(new Date())
  }
}
