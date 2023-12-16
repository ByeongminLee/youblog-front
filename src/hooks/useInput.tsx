'use client';
import { useState } from 'react';

export interface useInputType {
  <T extends object>(initialValue: T): [T, (e: React.ChangeEvent<HTMLInputElement>) => void, (name: string) => void];
}
export type InputHandleProps = React.ChangeEvent<HTMLInputElement>;

export const useInput: useInputType = <T extends object>(initialValue: T) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChangeInput = (e: InputHandleProps) => {
    const { value, name } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const inputReset = (name: string) => setInputValue({ ...inputValue, [name]: '' });

  return [inputValue, handleChangeInput, inputReset];
};
