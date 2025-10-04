// 하단 네비게이션 컴포넌트 (MainRoutes에서 element로 활용)

import { NavLink } from "react-router";
import { Home, BarChart3, User } from "lucide-react";

function BottomNaviagtion() {
  // 네비게이션 아이템 배열
  const navItems = [
    {
      id: "home",
      label: "홈",
      icon: Home,
      path: "/main/home",
    },
    {
      id: "history",
      label: "기록",
      icon: BarChart3,
      path: "/main/history",
    },
    {
      id: "my",
      label: "마이페이지",
      icon: User,
      path: "/main/my",
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 bg-white/50 backdrop-blur-md border-t border-white/70 flex items-center mx-auto w-full max-w-md">
      {/* 네비게이션 아이템을 map 함수로 뿌린다 */}
      {navItems.map((item) => (
        <NavLink to={item.path} key={item.id} className="flex-1">
          <div
            key={item.id}
            className="flex flex-col items-center justify-center"
          >
            <item.icon />
            <span className="text-xs">{item.label}</span>
          </div>
        </NavLink>
      ))}
    </div>
  );
}

export default BottomNaviagtion;
