import styled from 'styled-components';

export const SuccessContainer = styled.main`
  padding: 0rem 10rem 1rem;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;

  padding: 5rem 0 0;
`;

export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  h1 {
    font-size: 2rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 1.3;

    color: ${({ theme }) => theme['yellow-dark']};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;

    color: ${({ theme }) => theme.subtitle};
  }
`;

export const InvoiceDetailsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const InvoiceDetails = styled.div`
  display: flex;
  width: 32.875rem;

  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  padding: 40px;

  position: relative;

  &::before {
    content: '';

    position: absolute;
    inset: 0;

    border-radius: 6px 36px;
    padding: 1px;

    background: ${({ theme }) =>
      `linear-gradient(45deg, ${theme['yellow-dark']}, ${theme.purple})`};

    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const Banner = styled.div`
  text-align: right;

  img {
    width: 30.75rem;
  }
`;

export const InfoItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const InfoItemText = styled.p`
  font-size: 1rem;
  line-height: 1.3;

  color: ${({ theme }) => theme['text']};
`;

export const InfoItemTextBold = styled.p`
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.3;

  color: ${({ theme }) => theme['text']};
`;
