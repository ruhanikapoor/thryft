import { Category } from "../../interfaces/category.interface";
import { Listing } from "../../interfaces/listing.interface";

export const MOCK_CATEGORIES: Category[] = [
  { id: '1', name: 'Electronics', icon: '/assets/laptop.png' },
  { id: '2', name: 'Fashion', icon: '/assets/fashion.png' },
  { id: '3', name: 'Home', icon: '/assets/home-decor.png' },
  { id: '4', name: 'Books', icon: '/assets/book1.png' },
  { id: '5', name: 'Electronics', icon: '/assets/laptop.png' },
  { id: '6', name: 'Fashion', icon: '/assets/fashion.png' },
  { id: '7', name: 'Home', icon: '/assets/home-decor.png' },
  { id: '8', name: 'Electronics', icon: '/assets/laptop.png' },
  { id: '9', name: 'Fashion', icon: '/assets/fashion.png' },
  { id: '10', name: 'Home', icon: '/assets/home-decor.png' },
];

export const MOCK_LISTINGS: Listing[] = [
  {
    id: '101',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Lightweight and powerful MacBook Air with M2 chip, perfect for everyday use.',
    ownerId: 'user-001',
    createdAt: Date.now()
  },
  {
    id: '102',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Comfortable Nike Air Max sneakers with breathable design and cushioned sole.',
    ownerId: 'user-002',
    createdAt: Date.now()
  },
  {
    id: '103',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Elegant wooden coffee table with polished finish for your living room.',
    ownerId: 'user-003',
    createdAt: Date.now()
  },
  {
    id: '104',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Another unit of the powerful MacBook Air M2, lightly used and well maintained.',
    ownerId: 'user-004',
    createdAt: Date.now()
  },
  {
    id: '105',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Brand new pair of Nike Air Max sneakers, available in multiple sizes.',
    ownerId: 'user-005',
    createdAt: Date.now()
  },
  {
    id: '106',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Minimalist coffee table with a modern wooden design.',
    ownerId: 'user-006',
    createdAt: Date.now()
  },
  {
    id: '107',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Lightweight and powerful MacBook Air with M2 chip, perfect for everyday use.',
    ownerId: 'user-001',
    createdAt: Date.now()
  },
  {
    id: '108',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Comfortable Nike Air Max sneakers with breathable design and cushioned sole.',
    ownerId: 'user-002',
    createdAt: Date.now()
  },
  {
    id: '109',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Elegant wooden coffee table with polished finish for your living room.',
    ownerId: 'user-003',
    createdAt: Date.now()
  },
  {
    id: '110',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Another unit of the powerful MacBook Air M2, lightly used and well maintained.',
    ownerId: 'user-004',
    createdAt: Date.now()
  },
  {
    id: '111',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Brand new pair of Nike Air Max sneakers, available in multiple sizes.',
    ownerId: 'user-005',
    createdAt: Date.now()
  },
  {
    id: '112',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Minimalist coffee table with a modern wooden design.',
    ownerId: 'user-006',
    createdAt: Date.now()
  },
  {
    id: '113',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Lightweight and powerful MacBook Air with M2 chip, perfect for everyday use.',
    ownerId: 'user-001',
    createdAt: Date.now()
  },
  {
    id: '114',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Comfortable Nike Air Max sneakers with breathable design and cushioned sole.',
    ownerId: 'user-002',
    createdAt: Date.now()
  },
  {
    id: '115',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Elegant wooden coffee table with polished finish for your living room.',
    ownerId: 'user-003',
    createdAt: Date.now()
  },
  {
    id: '116',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Another unit of the powerful MacBook Air M2, lightly used and well maintained.',
    ownerId: 'user-004',
    createdAt: Date.now()
  },
  {
    id: '117',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Brand new pair of Nike Air Max sneakers, available in multiple sizes.',
    ownerId: 'user-005',
    createdAt: Date.now()
  },
  {
    id: '118',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Minimalist coffee table with a modern wooden design.',
    ownerId: 'user-006',
    createdAt: Date.now()
  },
  {
    id: '119',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Lightweight and powerful MacBook Air with M2 chip, perfect for everyday use.',
    ownerId: 'user-001',
    createdAt: Date.now()
  },
  {
    id: '120',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Comfortable Nike Air Max sneakers with breathable design and cushioned sole.',
    ownerId: 'user-002',
    createdAt: Date.now()
  },
  {
    id: '121',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Elegant wooden coffee table with polished finish for your living room.',
    ownerId: 'user-003',
    createdAt: Date.now()
  },
  {
    id: '122',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Another unit of the powerful MacBook Air M2, lightly used and well maintained.',
    ownerId: 'user-004',
    createdAt: Date.now()
  },
  {
    id: '123',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Brand new pair of Nike Air Max sneakers, available in multiple sizes.',
    ownerId: 'user-005',
    createdAt: Date.now()
  },
  {
    id: '124',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Minimalist coffee table with a modern wooden design.',
    ownerId: 'user-006',
    createdAt: Date.now()
  },
  {
    id: '125',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Lightweight and powerful MacBook Air with M2 chip, perfect for everyday use.',
    ownerId: 'user-001',
    createdAt: Date.now()
  },
  {
    id: '126',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Comfortable Nike Air Max sneakers with breathable design and cushioned sole.',
    ownerId: 'user-002',
    createdAt: Date.now()
  },
  {
    id: '127',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Elegant wooden coffee table with polished finish for your living room.',
    ownerId: 'user-003',
    createdAt: Date.now()
  },
  {
    id: '128',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Another unit of the powerful MacBook Air M2, lightly used and well maintained.',
    ownerId: 'user-004',
    createdAt: Date.now()
  },
  {
    id: '129',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Brand new pair of Nike Air Max sneakers, available in multiple sizes.',
    ownerId: 'user-005',
    createdAt: Date.now()
  },
  {
    id: '130',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Minimalist coffee table with a modern wooden design.',
    ownerId: 'user-006',
    createdAt: Date.now()
  },
  {
    id: '131',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Lightweight and powerful MacBook Air with M2 chip, perfect for everyday use.',
    ownerId: 'user-001',
    createdAt: Date.now()
  },
  {
    id: '132',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Comfortable Nike Air Max sneakers with breathable design and cushioned sole.',
    ownerId: 'user-002',
    createdAt: Date.now()
  },
  {
    id: '133',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Elegant wooden coffee table with polished finish for your living room.',
    ownerId: 'user-003',
    createdAt: Date.now()
  },
  {
    id: '134',
    title: 'MacBook Air M2',
    categoryId: '1',
    price: 75000,
    imageUrls: ['/assets/macbook.jpg'],
    description: 'Another unit of the powerful MacBook Air M2, lightly used and well maintained.',
    ownerId: 'user-004',
    createdAt: Date.now()
  },
  {
    id: '135',
    title: 'Nike Air Max Shoes',
    categoryId: '2',
    price: 5500,
    imageUrls: ['/assets/shoes.jpg'],
    description: 'Brand new pair of Nike Air Max sneakers, available in multiple sizes.',
    ownerId: 'user-005',
    createdAt: Date.now()
  },
  {
    id: '136',
    title: 'Wooden Coffee Table',
    categoryId: '3',
    price: 8999,
    imageUrls: ['/assets/table.jpg'],
    description: 'Minimalist coffee table with a modern wooden design.',
    ownerId: 'user-006',
    createdAt: Date.now()
  },
];
