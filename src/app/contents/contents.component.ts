import { Component } from '@angular/core';

@Component({
  selector: 'contents-component',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class contentsComponent {
  displayDetails = false;
  serverHistoryList = [];
  constructor() {}

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.serverHistoryList.push(this.displayDetails);
  }
}
