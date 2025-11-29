import { useState } from 'react';
import type { SignUpData } from '@features/auth/types';
import { OnboardingContext } from '@features/auth/contexts/OnboardingContext';

/*
	온보딩 페이지 관련 상태를 관리하는 컨텍스트 제공자 컴포넌트
	-> step 관련 정보는 각 커스텀 훅에서 직접 관리하면 안되므로, 컨텍스트를 통해 관리함
*/
export function OnboardingProvider({ children }: { children: React.ReactNode }) {
  const [currentStep, setCurrentStep] = useState<number>(0); // 현재 온보딩 페이지 단계 (0~7)
  const [signUpData, setSignUpData] = useState<SignUpData>({
    // 회원가입 데이터
    oauthId: 0,
    name: '',
    email: '',
    birthDate: '',
    profileImage: '',
    tendency: 0,
  });

  const handleSignUpDataChange = (data: Partial<SignUpData>) => {
    setSignUpData((prev) => ({ ...prev, ...data }));
  }; // 회원가입 데이터 변경 핸들러
  const handleNext = () => {
    setCurrentStep((s) => s + 1);
  }; // 다음 단계로 이동하는 핸들러
  const handlePrev = () => {
    setCurrentStep((s) => s - 1);
  }; // 이전 단계로 이동하는 핸들러

  // Context에서 값을 동적으로 사용할 때 state와 actions 객체를 따로 관리하는 것이 좋음
  const value = {
    state: { currentStep, signUpData },
    actions: { handleNext, handlePrev, handleSignUpDataChange },
  };

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}
