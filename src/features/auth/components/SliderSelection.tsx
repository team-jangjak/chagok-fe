/*
	'슬라이더형' 선택지
	-> 인디케이터와 슬라이더로 구성된 컴포넌트

	[참고사항]
	className: 컴포넌트에 적용할 커스텀 tailwind 스타일 클래스
	onValueCommit: 슬라이더의 드래그가 끝났을 때 수행할 함수 (드래그 중에는 호출되지 않음)
*/
import { Slider } from '@components/ui/slider';
import { cn } from '@/lib/utils';

interface SliderSelectionProps {
  className?: string;
  onValueCommit: (value: number) => void;
}

function SliderSelection({ className, onValueCommit }: SliderSelectionProps) {
  return (
    <div className="w-full h-full">
      <Slider
        defaultValue={[50]}
        max={100}
        step={10}
        className={cn('w-full h-2 bg-gray rounded-2xl transition-all duration-100', className)}
        onValueCommit={(value) => onValueCommit(value[0])}
      />
    </div>
  );
}

export default SliderSelection;
