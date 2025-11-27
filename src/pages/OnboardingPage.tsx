/*
	[온보딩 페이지]
	-> 웹사이트에서 소셜 로그인을 진행하고 나서, 추가 정보를 입력 받는 페이지
*/
function OnboardingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="text-4xl font-bold text-gray-900">Onboarding</span>
      {/* {step === 0 && <Intro handleNext={handleNext} />}
      {step === 1 && <AdditionalDataInput handleNext={handleNext} />}
      {step === 2 && <Tutorial handleNext={handleNext} />} */}
    </div>
  );
}

export default OnboardingPage;
