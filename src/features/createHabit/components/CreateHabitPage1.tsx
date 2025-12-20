/*
	[습관 생성 페이지 1번째 페이지]
	-> 기존에 서비스에서 다른 사람들이 생성해 놓은 템플릿
		or 직접 습관 만들기를 선택할 수 있는 페이지
*/
import { habitPhotoCards } from '@features/mockdata';
import HabitPhotoCard from '@shared/ui/HabitPhotoCard';
import { useState, useEffect } from 'react';

interface CreateHabitPage1Props {
  setNextIsEnabled: (isEnabled: boolean) => void;
}

function CreateHabitPage1({ setNextIsEnabled }: CreateHabitPage1Props) {
  const [selectedHabit, setSelectedHabit] = useState<number | null>(null);

  // 습관을 클릭했을 때의 이벤트를 처리하는 함수
  const handleHabitClick = (id: number) => {
    setSelectedHabit((prev) => (prev === id ? null : id));
  };

  // 선택한 습관이 있을 때만 PrimaryButton 활성화
  useEffect(() => {
    if (selectedHabit) {
      setNextIsEnabled(true);
    } else {
      setNextIsEnabled(false);
    }
  });

  return (
    <>
      {/* 헤더 영역 */}
      <div className="w-full mb-4 flex flex-col items-start justify-start gap-3">
        <span className="text-3xl font-bold text-text">습관 선택</span>
        <span className="text-lg font-normal text-darkgray">기처리님, 이런 습관은 어때요?</span>
      </div>
      {/* 카드 나열할 grid 레이아웃 - mask로 상단/하단 페이드 효과 적용 */}
      <div
        className="w-full flex-1 pb-24 pt-5 overflow-y-auto grid grid-cols-2 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] gap-4"
        style={{
          // 상단 페이드 효과 적용
          maskImage:
            'linear-gradient(to bottom, transparent 0%, black 32px, black calc(100% - 48px), transparent 100%)',
          // 하단 페이드 효과 적용
          WebkitMaskImage:
            'linear-gradient(to bottom, transparent 0%, black 32px, black calc(100% - 48px), transparent 100%)',
        }}
      >
        {habitPhotoCards.map((card) => (
          <HabitPhotoCard
            key={card.id}
            frequency={card.frequency}
            durationInfo={card.durationInfo}
            habitTitle={card.habitTitle}
            isSelected={selectedHabit === card.id}
            handleClick={() => handleHabitClick(card.id)}
          />
        ))}
      </div>
    </>
  );
}

export default CreateHabitPage1;
