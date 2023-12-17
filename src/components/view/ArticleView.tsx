'use client';

import useResponsive from '@/hooks/useResponsive';
import { ArticleFooter, ArticleTabs, CopyPost } from '../Article';
import { Nav } from '../common/Nav';
import { useState } from 'react';

export const ArticleView = ({ data }: { data: any }) => {
  const { isMobile } = useResponsive();
  const [selected, setSelected] = useState('post');
  const [subSelected, setSubSelected] = useState('blog');

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
          <ArticleTabs
            selected={selected}
            setSelected={setSelected}
            subSelected={subSelected}
            setSubSelected={setSubSelected}
            contents={data.contents}
          />

          {selected === 'post' && (
            <>
              <div className="my-4 px-6">
                <CopyPost contents={data.contents} subSelected={subSelected} />
              </div>
              <ArticleFooter className="mb-10" />
            </>
          )}
        </div>
      ) : (
        <div className="box-border mx-auto flex">
          <div className="w-2/3 pt-8 px-10 flex flex-col justify-between h-[calc(100dvh-50px)]min-w-[590px]">
            <iframe
              className="w-full h-[692px]"
              src={data.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <ArticleFooter />
          </div>
          <div className="w-1/3 pt-8  border-l border-grey200 h-[calc(100dvh-50px)] overflow-auto min-w-[335px] flex flex-col justify-between">
            <ArticleTabs
              selected={selected}
              setSelected={setSelected}
              subSelected={subSelected}
              setSubSelected={setSubSelected}
              className="px-10"
              contents={data.contents}
            />

            {selected === 'post' && (
              <>
                <div className=" flex justify-end flex-col">
                  <div className="flex border-b border-gray200 w-full" />
                  <div className="px-10 flex justify-end my-[10px]">
                    <CopyPost contents={data.contents} subSelected={subSelected} />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
