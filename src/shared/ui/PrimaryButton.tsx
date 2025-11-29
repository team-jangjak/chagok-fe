import { cn } from '@/lib/utils';
import { Button } from '@components/ui/button';

/* [PrimaryButton 컴포넌트 타입 정의] */
interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode; // title 대신 children 사용하면 더 유연하게 동작 가능
}

/*
	<화면을 넘어가는 등의 '큰 버튼' 컴포넌트>

	- 버튼 클릭 시, 화면을 넘어가는 등의 작업을 수행하는 경우에 사용
	- title로 버튼 타이틀을 전달하고, onClick으로 버튼 클릭 시 수행할 함수를 전달

	[컴포넌트 사용 유의사항]
	-> title은 2줄 이하로 사용하는 것을 권장
	-> 부모 컴포넌트에 relative 클래스를 추가하여 버튼을 화면 하단에 고정시켜야 함
*/

function PrimaryButton({ className, children, disabled, ...props }: PrimaryButtonProps) {
  return (
    <Button
      disabled={disabled} // HTML disabled 속성 전달 (필수)
      className={cn(
        // [1] 레이아웃 및 공통 스타일
        'absolute bottom-8 left-8 right-8',
        'h-14 rounded-2xl text-xl transition-all duration-200',
        'flex items-center justify-center',

        // [2] 기본 상태 (Active) 스타일
        // -> hover 효과도 여기에 함께 정의
        'bg-primary text-white hover:bg-orange-600 hover:border-orange-600 font-bold',

        // [3] 비활성화 상태 (Disabled) 스타일
        // -> 'disabled:' 접두사를 사용하면 HTML disabled 속성이 true일 때만 적용됨
        // -> tailwind-merge가 같은 속성(bg-...)에 대해 상태별로 적절히 처리해줌
        'disabled:bg-gray disabled:font-normal disabled:text-white disabled:cursor-not-allowed',

        // [4] 외부 스타일 (가장 마지막에 위치해야 오버라이딩 가능)
        className
      )}
      {...props} // onClick 등 나머지 props 전달
    >
      {children}
    </Button>
  );
}

export default PrimaryButton;
