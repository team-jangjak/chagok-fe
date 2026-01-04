import { thirdPartyInfo } from '@/features/mockdata';
import { ChevronLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router';
import testImg from '@/assets/mockdata/handstand.png';

function ThirdDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = thirdPartyInfo.find((item) => item.id === Number(id));

  if (!data) return <div>존재하지 않는 페이지 입니다.</div>;

  return (
    <div className="mt-10">
      <div className="mb-5">
        <ChevronLeft onClick={() => navigate(-1)} className="w-8 h-8 cursor-pointer" />
      </div>
      <div className="relative">
        <img src={testImg} className="rounded-2xl" alt="테스트 이미지" />
        <div className="flex justify-between mt-4 items-center">
          <p className="text-xl font-bold">{data?.name}</p>
          <p>{data?.durationInfo}</p>
        </div>
        <div className="absolute bottom-15 left-4 rounded-2xl bg-[#D9D9D9] px-4">
          <p className="text-l font-medium">{data?.frequency}</p>
        </div>
      </div>
    </div>
  );
}

export default ThirdDetailPage;
