import styled from 'styled-components';

export const ButtonContainer = styled.button`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.75rem 2.8125rem;

  background: ${({ theme }) => theme['yellow']};

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['yellow-dark']};
  }
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 0.875rem;

  text-transform: uppercase;

  color: ${({ theme }) => theme['white']};
`;
