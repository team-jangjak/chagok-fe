// 인증 관련 라우트 설정
// 로그인, 회원가입 페이지를 하위 라우트로 관리
import { Outlet, type RouteObject } from 'react-router';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';
import SignUpLoading from '@/pages/SignUpLoading';
import TestPages from '@/pages/TestPages';
import TestGudie from '@/pages/TestGuide';
import { SignupStoreProvider } from '@/features/auth/contexts/SignupStoreProvider';

export const AuthRoutes: RouteObject[] = [
  {
    path: '/auth',
    element: (
      <SignupStoreProvider>
        <Outlet />
      </SignupStoreProvider>
    ),
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
      {
        path: 'signuploading',
        element: <SignUpLoading />,
      },
      {
        path: 'test',
        element: <TestPages />,
      },
      {
        path: 'testguide',
        element: <TestGudie />,
      },
    ],
  },
];
