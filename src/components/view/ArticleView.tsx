'use client';

import useResponsive from '@/hooks/useResponsive';
import { ArticleFooter, ArticleTabs, CopyPost } from '../Article';
import { Nav } from '../common/Nav';

export const ArticleView = ({ data }: { data: any }) => {
  const { isMobile } = useResponsive();
  return (
    <div>
      <Nav title={data.title} isLeft={true} isRight={true} className="border-b" />

      {isMobile ? (
        <div className="mx-auto max-w-[430px]">
          <iframe
            className="w-full h-[242px]"
            src={data.url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
          <ArticleTabs contents={data.contents} />
          <div className="my-4 px-6">
            <CopyPost contents={data.contents} />
          </div>
          <ArticleFooter />
        </div>
      ) : (
        <div>
          <div className="w-2/3">
            <iframe
              className="w-full h-[692px]"
              src={data.url}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <ArticleFooter />
          </div>
          <div className="w-1/3"></div>
        </div>
      )}
    </div>
  );
};
