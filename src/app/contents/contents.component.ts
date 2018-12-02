import { Component } from '@angular/core';

@Component({
  selector: 'contents-component',
  templateUrl: './contents.component.html'
})
export class contentsComponent {
  serverInfo = 'offline';
  serverList = ['a', 'b'];
  constructor() {
    this.serverInfo = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getColor() {
    return this.serverInfo === 'online' ? 'green' : 'yellow';
  }
  onAddServer() {
    this.serverList.push(this.serverInfo);
  }
}
