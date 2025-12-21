// 회원가입시 들어가야 하는 type
export interface userinfo {
  oauthId: number;
  name: string;
  gender: '' | '남자' | '여자';
  email: string;
  birthDate: string;
  profileImage: string;
  tendency: number;
}

// zustand에게 사용하기 위한 type 정의
export interface UserState extends userinfo {
  setOauthId: (id: number) => void;
  setBasicInfo: (info: {
    name: string;
    gender: '' | '남자' | '여자';
    email: string;
    birthDate: string;
    profileImage: string;
  }) => void;
  setTendency: (score: number) => void;
  resetUser: () => void;
}

export interface TestPageProps {
  question: string;
  content: string;
  choices: string[];
  onAnswer: (score: number) => void;
}

export interface SliderQuestionProps {
  question: string;
  onChange: (value: number) => void;
}

export interface StepBarProps {
  step: number;
  totalSteps: number;
}
