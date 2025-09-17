import { Component, OnInit } from '@angular/core';
import { Group } from '../../ui/group/group';
import { Search } from '../../ui/search/search';
import { ListingService } from '../../services/ListingService/listing';
import { CategoryService } from '../../services/CategoryService/category';
import { Category } from '../../../interfaces/category.interface';
import { ListingPreview } from '../../../interfaces/listing.interface';

@Component({
  selector: 'app-homepage',
  imports: [Group, Search],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css'
})
export class Homepage implements OnInit {

  categories: Category[] = [];
  listings: ListingPreview[] = [];
  content: { name: string, data: any[] }[] = [];
  filteredResults: ListingPreview[] = [];

  constructor(private categoryService: CategoryService, private listingService: ListingService) {}

  ngOnInit(): void {
    this.categories = this.categoryService.getCategories();
    this.listings = this.listingService.getListngs();
    this.filteredResults = this.listings;

    this.content = [
      {
        name: "Shop By Category",
        data: this.categories
      },
      {
        name: "Recently Added",
        data: this.listings
      }
    ];
  }

  onSearch(query: string): void {
    this.filteredResults = query
      ? this.listings.filter(listing =>
          listing.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];
  }

  onSelect(selected: string): void {
    console.log('Selected search:', selected);
  }

}
