import { Component } from '@angular/core';
import { IInfo } from './shared/info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info: IInfo = {
    message: 'Welcome on our website. Enjoy your visit!',
    important: 'Projet Aubergine:',
    type: 'info',
    delay: 4000,
    dismissable: true
  };
}
