export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  image: string;
  amount: number;
}

export interface Stock {
  id: number;
  amount: number;
}
