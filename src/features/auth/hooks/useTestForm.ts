import { useState, useEffect } from 'react';
import { useSignupStore } from '../contexts/useSignupStore';

export function useTestForm() {
  const tendency = useSignupStore((s) => s.tendency);
  const setTendency = useSignupStore((s) => s.setTendency);

  const [step, setStep] = useState(1);
  const [sum, setSum] = useState({ p1: 0, p2: 0, p3: 0, slider: 0 });

  const scoreTables = {
    p1: [0, 10, 18, 25],
    p2: [0, 8, 17, 25],
    p3: [0, 8, 17, 25],
  } as const;

  const handleAnswer = (key: keyof typeof sum, value: number) => {
    const score = key === 'slider' ? Math.round(value * 0.25) : scoreTables[key][value - 1];

    setSum((prev) => ({ ...prev, [key]: score }));
    setStep((prev) => (prev < 4 ? prev + 1 : prev));
  };

  const total = Object.values(sum).reduce((a, b) => a + b, 0);

  // 이미 계산된 tendency가 있다면 다시 덮어쓰지 않음
  const handlenextpage = () => {
    if (tendency === 0) {
      setTendency(total);
    }
  };

  const handleBack = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : prev));
  };

  // 새로고침 시 이미 완료된 테스트라면 마지막 step으로
  useEffect(() => {
    if (tendency > 0) {
      setStep(4);
    }
  }, [tendency]);

  return {
    step,
    sum,
    total,
    handleAnswer,
    handlenextpage,
    handleBack,
  };
}
