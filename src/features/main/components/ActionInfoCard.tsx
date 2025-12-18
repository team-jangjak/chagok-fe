/*
	메인화면에서 보여줄 실행해야 할 '액션' 카드 컴포넌트
	-> 액션명, 빈도수, 진행 상태(progressData), 인증/미루기 버튼

	[props]
	-> name: 액션명
	-> frequency: 빈도수
	-> progressData: 진행 상태 (초기 progress 값을 해당 데이터로 덮어쓰기)
	-> isShouldIdentify: 오늘 인증해야 하는 액션인지 여부 (true: 오늘 인증해야 하는 것들, false: 오늘 인증해야 하지 않는 것들)
*/
import handstandImage from '@assets/mockdata/handstand.png';
import NonSelectablePillButton from '@shared/ui/NonSelectablePillButton';
import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

interface ActionInfoCardProps {
  name: string;
  frequency: string;
  progressData: number;
  isShouldIdentify: boolean;
}

function ActionInfoCard({ name, frequency, progressData, isShouldIdentify }: ActionInfoCardProps) {
  const [progress, setProgress] = useState<number>(0);

  // 진행 상태에 대한 값을 업데이트 하기 위함
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(progressData);
    }, 500);
    // 언마운트 시에 타이머 초기화
    return () => clearTimeout(timer);
  }, [progressData]);

  return (
    <div
      className={`w-full bg-secondary/30 rounded-2xl py-4 px-3 mb-6 flex flex-col items-start justify-start gap-4 ${
        // 오늘 인증해야 하는 액션인 경우, 사이렌 깜빡임 애니메이션 적용
        isShouldIdentify ? 'animate-siren' : ''
      }`}
    >
      {/* 카드에서 진행 바 위쪽에 있는 영역 */}
      <div className="w-full h-full flex flex-row items-center justify-start">
        {/* 사진 및 액션명, 빈도수 표시 영역 */}
        <div className="w-full h-full flex flex-row items-start justify-start gap-4">
          <img src={handstandImage} alt={name} className="w-18 h-18 rounded-md" />
          <div className="h-full flex flex-col items-start justify-between">
            <span className="text-lg font-bold text-foreground">{name}</span>
            <span className="text-sm text-foreground">{frequency}</span>
          </div>
        </div>
        {/* 버튼 2개 */}
        <div className="w-20 h-full flex flex-col items-center justify-center gap-3">
          <NonSelectablePillButton handleOptionClick={() => {}}>인증하기</NonSelectablePillButton>
          <NonSelectablePillButton handleOptionClick={() => {}}>미루기</NonSelectablePillButton>
        </div>
      </div>
      {/* 아래쪽에 있는 진행 바 */}
      <div className="w-full h-2 flex flex-row items-center justify-start">
        <Progress value={progress} className="w-full h-full" />
        <span className="ml-2 w-9 text-sm text-foreground text-end">{progress}%</span>
      </div>
    </div>
  );
}

export default ActionInfoCard;
