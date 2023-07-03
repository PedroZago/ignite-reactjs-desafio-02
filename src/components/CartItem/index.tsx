import { Trash, Minus, Plus } from 'phosphor-react';

import { ButtonSmall } from '..';

import { useCart } from '../../hooks/useCart';
import { defaultTheme } from '../../styles/themes/default';
import { getProductImage } from '../../utils/getProductImage';
import * as S from './styles';
import * as T from './types';

export const CartItem = ({ product }: T.CartItemProps) => {
  const { removeProduct, updateProductAmount } = useCart();

  const handleProductIncrement = () => {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  };

  const handleProductDecrement = () => {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
  };

  const handleRemoveProduct = (productId: number) => removeProduct(productId);

  return (
    <S.CartItemContainer>
      <S.LeftContent>
        <S.ProductImage src={getProductImage(product.image)} alt="" />

        <S.DetailsContent>
          <S.ProductName>{product.name}</S.ProductName>

          <S.ActionsContent>
            <S.SelectQuantityContainer>
              <Minus onClick={handleProductDecrement} weight="bold" size={14} />

              <S.Text>{product.amount}</S.Text>

              <Plus onClick={handleProductIncrement} weight="bold" size={14} />
            </S.SelectQuantityContainer>

            <ButtonSmall
              icon={<Trash size={16} color={defaultTheme.purple} />}
              text="Remover"
              onClick={() => handleRemoveProduct(product.id)}
            />
          </S.ActionsContent>
        </S.DetailsContent>
      </S.LeftContent>

      <S.RightContent>
        <S.Price>R$ {product.subTotal}</S.Price>
      </S.RightContent>
    </S.CartItemContainer>
  );
};
