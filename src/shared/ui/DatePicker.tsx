import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

import { Button } from '@components/ui/button';
import { Calendar } from '@components/ui/calendar';
import { Input } from '@components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@components/ui/popover';
import { formatDateInput } from '@shared/utils/formatDateInput';
import { isValidDate } from '@shared/utils/isValidDate';
import { formatDate } from '@shared/utils/formatDate';

/*
	날짜 선택 팝오버 컴포넌트
	className: 컴포넌트 스타일
	props: 컴포넌트에 넘어오는 props (onChange, value 등)
*/
export function DatePicker({ className, ...props }: React.ComponentProps<'input'>) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [month, setMonth] = useState<Date | undefined>(date);
  const [value, setValue] = useState<string>('');

  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex gap-2">
        {/* 날짜 선택 input */}
        <Input
          {...props}
          value={value}
          placeholder="YYYY-MM-DD"
          className={cn('bg-background pr-10 text-text text-sm placeholder:text-gray', className)}
          onChange={(e) => {
            // 자동 하이픈 삽입
            const formattedValue = formatDateInput(e.target.value, value);
            setValue(formattedValue);

            // 완전한 날짜인 경우에만 Date 객체 업데이트
            if (formattedValue.length === 10) {
              const date = new Date(formattedValue);
              if (isValidDate(date)) {
                setDate(date);
                setMonth(date);
              }
            }
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowDown') {
              e.preventDefault();
              setOpen(true);
            }
          }}
        />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              id="date-picker"
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              month={month}
              onMonthChange={setMonth}
              onSelect={(date) => {
                setDate(date);
                setValue(formatDate(date));
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
