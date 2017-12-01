import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info.component';
import { Info } from './info';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoComponent],
  exports: [
    InfoComponent
  ]
})
export class SharedModule { }
