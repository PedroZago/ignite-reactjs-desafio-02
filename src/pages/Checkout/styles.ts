import styled from 'styled-components';

export const CheckoutContainer = styled.main`
  padding: 0rem 10rem 1rem;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: 32px;

  padding: 2.5rem 0 0;
`;

export const LeftContent = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const LeftCardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;

export const CardTitleContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`;

export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;

  h3 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;

    color: ${({ theme }) => theme.subtitle};
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;

    color: ${({ theme }) => theme.text};
  }
`;

export const RightContent = styled.div`
  width: 28rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const SectionTitle = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;

  color: ${({ theme }) => theme.subtitle};

  margin-bottom: 16px;
`;

export const LeftCard = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;

  padding: 2.5rem;

  background: ${({ theme }) => theme.card};
  border-radius: 6px;
`;

export const SelectPaymentModeButton = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const InputsContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

export const InputItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 12px;
`;

export const RightCard = styled.div`
  width: 28rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  padding: 2.5rem;

  background: ${({ theme }) => theme.card};
  border-radius: 6px 44px;
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.button};

  margin-top: 24px;
`;

export const InfoContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 12px;
`;

export const InfoItem = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextRegular = styled.p`
  font-size: 0.875rem;
  line-height: 130%;

  color: ${({ theme }) => theme.text};
`;

export const TextBold = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;

  color: ${({ theme }) => theme.subtitle};
`;
