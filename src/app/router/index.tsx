import { Routes, Route } from "react-router";
import LoginPage from "@pages/Login";
import LandingPage from "@pages/Landing";

// 모든 라우트를 포함하는 최상단 라우트 컴포넌트
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default AppRoutes;
