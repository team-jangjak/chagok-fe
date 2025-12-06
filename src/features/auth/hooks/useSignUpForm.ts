import { useEffect, useState } from 'react';
import { useUserStore } from '@/store/userStore';

export function useSignupForm() {
  const user = useUserStore();

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  const [name, setName] = useState(user.name);
  const [gender, setGender] = useState<'' | '남자' | '여자'>('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [days, setDays] = useState<number[]>([]);
  const [email, setEmail] = useState(user.email);

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

  const isComplete =
    name !== '' && gender !== '' && year !== '' && month !== '' && day !== '' && email !== '';

  const handleBirthDate = () => {
    const birthDate = `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

    user.setBasicInfo({
      name,
      gender: gender as '남자' | '여자',
      email,
      birthDate,
      profileImage: user.profileImage,
    });

    return birthDate;
  };

  return {
    currentYear,
    years,
    months,
    name,
    gender,

    year,
    month,
    day,
    days,
    email,
    isComplete,

    setName,
    setGender,
    setYear,
    setMonth,
    setDay,
    setEmail,

    handleBirthDate,
  };
}
