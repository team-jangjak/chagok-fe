import { useState } from 'react';
import { isValidEmail } from '@shared/utils/isValidEmail';
import { useSignupStore } from '../contexts/useSignupStore';

export function useSignupForm() {
  const setBasicInfo = useSignupStore((s) => s.setBasicInfo);
  const store = useSignupStore((s) => s);

  // store 값으로 초기화 (소셜 로그인 시 반영됨)
  const [name, setName] = useState(store.name || '');
  const [gender, setGender] = useState<'' | '남자' | '여자'>(store.gender || '');
  const [birthDate, setBirthDate] = useState(store.birthDate || '');
  const [email, setEmail] = useState(store.email || '');

  const isEmailVaild = isValidEmail(email);

  // 이메일 유효성 검사
  function isValidBirthDate(dateString: string) {
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) return false;

    const date = new Date(dateString);
    if (isNaN(date.getTime())) return false;

    const [y, m, d] = dateString.split('-').map(Number);
    return date.getFullYear() === y && date.getMonth() + 1 === m && date.getDate() === d;
  }

  // 필수 항목들을 입력하지 않으면 버튼 비활성화를 위한 로직
  const isComplete =
    name !== '' &&
    gender !== '' &&
    birthDate !== '' &&
    email !== '' &&
    isValidBirthDate(birthDate) &&
    isEmailVaild;

  // zustand에 저장 (일단 프로필 사진은 소셜에서 가져옴)
  const handleSubmit = () => {
    setBasicInfo({
      name,
      gender,
      email,
      birthDate,
      profileImage: store.profileImage, // 기존 소셜 사진 유지
    });
  };

  return {
    name,
    gender,
    birthDate,
    email,
    isComplete,
    isEmailVaild,
    setName,
    setGender,
    setBirthDate,
    setEmail,
    handleSubmit,
  };
}
