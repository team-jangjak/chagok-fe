import { useOnboarding } from '@features/auth/contexts/useOnboarding';
import OnboardingPage1 from '@features/auth/components/OnboardingPage1';
import OnboardingPage2 from '@features/auth/components/OnboardingPage2';
import OnboardingPage3 from '@features/auth/components/OnboardingPage3';
import OnboardingPage4 from '@features/auth/components/OnboardingPage4';
import { OnboardingProvider } from '@features/auth/contexts/OnboardingProvider';
import ProgressActionBar from '@shared/ui/ProgressActionBar';
import PrimaryButton from '@shared/ui/PrimaryButton';
/*
	[온보딩 페이지]
	-> 웹사이트에서 소셜 로그인을 진행하고 나서, 추가 정보, 튜토리얼 등을 입력 받는 페이지
	-> 해당 온보딩을 완료해야만 회원가입이 완료되고, 메인 화면으로 이동할 수 있음
*/
function OnboardingPage() {
  return (
    <OnboardingProvider>
      <OnboardingContent />
    </OnboardingProvider>
  );
}

function OnboardingContent() {
  const {
    state: { currentStep },
    actions: { handlePrev, handleNext },
  } = useOnboarding();

  return (
    <div className="flex flex-col items-center justify-between min-h-screen px-8 pt-12 pb-8 relative">
      <div className="w-full flex flex-col items-center justify-start flex-1">
        <ProgressActionBar handlePrev={handlePrev} totalSteps={4} currentStep={currentStep} />
        {currentStep === 0 && <OnboardingPage1 />}
        {currentStep === 1 && <OnboardingPage2 />}
        {currentStep === 2 && <OnboardingPage3 />}
        {currentStep === 3 && <OnboardingPage4 />}
      </div>
      <PrimaryButton onClick={handleNext} isEnabled={true}>
        완료
      </PrimaryButton>
    </div>
  );
}

export default OnboardingPage;
