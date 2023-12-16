import tw from '@/utils/tw';

export type TextType<C extends React.ElementType> = {
  as?: C;
  variant?: keyof typeof variants;
};

export type TextProps<C extends React.ElementType> = React.PropsWithChildren<TextType<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, keyof TextType<C>>;

export const Text = <C extends React.ElementType = 'span'>({ as, children, className, variant, ...restProps }: TextProps<C>) => {
  const Component = as || 'span';

  return (
    <Component className={tw(className, 'whitespace-pre', variant && variants[variant])} {...restProps}>
      {children}
    </Component>
  );
};

const variants = {
  '32px/bold': 'font-extrabold text-[32px] leading-[42px] tracking-[-2%',
  '28px/bold': 'font-extrabold text-[28px] leading-[40px] tracking-[-2%',
  '24px/Menu': 'font-extrabold text-[24px] leading-[29.26px] font-montserrat',
  '20px/bold': 'font-bold text-[20px] leading-[26px] tracking-[-2%]',
  '18px/regular': 'text-[18px] leading-[24px] tracking-[-2%]',
  '16px/bold': 'font-bold text-[16px] leading-[24px] tracking-[-2%]',
  '16px/regular': 'text-[16px] leading-[24px] tracking-[-2%]',
  '14px/regular': 'text-[14px] leading-[22px] tracking-[-2%]',
  '14px/bold': 'font-bold text-[14px] leading-[22px] tracking-[-2%]',
};
