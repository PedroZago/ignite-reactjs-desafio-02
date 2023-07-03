import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useEffect, useState } from 'react';

import banner from '../../assets/banner.svg';
import { CatalogItem, InfoItem } from '../../components';
import { Product } from '../../interfaces';
import { api } from '../../services/api';
import { defaultTheme } from '../../styles/themes/default';
import * as S from './styles';

const infoItems = [
  {
    id: 1,
    text: 'Compra simples e segura',
    icon: <ShoppingCart weight="fill" size={22} color={defaultTheme.white} />,
    circleBackgroundColor: defaultTheme['yellow-dark'],
  },
  {
    id: 2,
    text: 'Embalagem mantém o café intacto',
    icon: <Package weight="fill" size={22} color={defaultTheme.white} />,
    circleBackgroundColor: defaultTheme['text'],
  },
  {
    id: 3,
    text: 'Compra simples e segura',
    icon: <Timer weight="fill" size={22} color={defaultTheme.white} />,
    circleBackgroundColor: defaultTheme['yellow'],
  },
  {
    id: 4,
    text: 'Compra simples e segura',
    icon: <Coffee weight="fill" size={22} color={defaultTheme.white} />,
    circleBackgroundColor: defaultTheme['purple'],
  },
];

export const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  async function loadProducts() {
    const response = await api.get<Product[]>('products');

    const tempProduct = response.data.map(product => ({
      ...product,
    }));

    setProducts(tempProduct);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <S.HomeContainer>
      <S.Intro>
        <S.LeftContent>
          <S.Title>Encontre o café perfeito para qualquer hora do dia</S.Title>

          <S.Subtitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </S.Subtitle>

          <S.InfoItemContainer>
            {infoItems.map(infoItem => (
              <InfoItem
                key={infoItem.id}
                text={infoItem.text}
                icon={infoItem.icon}
                circleBackgroundColor={infoItem.circleBackgroundColor}
              />
            ))}
          </S.InfoItemContainer>
        </S.LeftContent>

        <S.RightContent>
          <img src={banner} alt="" title="Logo" />
        </S.RightContent>
      </S.Intro>

      <S.ProductsList>
        <S.SectionTitle>Nossos cafés</S.SectionTitle>

        <S.CatalogWrapper>
          {products.map(product => (
            <CatalogItem key={product.id} product={product} />
          ))}
        </S.CatalogWrapper>
      </S.ProductsList>
    </S.HomeContainer>
  );
};
