import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { SharedModule } from './shared/shared.module';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    UsersModule,
    RouterModule.forRoot([
      { path: 'home', component: WelcomeComponent},
      { path: 'validate', pathMatch: 'full', redirectTo: 'home'},
      { path: '', pathMatch: 'full', redirectTo: 'home'},
      { path: '**', pathMatch: 'full', redirectTo: 'home' }
    ]),
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
