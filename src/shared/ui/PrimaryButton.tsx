import { cn } from '@/lib/utils';

interface PrimaryButtonProps {
  className?: string;
  children: React.ReactNode;
  isEnabled: boolean;
  onClick?: () => void;
}

/*
	<화면을 넘어가는 등의 '큰 버튼' 컴포넌트>

	- 버튼 클릭 시, 화면을 넘어가는 등의 작업을 수행하는 경우에 사용
	- title로 버튼 타이틀을 전달하고, onClick으로 버튼 클릭 시 수행할 함수를 전달

	[컴포넌트 사용 유의사항]
	-> title은 2줄 이하로 사용하는 것을 권장
*/

function PrimaryButton({ className, children, isEnabled, onClick = () => {} }: PrimaryButtonProps) {
  return (
    <div
      className={cn(
        // 해당 버튼의 기본 스타일 적용
        // 기본적으로 부모 컴포넌트의 하단에 고정되도록 sticky 속성을 추가
        'sticky bottom-8 w-full py-3 flex items-center justify-center rounded-2xl text-xl transition-all duration-200',

        // 버튼 상태에 따른 스타일 적용
        isEnabled
          ? 'bg-primary text-white font-bold cursor-pointer'
          : 'bg-gray text-white font-normal cursor-not-allowed',

        // 상위 컴포넌트로부터 넘어온 스타일 적용 (없으면 적용 안함)
        className
      )}
      // onClick 함수는 버튼 활성화 상태일 때만 적용
      onClick={isEnabled ? onClick : () => {}}
    >
      {children}
    </div>
  );
}

export default PrimaryButton;
