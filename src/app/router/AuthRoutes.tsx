// 인증 관련 라우트 설정
// 로그인, 회원가입 페이지를 하위 라우트로 관리
import type { RouteObject } from 'react-router';
import LoginPage from '@/pages/LoginPage';
import SignupPage from '@/pages/SignupPage';

export const AuthRoutes: RouteObject[] = [
  {
    path: '/auth',
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'signup',
        element: <SignupPage />,
      },
    ],
  },
];
