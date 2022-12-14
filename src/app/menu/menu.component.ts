import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  menuOpen: boolean = false;
  active: boolean = false;

  /**variable for toggle an animation when link in menu is clicked */
  animate = false;

  /**variables fore track which link from menu is currently active */
  @Input() activeHome = true;
  @Input() activeAboutMe = true;
  @Input() activeProjects = true;
  @Input() activeSkills = true;
  @Input() activeContact = true;

  /** variable for the "toggleFadeMenu" HostListener, setting colors on different scrollpoints*/
  color = 'white';
  color2 = 'white';
  color3 = 'white';
  color4 = 'white';
  color5 = 'white';

  constructor(public scroller: ViewportScroller, private router: Router) {}

  /**function for comparing routes and setting active color */
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeHome =
        this.router.url === '/#my-start-site' || this.router.url === '/';
        this.activeAboutMe = this.router.url === '/#about-me';
        this.activeSkills = this.router.url === '/#my-skills';
        this.activeProjects = this.router.url === '/#my-portfolio';
        this.activeContact = this.router.url === '/#my-contact';
      }
    });
  }

  /** function for trigger fade out and in effect on menu lunk click */
  toggleFadeMenu() {
    this.animate = false;
    setTimeout(() => {
      this.animate = true;
    }, 10);
  }

  /**
   * tracking if user is scrolling and adjusting the links color to the belonging section
   */
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    var scrollPosition = window.scrollY;

    console.log(scrollPosition);
    if (
      this.router.url === '/imprint' ||
      this.router.url === '/data-protection'
    ) {
      this.color = 'white';
      this.color2 = 'white';
      this.color3 = 'white';
      this.color4 = 'white';
      this.color5 = 'white';
    } else {
      /** Home link */

      if (scrollPosition == 0 || scrollPosition < 501) {
        this.color3 = '#70e61c';
      } else {
        this.activeHome = false;
        this.color3 = 'white';
      }
      /** About link */

      if (scrollPosition > 500 && scrollPosition < 1301) {
        this.color = '#70e61c';
      } else {
        this.activeAboutMe = false;

        this.color = 'white';
      }
      /**Skills Link  */

      if (scrollPosition > 1300 && scrollPosition < 2001) {
        this.color2 = '#70e61c';
      } else {
        this.activeSkills = false;
        this.color2 = 'white';
      }
      /** Projects link */

      if (scrollPosition > 2000 && scrollPosition < 3601) {
        this.color4 = '#70e61c';
      } else {
        this.activeProjects = false;
        this.color4 = 'white';
      }
      /** Contacts link */

      if (scrollPosition > 3600) {
        this.color5 = '#70e61c';
      } else {
        this.activeContact = false;
        this.color5 = 'white';
      }
    }
  }
  /**open hamburger menu */
  openMenu() {
    if (!this.menuOpen) {
      this.menuOpen = true;
    } else {
      this.menuOpen = false;
    }
  }

  /**close hamburger menu and navigate to clicked section */

  closeMenu(id?: any) {
    this.menuOpen = false;
    this.router.navigate(['/']);
    setTimeout(() => {
      this.scroller.scrollToAnchor(id);
    }, 10);
  }
}
