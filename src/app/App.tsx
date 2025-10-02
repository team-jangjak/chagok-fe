import "@styles/index.css";
import { BrowserRouter } from "react-router"; // react-router 사용
import AppRoutes from "@app/router";

// 모든 컴포넌트를 포함하는 최상단 컴포넌트
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
