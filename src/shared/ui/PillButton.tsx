import { cn } from '@/lib/utils';

interface PillButtonProps {
  className?: string;
  isSelected: boolean;
  children: React.ReactNode;
  handleOptionClick: () => void;
}

/*
	옵션 선택 등에 사용되는 알약 모양 버튼
	className: 버튼 스타일 적용
	isSelected: 선택 여부
	children: 버튼 내용
	handleOptionClick: 버튼 클릭 시 수행할 함수

	[참고사항]
	--> 크기 자체는 grid 레이아웃에 많이 사용할 것으로 예상돼서 기본적으로 너비는 100%로 설정
*/

function PillButton({
  className,
  isSelected,
  children,
  handleOptionClick = () => {},
}: PillButtonProps) {
  return (
    <div
      className={cn(
        'w-full flex items-center justify-center rounded-md text-sm font-medium transition-all duration-200',
        isSelected
          ? 'bg-primary border border-primary text-white'
          : 'bg-white border border-lightgray text-lightgray',
        className // 상위 컴포넌트로부터 넘어온 스타일 적용
      )}
      onClick={handleOptionClick}
    >
      {children}
    </div>
  );
}

export default PillButton;
