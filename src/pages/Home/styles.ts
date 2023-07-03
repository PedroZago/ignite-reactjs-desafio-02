import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding: 0rem 10rem 1rem;
`;

export const Intro = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  gap: 8px;

  padding: 5.75rem 0;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  img {
    width: 29.75rem;
  }
`;

export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 3rem;
  line-height: 1.3;

  color: ${({ theme }) => theme['title']};

  margin-bottom: 16px;
`;

export const Subtitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  font-stretch: 100;
  line-height: 1.3;

  color: ${({ theme }) => theme['subtitle']};

  margin-bottom: 66px;
`;

export const InfoItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px 40px;

  &:nth-child(1) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  &:nth-child(2) {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
  }

  &:nth-child(3) {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
  }

  &:nth-child(4) {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
  }
`;

export const ProductsList = styled.section`
  padding-top: 2rem;
`;

export const SectionTitle = styled.h3`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  line-height: 1.3;

  margin-bottom: 3.375rem;
`;

export const CatalogWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
`;
