// MainLayout 컴포넌트 (-> BottomNavigation을 통해 왔다갔다 하는 메인 페이지 레이아웃)
import BottomNavigation from "@shared/ui/BottomNaviagtion";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen mx-auto w-full max-w-md">
      <div className="flex-1">
        <Outlet /> {/* 여기서 HomePage, HistoryPage, MyPage가 렌더링됨 */}
      </div>
      <BottomNavigation />
    </div>
  );
}

export default MainLayout;
