import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { UserConnexionComponent } from './user-connexion.component';
import { UserInscriptionComponent } from './user-inscription.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'connexion', component: UserConnexionComponent},
      { path: 'inscription', component: UserInscriptionComponent}
    ])
  ],
  declarations: [
    UserConnexionComponent,
    UserInscriptionComponent]
})
export class UsersModule { }
