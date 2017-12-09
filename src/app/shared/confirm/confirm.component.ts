import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Confirm} from './confirm';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  @Input() confirm: Confirm;
  @Output() result: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  validate(): void {
    this.result.emit(true);
  }

  cancelled(): void {
    this.result.emit(false);
  }

}
