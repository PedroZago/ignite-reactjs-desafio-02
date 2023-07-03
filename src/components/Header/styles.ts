import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.background};

  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;

  img {
    height: 2.5rem;
  }

  nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    gap: 12px;

    #location {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 4px;

      padding: 8px;

      background: ${({ theme }) => theme['purple-light']};

      border-radius: 6px;

      color: ${({ theme }) => theme['purple-dark']};
      font-size: 0.875rem;
      line-height: 1.3;
      text-decoration: none;

      svg {
        color: ${({ theme }) => theme['purple']};
      }
    }

    #cart {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 4px;
    }
  }
`;

export const CartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Counter = styled.div`
  width: 20px;
  height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 1000px;
  background: ${({ theme }) => theme['yellow-dark']};

  position: absolute;
  right: -8.345px;
  top: -8px;

  p {
    text-align: center;

    font-size: 0.75rem;
    font-weight: 700;
    line-height: 1.3;
    letter-spacing: -0.72px;

    color: ${({ theme }) => theme['white']};
  }
`;
