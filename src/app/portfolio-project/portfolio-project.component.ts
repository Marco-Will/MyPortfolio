import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss']
})
export class PortfolioProjectComponent implements OnInit {

  projectImages = ['join-login.png','join-summary.png','join-addtask.png','join-contacts.png','join-help.png']
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
