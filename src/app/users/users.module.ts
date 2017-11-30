import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { UserConnexionComponent } from './user-connexion.component';
import { UserInscriptionComponent } from './user-inscription.component';
import { UserService } from './user.service';

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
    UserInscriptionComponent
  ],
  providers: [UserService]
})
export class UsersModule { }
