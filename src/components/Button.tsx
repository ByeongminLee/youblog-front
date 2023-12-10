import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { ProgressCircular } from './ProgressCircular';
import tw from '@/utils/tw';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'ref'> {
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, disabled, isLoading = false, ...restProps }, ref) => {
    return (
      <button ref={ref} disabled={disabled} className={tw('w-full', className)} {...restProps}>
        <span className="flex items-center justify-center">
          {isLoading && <ProgressCircular />}
          {children}
        </span>
      </button>
    );
  },
);

Button.displayName = 'Button';
