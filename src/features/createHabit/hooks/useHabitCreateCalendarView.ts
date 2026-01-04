/*
	습관에 종속되는 세부 액션들을 설정할 때 사용하는 캘린더 뷰에 대한 훅
*/

import { useMemo, useState } from 'react';

// 캘린더 날짜 타입 정의
interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
}

export const useHabitCreateCalendarView = () => {
  /* 시작일과 종료일 설정 (현재는 mockdata) */
  const startDate = useMemo(() => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    return date;
  }, []);

  const endDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 15);
    date.setHours(23, 59, 59, 999);
    return date;
  }, []);

  // 현재 표시 중인 월 (year, month)
  const [currentMonth, setCurrentMonth] = useState<{ year: number; month: number }>({
    year: startDate.getFullYear(),
    month: startDate.getMonth(),
  });

  // 선택된 날짜들 (timestamp로 관리)
  const [selectedDates, setSelectedDates] = useState<Set<number>>(new Set());

  // 요일 헤더
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];

  // 해당 월의 모든 날짜 계산 (이전/다음 월 날짜 포함)
  const calendarDays = useMemo(() => {
    const { year, month } = currentMonth;
    const firstDayOfMonth = new Date(year, month, 1); // 해당 월의 첫 날
    const lastDayOfMonth = new Date(year, month + 1, 0); // 해당 월의 마지막 날

    // 첫 주의 시작 요일 (0: 일요일 ~ 6: 토요일)
    const startDayOfWeek = firstDayOfMonth.getDay(); // 해당 월의 첫 날의 요일
    const daysInMonth = lastDayOfMonth.getDate();

    // 이전 월의 마지막 날 (이전 월의 마지막 날의 날짜)
    const prevMonthLastDay = new Date(year, month, 0).getDate(); // 이전 월의 마지막 날

    const days: CalendarDay[] = [];

    // 앞쪽: 이전 월의 날짜들
    for (let i = startDayOfWeek - 1; i >= 0; i--) {
      const day = prevMonthLastDay - i; // 이전 월의 마지막 날의 날짜 - 이전 월의 마지막 날의 요일
      days.push({
        date: new Date(year, month - 1, day), // 이전 월의 날짜
        isCurrentMonth: false, // 이전 월의 날짜는 현재 월이 아님
      });
    }

    // 현재 월의 날짜들
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        date: new Date(year, month, day), // 현재 월의 날짜
        isCurrentMonth: true, // 현재 월의 날짜는 현재 월임
      });
    }

    // 뒤쪽: 다음 월의 날짜들 (6주 = 42일 기준으로 채우기)
    const totalCells = 42; // 6주 고정
    const remainingCells = totalCells - days.length; // 날짜가 부족한 만큼 다음 월의 날짜들을 채우기
    for (let day = 1; day <= remainingCells; day++) {
      days.push({
        date: new Date(year, month + 1, day), // 다음 월의 날짜
        isCurrentMonth: false, // 다음 월의 날짜는 현재 월이 아님
      });
    }
    return days;
  }, [currentMonth]);

  // 날짜가 startDate~endDate 범위 내인지 확인
  const isInRange = (date: Date): boolean => {
    const dateOnly = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const startOnly = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const endOnly = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate());
    return dateOnly >= startOnly && dateOnly <= endOnly;
  };

  // 이전 월로 이동 가능 여부
  const canGoPrevMonth = useMemo(() => {
    const startMonth = startDate.getMonth();
    const startYear = startDate.getFullYear();
    return (
      currentMonth.year > startYear || // 현재 월의 년도가 시작일의 년도보다 크거나
      (currentMonth.year === startYear && currentMonth.month > startMonth) // 현재 월의 년도가 시작일의 년도와 같고 현재 월의 월이 시작일의 월보다 크거나
    );
  }, [currentMonth, startDate]);

  // 다음 월로 이동 가능 여부
  const canGoNextMonth = useMemo(() => {
    const endMonth = endDate.getMonth();
    const endYear = endDate.getFullYear();
    return (
      currentMonth.year < endYear || // 현재 월의 년도가 종료일의 년도보다 작거나
      (currentMonth.year === endYear && currentMonth.month < endMonth) // 현재 월의 년도가 종료일의 년도와 같고 현재 월의 월이 종료일의 월보다 작거나
    );
  }, [currentMonth, endDate]);

  // 이전 월로 이동
  const goToPrevMonth = () => {
    setCurrentMonth((prev) => {
      if (prev.month === 0) {
        // 현재 월이 1월인 경우 이전 년도로 이동
        return { year: prev.year - 1, month: 11 }; // 이전 년도의 12월로 이동
      }
      return { ...prev, month: prev.month - 1 }; // 이전 월로 이동
    });
  };

  // 다음 월로 이동
  const goToNextMonth = () => {
    setCurrentMonth((prev) => {
      if (prev.month === 11) {
        // 현재 월이 12월인 경우 다음 년도로 이동
        return { year: prev.year + 1, month: 0 }; // 다음 년도의 1월로 이동
      }
      return { ...prev, month: prev.month + 1 }; // 다음 월로 이동
    });
  };

  // 이전 월로 이동 (버튼)
  const handlePrevMonth = () => {
    if (!canGoPrevMonth) return;
    goToPrevMonth(); // 이전 월로 이동
  };

  // 다음 월로 이동 (버튼)
  const handleNextMonth = () => {
    if (!canGoNextMonth) return;
    goToNextMonth(); // 다음 월로 이동
  };

  // 날짜 클릭 핸들러
  const handleDateClick = (calendarDay: CalendarDay) => {
    const { date, isCurrentMonth } = calendarDay;

    // 현재 월이 아닌 날짜를 클릭한 경우 해당 월로 이동
    if (!isCurrentMonth) {
      const clickedMonth = date.getMonth();
      const clickedYear = date.getFullYear();

      // 이전 월인지 다음 월인지 확인
      const isPrevMonth =
        clickedYear < currentMonth.year ||
        (clickedYear === currentMonth.year && clickedMonth < currentMonth.month);

      if (isPrevMonth && canGoPrevMonth) {
        goToPrevMonth();
      } else if (!isPrevMonth && canGoNextMonth) {
        goToNextMonth();
      }
      return;
    }

    // 현재 월의 날짜이고 범위 내인 경우 선택 토글
    if (isInRange(date)) {
      const dateKey = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();

      setSelectedDates((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(dateKey)) {
          newSet.delete(dateKey);
        } else {
          newSet.add(dateKey);
        }
        return newSet;
      });
    }
  };

  // 날짜가 선택되었는지 확인
  const isSelected = (date: Date): boolean => {
    const dateKey = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
    return selectedDates.has(dateKey);
  };

  // 날짜 셀의 스타일 결정
  const getDateCellStyle = (calendarDay: CalendarDay): string => {
    const { date, isCurrentMonth } = calendarDay;
    const inRange = isInRange(date);
    const selected = isSelected(date);

    // 현재 월이 아닌 경우
    if (!isCurrentMonth) {
      // 이전/다음 월로 이동 가능한 경우에만 커서 포인터
      const clickedMonth = date.getMonth();
      const clickedYear = date.getFullYear();
      const isPrevMonth =
        clickedYear < currentMonth.year ||
        (clickedYear === currentMonth.year && clickedMonth < currentMonth.month);

      const canNavigate = isPrevMonth ? canGoPrevMonth : canGoNextMonth;
      return `bg-white/0 ${canNavigate ? 'cursor-pointer hover:bg-lightgray/30' : 'cursor-default'}`;
    }

    // 현재 월의 날짜
    if (inRange) {
      if (selected) {
        return 'bg-primary cursor-pointer';
      }
      return 'bg-white/0 hover:bg-primary/30 cursor-pointer';
    }

    return 'bg-white/0 cursor-default';
  };

  // startDate~endDate 범위 내인지 여부에 따른 날짜 텍스트의 스타일 결정
  const getDateTextStyle = (calendarDay: CalendarDay): string => {
    const { date, isCurrentMonth } = calendarDay;
    const inRange = isInRange(date); // startDate~endDate 범위 내인지 여부
    const selected = isSelected(date); // 날짜가 선택되었는지 여부

    // 현재 월이 아닌 경우 항상 lightgray
    if (!isCurrentMonth) {
      return 'text-lightgray'; // 현재 월이 아닌 경우 항상 lightgray
    }

    // 현재 월의 날짜
    if (inRange) {
      if (selected) {
        return 'text-primary-foreground'; // 현재 월의 날짜이고 선택된 경우 기본 텍스트 색상
      }
      return 'text-foreground'; // 현재 월의 날짜이고 선택되지 않은 경우 기본 텍스트 색상
    }

    return 'text-lightgray'; // 현재 월의 날짜이고 범위 내가 아닌 경우 항상 lightgray
  };

  return {
    startDate,
    endDate,
    currentMonth,
    setCurrentMonth,
    weekDays,
    calendarDays,
    getDateCellStyle,
    getDateTextStyle,
    handlePrevMonth,
    handleNextMonth,
    canGoPrevMonth,
    canGoNextMonth,
    handleDateClick,
  };
};
