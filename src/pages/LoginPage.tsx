// 로그인 페이지 (비회원도 접근 가능)
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // lottie 애니메이션 사용을 위한 라이브러리
import kakaoLoginButton from '../assets/kakao-login-button.svg';
import googleLoginButton from '../assets/google-login-button.svg';
import { useSocialLoginListener } from '@/features/auth/hooks/useSocialLoginListener';
import { useSocialLogin } from '@/features/auth/hooks/useSocialLogin';
function LoginPage() {
  useSocialLoginListener();
  const { kakaoLogin, googleLogin, directLogin } = useSocialLogin();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      <div className="flex flex-col items-center justify-center h-screen px-20">
        <span className="text-4xl font-extrabold text-gray-900">차곡차곡</span>
        <div className="mt-5">
          <p className="text-black font-bold">갓생을 살고 싶은 여러분들을</p>
          <p className="text-black font-bold">위해 준비했습니다.</p>
        </div>

        {/* 로그인 애니메이션 */}
        <div className="w-[200px] h-[200px] mt-8 mb-4">
          <DotLottieReact
            src="https://lottie.host/d20599f6-9590-47f2-af0c-c1f0d2e1c59c/giTwOCGajP.lottie"
            loop
            autoplay
            layout={{ fit: 'contain' }}
          />
        </div>

        <div className="flex flex-col gap-3">
          <img src={kakaoLoginButton} onClick={kakaoLogin} className="cursor-pointer" />
          <img
            src={googleLoginButton}
            className="border border-black rounded-lg cursor-pointer"
            onClick={googleLogin}
          />
        </div>
        <button className="mt-4" onClick={directLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
