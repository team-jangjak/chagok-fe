import { Link } from 'react-router';

// 랜딩 페이지 (비회원도 접근 가능)
function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="text-4xl font-bold text-gray-900">차곡차곡 쌓아보자 얘들아!!</span>
      <h2 className="text-lg font-bold text-blue-500">갓생 살아보자~</h2>
      <Link to="/login" className="text-blue-500">
        로그인
      </Link>
    </div>
  );
}

export default LandingPage;
