import { createBrowserRouter, RouterProvider } from 'react-router';
import { AuthRoutes } from '@app/router/AuthRoutes';
import { MainRoutes } from '@app/router/MainRoutes';
import LandingPage from '@pages/Landing';

/*
	createBrowserRouter를 사용하여 라우터를 생성.
	
	이후, RouterProvider를 사용하여 라우터를 제공하는 방식이 표준
	createBrowserRouter가 내부적으로 history를 관리,
	BrowserRouter와 동일한 기능을 제공
*/

const router = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  ...AuthRoutes,
  ...MainRoutes,
]);

// 최상단 라우터 컴포넌트 반환
export function AppRouter() {
  return <RouterProvider router={router} />;
}
