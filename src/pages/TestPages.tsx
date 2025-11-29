import SliderQuestion from '@/features/auth/components/sliderQuestion';
import StepBar from '@/features/auth/components/stepbar';
import TestPage from '@/features/auth/components/testpage';
import { useTestForm } from '@/features/auth/hooks/useTestForm';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

function TestPages() {
  const navigate = useNavigate();
  const { step, total, handleAnswer, handlenextpage, handleBack } = useTestForm();
  const totalSteps = 4;

  const handleBackClick = () => {
    if (step === 1) {
      navigate('/auth/testguide');
    } else {
      handleBack();
    }
  };

  return (
    <div>
      <div className="flex mt-5 ml-[28px] mr-[28px]">
        <ChevronLeft className="text-black h-12 cursor-pointer" onClick={handleBackClick} />
        <div className="flex-1">
          <StepBar step={step} totalSteps={totalSteps} />
        </div>
      </div>

      {step === 1 && (
        <TestPage
          question="질문 1"
          content="오늘 아침에 먹은 메뉴는?"
          choices={['밥', '시리얼', '잡곡밥', '샌드위치']}
          onAnswer={(v) => handleAnswer('p1', v)}
        />
      )}

      {step === 2 && (
        <TestPage
          question="질문 2"
          content="당신이 가장 좋아하는 운동은?"
          choices={['크로스핏', '웨이트', '크리브마가', '클라이밍']}
          onAnswer={(v) => handleAnswer('p2', v)}
        />
      )}

      {step === 3 && (
        <TestPage
          question="질문 3"
          content="당신이 가고싶은 회사는?"
          choices={['네이버', '카카오', '라인', '쿠팡']}
          onAnswer={(v) => handleAnswer('p3', v)}
        />
      )}

      {step === 4 && (
        <div>
          <SliderQuestion question="질문4" onChange={(v) => handleAnswer('slider', v)} />
          <p className="text-black">(임시 표시)합계 {total}</p>
          <div className="text-center mt-15">
            <button className="w-85 h-12 !bg-[#FF521B]" onClick={handlenextpage}>
              다음
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestPages;
