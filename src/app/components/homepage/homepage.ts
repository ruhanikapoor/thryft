import { Component, OnInit } from '@angular/core';
import { Group } from '../../ui/group/group';
import { ListingService } from '../../services/ListingService/listing';
import { CategoryService } from '../../services/CategoryService/category';
import { Category } from '../../../interfaces/category.interface';
import { ListingPreview } from '../../../interfaces/listing.interface';

@Component({
  selector: 'app-homepage',
  imports: [Group],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements OnInit {

  categories: Category[] = [];
  listings: ListingPreview[] = [];
  content: { name: string, data: any[] }[] = [];

  constructor(private categoryService: CategoryService, private listingService: ListingService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.listings = this.listingService.getListngs();

    this.content = [
      {
        name: "Recently Added",
        data: this.listings
      }, 
      {
        name: "Shop By Category",
        data: this.categories
      }
    ];
  }
}
