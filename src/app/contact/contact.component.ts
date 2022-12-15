import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent 
{
  @ViewChild('arrowUp') arrowUp!: ElementRef;

  defaultArrowUp = '../../assets/img/icons/Go up button.png'
  ArrowUpHover = '../../assets/img/icons/go-up-btn-green.png'
  currentArrowImage = this.defaultArrowUp;
  

  /**2 functions for changing the element on mouse hover and mouse leave */
  onImageHover()
  {
    this.currentArrowImage = this.ArrowUpHover;
  }
  onImageLeave()
  {
    this.currentArrowImage = this.defaultArrowUp;
  }

}
