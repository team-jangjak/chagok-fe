import { useSignupForm } from '@/features/auth/hooks/useSignUpForm';
import { useNavigate } from 'react-router';

function SignupPage() {
  const navigate = useNavigate();
  const {
    selected,
    year,
    month,
    day,
    days,
    email,
    years,
    months,
    isComplete,
    setSelected,
    setYear,
    setMonth,
    setDay,
    setEmail,
    handleBirthDate,
  } = useSignupForm();

  const onSubmit = () => {
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

      <p className="text-black font-bold text-[15px] mt-7">성별</p>

      <div className="flex items-center justify-center gap-3 mt-3">
        <button
          type="button"
          onClick={() => setSelected('남자')}
          className={`
          w-30 px-6 py-2 rounded-lg font-medium transition-colors
          ${selected === '남자' ? '!bg-[#FC9E4F] text-white' : '!bg-[#E2E2E2] text-white'}
        `}
        >
          남
        </button>

        <button
          type="button"
          onClick={() => setSelected('여자')}
          className={`
          w-30 px-6 py-2 rounded-lg font-medium transition-colors
          ${selected === '여자' ? '!bg-[#FC9E4F] text-white' : '!bg-[#E2E2E2] text-white'}
        `}
        >
          여
        </button>
      </div>

      <div className="mt-10">
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
        <p className="text-[#020122] mt-10 font-bold text-[15px]">이메일 입력</p>
        <input
          type="text"
          placeholder="이메일 입력 (ex. gichul@kakao.com)"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="border border-[#C2C2C2] rounded-2xl mt-3 w-[100%] h-10 text-[#020122] px-3"
        />
      </div>

      <div>
        <p className="font-medium text-[12px] text-[#707070] text-center mt-7">
          서비스 제공에 필수적인 설문이므로 건너뛰기는 불가능합니다.
        </p>
        <div className="text-center mt-3">
          <button
            disabled={!isComplete}
            onClick={onSubmit}
            className={` w-85 h-12 transition-colors ${
              isComplete
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
