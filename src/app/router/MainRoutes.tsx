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
        index: true, // main 접속 시, 기본 페이지로 HomePage를 띄운다
        element: <HomePage />,
      },
      {
        path: 'history',
        element: <HistoryPage />,
      },
      {
        path: 'my',
        element: <MyPage />,
      },
    ],
  },
];
