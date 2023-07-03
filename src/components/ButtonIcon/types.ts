import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  backgroundColor: string;
  backgroundHoverColor?: string;
}

export interface IStyledButtonIconContainer {
  backgroundColor: string;
  backgroundHoverColor?: string;
}
