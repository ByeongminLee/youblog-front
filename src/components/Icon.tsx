import React from 'react';
import * as svgs from '../../public/assets/svgs';

export type IconNameType = keyof typeof svgs;

export interface IconProps extends React.ComponentProps<'svg'> {
  name: IconNameType;
}

export const Icon = ({ name, className, style, onClick }: IconProps) => {
  return React.createElement(svgs[name], {
    className,
    style,
    onClick,
  });
};
