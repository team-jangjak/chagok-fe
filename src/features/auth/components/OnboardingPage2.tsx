// 온보딩 페이지 중 2번째 페이지 ('프로필 입력' 페이지)

import { useOnboarding } from '@features/auth/contexts/useOnboarding';
import PrimaryButton from '@shared/ui/PrimaryButton';
import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar';

function OnboardingPage2() {
  const {
    actions: { handleNext },
  } = useOnboarding();

  return (
    <>
      {/* 헤더 영역 */}
      <div className="w-full mb-8 mt-4 flex flex-col items-start justify-start gap-3">
        <span className="text-3xl font-bold text-text">프로필 입력</span>
        <span className="text-lg font-normal text-darkgray">회원님의 정보를 완성해 주세요</span>
      </div>
      {/* 아바타 영역 */}
      <div className="flex justify-center mb-8">
        <Avatar className="w-30 h-30 border-4 border-orange-500">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
      <PrimaryButton onClick={handleNext} disabled>
        완료
      </PrimaryButton>
    </>
  );
}

export default OnboardingPage2;
