import { Component } from '@angular/core';

@Component({
  selector: 'lg-root',
  //templateUrl: './app.component.html',
  template:`<div class='container'>
  <router-outlet></router-outlet>
</div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lg-demo';
}
