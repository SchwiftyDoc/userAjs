import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Info } from './info/info';
import { Confirm } from './confirm/confirm';

import { MyAutofocusDirective } from './my-autofocus.directive';

import { InfoComponent } from './info/info.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InfoComponent,
    MyAutofocusDirective,
    ConfirmComponent
  ],
  exports: [
    InfoComponent,
    ConfirmComponent,
    MyAutofocusDirective
  ]
})
export class SharedModule { }
