'use client';

import { useTabsPosition } from '@/hooks/useTabsPosition';
import tw from '@/utils/tw';
import { Children, Dispatch, SetStateAction, cloneElement, isValidElement } from 'react';

export type TabVariants = 'solid' | 'underline';
export interface TabProps {
  as?: React.ElementType;
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
  className?: string;
  onClick?: () => void;
  value?: string;
  variant?: TabVariants;
}
export const Tab = ({ as, children, ref, className, onClick, value, variant }: TabProps) => {
  const Component = as || 'span';

  return (
    <Component
      className={tw(variant === 'solid' && 'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10', className)}
      ref={ref}
      onClick={onClick}
      value={value}
    >
      {children}
    </Component>
  );
};

export interface TabsProps {
  children: React.ReactNode;
  selected?: string;
  setSelected?: Dispatch<SetStateAction<string>>;
  variant?: TabVariants;
}
export const Tabs = ({ children, selected, setSelected, variant = 'solid' }: TabsProps) => {
  const { tabsRef, activeTabIndex, setActiveTabIndex, tabWidth, tabLeft } = useTabsPosition(children, selected);
  const { containerStyle, buttonStyle, contentsStyle } = useTabsStyle({
    variant,
  });

  return (
    <div>
      <div className="relative w-full">
        <div className={containerStyle}>
          {Children.map(children, (child, idx) => {
            if (isValidElement(child)) {
              return (
                <button
                  key={idx}
                  ref={el => (tabsRef.current[idx] = el)}
                  className={tw(buttonStyle)}
                  onClick={() => {
                    setActiveTabIndex(idx);
                    setSelected && setSelected(child.props.value);
                  }}
                  data-selected={idx === activeTabIndex}
                >
                  {cloneElement(child as React.ReactElement<any>, {
                    variant,
                  })}
                </button>
              );
            }
            return child;
          })}
        </div>
        <span className={contentsStyle} style={{ left: tabLeft, width: tabWidth }} />
      </div>
    </div>
  );
};

type stylesType = {
  solid: { container: string[]; button: string[]; content: string[] };
  underline: { container: string[]; button: string[]; content: string[] };
};
const useTabsStyle = ({ variant }: { variant: TabVariants }) => {
  const styles: stylesType = {
    solid: {
      container: ['flex space-x-2 w-full', 'bg-grey50', 'h-[50px]'],
      button: ['relative w-full', 'bg-grey50', 'font-bold text-[16px] data-[selected=true]:text-black50 text-grey400'],
      content: [
        'absolute top-1/2 transform  -translate-y-1/2 block transition-all duration-300',
        'bg-white',
        'h-[48px]',
        'border border-grey50',
      ],
    },
    underline: {
      container: ['flex space-x-2 w-full', 'h-[50px]'],
      button: ['relative w-full', 'font-bold text-[16px] data-[selected=true]:text-black50 text-grey400'],
      content: ['absolute bottom-0 block h-0.5 transition-all duration-300', 'bg-black'],
    },
  };
  const containerStyle = tw(styles[variant].container);
  const buttonStyle = tw(styles[variant].button);
  const contentsStyle = tw(styles[variant].content);

  return { containerStyle, buttonStyle, contentsStyle };
};
