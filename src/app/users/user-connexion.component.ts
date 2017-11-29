import { Component, OnInit } from '@angular/core';
import { IInfo } from '../shared/info';

@Component({
  selector: 'app-user-connexion',
  templateUrl: './user-connexion.component.html',
  styleUrls: ['./user-connexion.component.css'],
})
export class UserConnexionComponent implements OnInit {

  username: string;
  password: string;
  info: IInfo = {
    message: 'Bienvenue sur le site. Nous vous souhaitons une bonne visite',
    important: 'Projet Aubergine:',
    type: 'success',
    delay: 3000
  };

  constructor() { }

  ngOnInit() { }

  connexion(): void {
    console.log('User: ' + this.username + '\nPassword: ' + this.password);
  }

}
