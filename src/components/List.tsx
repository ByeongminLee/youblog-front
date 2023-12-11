import { Children, cloneElement } from 'react';
import { Icon } from './Icon';
import { Text } from './Text';
import tw from '@/utils/tw';

export const List = ({ children }: { children: React.ReactNode }) => {
  return <div className="overflow-auto h-full">{Children.map(children, child => cloneElement(child as any))}</div>;
};

const Item = ({ children, selected = false }: { children: React.ReactNode; selected?: boolean }) => {
  return (
    <div
      className="flex items-center py-4 px-3 data-[selected=true]:bg-grey50 rounded-lg cursor-pointer hover:bg-grey50"
      data-selected={selected}
    >
      <div>
        <Icon name="play" className={tw('w-3 h-3 mr-2', selected ? 'text-primary' : 'text-grey500')} />
      </div>
      <Text
        variant="16px/regular"
        className={tw(
          ' whitespace-nowrap text-ellipsis overflow-hidden max-w-[calc(400px-65px)]',
          selected ? 'text-black50' : 'text-grey500',
        )}
      >
        {children}
      </Text>
    </div>
  );
};

List.Item = Item;
