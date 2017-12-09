import { Component, OnInit } from '@angular/core';
import { Info } from '../../shared/info/info';
import { UserService } from '../user.service';
import { User } from '../user';
import { Confirm } from '../../shared/confirm/confirm';

@Component({
  selector: 'app-user-validator',
  templateUrl: './user-validator.component.html',
  styleUrls: ['./user-validator.component.css'],
  providers: [UserService]
})
export class UserValidatorComponent implements OnInit{

  confirm: Confirm;

  constructor() { }

  ngOnInit() {
    this.confirm = new Confirm({
      title: 'Are you sure?'
    });
  }

  setConfirmBody(body: string): void {
    this.confirm.body = body;
  }

  confirmed(validated: boolean): void {
    if (validated) {
      console.log('ConfirmDialog: validated.');
    } else {
      console.log('ConfirmDialog: cancelled.');
    }
  }

}
