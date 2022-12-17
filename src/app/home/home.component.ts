import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent 
{
  bgImagesLeft = ['assets/img/bg/Purple shadow 1.png','assets/img/bg/home-bg-left-2.png','assets/img/bg/home-bg-left-3.png']
  currentImage = 0;

  ngOnInit()
  {
    
  }

  /**function for change images within an interval */
  changeBg()
  {
    setInterval(() =>
    {
    this.currentImage++;
    this.currentImage = this.currentImage % this.bgImagesLeft.length; // % = loop
    

    
    },4000)
  }
}
