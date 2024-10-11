export interface Product {
  price: number;
  weight: number;
  name: string;
  category: string;
  imageUrl: string;
  metadata: MetadataProduct;
  id: string;
}

export interface MetadataProduct {
  unit: string;
  weight: number;
  calorie: number;
  proteins: number;
  fats: number;
  increment: number;
  carbs: number;
}
