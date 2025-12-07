import { useEmailCheck } from '@/features/auth/hooks/useEmailCheck';
import { useSignupForm } from '@/features/auth/hooks/useSignUpForm';
import DataInput from '@/shared/ui/DataInput';
import DatePicker from '@/shared/ui/DatePicker';
import PillButton from '@/shared/ui/PillButton';
import { useUserStore } from '@/store/userStore';
import { useNavigate } from 'react-router';

function SignupPage() {
  const navigate = useNavigate();
  const {
    email,
    isComplete,
    birthDate,
    name,
    gender,
    setName,
    setGender,
    setEmail,
    setBirthDate,
    handleBirthDate,
  } = useSignupForm();

  const profileImage = useUserStore((state) => state.profileImage);

  const { data: emailData, isError } = useEmailCheck(email);

  const emailMessage = (() => {
    if (!email) return '';
    if (isError) return '잘못된 이메일 형식이거나 오류가 발생했습니다.';
    if (!emailData) return '';
    if (emailData.status == 200) return '사용가능한 이메일입니다.';
    return '이미 사용중인 이메일입니다.';
  })();

  const emailMessageColor = (() => {
    if (!email) return 'text-gray-500';
    if (isError) return 'text-red-500';
    if (!emailData) return 'text-gray-500';
    if (emailData.status == 200) return 'text-green-500';
    return 'text-red-500';
  })();

  const isEmailAvailable = emailData?.status === 200;

  const onSubmit = () => {
    if (!isComplete) return;
    handleBirthDate();
    navigate('/auth/testguide');
  };

  return (
    <div className="flex flex-col mt-7 ml-10 mr-10">
      <div>
        <p className="font-extrabold text-black text-[32px]">프로필 입력</p>
        <p className="font-medium text-[#707070] text-[20px]">회원님의 정보를 알려주세요.</p>
      </div>

      <img
        src={profileImage || 'https://cdn.chagok.shop/avatars/default.png'}
        className="rounded-[100%] border-3 border-[#FC9E4F] w-30 h-30 ml-auto mr-auto mt-7"
      />

      <p className="text-black font-bold text-[15px] mt-3">이름</p>
      <DataInput
        value={name}
        placeholder='이름을 입력해주세요'
        onChange={(event) => setName(event.target.value)}
        className="border border-[#C2C2C2] rounded-2xl text-[#020122] mt-3"
      />

      <p className="text-black font-bold text-[15px] mt-3">성별</p>

      <div className="flex items-center justify-center gap-3 mt-3">
        <PillButton
          isSelected={gender == '남자'}
          handleOptionClick={() => setGender('남자')}
          className={`
          w-30 px-6 py-2 rounded-lg font-medium transition-colors  
        `}
        >
          남
        </PillButton>

        <PillButton
          isSelected={gender == '여자'}
          handleOptionClick={() => setGender('여자')}
          className={`
          w-30 px-6 py-2 rounded-lg font-medium transition-colors
        `}
        >
          여
        </PillButton>
      </div>

      <div className="mt-3">
        <p className="text-[#020122] font-bold text-[15px]">생년월일</p>
        <div className='mt-3'>
          <DatePicker value={birthDate} 
          onChange={(e) => setBirthDate(e.target.value)}
          className="border border-[#C2C2C2] rounded-2xl text-[#020122]"
          />
        </div>
      </div>

      <div>
        <p className="text-[#020122] mt-3 font-bold text-[15px]">이메일 입력</p>
        <DataInput
        type='text' placeholder='이메일 입력 (ex. gichul@kakao.com)' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        {email && <p className={`text-[12px] mt-1 ${emailMessageColor}`}>{emailMessage}</p>}
      </div>

      <div>
        <p className="font-medium text-[12px] text-[#707070] text-center mt-7">
          서비스 제공에 필수적인 설문이므로 건너뛰기는 불가능합니다.
        </p>
        <div className="text-center mt-3">
          <button
            disabled={!isComplete || !isEmailAvailable}
            onClick={onSubmit}
            className={` w-85 h-12 transition-colors ${
              isComplete && isEmailAvailable
                ? '!bg-[#FF5218] text-white cursor-pointer'
                : '!bg-[#E2E2E2] text-white cursor-not-allowed'
            }`}
          >
            <p className="font-extrabold">완료</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
