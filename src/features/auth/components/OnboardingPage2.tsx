// 온보딩 페이지 중 2번째 페이지 ('프로필 입력' 페이지)
import { useState } from 'react';
import { useOnboarding } from '@features/auth/contexts/useOnboarding';
import PrimaryButton from '@shared/ui/PrimaryButton';
import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar';
import { Button } from '@components/ui/button';
import { DatePicker } from '@shared/ui/DatePicker';
import { DataInput } from '@shared/ui/DataInput';
import PillButton from '@shared/ui/PillButton';

function OnboardingPage2() {
  const {
    actions: { handleNext, handleSignUpDataChange },
  } = useOnboarding();

  const [options, setOptions] = useState({
    '옵션 1': false,
    '옵션 2': false,
    '옵션 3': true,
    '옵션 4': false,
  });

  const handleOptionClick = (option: keyof typeof options) => {
    setOptions((prev) => ({ ...prev, [option]: !prev[option] }));
  };

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
      {/* '성별 선택' 영역 */}
      <div className="w-full flex flex-col gap-2 mb-8">
        <span className="text-xl font-medium text-text">성별</span>
        <div className="grid grid-cols-2 gap-4">
          <Button onClick={() => handleSignUpDataChange({ gender: 'male' })}>남성</Button>
          <Button onClick={() => handleSignUpDataChange({ gender: 'female' })}>여성</Button>
        </div>
      </div>
      {/* '생년월일 선택' 영역 */}
      <div className="w-full flex flex-col gap-2 mb-8">
        <span className="text-xl font-medium text-text">생년월일</span>
        <DatePicker id="birthDate" className="w-full" />
      </div>
      {/* '이메일' 영역 */}
      <div className="w-full flex flex-col gap-2 mb-8">
        <span className="text-xl font-medium text-text">이메일</span>
        <DataInput id="email" placeholder="이메일 입력 (ex. gichul@kakao.com)" className="w-full" />
      </div>
      {/* '옵션' 영역 */}
      <div className="w-full flex flex-col gap-2 mb-8">
        <span className="text-xl font-medium text-text">옵션</span>
        <div className="grid grid-cols-4 gap-2">
          {Object.entries(options).map(([option, isSelected]) => (
            <PillButton
              isSelected={isSelected}
              key={option}
              handleOptionClick={() => handleOptionClick(option as keyof typeof options)}
            >
              {option}
            </PillButton>
          ))}
        </div>
      </div>
      <PrimaryButton onClick={handleNext} disabled>
        완료
      </PrimaryButton>
    </>
  );
}

export default OnboardingPage2;
