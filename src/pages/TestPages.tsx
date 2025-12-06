import SliderQuestion from '@/features/auth/components/sliderQuestion';
import StepBar from '@/features/auth/components/stepbar';
import TestPage from '@/features/auth/components/testpage';
import { useSignUpMutation } from '@/features/auth/hooks/useSignUpMutation';
import { useTestForm } from '@/features/auth/hooks/useTestForm';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

function TestPages() {
  const navigate = useNavigate();
  const { step, total, handleAnswer, handlenextpage, handleBack } = useTestForm();
  const signUpMutation = useSignUpMutation();

  const totalSteps = 4;

  const handleBackClick = () => {
    if (step === 1) {
      navigate('/auth/testguide');
    } else {
      handleBack();
    }
  };

  const handleFinish = () => {
    handlenextpage();
    signUpMutation.mutate();
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
          content="새로운 한 주가 시작될 때, 당신의 머릿속은 어떤가요?"
          choices={[
            '계획? 닥치면 하는 게 최고지 ',
            '중요한 약속 정도만 기억하거나 메모해 둔다',
            '대략적인 할 일 목록(To-do List)을 작성한다',
            '시간 단위 계획표나 주간 목표를 꼼꼼히 세운다 (난 매우 계획파)',
          ]}
          onAnswer={(v) => handleAnswer('p1', v)}
        />
      )}

      {step === 2 && (
        <TestPage
          question="질문 2"
          content="아침 알람이 울릴 때, 회원님이 하실 행동에 가장 가까운 것은 무엇인가요?"
          choices={[
            '끄고 다시 잔다.',
            '‘5분만 더’ 버튼을 1~2번 누르고 일어난다.',
            '조금 밍기적거려도 정해진 시간에는 일어난다. ',
            '알람이 울리면 바로 이불을 걷고 나온다.',
          ]}
          onAnswer={(v) => handleAnswer('p2', v)}
        />
      )}

      {step === 3 && (
        <TestPage
          question="질문 3"
          content="다이어트나 공부 등 목표를 세웠다가 3일 만에 실패했다면?"
          choices={[
            '“이번 생은 틀렸다…” 깔끔하게 포기하고 잊는다',
            '며칠 쉬다가 죄책감이 들면 다시 생각한다',
            '실패한 원인을 찾고, 다음 날부터 다시 시도한다',
            '실수도 과정이다! 실패한 당일 저녁부터 바로 루틴을 복구한다',
          ]}
          onAnswer={(v) => handleAnswer('p3', v)}
        />
      )}

      {step === 4 && (
        <div>
          <SliderQuestion question="질문4" onChange={(v) => handleAnswer('slider', v)} />
          <p className="text-black">(임시 표시)합계 {total}</p>
          <div className="text-center mt-15">
            <button className="w-85 h-12 !bg-[#FF521B]" onClick={handleFinish}>
              다음
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestPages;
