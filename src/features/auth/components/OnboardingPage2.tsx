// 온보딩 페이지 중 2번째 페이지 ('프로필 입력' 페이지)
import { useState } from 'react';
import { useOnboarding } from '@features/auth/contexts/useOnboarding';
import PrimaryButton from '@shared/ui/PrimaryButton';
import { Avatar, AvatarImage, AvatarFallback } from '@components/ui/avatar';
import DatePicker from '@shared/ui/DatePicker';
import DataInput from '@shared/ui/DataInput';
import PillButton from '@shared/ui/PillButton';
import RadioButton from '@shared/ui/RadioButton';
import DropdownMenu from '@/shared/ui/DropdownMenu';

function OnboardingPage2() {
  const {
    actions: { handleNext },
  } = useOnboarding();

  const [options, setOptions] = useState({
    '옵션 1': false,
    '옵션 2': false,
    '옵션 3': true,
    '옵션 4': false,
  });

  const [gender, setGender] = useState<'male' | 'female'>('male');

  const handleGenderClick = (gender: 'male' | 'female') => {
    setGender(gender);
  };

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
          <PillButton
            className="py-2 text-lg"
            isSelected={gender === 'male'}
            handleOptionClick={() => handleGenderClick('male')}
          >
            남자
          </PillButton>
          <PillButton
            className="py-2 text-lg"
            isSelected={gender === 'female'}
            handleOptionClick={() => handleGenderClick('female')}
          >
            여자
          </PillButton>
        </div>
      </div>
      {/* '체크박스 선택' 영역 */}
      <div className="w-full flex flex-col gap-2 mb-8">
        <span className="text-xl font-medium text-text">체크박스 선택</span>
        <div className="grid grid-cols-4 gap-2">
          {Object.entries(options).map(([option, isSelected]) => (
            <RadioButton
              className="w-8 h-8"
              isChecked={isSelected}
              key={option}
              handleOptionClick={() => handleOptionClick(option as keyof typeof options)}
            />
          ))}
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
              className="py-1 text-sm"
              isSelected={isSelected}
              key={option}
              handleOptionClick={() => handleOptionClick(option as keyof typeof options)}
            >
              {option}
            </PillButton>
          ))}
        </div>
      </div>
      {/* '드롭다운'으로 옵션 선택하는 영역 */}
      <div className="w-full flex flex-col gap-2 mb-8">
        <span className="text-xl font-medium text-text">드롬다운 테스트</span>
        <div className="w-full grid grid-cols-2 gap-2">
          <DropdownMenu
            options={['옵션 1', '옵션 2', '옵션 3', '옵션 4']}
            placeholder="옵션 선택해주셈1"
          />
          <DropdownMenu
            options={['옵션 1', '옵션 2', '옵션 3', '옵션 4']}
            placeholder="옵션 선택해주셈2"
          />
        </div>
        <div className="w-full grid grid-cols-3 gap-2">
          <DropdownMenu options={['일', '월', '년']} placeholder="기간단위" />
          <DropdownMenu options={['개', '명', '초']} placeholder="수량단위" />
          <DropdownMenu options={['허준호', '허주노', '기처리', '집갈래']} placeholder="이름" />
        </div>
      </div>
      <PrimaryButton onClick={handleNext} isEnabled={true}>
        완료
      </PrimaryButton>
    </>
  );
}

export default OnboardingPage2;
