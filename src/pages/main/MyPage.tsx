/*
	[마이페이지]
	로그인 후 나오는, BottomNavigation을 통해 접근하는 페이지들 중, 
	프로필 관리, 결제/환불 내역, 소셜 기능, 알림/개인정보 설정 등 회원 정보 관리 가능한 페이지
*/

import { Bell, Camera, Settings } from 'lucide-react';
import testImage from '@/assets/mockdata/handstand.png';
import { myPageInfo } from '@/features/mockdata';

function MyPage() {
  const { name, point, streak } = myPageInfo;

  return (
    <div className="pb-24">
      <div className="mt-14.25 flex justify-between items-center">
        <h1 className="text-3xl font-medium">마이페이지</h1>
        <div className="flex gap-6.5 cursor-pointer">
          <Bell className="fill-black w-8 h-8" />
          <Settings className="w-8 h-8" />
        </div>
      </div>

      {/* 사진 & 포인트 & 이름 */}
      <div className="mt-8.25 flex gap-16.25">
        <div className="relative">
          <img
            src={testImage}
            alt="test 이미지"
            className="rounded-full border-black border-5 w-32 h-32"
          />
          <div className="border-black border-3 bg-white w-6 h-6 rounded-full absolute top-0 right-4 z-10 cursor-pointer">
            <Camera className="text-black w-3 h-3 mx-auto mt-0.5" />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-extrabold text-xl">{name}</p>
          <p className="mt-6.5 font-medium text-m">포인트: {point}p</p>
        </div>
      </div>

      {/* 스트릭 부분 */}
      <div className="mt-12">
        <div className="bg-[#EDD382] py-4 rounded-2xl text-white px-7 mb-9">
          <h1 className="text-lg font-medium">{name}님의 현재 스트릭</h1>
          <p className="font-medium text-2xl text-center mt-6 mb-4">🔥 {streak}일</p>
          <div className="text-center text-[#4A4A4A] text-[10px]">
            <p>스트릭을 계속 채워서, 일정 기간마다</p>
            <p>포인트를 얻어 보세요!</p>
          </div>
        </div>

        {/* 기타 항목 */}
        <div className="flex flex-col gap-7 text-center cursor-pointer">
          <div className="bg-[#EDD382] py-3 rounded-xl text-white px-7">내 루틴 Report</div>
          <div className="bg-[#EDD382] py-3 rounded-xl text-white px-7">진행했던 습관들 조회</div>
          <div className="bg-[#EDD382] py-3 rounded-xl text-white px-7">문의하기</div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
