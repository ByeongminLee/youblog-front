import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function tw(...args: ClassValue[]) {
  return twMerge(clsx(args));
}

export default tw;
