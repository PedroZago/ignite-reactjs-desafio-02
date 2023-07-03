import { ShoppingCartSimple, Minus, Plus } from 'phosphor-react';

import { ButtonIcon } from '..';

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useCart } from '../../hooks/useCart';
import { defaultTheme } from '../../styles/themes/default';
import { getProductImage } from '../../utils/getProductImage';
import * as S from './styles';
import * as T from './types';

interface CartItemsAmount {
  [key: number]: number;
}

export const CatalogItem = ({ product }: T.CatalogItemProps) => {
  const { addProduct, getProductStock, cart, removeProduct } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = { ...sumAmount };
    newSumAmount[product.id] = product.amount;

    return newSumAmount;
  }, {} as CartItemsAmount);

  const [availableStock, setAvailableStock] = useState(0);
  const [amount, setAmount] = useState(cartItemsAmount[product.id] || 0);

  const handleProductIncrement = () => {
    if (amount >= availableStock) {
      toast.error('Quantidade solicitada fora de estoque');
      return;
    }
    setAmount(oldState => oldState + 1);
  };

  const handleProductDecrement = () => {
    if (amount <= 0) {
      toast.error('Somente valores acima de 0 são válidos');
      return;
    }

    if (amount === 1) {
      removeProduct(product.id);
      return;
    }

    setAmount(oldState => oldState - 1);
  };

  const handleAddProduct = () => {
    if (amount === 0) {
      toast.error(
        'Selecione a quantidade que deseja comprar antes de adicionar o produto ao carrinho'
      );
      return;
    }

    addProduct(product.id, amount);
  };

  const queryProductStock = async () => {
    try {
      const stock = await getProductStock(product.id);
      setAvailableStock(stock);
    } catch (error) {
      console.log(error);
      toast.error('Ocorreu um erro ao buscar pela quantidade do produto');
    }
  };

  useEffect(() => {
    queryProductStock();
  }, []);

  return (
    <S.CatalogItemContainer>
      <S.ProductImage src={getProductImage(product.image)} alt="" />

      <S.Tags>
        {product.tags.map((tag, index) => (
          <S.TagWrapper key={index}>
            <S.TagText>{tag}</S.TagText>
          </S.TagWrapper>
        ))}
      </S.Tags>

      <S.ProductName>{product.name}</S.ProductName>

      <S.ProductDescription>{product.description}</S.ProductDescription>

      <S.FooterWrapper>
        <S.Price>
          <span>R$</span>
          <p>
            {product.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
          </p>
        </S.Price>

        <S.FooterRight>
          <S.SelectQuantityContainer>
            <Minus onClick={handleProductDecrement} weight="bold" size={14} />

            <S.Text>{amount}</S.Text>

            <Plus onClick={handleProductIncrement} weight="bold" size={14} />
          </S.SelectQuantityContainer>

          <ButtonIcon
            backgroundColor={defaultTheme['purple-dark']}
            backgroundHoverColor={defaultTheme['purple']}
            onClick={handleAddProduct}
            icon={
              <ShoppingCartSimple
                size={22}
                weight="fill"
                color={defaultTheme.white}
              />
            }
          />
        </S.FooterRight>
      </S.FooterWrapper>
    </S.CatalogItemContainer>
  );
};
