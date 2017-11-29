import { Component } from '@angular/core';
import { IInfo } from './shared/info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info: IInfo = {
    message: 'Bienvenue sur le site. Nous vous souhaitons une bonne visite',
    important: 'Projet Aubergine:',
    type: 'info',
    delay: 3000
  };
}
