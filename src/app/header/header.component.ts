import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class headerComponent {
  headerId: number = 100;
  headerValue: string = 'asdasd';
  allow: boolean = true;
  serverName: string = 'Name';
  userName: string = '';
  getHeaderValue = () => {
    return this.headerValue;
  };
  constructor() {
    setTimeout(() => {
      this.allow = false;
    }, 2000);
  }
  onChangeHeaderValue() {
    this.headerValue = 'changed!!!!!' + this.serverName;
  }
  onUpdateServer($event: Event) {
    this.serverName = (<HTMLInputElement>$event.target).value;
    console.log($event);
  }
  oncleanUpUserName() {
    this.userName = '';
  }
}
