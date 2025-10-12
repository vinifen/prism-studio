export type ProductType = {
  id: number;
  category_id?: number;
  name: string;
  stock: number;
  price: number;
  category?: string;
  image_url?: string;
}