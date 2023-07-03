import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonSmallProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: ReactNode;
}
