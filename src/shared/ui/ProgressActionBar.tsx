import { cn } from '@/lib/utils';
import ChevronLeft from '@assets/icons/chevron-left.svg?react';

/*
	진행 상태 액션 바 컴포넌트 속성 타입 정의
	-> handlePrev: 뒤로가기 버튼 클릭 시 수행할 함수
	-> totalSteps: 총 진행 단계 수
	-> currentStep: 현재 진행 단계
	-> className: 컴포넌트에 적용할 커스텀 tailwind 스타일 클래스
*/
interface ProgressActionBarProps {
  handlePrev: () => void;
  totalSteps: number;
  currentStep: number;
  className?: string;
}

/*
	진행 상태 액션 바 컴포넌트
	-> '습관 생성', '온보딩' 페이지 등에서 진행도를 나타내는 컴포넌트
*/
function ProgressActionBar({
  handlePrev,
  totalSteps,
  currentStep,
  className,
}: ProgressActionBarProps) {
  return (
    <div className={cn('w-full h-6 flex flex-row items-center justify-between mb-8', className)}>
      {/* 왼쪽의 '뒤로가기' 버튼 */}
      <ChevronLeft className="w-6 h-6 cursor-pointer" onClick={handlePrev} />
      {/* 오른쪽의 진행 상태 표시 영역 */}
      <div className={`w-full ml-6 grid grid-flow-col grid-cols-${totalSteps} gap-3`}>
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            className={cn(
              // 기본 디자인
              'w-full h-2 bg-gray rounded-2xl',
              // 현재 진행 단계보다 작은 경우 primary 색상으로 변경
              index <= currentStep ? 'bg-primary' : 'bg-lightgray'
            )}
          />
        ))}
      </div>
    </div>
  );
}

export default ProgressActionBar;
