import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 23rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding: 0.5rem 0.25rem;

  background: ${({ theme }) => theme['card']};
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const RightContent = styled.div``;

export const ProductImage = styled.img`
  height: 64px;
  width: 64px;
`;

export const DetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const ProductName = styled.p`
  font-size: 1rem;
  line-height: 1.3;

  color: ${({ theme }) => theme['subtitle']};
`;

export const ActionsContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

export const Price = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;

  text-transform: uppercase;

  color: ${({ theme }) => theme['text']};
`;

export const SelectQuantityContainer = styled.div`
  height: 2rem;
  width: 4.5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 4px;

  padding: 0.5rem;

  background: ${({ theme }) => theme['button']};

  border: 0;
  border-radius: 6px;

  svg {
    cursor: pointer;
    color: ${({ theme }) => theme['purple']};

    &:hover {
      color: ${({ theme }) => theme['purple-dark']};
    }
  }
`;

export const Text = styled.p`
  font-size: 1rem;

  text-align: center;

  color: ${({ theme }) => theme['title']};
`;
