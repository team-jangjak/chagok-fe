import { useContext } from 'react';
import { useSyncExternalStore } from 'react';

import { SignupStoreContext } from './SignupStoreContext';
import type { SignupState } from '@store/signupStore';

// Context로 제공된 Signup 스토어를 쉽게 사용하기 위한 훅
export function useSignupStore<T>(selector: (state: SignupState) => T) {
  const store = useContext(SignupStoreContext);

  // Provider 범위 밖에서 사용하면 오류
  if (!store) {
    throw new Error('useSignupStore must be used within SignupStoreProvider');
  }

  // selector를 통해 필요한 값만 추출하여 리렌더링 최적화
  return useSyncExternalStore(
    store.subscribe, // 상태 변경 시 호출되는 구독 함수
    () => selector(store.getState()) // 현재 상태에서 selector 적용
  );
}
