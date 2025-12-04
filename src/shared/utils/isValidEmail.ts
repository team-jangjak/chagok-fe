// 유효한 이메일인지 확인하는 유틸 함수
export function isValidEmail(email: string) {
  /* 
	[이메일 형식 검사 정규식]
		1. 이메일 주소는 @ 기준으로 두 부분으로 나뉨
		2. 첫 번째 부분은 문자, 숫자, 특수문자만 허용 (ex. gichul@kakao.com)
		3. 두 번째 부분은 문자, 숫자만 허용 (ex. kakao.com)
		4. 마지막 부분은 문자, 숫자만 허용 (ex. com)
	*/
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
