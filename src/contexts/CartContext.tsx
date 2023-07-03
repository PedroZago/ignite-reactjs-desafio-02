import { createContext, useState } from 'react';
import { toast } from 'react-toastify';

import { Product, Stock } from '../interfaces';
import { api } from '../services/api';
import {
  CartContextData,
  CartProviderProps,
  UpdateProductAmount,
} from './@types';

export const CartContext = createContext<CartContextData>(
  {} as CartContextData
);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@CoffeeDelivery:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const getProductStock = async (productId: number): Promise<number> => {
    try {
      const stock = await api.get<Stock>(`/stock/${productId}`);

      return stock.data.amount;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  const addProduct = async (productId: number, requestedAmount: number) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        product => product.id === productId
      );

      if (productExists) {
        productExists.amount = requestedAmount;
      } else {
        const product = await api.get<Product>(`/products/${productId}`);

        const newProduct = {
          ...product.data,
          amount: requestedAmount,
        };

        updatedCart.push(newProduct);
      }

      setCart(updatedCart);

      localStorage.setItem('@CoffeeDelivery:cart', JSON.stringify(updatedCart));

      toast.success('Carrinho atualizado com sucesso');
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(
        product => product.id === productId
      );

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setCart(updatedCart);
        localStorage.setItem(
          '@CoffeeDelivery:cart',
          JSON.stringify(updatedCart)
        );
      } else {
        throw Error();
      }
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const stock = await api.get<Stock>(`/stock/${productId}`);
      const stockAmount = stock.data.amount;

      if (amount > stockAmount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find(
        product => product.id === productId
      );

      if (productExists) {
        productExists.amount = amount;

        setCart(updatedCart);

        localStorage.setItem(
          '@CoffeeDelivery:cart',
          JSON.stringify(updatedCart)
        );
      } else {
        throw Error();
      }
    } catch (error) {
      console.error(error);
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  const cleanCart = () => {
    try {
      setCart([]);
      localStorage.removeItem('@CoffeeDelivery:cart');
    } catch {
      toast.error('Erro na limpeza do carrinho');
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        updateProductAmount,
        getProductStock,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
