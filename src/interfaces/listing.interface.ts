export interface ListingPreview {
  id: string,
  title: string,
  price: number,
  imageUrl: string[],
}

export interface Listing extends ListingPreview {
  description: string;
  ownerId: string;
  categoryId?: string;
  createdAt: number;
  updatedAt?: number;
}