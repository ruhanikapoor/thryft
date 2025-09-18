import { Component, Input } from '@angular/core';
import { ListingPreview } from '../../../interfaces/listing.interface';
import { Category } from '../../../interfaces/category.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  @Input() cardData! : ListingPreview | Category;
  isListingPreview(data: ListingPreview | Category): data is ListingPreview {
    return 'price' in data;
  }
}
