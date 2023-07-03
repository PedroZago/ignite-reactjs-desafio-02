import styled from 'styled-components';

import * as T from './types';

export const InfoItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
`;

export const IconContainer = styled.div<T.IconContainerProps>`
  width: 2rem;
  height: 2rem;

  padding: 0.5rem;

  border-radius: 999px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ circleBackgroundColor }) => circleBackgroundColor};
`;

export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.3;

  color: ${({ theme }) => theme['text']};
`;
