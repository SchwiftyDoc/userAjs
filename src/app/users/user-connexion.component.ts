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

  constructor() { }

  ngOnInit() { }

  connexion(): void {
    console.log('User: ' + this.username + '\nPassword: ' + this.password);
  }

}
