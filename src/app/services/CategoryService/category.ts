import { Injectable } from '@angular/core';
import { Category } from '../../../interfaces/category.interface';
import { MOCK_CATEGORIES } from '../../data/mockData';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCategories(): Category[] {
    return MOCK_CATEGORIES;
  }
}
