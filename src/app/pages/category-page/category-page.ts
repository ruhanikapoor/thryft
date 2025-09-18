import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from '../../services/ListingService/listing';
import { ListingPreview } from '../../../interfaces/listing.interface';
import { Group } from '../../ui/group/group';

@Component({
  selector: 'app-category-page',
  imports: [Group],
  templateUrl: './category-page.html',
  styleUrl: './category-page.css'
})
export class CategoryPage {

  route = inject(ActivatedRoute);
  listingService = inject(ListingService);

  categoryId! : string;
  categoryName!: string;
  filteredListings: ListingPreview[] = [];

  constructor() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id') ?? '';
      this.categoryName = this.getCategoryName(this.categoryId);
      this.filteredListings = this.listingService.getListngs().filter(
        listing => listing.categoryId === this.categoryId
      );
    });
  }

  getCategoryName(id: string): string {
    switch(id) {
      case '1' : return "Electronics";
      case '2': return 'Fashion';
      case '3': return 'Home';
      default: return "Not found";
    }
  }

}
