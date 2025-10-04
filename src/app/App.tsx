import '@styles/index.css';
import { AppRouter } from '@app/router/AppRouter';

// 모든 컴포넌트를 포함하는 최상단 컴포넌트
function App() {
  return (
    <div className="mx-auto w-full max-w-md min-h-screen flex flex-col bg-[#e3f7bc] border-l-2 border-r-2 border-gray-100">
      <AppRouter />
    </div>
  );
}

export default App;
