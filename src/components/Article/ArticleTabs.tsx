'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import { Tab, Tabs } from '../common/Tabs';
import tw from '@/utils/tw';
import { ContentsPost } from './ContentsPost';
import { ContentsChat } from './ContentsChat';

interface ArticleTabsProps {
  selected: string;
  setSelected: Dispatch<SetStateAction<string>>;
  contents: any;
  className?: string;
}

export const ArticleTabs = ({ selected, setSelected, contents, className }: ArticleTabsProps) => {
  return (
    <div className={tw('mt-2 h-full', className)}>
      <div className="mb-[24px]">
        <Tabs selected={selected} setSelected={setSelected}>
          <Tab value="post" className="whitespace-nowrap">
            글로 변환하기 {selected === 'post' && '💬'}
          </Tab>
          <Tab value="chat">채팅 Q&A {selected === 'chat' && '💡'}</Tab>
        </Tabs>
      </div>
      {selected === 'post' && <ContentsPost contents={contents} />}

      {selected === 'chat' && <ContentsChat />}
    </div>
  );
};
