import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../ui/navbar/navbar';
import { HeroSection } from '../ui/hero-section/hero-section';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, Navbar, HeroSection],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
