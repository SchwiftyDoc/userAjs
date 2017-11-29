import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <div>
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <img src="http://5.196.89.92/projetaubergine.png" title="Projet Aubergine" class="home-image">
          <a class="navbar-brand">
            Projet Aubergine
          </a>
          <ul class="nav navbar-nav navbar-left">
            <li><a [routerLink]="['/home']">Home</a></li>
            <li><a [routerLink]="['/contact']">Contact</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a [routerLink]="['/connexion']">Sign in</a></li>
            <li><a [routerLink]="['/inscription']">Sign up</a></li>
          </ul>
        </div>
      </nav>
      <div class="container">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`.home-image {
    width: 40px;
    height: 40px;
    margin: 5px;
    display: inline-block;
    float: left;
  }`]
})
export class AppComponent {
  title = 'app';
}
