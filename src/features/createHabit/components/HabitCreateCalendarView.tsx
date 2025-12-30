/*
	습관에 종속되는 세부 액션들을 설정할 때 사용하는 캘린더 뷰
*/

import ChevronLeft from '@assets/icons/chevron-left.svg';
import { useHabitCreateCalendarView } from '@features/createHabit/hooks/useHabitCreateCalendarView';

function HabitCreateCalendarView() {
  // 캘린더 뷰에 대한 훅 사용하여 캘린더 뷰 상태 관리
  const {
    currentMonth,
    weekDays,
    calendarDays,
    handleDateClick,
    getDateCellStyle,
    getDateTextStyle,
    handlePrevMonth,
    handleNextMonth,
    canGoPrevMonth,
    canGoNextMonth,
  } = useHabitCreateCalendarView();

  return (
    <>
      <div className="w-full h-full">
        {/* 현재 설정한 습관 실천 빈도 표시 영역 */}
        <span className="text-lg font-bold text-foreground">
          현재 설정한 습관 실천 빈도: 주 3회
        </span>
        {/* 캘린더 영역 */}
        <div className="mt-6 w-full h-auto flex flex-col items-center justify-start gap-2">
          {/* 월 탐색 헤더 */}
          <div className="w-full flex items-center justify-between px-2">
            {/* 이전 월로 이동 (왼쪽 화살표) 버튼 */}
            <button
              onClick={handlePrevMonth}
              disabled={!canGoPrevMonth}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                canGoPrevMonth
                  ? 'hover:bg-lightgray/50 cursor-pointer'
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <img src={ChevronLeft} alt="이전 월" className="w-5 h-5" />
            </button>
            {/* 현재 연도와 월 표시 */}
            <span className="text-lg font-bold text-foreground">
              {currentMonth.year}년 {currentMonth.month + 1}월
            </span>
            {/* 다음 월로 이동 (오른쪽 화살표) 버튼 */}
            <button
              onClick={handleNextMonth}
              disabled={!canGoNextMonth}
              className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                canGoNextMonth
                  ? 'hover:bg-lightgray/50 cursor-pointer'
                  : 'opacity-30 cursor-not-allowed'
              }`}
            >
              <img src={ChevronLeft} alt="다음 월" className="w-5 h-5 rotate-180" />
            </button>
          </div>

          {/* 요일 헤더 */}
          <div className="px-2.5 pt-2 w-full grid grid-cols-7 gap-x-3">
            {weekDays.map((day) => (
              <div key={day} className="w-10 h-8 flex items-center justify-center">
                <span className="text-sm font-medium text-darkgray">{day}</span>
              </div>
            ))}
          </div>

          {/* 날짜 그리드 */}
          <div className="p-2.5 w-full h-auto grid grid-cols-7 gap-x-3 gap-y-3 bg-primary/0 rounded-lg">
            {calendarDays.map((calendarDay, index) => (
              <div
                key={`${calendarDay.date.getTime()}-${index}`}
                onClick={() => handleDateClick(calendarDay)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${getDateCellStyle(calendarDay)}`}
              >
                <span className={`text-lg font-medium ${getDateTextStyle(calendarDay)}`}>
                  {calendarDay.date.getDate()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HabitCreateCalendarView;
