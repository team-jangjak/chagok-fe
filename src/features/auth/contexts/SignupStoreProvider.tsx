import { createSignupStore } from '@store/signupStore';
import { useRef } from 'react';
import type { StoreApi } from 'zustand';
import type { SignupState } from '@store/signupStore';
import { SignupStoreContext } from './SignupStoreContext';

// 하위 컴포넌트에서 Zustand 스토어를 사용할 수 있도록 Context로 제공함
export function SignupStoreProvider({ children }: { children: React.ReactNode }) {
  // useRef로 스토어를 한 번만 생성하도록 저장
  const storeRef = useRef<StoreApi<SignupState> | null>(null);
  // 아직 스토어가 없으면 새로 생성
  if (!storeRef.current) {
    storeRef.current = createSignupStore();
  }
  // Context Provider로 스토어를 하위 컴포넌트에 전달
  return (
    <SignupStoreContext.Provider value={storeRef.current}>{children}</SignupStoreContext.Provider>
  );
}
