import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { warningComponent } from './warningAlert/warningalert.component';
import { successComponent } from './successAlert/successalert.component';
@NgModule({
  declarations: [AppComponent, headerComponent, warningComponent, successComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent] //angular first launch use component
})
export class AppModule {}
