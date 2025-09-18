import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {

  @Input() bgImg! : string;
  @Input() heading! : string;
  @Input() subHeading! : string;

}
