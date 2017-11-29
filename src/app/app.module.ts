import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UsersModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'connexion'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
