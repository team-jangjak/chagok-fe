import { useState } from 'react';
import { useNavigate } from 'react-router';

// 온보딩 페이지 관련 비즈니스 로직을 담당하는 훅
function useOnboarding() {
  const navigate = useNavigate();

  const [step, setStep] = useState(0); // 온보딩 페이지에서 화면 이동 단계

  // 다음 단계로 이동하는 핸들러
  function handleNext() {
    if (step === 3) {
      // 맨 마지막 단계일 경우, 메인 화면으로 이동
      navigate('/main/home');
    } else {
      setStep(step + 1);
    }
  }

  return {
    handleNext,
    step,
  };
}

export default useOnboarding;
