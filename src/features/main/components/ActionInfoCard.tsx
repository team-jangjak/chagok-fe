/*
	메인화면에서 보여줄 실행해야 할 '액션' 카드 컴포넌트
*/
import handstandImage from '@assets/mockdata/handstand.png';
import NonSelectablePillButton from '@shared/ui/NonSelectablePillButton';

interface ActionInfoCardProps {
  name: string;
  frequency: string;
}

function ActionInfoCard({ name, frequency }: ActionInfoCardProps) {
  return (
    <div className="w-full bg-[#F2F3AE] rounded-2xl p-3 mb-6 flex flex-col items-start justify-start gap-3">
      {/* 카드에서 진행 바 위쪽에 있는 영역 */}
      <div className="w-full h-full flex flex-row items-center justify-start">
        {/* 사진 및 액션명, 빈도수 표시 영역 */}
        <div className="w-full h-full flex flex-row items-start justify-start gap-4">
          <img src={handstandImage} alt={name} className="w-20 h-20 rounded-xl" />
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
      <div className="w-full h-3 flex flex-row items-center justify-start"></div>
    </div>
  );
}

export default ActionInfoCard;
