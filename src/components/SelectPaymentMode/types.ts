import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface SelectPaymentModeProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  isSelected: boolean;
  value?: string;
  label: string;
  icon: ReactNode;
}

export interface SelectPaymentModeContainerProps {
  isSelected: boolean;
}
