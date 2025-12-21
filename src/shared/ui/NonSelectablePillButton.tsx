import { cn } from '@/lib/utils';

interface NonSelectablePillButtonProps {
  className?: string;
  children: React.ReactNode;
  handleOptionClick: () => void;
}

/*
	선택 불가능한 알약 모양 버튼 (기본 배경색은 secondary 색상)
	className: 버튼 스타일 적용
	children: 버튼 내용
	handleOptionClick: 버튼 클릭 시 수행할 함수

	[참고사항]
	--> 크기 자체는 grid 레이아웃에 많이 사용할 것으로 예상돼서 기본적으로 너비는 100%로 설정
*/

function NonSelectablePillButton({
  className,
  children,
  handleOptionClick = () => {},
}: NonSelectablePillButtonProps) {
  return (
    <div
      className={cn(
        'min-w-8 w-full px-1 h-6 flex items-center justify-center rounded-md text-[12px] font-medium',
        'bg-secondary border border-secondary text-white',
        className // 상위 컴포넌트로부터 넘어온 스타일 적용
      )}
      onClick={handleOptionClick}
    >
      {children}
    </div>
  );
}

export default NonSelectablePillButton;
