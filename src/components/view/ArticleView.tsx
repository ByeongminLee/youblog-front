'use client';

import useResponsive from '@/hooks/useResponsive';
import { ArticleFooter, ArticleTabs, CopyPost } from '../Article';
import { Nav } from '../common/Nav';
import { useState } from 'react';

export const ArticleView = ({ data }: { data: any }) => {
  const { isMobile } = useResponsive();
  const [selected, setSelected] = useState('post');

  return (
    <>
      <Nav title={data.title} isLeft={true} isRight={true} className="border-b border-grey200" />

      {isMobile ? (
        <div className="mx-auto max-w-[430px]">
          <iframe
            className="w-full h-[242px]"
            src={data.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <ArticleTabs selected={selected} setSelected={setSelected} contents={data.contents} />

          {selected === 'post' && (
            <>
              <div className="my-4 px-6">
                <CopyPost contents={data.contents} />
              </div>
              <ArticleFooter className="mb-10" />
            </>
          )}
        </div>
      ) : (
        <div className="box-border mx-auto max-w-[1440px] flex">
          <div className="w-2/3 pt-8 px-10 flex flex-col justify-between h-[calc(100dvh-50px)]">
            <iframe
              className="w-full h-[692px]"
              src={data.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <ArticleFooter />
          </div>
          <div className="w-1/3 pt-8  border-l border-grey200 h-[calc(100dvh-50px)] overflow-auto">
            <ArticleTabs selected={selected} setSelected={setSelected} className="px-10" contents={data.contents} />

            {selected === 'post' && (
              <>
                <div className="border-b border-gray200 w-full" />
                <div className="my-4 flex justify-end px-10">
                  <CopyPost contents={data.contents} />
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
