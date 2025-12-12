import { cn } from '@/lib/utils';

interface SelectButtonProps {
  className?: string;
  isSelected: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

/*
	[성향 검사 페이지에서 '선택형' 질문에 대해서 
	여러 개의 선택지 중 하나를 선택하는 버튼 컴포넌트]

	className: 버튼 스타일 적용
	isSelected: 선택 여부
	children: 버튼 내용
	onClick: 버튼 클릭 시 수행할 함수
*/

function SelectButton({ className, isSelected, children, onClick }: SelectButtonProps) {
  return (
    <div
      className={cn(
        'w-full h-20 flex items-center justify-center text-center rounded-xl text-lg font-normal whitespace-pre-line transition-all duration-200',
        // 선택 여부에 따른 스타일 적용
        isSelected
          ? 'bg-secondary text-white border border-secondary font-medium'
          : 'bg-white text-gray border border-gray',

        // 상위 컴포넌트로부터 넘어온 스타일 적용 (없으면 적용 안함)
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default SelectButton;
