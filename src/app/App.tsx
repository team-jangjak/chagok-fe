import '@styles/index.css';
import { Routes, Route } from 'react-router';

import LandingPage from '@pages/Landing';

import LoginPage from '@pages/LoginPage';
import SignupPage from '@pages/SignupPage';
import SignUpLoading from '@pages/SignUpLoading';
import TestPages from '@pages/TestPages';
import TestGuide from '@pages/TestGuide';

import HomePage from '@pages/main/HomePage';
import HistoryPage from '@pages/main/HistoryPage';
import MyPage from '@pages/main/MyPage';
import AuthLayout from './layouts/AuthLayout';
import MainLayout from './layouts/MainLayout';
import CreateHabit from '@pages/createHabit/CreateHabit';

function App() {
  return (
    <div className="mx-auto min-w-[320px] max-w-screen-sm min-h-screen flex flex-col bg-white border-l-2 border-r-2 border-gray-100">
      <Routes>
        {/* public */}
        <Route index element={<LandingPage />} />

        {/* auth */}
        <Route path="auth" element={<AuthLayout />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="signuploading" element={<SignUpLoading />} />
          <Route path="test" element={<TestPages />} />
          <Route path="testguide" element={<TestGuide />} />
        </Route>

        {/* main */}
        <Route path="main" element={<MainLayout />}>
          <Route path="home" element={<HomePage />} />
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
