import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isOptional?: boolean;
  width?: number;
}

export interface InputContainerProps {
  value: InputHTMLAttributes<HTMLInputElement>['value'];
  isOptional?: boolean;
  width?: number;
}
