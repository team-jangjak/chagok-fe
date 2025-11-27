import PrimaryButton from '@shared/ui/PrimaryButton';
import useOnboarding from '@features/auth/hooks/useOnboarding';
import { Outlet } from 'react-router';

/*
	[온보딩 페이지]
	-> 웹사이트에서 소셜 로그인을 진행하고 나서, 추가 정보, 튜토리얼 등을 입력 받는 페이지
*/
function OnboardingPage() {
  const { buttonTitle, handleNext } = useOnboarding();
  return (
    <div className="flex flex-col items-center justify-center h-screen px-8 relative">
      <Outlet />
      <PrimaryButton title={buttonTitle} onClick={handleNext} />
    </div>
  );
}

export default OnboardingPage;
