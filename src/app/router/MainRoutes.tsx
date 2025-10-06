// 메인 페이지 라우트 설정
// 로그인 후 나오는, BottomNavigation을 통해 접근하는 페이지들을 관리

import type { RouteObject } from 'react-router';
import MainLayout from '@app/layouts/MainLayout';
import HomePage from '@pages/main/HomePage';
import HistoryPage from '@pages/main/HistoryPage';
import MyPage from '@pages/main/MyPage';

export const MainRoutes: RouteObject[] = [
  {
    path: '/main',
    element: <MainLayout />, // MainLayout 컴포넌트를 띄운다
    children: [
      {
        path: 'home', // 초기 화면
        element: <HomePage />,
      },
      {
        path: 'history', // 기록 페이지
        element: <HistoryPage />,
      },
      {
        path: 'my', // 마이 페이지
        element: <MyPage />,
      },
    ],
  },
];
