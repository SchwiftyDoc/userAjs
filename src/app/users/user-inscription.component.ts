import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css']
})
export class UserInscriptionComponent implements OnInit {

  username: string;
  password: string;
  email: string;

  constructor() { }

  ngOnInit() {
  }

  inscription(): void {
    console.log('User: ' + this.username + '\nPassword: ' + this.password + '\nEmail: ' + this.email);
  }

}
