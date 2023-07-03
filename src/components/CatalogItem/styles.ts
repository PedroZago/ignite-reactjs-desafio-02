import styled from 'styled-components';

export const CatalogItemContainer = styled.div`
  width: 16rem;
  max-width: 16rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0 1.25rem 1.25rem 1.25rem;
  border-radius: 6px 36px;

  background: ${({ theme }) => theme['card']};
`;

export const ProductImage = styled.img`
  height: 7.5rem;
  width: 7.5rem;

  margin-top: -20px;
  margin-bottom: 12px;
`;

export const Tags = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;

  margin-bottom: 16px;
`;

export const TagWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem 0.5rem;

  background: ${({ theme }) => theme['yellow-light']};
  border-radius: 100px;
`;

export const TagText = styled.p`
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 1.3;

  text-transform: uppercase;

  color: ${({ theme }) => theme['yellow-dark']};
`;

export const ProductName = styled.p`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3;

  text-align: center;

  color: ${({ theme }) => theme['subtitle']};

  margin-bottom: 8px;
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.3rem;

  text-align: center;

  color: ${({ theme }) => theme['label']};

  margin-bottom: 32px;
`;

export const FooterWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 4px;

  color: ${({ theme }) => theme.text};

  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.875rem;
  }

  p {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 1.5rem;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const SelectQuantityContainer = styled.div`
  height: 2.375rem;
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
