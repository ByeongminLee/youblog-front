import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

function tw(className: string) {
  return twMerge(clsx(className));
}

export default tw;
