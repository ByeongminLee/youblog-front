import tw from '@/utils/tw';
import React, { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, ...restProps }, ref) => {
  return <input {...restProps} className={tw('w-full', className)} ref={ref} />;
});

Input.displayName = 'Input';

export default Input;
