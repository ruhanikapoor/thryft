import { Injectable } from '@angular/core';
import { ListingPreview } from '../../../interfaces/listing.interface';
import { MOCK_LISTINGS } from '../../data/mockData';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  getListngs() : ListingPreview[] {
    return MOCK_LISTINGS;
  }
}
