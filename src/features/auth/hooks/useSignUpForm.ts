import { useState } from 'react';
import { useUserStore } from '@/store/userStore';

export function useSignupForm() {
  const user = useUserStore();

  const [name, setName] = useState(user.name);
  const [gender, setGender] = useState<'' | '남자' | '여자'>('');
  const [birthDate, setBirthDate] = useState(user.birthDate ?? '');
  const [email, setEmail] = useState(user.email);

  function isValidBirthDate(dateString: string) {
    // 형식 체크
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return false;

    // 역검증: "2024-02-30" 같은 경우 걸러짐
    const [y, m, d] = dateString.split('-').map(Number);

    const valid = date.getFullYear() === y && date.getMonth() + 1 === m && date.getDate() === d;

    return valid;
  }

  const isComplete = name !== '' && gender !== '' && birthDate !== '' && email !== '' && isValidBirthDate(birthDate);

  const handleBirthDate = () => {
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
    name,
    gender,
    birthDate,
    email,
    isComplete,

    setName,
    setGender,
    setBirthDate,
    setEmail,

    handleBirthDate,
  };
}
