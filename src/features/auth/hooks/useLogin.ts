import { useNavigate } from 'react-router';

// 로그인 관련 비즈니스 로직을 담당하는 훅
function useLogin() {
  const navigate = useNavigate();

  function handleKakaoLogin() {
    // "카카오 로그인" 관련 핸들러 함수
    console.log('Kakao Login');
    navigate('/onboarding');
  }

  function handleGoogleLogin() {
    // "구글 로그인" 관련 핸들러 함수
    console.log('Google Login');
    navigate('/onboarding');
  }

  return {
    handleKakaoLogin,
    handleGoogleLogin,
  };
}

export default useLogin;
