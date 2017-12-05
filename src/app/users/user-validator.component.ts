import { Component } from '@angular/core';
import { Info } from '../shared/info/info';
import { UserService } from './user.service';
import { User } from './user';

@Component({
  selector: 'app-user-inscription',
  templateUrl: './user-inscription.component.html',
  styleUrls: ['./user-inscription.component.css'],
  providers: [UserService]
})
export class UserValidatorComponent {

}
