// 보통 인증이 필요한 API 호출할 때, 토큰을 헤더에 추가해야 한다.
// 이런 일들을 자동으로 해주는 ky 인스턴스를 사용한다.
import ky from "ky";

const kyInstance = ky.create({
  prefixUrl: import.meta.env.VITE_API_URL, // API 기본 URL 설정
  headers: {}, // 헤더 설정
  timeout: 15000, // 15초 타임아웃
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set(
          "Authorization",
          `Bearer ${localStorage.getItem("token")}`,
        );
      },
    ],
  },
});

export default kyInstance;
