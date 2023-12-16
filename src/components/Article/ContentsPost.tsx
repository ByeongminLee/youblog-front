import { useState } from 'react';
import { Tab, Tabs } from '../common/Tabs';

export const ContentsPost = ({ contents }: { contents: any }) => {
  const [subSelected, setSubSelected] = useState('blog');

  return (
    <>
      <Tabs selected={subSelected} setSelected={setSubSelected} variant="underline">
        <Tab value="blog">블로그</Tab>
        <Tab value="instagram">인스타그램</Tab>
        <Tab value="brunch">브런치</Tab>
      </Tabs>
      <div className="mt-6 px-6">
        <div dangerouslySetInnerHTML={{ __html: contents }} />
      </div>
    </>
  );
};
