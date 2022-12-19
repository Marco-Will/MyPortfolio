import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-project-mirror',
  templateUrl: './portfolio-project-mirror.component.html',
  styleUrls: ['./portfolio-project-mirror.component.scss']
})
export class PortfolioProjectMirrorComponent implements OnInit {
  projectImages = ['sharkie.png','sharkie-play.png','sharkie-ingame.png']
  currentImage = 0;
  

  ngOnInit(): void 
  {
    this.updateImage();
  }
  updateImage()
  {
     
    this.currentImage = this.currentImage % this.projectImages.length;
    setInterval(() =>
    {
    this.currentImage++;
    this.currentImage = this.currentImage % this.projectImages.length; // % = loop
    },6000)
  }

  imageClicked()
  {
    this.currentImage++;
    this.currentImage = this.currentImage % this.projectImages.length;
  }
}
