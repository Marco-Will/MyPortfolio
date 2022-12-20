import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent /* implements OnInit  */{
  title = 'MyPortfolio';
 


  constructor(public router: Router) {}

  /* ngOnInit() {
    window.addEventListener('scroll', () => {
      console.log(window.scrollY)
      if (window.scrollY > 50) {
        this.router.navigate(['/new-url']);
      }
    });
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => {
      if (window.scrollY > 50) {
        this.router.navigate(['/new-url']);
      }
    });
  } */
}
