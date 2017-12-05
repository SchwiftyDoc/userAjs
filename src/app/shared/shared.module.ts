import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { Info } from './info/info';
import { MyAutofocusDirective } from './my-autofocus.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InfoComponent,
    MyAutofocusDirective
  ],
  exports: [
    InfoComponent,
    MyAutofocusDirective
  ]
})
export class SharedModule { }
