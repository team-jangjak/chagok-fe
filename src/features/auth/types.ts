// "인증" 도메인 관련한 타입들 정의
export interface FormState {
  // 추가 데이터 입력 폼 데이터 타입 정의
  profileImage: string | null; // --> 프로필 이미지는.. s3에 올리고, 그 url을 저장하는 것이 나을 듯
  gender: 'male' | 'female' | null;
  year: string; // --> 생년월일은.. yyyy-MM-dd 형식으로 저장하는 것이 나을 듯 (-> 나중에 조합해서 사용)
  month: string;
  day: string;
  email: string;
}
