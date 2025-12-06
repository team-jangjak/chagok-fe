import { useState } from 'react';

export function useSliderQuestion(onChange: (value: number) => void) {
  const [value, setValue] = useState(0);

  const handleSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  return {
    value,
    handleSlider,
  };
}
