/*
  롤링 넘버 컴포넌트
  - 숫자가 변경될 때 시계처럼 위/아래로 굴러가는 애니메이션 효과
  
  [Props]
  value: 표시할 숫자
  suffix: 숫자 뒤에 붙일 문자 (예: '%', '원')
  size: 텍스트 크기 프리셋 ('sm' | 'md' | 'lg' | 'xl'), 기본값 'lg'
  className: 컨테이너에 적용할 tailwind 클래스 (size보다 우선)
*/
import { cn } from '@/lib/utils';

const sizeClasses = {
  sm: 'text-base', // 16px
  md: 'text-xl', // 20px
  lg: 'text-[32px]', // 32px (기본값)
  xl: 'text-[48px]', // 48px
} as const;

type Size = keyof typeof sizeClasses;

interface RollingNumberProps {
  value: number;
  suffix?: string;
  size?: Size;
  className?: string;
}

// 숫자 하나하나를 표시하는 컴포넌트
function RollingDigit({ digit }: { digit: string }) {
  const numericDigit = Number(digit);

  return (
    <span
      className="relative inline-block h-[1.2em] overflow-hidden tabular-nums"
      style={{ width: '0.65em' }}
    >
      <span
        className="absolute left-0 right-0 transition-transform duration-500 ease-out"
        style={{
          transform: `translateY(-${numericDigit * 1.2}em)`,
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <span key={num} className="flex h-[1.2em] items-center justify-center">
            {num}
          </span>
        ))}
      </span>
    </span>
  );
}

function RollingNumber({ value, suffix, size = 'lg', className }: RollingNumberProps) {
  const digits = String(value).split('');

  return (
    <span
      className={cn('flex items-center justify-center tabular-nums', sizeClasses[size], className)}
    >
      {digits.map((digit, index) => (
        <RollingDigit key={index} digit={digit} />
      ))}
      {/* 숫자 뒤에 붙일 문자 */}
      {suffix && <span>{suffix}</span>}
    </span>
  );
}

export default RollingNumber;
