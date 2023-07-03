import styled from 'styled-components';

export const LayoutContainer = styled.div`
  box-sizing: content-box;

  margin: 0rem auto;
  padding: 0 1rem;

  max-width: 90rem;

  background: ${({ theme }) => theme['gray-800']};

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
  }
`;
