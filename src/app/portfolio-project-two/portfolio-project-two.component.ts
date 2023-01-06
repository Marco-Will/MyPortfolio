import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  AnimationTriggerMetadata,
} from '@angular/animations';
import { AnimationBuilder, animate as buildAnimate } from '@angular/animations';
import { ViewChild, ElementRef } from '@angular/core';

export function fadeInOut(): AnimationTriggerMetadata {
  return trigger('fadeInOut', [
    state('in', style({ scale: 1 })),
    transition('void => *', [style({ scale: 0 }), animate(600)]),
    transition('* => void', [animate(600, style({ opacity: 0 }))]),
  ]);
}

@Component({
  selector: 'app-portfolio-project-two',
  templateUrl: './portfolio-project-two.component.html',
  styleUrls: ['./portfolio-project-two.component.scss'],
  animations: [fadeInOut()],
})
export class PortfolioProjectTwoComponent implements OnInit {
  /**array and variables for the image changing function --> updateImage */
  projectImages = [
    'rsz_myportfolio.png',
    'portfolio-skills.png',
    'portfolio-portfolio.png',
    'portfolio-contact.png',
  ];
  currentImage = 0;

  @ViewChild('projectPic', { static: true })
  projectPic!: ElementRef<HTMLImageElement>;

  constructor(private animationBuilder: AnimationBuilder) {}

  ngOnInit(): void {
    this.updateImage();
  }
  /**function for update the currentImage variable creating a smooth transition from picture to picture */
  updateImage() {
    this.currentImage = this.currentImage % this.projectImages.length;

    setInterval(() => {
      setTimeout(() => {
        this.currentImage++;
        this.currentImage = this.currentImage % this.projectImages.length;
        this.currentImage = this.currentImage % this.projectImages.length;
      }, 1000);

      const player = this.animationBuilder
        .build([
          buildAnimate('1000ms', style({ opacity: 0 })),
          buildAnimate('2000ms', style({ opacity: 1 })),
        ])
        .create(this.projectPic.nativeElement);

      player.play();
    }, 11000);
  }

  imageClicked() {
    this.currentImage++;
    this.currentImage = this.currentImage % this.projectImages.length;
  }
}
