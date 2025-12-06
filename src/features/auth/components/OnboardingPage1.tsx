/*
	[튜토리얼 인트로 페이지]
	-> 추가입력 & 성향 테스트 & 튜토리얼 시작 전 인트로 페이지
*/

import { useOnboarding } from '@features/auth/contexts/useOnboarding';
import PrimaryButton from '@shared/ui/PrimaryButton';

function OnboardingPage1() {
  const {
    actions: { handleNext },
  } = useOnboarding();
  return (
    <div className="flex flex-col items-center justify-center h-screen px-8 gap-1">
      <span className="text-2xl font-bold text-gray-900">회원님께 더 좋은 서비스를</span>
      <span className="text-2xl font-bold text-gray-900">제공하기 위해서,</span>
      <span className="text-2xl font-bold text-gray-900">추가적인 정보가 필요해요.</span>
      <PrimaryButton onClick={handleNext} isEnabled={true}>
        다음
      </PrimaryButton>
    </div>
  );
}

export default OnboardingPage1;
