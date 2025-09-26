import { Category } from "../../interfaces/category.interface";
import { Listing } from "../../interfaces/listing.interface";

export const MOCK_CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    icon: '/assets/plug.svg',
    subCategories: [
      { id: '1-1', name: 'Phones', icon: '/assets/plug.svg' },
      { id: '1-2', name: 'Laptops', icon: '/assets/plug.svg' },
      { id: '1-3', name: 'Cameras & Accessories', icon: '/assets/plug.svg' },
      { id: '1-4', name: 'Gaming Consoles & Games', icon: '/assets/plug.svg' },
      { id: '1-5', name: 'Headphones & Audio Gear', icon: '/assets/plug.svg' },
      { id: '1-6', name: 'Small Appliances', icon: '/assets/plug.svg' },
    ],
  },
  {
    id: '2',
    name: 'Fashion',
    icon: '/assets/sunglasses.svg',
    subCategories: [
      { id: '2-1', name: 'Women\'s Clothing', icon: '/assets/plug.svg' },
      { id: '2-2', name: 'Men\'s Clothing', icon: '/assets/plug.svg' },
      { id: '2-3', name: 'Kids & Baby Clothing', icon: '/assets/plug.svg' },
      { id: '2-4', name: 'Footwear', icon: '/assets/plug.svg' },
      { id: '2-5', name: 'Bags & Backpacks', icon: '/assets/plug.svg' },
      { id: '2-6', name: 'Jewelry & Watches', icon: '/assets/plug.svg' },
      { id: '2-7', name: 'Hats, Scarves & Belts', icon: '/assets/plug.svg' },
    ],
  },
  {
    id: '3',
    name: 'Home',
    icon: '/assets/home-decor.svg',
    subCategories: [
      { id: '3-1', name: 'Furniture', icon: '/assets/plug.svg' },
      { id: '3-2', name: 'Home Décor', icon: '/assets/plug.svg' },
      { id: '3-3', name: 'Kitchen & Dining', icon: '/assets/plug.svg' },
      { id: '3-4', name: 'Bedding & Textiles', icon: '/assets/plug.svg' },
      { id: '3-5', name: 'Storage & Organization', icon: '/assets/plug.svg' },
      { id: '3-6', name: 'Plants & Garden', icon: '/assets/plug.svg' },
    ],
  },
  {
    id: '4',
    name: 'Books',
    icon: '/assets/book.svg',
    subCategories: [
      { id: '4-1', name: 'Fiction & Non-Fiction', icon: '/assets/plug.svg' },
      { id: '4-2', name: 'Textbooks & Academic', icon: '/assets/plug.svg' },
      { id: '4-3', name: 'Comics & Graphic Novels', icon: '/assets/plug.svg' },
      { id: '4-4', name: 'Magazines', icon: '/assets/plug.svg' },
      { id: '4-5', name: 'Music (Vinyl, CDs, Cassettes)', icon: '/assets/plug.svg' },
      { id: '4-6', name: 'Movies & DVDs', icon: '/assets/plug.svg' },
    ],
  },
  {
    id: '5',
    name: 'Hobbies & Collectibles',
    icon: '/assets/plant.svg',
    subCategories: [
      { id: '5-1', name: 'Art Supplies', icon: '/assets/plug.svg' },
      { id: '5-2', name: 'Musical Instruments', icon: '/assets/plug.svg' },
      { id: '5-3', name: 'Board Games & Puzzles', icon: '/assets/plug.svg' },
      { id: '5-4', name: 'Collectibles', icon: '/assets/plug.svg' },
      { id: '5-5', name: 'Sports & Fitness Gear', icon: '/assets/plug.svg' },
      { id: '5-6', name: 'Handmade & DIY Kits', icon: '/assets/plug.svg' },
    ],
  },
  {
    id: '6',
    name: 'Vehicles & Parts',
    icon: '/assets/car.svg',
    subCategories: [
      { id: '6-1', name: 'Bicycles', icon: '/assets/plug.svg' },
      { id: '6-2', name: 'Motorbikes', icon: '/assets/plug.svg' },
      { id: '6-3', name: 'Car Parts & Accessories', icon: '/assets/plug.svg' },
      { id: '6-4', name: 'Skateboards & Scooters', icon: '/assets/plug.svg' },
    ],
  },
  {
    id: '7',
    name: 'Kids & Baby',
    icon: '/assets/baby.svg',
    subCategories: [
      { id: '7-1', name: 'Toys & Games', icon: '/assets/plug.svg' },
      { id: '7-2', name: 'Baby Gear', icon: '/assets/plug.svg' },
      { id: '7-3', name: 'Kids\' Furniture', icon: '/assets/plug.svg' },
    ],
  },
  {
    id: '8',
    name: 'Luxury & Vintage Finds',
    icon: '/assets/vintage.svg',
    subCategories: [
      { id: '8-1', name: 'Designer Clothing', icon: '/assets/plug.svg' },
      { id: '8-2', name: 'Rare Sneakers', icon: '/assets/plug.svg' },
      { id: '8-3', name: 'Luxury Bags & Watches', icon: '/assets/plug.svg' },
      { id: '8-4', name: 'Antiques', icon: '/assets/plug.svg' },
    ],
  },
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
