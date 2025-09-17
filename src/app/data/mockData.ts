import { Category } from "../../interfaces/category.interface";
import { ListingPreview } from "../../interfaces/listing.interface";

export const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: 'Electronics', icon: '/assets/laptop.png' },
  { id: '2', name: 'Fashion', icon: '/assets/fashion.png' },
  { id: '3', name: 'Home', icon: '/assets/home-decor.png' },
];

export const MOCK_LISTINGS: ListingPreview[] = [
  { id: '101', title: 'MacBook Air M2', price: 75000, imageUrls: ['/assets/macbook.jpg'] },
  { id: '102', title: 'Nike Air Max Shoes', price: 5500, imageUrls: ['/assets/shoes.jpg'] },
  { id: '103', title: 'Wooden Coffee Table', price: 8999, imageUrls: ['/assets/table.jpg'] },
];
