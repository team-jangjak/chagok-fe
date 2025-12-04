import { useOnboarding } from '@features/auth/contexts/useOnboarding';
import OnboardingPage1 from '@features/auth/components/OnboardingPage1';
import OnboardingPage2 from '@features/auth/components/OnboardingPage2';
import { OnboardingProvider } from '@features/auth/contexts/OnboardingProvider';
import ProgressActionBar from '@shared/ui/ProgressActionBar';
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
    actions: { handlePrev },
  } = useOnboarding();

  return (
    <div className="flex flex-col items-center justify-start h-full px-8 py-8 relative">
      <ProgressActionBar handlePrev={handlePrev} totalSteps={4} currentStep={currentStep} />
      {currentStep === 0 && <OnboardingPage1 />}
      {currentStep === 1 && <OnboardingPage2 />}
    </div>
  );
}

export default OnboardingPage;
