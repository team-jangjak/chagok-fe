import { useState } from 'react';
import { useUserStore } from '@/store/userStore';

export function useTestForm() {
  const setTendency = useUserStore((set) => set.setTendency);

  const [step, setStep] = useState(1);
  const [sum, setSum] = useState({ p1: 0, p2: 0, p3: 0, slider: 0 });

  const scoreTables = {
    p1: [0, 10, 18, 25],
    p2: [0, 8, 17, 25],
    p3: [0, 8, 17, 25],
  } as const;

  const handleAnswer = (key: keyof typeof sum, value: number) => {
    let score = 0;
    if (key === 'slider') {
      score = Math.round(value * 0.25);
    } else {
      score = scoreTables[key][value - 1];
    }
    setSum((prev) => ({ ...prev, [key]: score }));
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
