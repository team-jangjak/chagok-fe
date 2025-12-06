// Context 객체 파일 분리
// 온보딩 페이지 관련 상태를 관리하는 컨텍스트 타입 정의
import { createContext } from 'react';
import type { OnboardingContextType } from '@features/auth/types';

export const OnboardingContext = createContext<OnboardingContextType | null>(null);
