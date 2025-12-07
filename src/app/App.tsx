import '@styles/index.css';
import { useRoutes } from 'react-router';
import LandingPage from '@pages/Landing';
import OnboardingPage from '@pages/OnboardingPage';
import { AuthRoutes } from './router/AuthRoutes';

// 모든 컴포넌트를 포함하는 최상단 컴포넌트
function App() {
  const element = useRoutes([
    ...AuthRoutes,
    {
      path: '/',
      children: [
        { index: true, element: <LandingPage /> },
        { path: 'onboarding', element: <OnboardingPage /> },
      ],
    },
  ]);
  return (
    <div className="mx-auto min-w-[320px] max-w-screen-sm min-h-screen flex flex-col bg-white border-l-2 border-r-2 border-gray-100">
      {element}
    </div>
  );
}

export default App;
