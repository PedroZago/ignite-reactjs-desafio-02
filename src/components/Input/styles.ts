import styled, { css } from 'styled-components';

import * as T from './types';

export const InputContainer = styled.div<T.InputContainerProps>`
  position: relative;
  display: inline-block;

  ${({ width }) =>
    width &&
    css`
      width: ${width}px;
    `};

  ${({ theme, value, isOptional }) =>
    isOptional &&
    !value &&
    css`
      &::after {
        content: 'Opcional';

        font-style: italic;
        font-size: 0.75rem;

        color: ${theme.label};

        position: absolute;
        top: 50%;
        right: 0.75rem;

        transform: translateY(-50%);
      }
    `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    height: 2.5rem;

    padding: 0.75rem;

    background: ${theme.input};

    border: 1px solid ${theme.button};
    border-radius: 4px;

    font-size: 0.875rem;
    line-height: 1.3;

    color: ${theme.text};

    &:focus {
      box-shadow: none;
      border-color: ${theme['yellow-dark']};
    }

    &::placeholder {
      color: ${theme.label};
    }
  `};
`;
