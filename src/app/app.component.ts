import { Component } from '@angular/core';
import { Info } from './shared/info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info = new Info({
    message: 'Welcome on our website. Enjoy your visit!',
    important: 'Projet Aubergine:',
    type: 'info',
  });
}
