/*
	습관 생성 페이지
	-> 하위 컴포넌트들은 features/createHabit/components 폴더에 위치
*/
import ProgressActionBar from '@shared/ui/ProgressActionBar';
import CreateHabitPage1 from '@features/createHabit/components/CreateHabitPage1';
import PrimaryButton from '@shared/ui/PrimaryButton';

function CreateHabit() {
  const handleNext = () => {
    console.log('next');
  };
  return (
    <div className="w-full max-h-screen flex flex-col items-center justify-start px-6 pt-12 relative">
      {/* 진행 상태 액션 바 */}
      <ProgressActionBar totalSteps={4} currentStep={1} handlePrev={() => {}} />
      {/* 습관 생성 페이지 1번째 페이지 */}
      <CreateHabitPage1 />
      <PrimaryButton
        onClick={handleNext}
        isEnabled={true}
        className="w-[calc(100%-48px)] fixed bottom-8 shadow-[0_0_12px_12px_rgba(255,255,255,0.5)]"
      >
        완료
      </PrimaryButton>
      {/* <PrimaryButton
        onClick={handleNext}
        isEnabled={true}
        className="shadow-[0_0_12px_12px_rgba(255,255,255,0.5)]"
      >
        완료
      </PrimaryButton> */}
    </div>
  );
}

export default CreateHabit;
