import { useState } from 'react';
import type { TestPageProps } from '@/shared/types';

function TestPage({ question, content, choices, onAnswer }: TestPageProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const scores = {
    option1: 1,
    option2: 2,
    option3: 3,
    option4: 4,
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      const score = scores[`option${selectedOption}` as keyof typeof scores];
      onAnswer(score);
      setSelectedOption(null);
    }
  };

  return (
    <div className="mt-3 ml-[28px] mr-[28px]">
      <p className="text-black font-extrabold text-[25px]">{question}</p>
      <p className="font-medium text-[#707070] mt-3">{content}</p>

      <div className="flex flex-col mt-[35px] gap-7">
        {choices.map((label, index) => {
          const opt = index + 1;

          return (
            <button
              key={opt}
              onClick={() => setSelectedOption(opt)}
              className={`
                h-20 rounded-xl border transition-all
                ${
                  selectedOption === opt
                    ? '!bg-[#FC9E4F] text-white scale-[1.02]'
                    : '!bg-[#FFFFFF] text-[#C2C2C2] !border-[#C2C2C2]'
                }
              `}
            >
              {label}
            </button>
          );
        })}

        <button
          disabled={selectedOption === null}
          onClick={handleNext}
          className={`
            h-12 rounded-lg mt-4 w-full transition-colors font-bold
            ${
              selectedOption !== null
                ? '!bg-[#FF521B] text-white cursor-pointer'
                : '!bg-[#E2E2E2] text-black cursor-not-allowed'
            }
          `}
        >
          다음
        </button>
      </div>
    </div>
  );
}

export default TestPage;
