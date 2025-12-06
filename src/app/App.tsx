import '@styles/index.css';
import { Route, Routes } from 'react-router';
import LandingPage from '@pages/Landing';
import OnboardingPage from '@pages/OnboardingPage';
import LoginPage from '@pages/LoginPage';

// 모든 컴포넌트를 포함하는 최상단 컴포넌트
function App() {
  return (
    <div className="mx-auto min-w-[320px] max-w-screen-sm min-h-screen flex flex-col bg-white border-l-2 border-r-2 border-gray-100">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="onboarding" element={<OnboardingPage />} />
      </Routes>
    </div>
  );
}

export default App;
