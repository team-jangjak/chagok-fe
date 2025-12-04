import { cn } from '@/lib/utils';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
/*
	'주', '월' 등의 단위, 수량을 선택할 때 사용되는 드롭다운 컴포넌트
	className: 컴포넌트 커스텀 스타일
	placeholder: 드롭다운 플레이스홀더 텍스트
	options: 드롭다운 옵션 리스트
*/
interface DropdownMenuProps {
  className?: string;
  placeholder: string;
  options: string[];
}

function DropdownMenu({ className, options, placeholder }: DropdownMenuProps) {
  return (
    <Select>
      {/* Dropdown 트리거 부분 */}
      <SelectTrigger className={cn('w-full', className)}>
        <SelectValue placeholder={placeholder} className="text-sm" />
      </SelectTrigger>
      {/* Dropdown 옵션 부분 */}
      <SelectContent>
        {options.map((option) => (
          <SelectItem key={option} value={option} className="text-sm text-text">
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
export default DropdownMenu;
