import { ReactNode } from 'react';

import { Product } from '../../interfaces';

export interface CartProviderProps {
  children: ReactNode;
}

export interface UpdateProductAmount {
  productId: number;
  amount: number;
}

export interface CartContextData {
  cart: Product[];
  addProduct: (productId: number, requestedAmount: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
  getProductStock: (productId: number) => Promise<number>;
  cleanCart: () => void;
}
