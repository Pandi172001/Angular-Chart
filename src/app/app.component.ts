import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  // constructor(private router: Router) {}

  // ngOnInit() {
  //   // Programmatically navigate to the 'type-master' route
  //   this.router.navigate(['/pieChart']);
  // }

 }
