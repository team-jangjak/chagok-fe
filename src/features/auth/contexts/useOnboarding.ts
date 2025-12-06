import { useContext } from 'react';
import { OnboardingContext } from './OnboardingContext';
import type { OnboardingContextType } from '@features/auth/types';

// 온보딩 페이지 관련 상태를 관리하는 컨텍스트를 사용하는 훅
export function useOnboarding(): OnboardingContextType {
  const context = useContext(OnboardingContext);
  if (context === null) {
    throw new Error('useOnboarding는 OnboardingProvider 컴포넌트 내에서만 사용할 수 있습니다.');
  }
  return context;
}
