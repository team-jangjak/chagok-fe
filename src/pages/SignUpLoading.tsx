import PrimaryButton from '@/shared/ui/PrimaryButton';
import { useNavigate } from 'react-router';

function SignUpLoading() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-65 mb-65">
        <p className="text-black font-semibold text-[28px]">회원님께 더 좋은</p>
        <p className="text-black font-semibold text-[28px]">서비스를 제공하기 위해서,</p>
        <p className="text-black font-semibold text-[28px]">추가적인 정보가 더 필요해요.</p>
      </div>

      {/* 프로필 입력하는 페이지로 이동하는 버튼 */}
      <div>
        <PrimaryButton
          isEnabled={true}
          className="w-130 rounded-xl bg-[#FF521B] mr-auto ml-auto"
          onClick={() => navigate('/auth/signup')}
        >
          다음
        </PrimaryButton>
      </div>
    </div>
  );
}

export default SignUpLoading;
