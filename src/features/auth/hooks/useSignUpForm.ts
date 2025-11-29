import { useEffect, useState } from 'react';
import { useUserStore } from '@/store/userStore';

export function useSignupForm() {
  const setBasicInfo = useUserStore((set) => set.setBasicInfo);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const [selected, setSelected] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [days, setDays] = useState<number[]>([]);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (year && month) {
      const max = new Date(Number(year), Number(month), 0).getDate();
      setDays(Array.from({ length: max }, (_, i) => i + 1));
    }
  }, [year, month]);

  useEffect(() => {
    if (!year || !month) return;

    const max = new Date(Number(year), Number(month), 0).getDate();
    if (day && Number(day) > max) {
      setDay('');
    }
  }, [day, year, month]);

  const isComplete = selected && year && month && day && email;

  const handleBirthDate = () => {
    const birthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

    setBasicInfo({
      name: selected,
      email,
      birthDate,
      profileImage: 'https://cdn.chagok.shop/avatars/default.png',
    });

    return birthDate;
  };

  return {
    currentYear,
    years,
    months,
    selected,
    year,
    month,
    day,
    days,
    email,
    isComplete,

    setSelected,
    setYear,
    setMonth,
    setDay,
    setEmail,

    handleBirthDate,
  };
}
