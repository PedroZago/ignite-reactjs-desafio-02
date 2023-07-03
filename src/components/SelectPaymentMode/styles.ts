import styled, { css } from 'styled-components';

import * as T from './types';

export const SelectPaymentModeContainer = styled.button<T.SelectPaymentModeContainerProps>`
  width: 11.25rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  padding: 1rem;

  ${({ theme, isSelected }) => css`
    background: ${isSelected ? theme['purple-light'] : theme['button']};

    border: ${`1px solid ${isSelected ? theme['purple'] : 'transparent'}`};
  `}

  border-radius: 6px;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    ${({ theme, isSelected }) =>
      !isSelected &&
      css`
        background: ${theme['hover']};
      `}
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
