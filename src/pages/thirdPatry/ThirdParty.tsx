import { thirdPartyInfo } from '@/features/mockdata';
import { User } from 'lucide-react';
import { useState } from 'react';
import testimage from '@/assets/mockdata/handstand.png';
import { useNavigate } from 'react-router';
import PillButton from '@/shared/ui/PillButton';

const categorylist = ['전체', '운동', '식습관', '생활', '정서', '취미'];

function ThirdPage() {
  const [selected, setSelected] = useState('전체');
  const navigate = useNavigate();

  {
    /* 카테고리를 클릭했을 때, 해당 카테고리에 해당하는 습관만 보이게하는 로직 */
  }
  const filteredInfo =
    selected === '전체'
      ? thirdPartyInfo
      : thirdPartyInfo.filter((info) => info.category === selected);

  return (
    <div>
      {/* 제목 + 마이페이지 아이콘 구역 */}
      <div className="flex items-center justify-between mt-10">
        <p className="font-medium text-2xl">🔥 현재 사용자들의 챌린지 🔥</p>
        <User
          className="w-8 h-8 fill-[#FF521B] text-[#FF521B]"
          onClick={() => navigate('/main/my')}
        />
      </div>

      {/* nav 구역 */}
      <div
        className="flex gap-15 overflow-x-auto whitespace-nowrap px-4 py-2 mt-4 [&::-webkit-scrollbar]:hidden
    [-ms-overflow-style:none]
    [scrollbar-width:none]"
      >
        {categorylist.map((category) => (
          <PillButton
            key={category}
            isSelected={selected === category}
            handleOptionClick={() => setSelected(category)}
            className={`w-15 border-none cursor-pointer px-4 py-2 whitespace-nowrap transition ${selected === category ? 'text-white' : 'text-black'}`}
          >
            {category}
          </PillButton>
        ))}
      </div>
      {/* 습관들이 보이는 구역 */}
      <div className="grid grid-cols-2 gap-2">
        {filteredInfo.map((info) => (
          <div
            className="relative mt-8 cursor-pointer"
            key={info.id}
            onClick={() => navigate(`${info.id}`)}
          >
            <img src={testimage} className="object-cover rounded-2xl" alt="테스트 이미지" />
            <div className="flex justify-between items-center mt-2 font-medium">
              <p>{info.durationInfo}</p>
              <p>{info.name}</p>
            </div>
            <div className="absolute bottom-2.5 left-2 bg-[#D9D9D9] px-2 text-[13px] rounded-2xl">
              {info.frequency}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThirdPage;
