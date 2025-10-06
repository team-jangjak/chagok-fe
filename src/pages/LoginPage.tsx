// 로그인 페이지 (비회원도 접근 가능)
import { useNavigate } from 'react-router';
import { DotLottieReact } from '@lottiefiles/dotlottie-react'; // lottie 애니메이션 사용을 위한 라이브러리

function LoginPage() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate('/main/home');
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen px-20">
      <span className="text-4xl font-bold text-gray-900">Login</span>

      <div className="w-full h-auto mt-8 mb-4">
        <DotLottieReact
          src="https://lottie.host/d20599f6-9590-47f2-af0c-c1f0d2e1c59c/giTwOCGajP.lottie"
          loop
          autoplay
        />
      </div>

      <input
        id="id"
        type="text"
        placeholder="아이디를 입력해 주세요"
        className="w-full p-2 border border-gray-300 bg-white text-gray-900 rounded-md mt-8 mb-4"
      />
      <input
        id="password"
        type="password"
        placeholder="비밀번호를 입력해 주세요"
        className="w-full p-2 border border-gray-300 bg-white text-gray-900 rounded-md mb-4"
      />
      <button className="mt-4" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default LoginPage;
