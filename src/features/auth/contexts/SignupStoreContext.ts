import { createContext } from 'react';
import type { StoreApi } from 'zustand';
import type { SignupState } from '@store/signupStore';

// React Context를 만들어 Zustand 스토어(SignupState)를 컴포넌트 트리에서 어디서든 접근할 수 있게 함. (초기값은 null)
export const SignupStoreContext = createContext<StoreApi<SignupState> | null>(null);
