/*
	[온보딩 페이지 중 3번째 페이지 ('성향 검사' 페이지)
*/
import { useState } from 'react';
import SelectButton from '@features/auth/components/SelectButton';

function OnboardingPage3() {
  const [selectedOption, setSelectedOption] = useState<Record<string, boolean>>({
    '계획? \n닥치면 하는게 최고지!': false,
    '힘들어도\n넘어가야지!': false,
    '나는\n완벽주의자!': false,
    '오늘\n하루만 살자!': false,
  });
  return (
    <>
      {/* 헤더 영역 */}
      <div className="w-full mb-8 mt-4 flex flex-col items-start justify-start gap-3">
        <span className="text-3xl font-bold text-text">질문 1</span>
        <div className="whitespace-pre-line">
          <span className="text-lg font-normal text-darkgray whitespace-pre-line">
            {'새로운 한 주가 시작될 때, \n회원님의 머릿속은 어떠신가요?'}
          </span>
        </div>
      </div>
      {/* 성향 검사 영역 */}
      <div className="w-full flex flex-col gap-4 mb-8">
        {/* Map 함수 활용해서 옵션 버튼 렌더링 */}
        {Object.keys(selectedOption).map((option: string) => (
          <SelectButton
            key={option}
            isSelected={selectedOption[option]}
            onClick={() => setSelectedOption((prev) => ({ ...prev, [option]: !prev[option] }))}
          >
            {option}
          </SelectButton>
        ))}
      </div>
    </>
  );
}

export default OnboardingPage3;
