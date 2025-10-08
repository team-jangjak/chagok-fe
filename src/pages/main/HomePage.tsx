/*
	[홈(Home) 페이지]
	로그인 후 나오는, BottomNavigation을 통해 접근하는 페이지들 중, 가장 먼저 뜨는 페이지
	현재 습관 진행 관리, 습관 생성/종료 등 메인 기능에 접근하는 페이지
*/

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-20">
      <span className="text-4xl font-bold text-gray-900">HomePage</span>
      <span className="text-2xl font-semilight text-gray-600">기처리는 집에 가고 싶어요</span>
    </div>
  );
}

export default HomePage;
