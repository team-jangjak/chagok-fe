/*
	날짜 입력값에 자동으로 하이픈 삽입
	ex) 20250601 -> 2025-06-01
*/

export function formatDateInput(date: string, prevValue: string): string {
  // 백스페이스로 하이픈을 지우려 할 때, 이전 숫자도 함께 삭제
  if (prevValue && prevValue.length - date.length === 1) {
    const lastChar = prevValue[prevValue.length - 1];
    if (lastChar === '-') {
      date = date.slice(0, -1); // 숫자 하나 더 삭제
    }
  }
  // 숫자만 추출
  const numbers = date.replace(/\D/g, '');

  // 최대 8자리
  const limited = numbers.slice(0, 8);

  // 하이픈 삽입
  if (limited.length <= 4) {
    return limited;
  } else if (limited.length <= 6) {
    // yyyy-MM 까지 입력 중인 경우
    return `${limited.slice(0, 4)}-${limited.slice(4)}`;
  } else {
    // yyyy-MM-dd 까지 입력 중인 경우
    return `${limited.slice(0, 4)}-${limited.slice(4, 6)}-${limited.slice(6)}`;
  }
}
