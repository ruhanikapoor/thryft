import { Component, HostListener, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  isScrolled: boolean = false;
  menuVisible: boolean = false;
  router = inject(Router);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > window.innerHeight * 0.93;
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
