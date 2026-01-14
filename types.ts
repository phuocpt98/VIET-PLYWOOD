
export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Feature {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconUrl: string;
}

export interface CounterItem {
  id: string;
  number: string;
  label: string;
  iconUrl: string;
}

export interface CatalogPage {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

export type Language = 'VN' | 'EN';
