// 메인 페이지 라우트 설정
// 로그인 후 나오는, BottomNavigation을 통해 접근하는 페이지들을 관리

import type { RouteObject } from "react-router";
import BottomNaviagtion from "@shared/ui/BottomNaviagtion";
import HomePage from "@pages/main/HomePage";
import HistoryPage from "@pages/main/HistoryPage";
import MyPage from "@pages/main/MyPage";

export const MainRoutes: RouteObject[] = [
  {
    path: "/main",
    element: <BottomNaviagtion />, // 하단 네비게이션 바 컴포넌트
    children: [
      {
        path: "/main",
        element: <HomePage />,
      },
      {
        path: "/history",
        element: <HistoryPage />,
      },
      {
        path: "/my",
        element: <MyPage />,
      },
    ],
  },
];
