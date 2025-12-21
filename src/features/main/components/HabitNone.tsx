/*
	루틴이 없을 때 메인화면 중 홈(HomePage)에 나오는 컴포넌트
*/

import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function HabitNone() {
  return (
    <>
      <span className="text-2xl font-medium text-foreground">기처리님,</span>
      <span className="text-2xl font-medium text-foreground">지금 수행하고 있는 루틴이 없네요</span>
      {/* dotlottie 애니메이션 */}
      <div className="w-[180px] h-[180px] mt-8 mb-4">
        <DotLottieReact
          src="https://lottie.host/29e89618-464a-4d92-a047-10890034bbf2/JkShgfewMg.lottie"
          loop
          autoplay
        />
      </div>
    </>
  );
}

export default HabitNone;
