/*
	[온보딩 페이지 중 4번째 페이지 ('슬라이더 컴포넌트 테스트' 페이지)
*/

import SliderSelection from '@features/auth/components/SliderSelection';
import RollingNumber from '@shared/ui/RollingNumber';
import { useState } from 'react';

function OnboardingPage4() {
  const [sliderValue, setSliderValue] = useState<number>(0); // 슬라이더의 값
  const handleValueCommit = (value: number) => {
    // 슬라이더의 값이 변경되었을 때 실행할 함수 (드래그 중에는 호출되지 않음)
    console.log('sliderValue', value);
    setSliderValue(value);
  };
  return (
    <>
      {/* 헤더 영역 */}
      <div className="w-full mb-8 mt-4 flex flex-col items-start justify-start gap-3">
        <span className="text-3xl font-bold text-text">질문 2</span>
        <div className="whitespace-pre-line">
          <span className="text-lg font-normal text-darkgray whitespace-pre-line">
            {'솔직하게... 나는 내가 뱉은 말을, \n얼마나 지키는 사람인가요?'}
          </span>
        </div>
      </div>
      {/* 슬라이더 영역 */}
      <div className="w-full flex flex-col gap-4 mb-8">
        <SliderSelection onValueCommit={handleValueCommit} />
      </div>
      {/* 슬라이더로 결과 변화를 표시하는 영역 */}
      <div className="w-full flex flex-col items-center justify-center gap-4 mb-8">
        <span className="text-2xl font-normal text-foreground">난 그래도..</span>
        <RollingNumber
          value={sliderValue}
          suffix="%"
          size="lg"
          className="text-foreground font-bold"
        />
        <span className="text-2xl font-normal text-foreground">정도 지키는 사람이야!</span>
      </div>
    </>
  );
}

export default OnboardingPage4;
