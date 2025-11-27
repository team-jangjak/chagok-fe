import chagokLogo from '@assets/chagok-logo.svg';
import useLogin from '@features/auth/hooks/useLogin';
import kakaoLogo from '@assets/kakao-login-btn.svg';
import googleLogo from '@assets/google-login-btn.svg';

// 로그인 페이지 (비회원도 접근 가능)
function LoginPage() {
  const { handleKakaoLogin, handleGoogleLogin } = useLogin(); // 로그인 관련 비즈니스 로직을 담당하는 훅에서 필요한 것만 가져오기

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="text-4xl font-bold text-gray-900">Login</span>
      {/* 로그인 화면에 우선은 차곡차곡 로고만 보여주기 */}
      <div className="w-[200px] h-[200px] mt-8 mb-20 mx-20">
        <img src={chagokLogo} alt="chagokLogo" className="w-full h-full object-contain" />
      </div>
      {/* 소셜 로그인(카카오, 구글) 버튼 그룹 */}
      <div className="flex flex-col items-center justify-center gap-4">
        <div onClick={handleKakaoLogin} className="cursor-pointer">
          <img src={kakaoLogo} alt="kakaoLogo" className="w-[280px] h-auto object-contain" />
        </div>
        <div onClick={handleGoogleLogin} className="cursor-pointer">
          <img src={googleLogo} alt="googleLogo" className="w-[280px] h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
