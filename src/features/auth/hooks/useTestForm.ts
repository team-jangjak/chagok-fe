import { useState } from 'react';
import { useUserStore } from '@/store/userStore';

export function useTestForm() {
  const setTendency = useUserStore((set) => set.setTendency);

  const [step, setStep] = useState(1);
  const [sum, setSum] = useState({ p1: 0, p2: 0, p3: 0, slider: 0 });

  const handleAnswer = (key: keyof typeof sum, value: number) => {
    setSum((prev) => ({ ...prev, [key]: value }));
    if (step < 4) setStep(step + 1);
  };

  const total = Object.values(sum).reduce((a, b) => a + b, 0);

  const handlenextpage = () => {
    setTendency(total);
  };

  const handleBack = () => {
    if (step > 1) setStep((prev) => prev - 1);
  };

  return {
    step,
    setStep,
    sum,
    total,
    handleAnswer,
    handlenextpage,
    handleBack,
  };
}
