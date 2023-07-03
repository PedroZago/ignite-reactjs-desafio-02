import styled from 'styled-components';

export const ButtonSmallContainer = styled.button`
  height: 32px;
  width: 5.6875rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;

  padding: 0.5rem;

  background: ${({ theme }) => theme['button']};

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme['hover']};
  }
`;

export const Text = styled.p`
  font-size: 0.75rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme['text']};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
