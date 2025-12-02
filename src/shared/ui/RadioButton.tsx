import { cn } from '@/lib/utils';
import Check from '@assets/icons/check-icon.svg?react';

/*
	해당 서비스에서 활용되는 커스텀 라디오 버튼 컴포넌트
	className: 컴포넌트에 적용할 커스텀 tailwind 스타일 클래스
	isChecked: 버튼 선택 여부
	handleOptionClick: 버튼 클릭 시 수행할 함수
*/
interface RadioButtonProps {
  className?: string;
  isChecked: boolean;
  handleOptionClick: () => void;
}

function RadioButton({ className, isChecked, handleOptionClick }: RadioButtonProps) {
  return (
    <div
      className={cn(
        'w-7 h-7 flex items-center justify-center rounded-[10px] border transition-all duration-200',
        // 체크 된 경우와 아닌 경우에 대해서 디자인이 달라야 한다
        isChecked ? 'border-primary bg-primary' : 'border-gray bg-white',

        // 상위 컴포넌트로부터 넘어온 스타일 적용 (없으면 적용 안함)
        className
      )}
      onClick={handleOptionClick}
    >
      {/* 체크 된 경우에만 체크 아이콘 표시 */}
      {isChecked ? <Check className="w-5 h-5 text-white" /> : null}
    </div>
  );
}

export default RadioButton;
