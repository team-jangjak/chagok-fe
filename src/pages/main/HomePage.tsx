/*
	[홈(Home) 페이지]
	로그인 후 나오는, BottomNavigation을 통해 접근하는 페이지들 중, 가장 먼저 뜨는 페이지
	현재 습관 진행 관리, 습관 생성/종료 등 메인 기능에 접근하는 페이지
*/
import ActionInfoCard from '@features/main/components/ActionInfoCard';

function HomePage() {
  // 일시적인 mock data -> 나중에 실제 데이터로 대체 예정
  const actionInfoCards = [
    {
      id: 1,
      name: '물구나무서기',
      frequency: '주 3회',
      progressData: 70,
      isShouldIdentify: true,
    },
    {
      id: 2,
      name: '42.195km 달리기',
      frequency: '주 1회',
      progressData: 60,
      isShouldIdentify: false,
    },
    {
      id: 3,
      name: '헬스장 가기',
      frequency: '주 1회',
      progressData: 50,
      isShouldIdentify: false,
    },
    {
      id: 4,
      name: '마사지 받기',
      frequency: '주 1회',
      progressData: 40,
      isShouldIdentify: false,
    },
    {
      id: 5,
      name: '책 읽기',
      frequency: '주 1회',
      progressData: 30,
      isShouldIdentify: false,
    },
    {
      id: 6,
      name: '영어 공부',
      frequency: '주 1회',
      progressData: 20,
      isShouldIdentify: false,
    },
  ];

  return (
    <div className="min-h-screen h-full flex flex-col items-center justify-start px-6 pt-12 pb-24">
      {/* 제목 영역 */}
      <div className="w-full flex flex-col items-start justify-start gap-1 pb-8">
        <span className="text-2xl font-medium text-foreground">기처리님,</span>
        <span className="text-2xl font-medium text-foreground">
          지금 {actionInfoCards.length}개의 루틴을 수행 중이세요!
        </span>
      </div>

      {actionInfoCards.map((card) => (
        <ActionInfoCard
          key={card.id}
          name={card.name}
          frequency={card.frequency}
          progressData={card.progressData}
          isShouldIdentify={card.isShouldIdentify}
        />
      ))}
      {/* '습관 추가하기' 버튼 */}
      <div className="w-full flex flex-col items-center justify-center py-3 mx-10 bg-primary rounded-2xl cursor-pointer">
        <span className="text-white text-lg font-medium">습관 추가하기</span>
      </div>
    </div>
  );
}

export default HomePage;
