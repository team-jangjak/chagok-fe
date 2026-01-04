import BottomSheet from '@/shared/ui/BottomSheet';
import { useState } from 'react';
import { Link } from 'react-router';
import MyPage from './main/MyPage';

// 랜딩 페이지 (비회원도 접근 가능)
function LandingPage() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="text-4xl font-bold text-gray-900">차곡차곡 쌓아보자 얘들아!!</span>
      <h2 className="text-lg font-bold text-blue-500">갓생 살아보자~</h2>
      <Link to="/auth/login" className="text-blue-500">
        로그인
      </Link>

      {/* bottomSheet 사용법 */}
      <button onClick={() => setOpen(true)} className="text-blue-500 mt-4">
        bottomsheet 예시버튼
      </button>
      <BottomSheet open={open} onClose={() => setOpen(false)} initialView={() => <MyPage />} />
    </div>
  );
}

export default LandingPage;
