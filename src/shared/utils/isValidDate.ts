// 유효한 날짜인지 확인하는 유틸 함수
export function isValidDate(date: Date | undefined) {
  // 넘겨진 date 값이 Date 객체가 아니라면 false 반환
  if (!date) {
    return false;
  }
  return !isNaN(date.getTime());
}
