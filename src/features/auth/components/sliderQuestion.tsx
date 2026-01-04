import type { SliderQuestionProps } from '@/shared/types';
import { useSliderQuestion } from '../hooks/useSliderQuestion';
import SliderSelection from './SliderSelection';
import RollingNumber from '@/shared/ui/RollingNumber';

function SliderQuestion({ question, onChange }: SliderQuestionProps) {
  const { value, handleCommit } = useSliderQuestion(onChange);

  return (
    <div className="mt-3 ml-[28px] mr-[28px]">
      <p className="text-black font-extrabold text-[32px]">{question}</p>
      <div className="mt-4">
        <p className="text-[#707070] font-medium text-[20px]">솔직하게... 나는 내가 뱉은 말을</p>
        <p className="text-[#707070] font-medium text-[20px]">얼마나 지키는 사람인가요?</p>
      </div>

      <div className="mt-10">
        <SliderSelection className="bg-[#FF521B] mt-25 mb-15" onValueCommit={handleCommit} />
      </div>

      <div className="flex flex-col justify-center items-center mt-10 gap-4">
        <p className="font-semibold text-[#020122] text-xl">난 그래도...</p>
        <RollingNumber value={value} suffix="%" />
        <p className="font-semibold text-[#020122] text-xl">정도는 지키는 것 같다!</p>
      </div>
    </div>
  );
}

export default SliderQuestion;
