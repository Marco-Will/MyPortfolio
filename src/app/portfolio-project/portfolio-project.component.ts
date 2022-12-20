import { trigger, state, style, animate, transition, AnimationTriggerMetadata } from '@angular/animations'; 
import { Component, OnInit } from '@angular/core';
import { AnimationBuilder, animate as buildAnimate } from '@angular/animations';
import { ViewChild, ElementRef } from '@angular/core';

export function fadeInOut(): AnimationTriggerMetadata {
  return trigger('fadeInOut', [
    state('in', style({scale: 1})),
    transition('void => *', [
      style({scale: 0}),
      animate(600)
    ]),
    transition('* => void', [
      animate(600, style({opacity: 0}))
    ])
  ]);
}

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss'],
   animations: [
    fadeInOut()
  ] 
  
  
})
export class PortfolioProjectComponent implements OnInit {

  projectImages = ['join-login.png','join-summary.png','join-addtask.png','join-contacts.png','join-help.png']
  currentImage = 0;

  @ViewChild('projectPic', { static: true })
  projectPic!: ElementRef<HTMLImageElement>;
  
  constructor(private animationBuilder: AnimationBuilder) {}
  ngOnInit(): void {
    this.updateImage();
  }

  updateImage() {

    this.currentImage = this.currentImage % this.projectImages.length;

    setInterval(() => {
      
       
        setTimeout(() => {
          this.currentImage++;
          this.currentImage = this.currentImage % this.projectImages.length;
          this.currentImage = this.currentImage % this.projectImages.length;
        }, 1000);

        const player = this.animationBuilder.build([
          buildAnimate('1000ms', style({ opacity: 0 })),
          buildAnimate('2000ms', style({ opacity: 1 }))
        ]).create(this.projectPic.nativeElement);
  
        player.play();
     
    }, 15000 );
  }

  imageClicked()
  {
    this.currentImage++;
    this.currentImage = this.currentImage % this.projectImages.length;
  }
}
