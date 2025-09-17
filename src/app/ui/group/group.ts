import { Component, Input } from '@angular/core';
import { Card } from '../card/card';
import { ListingPreview } from '../../../interfaces/listing.interface';
import { Category } from '../../../interfaces/category.interface';

@Component({
  selector: 'app-group',
  imports: [Card],
  templateUrl: './group.html',
  styleUrl: './group.css'
})
export class Group {
  @Input() title: string = "";
  @Input() items: ListingPreview[] | Category[] = [];
}
