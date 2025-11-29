import type { StepBarProps } from '@/shared/types';

export default function StepBar({ step, totalSteps }: StepBarProps) {
  return (
    <div className="flex gap-2 mt-5 ml-[20px] mr-[28px]">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`flex-1 h-2 rounded-full transition-colors ${
            index < step ? 'bg-[#FF521B]' : 'bg-[#E2E2E2]'
          }`}
        />
      ))}
    </div>
  );
}
