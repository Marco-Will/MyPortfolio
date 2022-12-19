import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-project-two',
  templateUrl: './portfolio-project-two.component.html',
  styleUrls: ['./portfolio-project-two.component.scss']
})
export class PortfolioProjectTwoComponent implements OnInit {

  projectImages = ['myportfolio.png','portfolio-skills.png','portfolio-portfolio.png','portfolio-contact.png']
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
