import { Component } from '@angular/core';

/* this is the entire html layout for the website using multiple properties */
@Component({
  selector: 'pm-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'><img src="./assets/images/calligo_logo.png" alt="logo"></a>
    <ul class='nav nav-pills'>
      <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
      <li><a class='nav-link' routerLink='/products'>Find</a></li>

      <li><a class='nav-link' routerLink='/profile'>Profile</a></li>
      <li><a class='nav-link' routerLink='/contact'>Contact</a></li>
      <li><a class='nav-link' routerLink='/purchase'>Purchase</a></li>

    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Calligo';
}
