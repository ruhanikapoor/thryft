export interface ListingPreview {
  id: string,
  title: string,
  price: number,
  imageUrls: string[],
  categoryId?: string,
}

export interface Listing extends ListingPreview {
  description: string;
  ownerId: string;
  createdAt: number;
  updatedAt?: number;
}