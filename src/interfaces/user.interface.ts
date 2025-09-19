export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
  myListings?: string[];
  messages?: string[];
  recentlyViewed?: string[];
  createdAt?: number;
  updatedAt?: number;
}