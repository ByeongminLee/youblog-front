import { Dispatch, SetStateAction, useState } from 'react';
import { Tab, Tabs } from '../common/Tabs';

interface ContentsPostProps {
  contents: any;
  subSelected: string;
  setSubSelected: Dispatch<SetStateAction<string>>;
}

export const ContentsPost = ({ contents, subSelected, setSubSelected }: ContentsPostProps) => {
  return (
    <>
      <Tabs selected={subSelected} setSelected={setSubSelected} variant="underline">
        <Tab value="blog">블로그</Tab>
        <Tab value="insta">인스타그램</Tab>
        <Tab value="brunch">브런치</Tab>
      </Tabs>
      <div className="mt-6 px-6 whitespace-pre-wrap">
        {/* <div dangerouslySetInnerHTML={{ __html: contents }} /> */}
        <div dangerouslySetInnerHTML={{ __html: contents[subSelected] }} className="whitespace-pre-wrap" />
      </div>
    </>
  );
};
