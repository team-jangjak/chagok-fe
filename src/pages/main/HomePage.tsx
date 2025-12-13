/*
	[홈(Home) 페이지]
	로그인 후 나오는, BottomNavigation을 통해 접근하는 페이지들 중, 가장 먼저 뜨는 페이지
	현재 습관 진행 관리, 습관 생성/종료 등 메인 기능에 접근하는 페이지
*/
import ActionInfoCard from '@features/main/components/ActionInfoCard';

function HomePage() {
  const actionInfoCards = [
    {
      id: 1,
      name: '물구나무서기',
      frequency: '주 3회',
    },
    {
      id: 2,
      name: '물구나무서기',
      frequency: '주 3회',
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-screen px-8">
      {actionInfoCards.map((card) => (
        <ActionInfoCard key={card.id} name={card.name} frequency={card.frequency} />
      ))}
      {/* '습관 추가하기' 버튼 */}
      <div className="w-full flex flex-col items-center justify-center py-3 mx-10 bg-primary rounded-2xl cursor-pointer">
        <span className="text-white text-lg font-medium">습관 추가하기</span>
      </div>
    </div>
  );
}

export default HomePage;
