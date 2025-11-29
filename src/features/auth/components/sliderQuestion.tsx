import type { SliderQuestionProps } from '@/shared/types';
import { useSliderQuestion } from '../hooks/useSliderQuestion';

function SliderQuestion({ question, onChange }: SliderQuestionProps) {
  const { value, handleSlider } = useSliderQuestion(onChange);

  return (
    <div className="mt-3 ml-[28px] mr-[28px]">
      <p className="text-black font-extrabold text-[32px]">{question}</p>
      <div className="mt-4">
        <p className="text-[#707070] font-medium text-[20px]">솔직하게... 나는 내가 뱉은 말을</p>
        <p className="text-[#707070] font-medium text-[20px]">얼마나 지키는 사람인가요?</p>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleSlider}
        className="w-[100%] !bg-[#FF521B] appearance-none rounded-full mt-35"
      />

      <div className="flex flex-col justify-center items-center mt-15 gap-4">
        <p className="font-semibold text-[#020122]">난 그래도...</p>
        <p className="text-[#020122] text-4xl font-extrabold">{value}%</p>
        <p className="font-semibold text-[#020122]">정도는 지키는 것 같다!</p>
      </div>
    </div>
  );
}

export default SliderQuestion;
