import styled, { css } from 'styled-components';

import * as T from './types';

export const ButtonIconContainer = styled.button<T.IStyledButtonIconContainer>`
  height: 2.375rem;
  width: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem;

  background: ${({ backgroundColor }) => backgroundColor};

  border: 0;
  border-radius: 6px;

  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${({ backgroundHoverColor }) =>
    backgroundHoverColor &&
    css`
      &:not(:disabled):hover {
        background: ${backgroundHoverColor};
      }
    `}
`;
