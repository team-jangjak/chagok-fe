import { useNavigate } from 'react-router';
import testimage from '../assets/test-image.svg';
import PillButton from '@/shared/ui/PillButton';

function TestGudie() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col mt-7 ml-10 mr-10">
      <p className="font-extrabold text-black text-[32px]">성향검사</p>
      <p className="font-medium text-[#707070] text-[20px]">회원님의 성향을 검사해요.</p>

      <img src={testimage} className="mt-25 h-[240px]" />
      <div className="mt-4 text-center text-[#707070] text-[12px]">
        <p>회원님께 더 좋은 서비스 제공을 위해 진행되는 설문입니다.</p>
        <p>4문항으로 구성되어 있는 짧은 설문이에요.</p>
        <p>그리 오래 걸리지 않으니, 꼭 부탁드려요!</p>
      </div>
      <div className="mt-27 flex flex-col justify-center text-center">
        <p className="text-[11px] text-[#707070] mb-1">
          서비스 제공에 필수적인 설문이므로 건너뛰기는 불가능합니다.
        </p>
        <PillButton
          isSelected
          handleOptionClick={() => navigate('/auth/test')}
          className="!bg-[#FF521B] text-white font-extrabold h-12 cursor-pointer"
        >
          진행하기
        </PillButton>
      </div>
    </div>
  );
}
export default TestGudie;
