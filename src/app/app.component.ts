import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <h1>POKEDEX</h1>
<app-cards></app-cards>
  <router-outlet></router-outlet>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokedex-services';
}
