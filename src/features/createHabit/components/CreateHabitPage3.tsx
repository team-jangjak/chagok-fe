import HabitCreateCalendarView from '@features/createHabit/components/HabitCreateCalendarView';

/*
  [습관 생성 페이지 3번째 페이지]
	-> 해당 습관에 대해서 세부 액션을 설정하는 화면
*/

// TODO: 추후 HabitCreateCalendarView 컴포넌트가 완성되면 구현 필요
// interface CreateHabitPage3Props {
//   setNextIsEnabled: (isEnabled: boolean) => void;
// }

function CreateHabitPage3() {
  // useEffect(() => {
  // 	if (setNextIsEnabled) {
  // 		setNextIsEnabled(true);
  // 	} else {
  // 		setNextIsEnabled(false);
  // 	}
  // }, [setNextIsEnabled]);
  return (
    <>
      {/* 헤더 영역 */}
      <div className="w-full mb-4 flex flex-col items-start justify-start gap-3">
        <span className="text-3xl font-bold text-text">세부 액션 설정하기</span>
        <span className="text-lg font-normal text-darkgray">
          수행 기간동안 수행할 목표들을 정해 주세요!
        </span>
      </div>
      <HabitCreateCalendarView />
    </>
  );
}

export default CreateHabitPage3;
