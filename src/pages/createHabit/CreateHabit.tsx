/*
	습관 생성 페이지
	-> 하위 컴포넌트들은 features/createHabit/components 폴더에 위치
*/
import { useState } from 'react';
import ProgressActionBar from '@shared/ui/ProgressActionBar';
import CreateHabitPage1 from '@features/createHabit/components/CreateHabitPage1';
import CreateHabitPage2 from '@features/createHabit/components/CreateHabitPage2';
import PrimaryButton from '@shared/ui/PrimaryButton';

function CreateHabit() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [nextIsEnabled, setNextIsEnabled] = useState<boolean>(false);
  const handleNext = () => {
    setCurrentStep((prev) => prev + 1);
  };
  const handlePrev = () => {
    setCurrentStep((prev) => prev - 1);
  };
  return (
    <div className="w-full max-h-screen flex flex-col items-center justify-start px-6 pt-12 relative">
      {/* 진행 상태 액션 바 */}
      <ProgressActionBar totalSteps={4} currentStep={currentStep} handlePrev={handlePrev} />
      {/* 습관 생성 페이지 1번째 페이지 */}
      {currentStep === 1 && <CreateHabitPage1 setNextIsEnabled={setNextIsEnabled} />}
      {currentStep === 2 && <CreateHabitPage2 setNextIsEnabled={setNextIsEnabled} />}
      <PrimaryButton
        onClick={
          currentStep === 4
            ? () => {
                console.log('완료');
              }
            : handleNext
        }
        isEnabled={nextIsEnabled}
        className="w-[calc(100%-48px)] shadow-[0_0_12px_12px_rgba(255,255,255,0.5)]"
      >
        완료
      </PrimaryButton>
    </div>
  );
}

export default CreateHabit;
