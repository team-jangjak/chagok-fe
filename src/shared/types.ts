export interface userinfo {
  oauhId: number;
  name?: string;
  email: string;
  birthDate: string;
  profileImage: string;
  tendency: number;
}

export interface UserState extends userinfo {
  setOauthId: (id: number) => void;
  setBasicInfo: (info: {
    name?: string;
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
