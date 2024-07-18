import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import { ToastyConfig } from 'ng2-toasty';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  showNavbar = true;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('Current URL:', event.url);
        this.showNavbar = !(event.url === '/' || event.url.includes('/login'));
      }
    });
  }
}
