import '@styles/index.css';
import { Route, Routes } from 'react-router';
import LandingPage from '@pages/Landing';
import OnboardingPage from '@pages/OnboardingPage';
import LoginPage from '@pages/LoginPage';
import MainLayout from '@app/layouts/MainLayout';
import HomePage from '@pages/main/HomePage';
import HistoryPage from '@pages/main/HistoryPage';
import MyPage from '@pages/main/MyPage';
import CreateHabit from '@pages/createHabit/CreateHabit';

// 모든 컴포넌트를 포함하는 최상단 컴포넌트
function App() {
  return (
    <div className="mx-auto min-w-[320px] max-w-screen-sm min-h-screen flex flex-col bg-white border-l-2 border-r-2 border-gray-100">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="onboarding" element={<OnboardingPage />} />
        {/* 메인 페이지 레이아웃 (탭 네비게이션을 통해 왔다갔다 하는 레이아웃) */}
        <Route path="main" element={<MainLayout />}>
          <Route index path="home" element={<HomePage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="my" element={<MyPage />} />
        </Route>
        {/* 습관 생성 페이지 */}
        <Route path="createHabit" element={<CreateHabit />} />
      </Routes>
    </div>
  );
}

export default App;
