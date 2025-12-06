// "인증(소셜 로그인+추가정보 입력을 통한 '회원가입' 전체 과정)" 도메인 관련한 타입들 정의
export interface SignUpData {
  oauthId: number; // OAuth 계정 고유 ID
  name: string; // 사용자 이름
  email: string; // 사용자 이메일
  birthDate: string; // 사용자 생년월일 (yyyy-MM-dd 형식)
  profileImage: string; // 사용자 프로필 이미지 (S3에서 업로드 해서 받은 이미지 url)
  tendency: number; // 사용자 성향 점수 (0~100점)
  gender: 'male' | 'female'; // 사용자 성별
}

// OnboardingContext에서의 타입 정의
export type OnboardingContextType = {
  state: {
    currentStep: number;
    signUpData: SignUpData;
  };
  actions: {
    handleNext: () => void;
    handlePrev: () => void;
    handleSignUpDataChange: (data: Partial<SignUpData>) => void;
  };
};
