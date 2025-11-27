// 온보딩 페이지에서 첫 번째 단계에 보여지는 "소개" 컴포넌트
function Intro({ handleNext }: { handleNext: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-20">
      <span className="text-2xl font-bold text-gray-900 mx-15 text-center max-w-[300px]">
        회원님에게 더 좋은 서비스 제공을 위해, 추가적인 기본정보가 필요해요
      </span>
      <div
        onClick={handleNext}
        className="w-full h-auto py-4 cursor-pointer bg-gray-300 rounded-md flex items-center justify-center hover:bg-gray-400 transition-colors max-w-[344px]"
      >
        <span className="text-2xl font-bold text-gray-900">계속하기</span>
      </div>
    </div>
  );
}

export default Intro;
