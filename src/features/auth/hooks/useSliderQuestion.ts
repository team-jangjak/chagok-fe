import { useState } from 'react';

export function useSliderQuestion(onCommit: (value: number) => void) {
  const [value, setValue] = useState(50);

  const handleCommit = (v: number) => {
    setValue(v);
    onCommit(v);
  };

  return {
    value,
    handleCommit,
  };
}
