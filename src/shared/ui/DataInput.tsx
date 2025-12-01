/*
	이메일 등의 일반적인 정보를 입력받는 컴포넌트
	className: 컴포넌트 스타일
	props: 컴포넌트에 넘어오는 props (placeholder 등)
*/

import { Input } from '@components/ui/input';
import { cn } from '@/lib/utils';

export function DataInput({ className, ...props }: React.ComponentProps<'input'>) {
  return (
    <Input
      placeholder={props.placeholder ?? '정보를 입력해주세요'}
      className={cn('bg-background pr-10 text-text text-sm placeholder:text-gray', className)}
    />
  );
}
