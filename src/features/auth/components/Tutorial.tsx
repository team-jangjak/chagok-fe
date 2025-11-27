// 온보딩 페이지에서 세 번째 단계에 보여지는 "튜토리얼" 컴포넌트
function Tutorial({ handleNext }: { handleNext: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span className="text-4xl font-bold text-gray-900">Tutorial</span>
      <div
        onClick={handleNext}
        className="w-full h-auto py-4 cursor-pointer bg-gray-300 rounded-md flex items-center justify-center hover:bg-gray-400 transition-colors max-w-[344px]"
      >
        <span className="text-2xl font-bold text-gray-900">계속하기</span>
      </div>
    </div>
  );
}

export default Tutorial;
