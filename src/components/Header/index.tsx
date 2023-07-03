import { MapPin, ShoppingCart } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { useCart } from '../../hooks/useCart';
import { defaultTheme } from '../../styles/themes/default';
import * as S from './styles';

import { ButtonIcon } from '..';

export const Header = () => {
  const { cart } = useCart();

  return (
    <S.HeaderContainer>
      <NavLink to="/" title="Carrinho de compras" id="cart">
        <img src={logo} alt="" title="Logo" />
      </NavLink>

      <nav>
        <NavLink to="/" title="Localização" id="location">
          <MapPin weight="fill" size={22} />
          Porto Alegre, RS
        </NavLink>

        <NavLink
          to="/checkout"
          title="Carrinho de compras"
          id="cart"
          style={{ textDecoration: 'none' }}
        >
          <S.CartButton>
            <ButtonIcon
              backgroundColor={defaultTheme['yellow-light']}
              icon={
                <ShoppingCart
                  size={22}
                  weight="fill"
                  color={defaultTheme['yellow-dark']}
                />
              }
            />

            <S.Counter>
              <p>{cart.length}</p>
            </S.Counter>
          </S.CartButton>
        </NavLink>
      </nav>
    </S.HeaderContainer>
  );
};
