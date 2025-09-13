import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  imports: [CommonModule],
  templateUrl: './landing-page.html',
  styleUrls: ['./landing-page.css']
})
export class LandingPage implements OnInit, OnDestroy {

  slides = [
    {
      image: "/assets/image1.jpg",
      title: "Buy & Sell Beautiful Finds",
      text: "Turn everyday items into treasures — shop, sell, repeat."
    },
    {
      image: "/assets/image2.jpg",
      title: "Your Closet, Someone’s Wishlist",
      text: "List your items in seconds and make space for new joys."
    },
    {
      image: "/assets/image3.jpg",
      title: "Pre-loved. Re-loved.",
      text: " Give your things a second life and shop guilt-free."
    },
    {
      image: "/assets/image4.jpg",
      title: "Discover, Shop, Sell — Repeat",
      text: "A modern marketplace for trendsetters and treasure hunters."
    },
  ]


  currentIndex = 0;
  private autoSlideInterval: any;
  private readonly SLIDE_DURATION = 3500;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    this.stopAutoSlide();
  }

  private startAutoSlide() {
    this.autoSlideInterval = setInterval(() => {
      this.next();
    }, this.SLIDE_DURATION);
  }

  private stopAutoSlide() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  private next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.cdr.detectChanges();
  }
}
