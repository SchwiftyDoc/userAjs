import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { UserValidatorComponent } from './validator/user-validator.component';
import { UserConnexionComponent } from './connexion/user-connexion.component';
import { UserInscriptionComponent } from './inscription/user-inscription.component';
import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([
      { path: 'validate', component: UserValidatorComponent},
      { path: 'connexion', component: UserConnexionComponent},
      { path: 'inscription', component: UserInscriptionComponent}
    ])
  ],
  declarations: [
    UserValidatorComponent,
    UserConnexionComponent,
    UserInscriptionComponent
  ],
  providers: [UserService]
})
export class UsersModule { }
