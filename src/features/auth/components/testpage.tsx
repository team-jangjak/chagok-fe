import { useState } from 'react';
import type { TestPageProps } from '@/shared/types';
import SelectButton from './SelectButton';
import PillButton from '@/shared/ui/PillButton';

function TestPage({ question, content, choices, onAnswer }: TestPageProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedOption !== null) {
      onAnswer(selectedOption);
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
            <SelectButton
              key={opt}
              isSelected={selectedOption === opt}
              onClick={() => setSelectedOption(opt)}
              className="h-20 text-lg cursor-pointer"
            >
              {label}
            </SelectButton>
          );
        })}

        <PillButton
          isSelected={selectedOption !== null}
          handleOptionClick={handleNext}
          className={`h-12 mt-4 w-full font-bold cursor-pointer ${selectedOption === null ? 'pointer-events-none' : ''}`}
        >
          다음
        </PillButton>
      </div>
    </div>
  );
}

export default TestPage;
