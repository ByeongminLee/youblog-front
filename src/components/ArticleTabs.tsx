'use client';

import { useState } from 'react';
import { Tab, Tabs } from './Tabs';

export const ArticleTabs = ({ contents }: { contents: any }) => {
  const [selected, setSelected] = useState('ts');
  const [subSelected, setSubSelected] = useState('ts');

  return (
    <div className="mt-2">
      <div className="mb-[24px]">
        <Tabs selected={selected} setSelected={setSelected}>
          <Tab value="post" className="whitespace-nowrap">
            글로 변환하기 💬
          </Tab>
          <Tab value="chat">채팅 Q&A</Tab>
        </Tabs>
      </div>
      <Tabs selected={subSelected} setSelected={setSubSelected} variant="underline">
        <Tab value="blog">블로그</Tab>
        <Tab value="instagram">인스타그램</Tab>
        <Tab value="brunch">브런치</Tab>
      </Tabs>
      <div className="mt-6">
        <div dangerouslySetInnerHTML={{ __html: contents }} />
      </div>
    </div>
  );
};
