import { Link } from "react-router";

// 랜딩 페이지 (비회원도 접근 가능)
function LandingPage() {
  return (
    <div>
      <h1>차곡차곡 쌓아보자 얘들아!!</h1>
      <h2>갓생 살아보자~</h2>
      <Link to="/login">로그인</Link>
    </div>
  );
}

export default LandingPage;
