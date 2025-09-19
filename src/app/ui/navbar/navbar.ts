import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isScrolled: boolean = false;
  menuVisible: boolean = false;
  hasHeroSection: boolean = true;
  router = inject(Router);

  constructor() {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd)).subscribe((e: any) => {
      const currentUrl = e.urlAfterRedirects;

      this.hasHeroSection = !(
        currentUrl.includes('/product')
      )

      if(!this.hasHeroSection) {
        this.isScrolled = true;
      } else {
        this.isScrolled = window.scrollY > window.innerHeight * 0.93;
      }

    })
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if(this.hasHeroSection){
      this.isScrolled = window.scrollY > window.innerHeight * 0.93;
    }
  }

  openMenu() {
    this.menuVisible = true;
  }

  closeMenu() {
    this.menuVisible = false;
  }

  home() {
    this.router.navigateByUrl("home");
  }

}
