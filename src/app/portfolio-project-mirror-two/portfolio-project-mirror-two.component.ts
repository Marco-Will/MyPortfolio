import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-project-mirror-two',
  templateUrl: './portfolio-project-mirror-two.component.html',
  styleUrls: ['./portfolio-project-mirror-two.component.scss']
})
export class PortfolioProjectMirrorTwoComponent implements OnInit {
  projectImages = ['sharkie.png','sharkie-play.png','sharkie-ingame.png']
  currentImage = 0;
  

  ngOnInit(): void 
  {
    this.updateImage();
  }
  updateImage()
  {
     
    this.currentImage = this.currentImage % this.projectImages.length;
    
  }

  imageClicked()
  {
    this.currentImage++;
    this.currentImage = this.currentImage % this.projectImages.length;
  }
}
