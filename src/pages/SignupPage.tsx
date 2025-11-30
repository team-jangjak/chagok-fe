import { useEmailCheck } from '@/features/auth/hooks/useEmailCheck';
import { useSignupForm } from '@/features/auth/hooks/useSignUpForm';
import { useNavigate } from 'react-router';

function SignupPage() {
  const navigate = useNavigate();
  const {
    year,
    month,
    day,
    days,
    email,
    years,
    months,
    isComplete,
    name,
    gender,
    setYear,
    setName,
    setGender,
    setMonth,
    setDay,
    setEmail,
    handleBirthDate,
  } = useSignupForm();

  const { data: emailData, isError } = useEmailCheck(email);
  console.log('emailData =>', emailData);

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
        src="#"
        className="rounded-[100%] border-3 border-[#FC9E4F] w-30 h-30 ml-auto mr-auto mt-7"
      />

      <p className="text-black font-bold text-[15px] mt-3">이름</p>
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        className="border border-[#C2C2C2] rounded-2xl mt-3 w-[100%] h-10 text-[#020122] px-3"
      />

      <p className="text-black font-bold text-[15px] mt-3">성별</p>

      <div className="flex items-center justify-center gap-3 mt-3">
        <button
          type="button"
          onClick={() => setGender('남자')}
          className={`
          w-30 px-6 py-2 rounded-lg font-medium transition-colors
          ${gender === '남자' ? '!bg-[#FC9E4F] text-white' : '!bg-[#E2E2E2] text-white'}
        `}
        >
          남
        </button>

        <button
          type="button"
          onClick={() => setGender('여자')}
          className={`
          w-30 px-6 py-2 rounded-lg font-medium transition-colors
          ${gender === '여자' ? '!bg-[#FC9E4F] text-white' : '!bg-[#E2E2E2] text-white'}
        `}
        >
          여
        </button>
      </div>

      <div className="mt-3">
        <p className="text-[#020122] font-bold text-[15px]">생년월일</p>
        <div className="flex gap-4 text-[#020122] justify-center mt-3">
          <select
            value={year}
            onChange={(event) => setYear(event.target.value)}
            className="border border-[#B0B0B0] w-22 h-10"
          >
            <option value="">연도</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>

          <select
            value={month}
            onChange={(event) => setMonth(event.target.value)}
            className="border border-[#B0B0B0] w-22 h-10"
          >
            <option value="">월</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>

          <select
            value={day}
            onChange={(event) => setDay(event.target.value)}
            className="border border-[#B0B0B0] w-22 h-10"
          >
            <option value="">일</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <p className="text-[#020122] mt-3 font-bold text-[15px]">이메일 입력</p>
        <input
          type="text"
          placeholder="이메일 입력 (ex. gichul@kakao.com)"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border border-[#C2C2C2] rounded-2xl mt-3 w-[100%] h-10 text-[#020122] px-3"
        />
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
