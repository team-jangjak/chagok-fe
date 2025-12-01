import { cn } from '@/lib/utils';

interface PillButtonProps {
  isSelected: boolean;
  children: React.ReactNode;
  handleOptionClick: () => void;
}

/*
	옵션 선택 등에 사용되는 알약 모양 버튼
	isSelected: 선택 여부
	children: 버튼 내용
	handleOptionClick: 버튼 클릭 시 수행할 함수

	[참고사항]
	--> 크기 자체는 grid 레이아웃에 많이 사용할 것으로 예상돼서 기본적으로 너비는 100%로 설정
*/

function PillButton({ isSelected, children, handleOptionClick = () => {} }: PillButtonProps) {
  return (
    <div
      className={cn(
        'w-full flex items-center justify-center rounded-md px-4 py-1 text-sm font-medium transition-all duration-200',
        isSelected ? 'bg-primary text-white' : 'bg-white border border-gray text-gray'
      )}
      onClick={handleOptionClick}
    >
      {children}
    </div>
  );
}

export default PillButton;
