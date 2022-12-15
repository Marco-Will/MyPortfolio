import { Component, OnInit } from '@angular/core';

/** import a css library for animations
 * 
 * import in angular.json / styles -->  "./node_modules/aos/dist/aos.css", "./node_modules/aos/dist/aos.js"
 */
 import * as AOS from 'aos';  



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit  
{
  ngOnInit()
  {
    AOS.init()
  }
}
