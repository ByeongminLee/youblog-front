import { ArticleFooter } from '@/components/ArticleFooter';
import { ArticleTabs } from '@/components/ArticleTabs';
import { CopyPost } from '@/components/CopyPost';
import { Nav } from '@/components/Nav';

export default function Page() {
  return (
    <div className="w-full">
      <Nav title={dummy.title} isLeft={true} isRight={true} />
      <iframe
        className="w-full h-[242px]"
        src={dummy.url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <ArticleTabs contents={dummy.contents} />
      <div className="my-4">
        <CopyPost contents={dummy.contents} />
      </div>
      <ArticleFooter />
    </div>
  );
}

const dummy = {
  title: '신기동제과점의 슬라임 제작 비하인드',
  url: 'https://www.youtube.com/embed/_HjKDyWiknE?si=WavPdhQBA5Kojv0u',
  contents: `<p class='font-bold'>인생서 건강,행복을 유지하는 비결은 무엇일까?</p><br/>
  밀레니얼 세대 조사 결과, 80%는 부자가 되는 것을 목표로 하고, 50%는 유명해지기를 원해요.<br/>
  부와 명예가 삶에서 무엇보다 중요한 경향이 있어요.<br/>
  하지만, 인생에서 중요한 선택이나 상황들은 미래를 예측할 수 없으며, 기억이 정확하지 않아요.<br/>
  대부분의 경험은 잊혀지기도 하지만, 때로는 평범한 경험을 특별하게 만든다고 해요.<br/><br/><p class='font-bold'>인생서 건강,행복을 유지하는 비결은 무엇일까?</p><br/>
  밀레니얼 세대 조사 결과, 80%는 부자가 되는 것을 목표로 하고, 50%는 유명해지기를 원해요.<br/>
  부와 명예가 삶에서 무엇보다 중요한 경향이 있어요.<br/>
  하지만, 인생에서 중요한 선택이나 상황들은 미래를 예측할 수 없으며, 기억이 정확하지 않아요.<br/>
  대부분의 경험은 잊혀지기도 하지만, 때로는 평범한 경험을 특별하게 만든다고 해요.<br/><br/><p class='font-bold'>인생서 건강,행복을 유지하는 비결은 무엇일까?</p><br/>
  밀레니얼 세대 조사 결과, 80%는 부자가 되는 것을 목표로 하고, 50%는 유명해지기를 원해요.<br/>
  부와 명예가 삶에서 무엇보다 중요한 경향이 있어요.<br/>
  하지만, 인생에서 중요한 선택이나 상황들은 미래를 예측할 수 없으며, 기억이 정확하지 않아요.<br/>
  대부분의 경험은 잊혀지기도 하지만, 때로는 평범한 경험을 특별하게 만든다고 해요.<br/><br/><p class='font-bold'>인생서 건강,행복을 유지하는 비결은 무엇일까?</p><br/>
  밀레니얼 세대 조사 결과, 80%는 부자가 되는 것을 목표로 하고, 50%는 유명해지기를 원해요.<br/>
  부와 명예가 삶에서 무엇보다 중요한 경향이 있어요.<br/>
  하지만, 인생에서 중요한 선택이나 상황들은 미래를 예측할 수 없으며, 기억이 정확하지 않아요.<br/>
  대부분의 경험은 잊혀지기도 하지만, 때로는 평범한 경험을 특별하게 만든다고 해요.<br/><br/>
  `,
};
