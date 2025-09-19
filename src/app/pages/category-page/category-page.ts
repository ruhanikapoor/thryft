import { Component, inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ListingService } from '../../services/ListingService/listing';
import { ListingPreview } from '../../../interfaces/listing.interface';
import { Group } from '../../ui/group/group';
import { HeroSection } from '../../ui/hero-section/hero-section';
@Component({
  selector: 'app-category-page',
  imports: [Group, HeroSection],
  templateUrl: './category-page.html',
  styleUrl: './category-page.css'
})
export class CategoryPage implements OnInit {

  route = inject(ActivatedRoute);
  router = inject(Router);
  listingService = inject(ListingService);

  
  categoryId! : string;
  categoryData = {
    name: "",
    image: "",
    heading: "",
    subheading: ""
  };
  filteredListings: ListingPreview[] = [];
  
  constructor() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id') ?? '';
      this.categoryData = this.getcategoryData(this.categoryId);
      this.filteredListings = this.listingService.getListngs().filter(
        listing => listing.categoryId === this.categoryId
      );
    });
  }
  
  getcategoryData(id: string) {
    switch(id) {
      case '1' : return {
        name: "Electronics",
        image: "/assets/electronics.png",
        heading: "One stop for gadgets",
        subheading: "something electronic"
      };
      case '2': return {
        name: 'Fashion',
        image: "/assets/fashion-bg.png",
        heading: "One stop for fashion",
        subheading: "something wardrobe-y"
      };
      case '3': return {
        name: 'Home',
        image: "/assets/decor.png",
        heading: "One stop for home decor",
        subheading: "something home-y"
      };
      case '4': return {
        name: 'Books',
        image: "/assets/books.png",
        heading: "One stop for books",
        subheading: "something bookish"
      };
      default: return {
        name: "Not found",
        image: "",
        heading: "",
        subheading: ""
      };
    }
  }
  ngOnInit() {
  if (this.categoryData?.name === 'Not found') {
    this.router.navigateByUrl('/404');
  }
  
}}
