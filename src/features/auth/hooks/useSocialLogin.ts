import ky from 'ky';
import { useNavigate } from 'react-router';

export function useSocialLogin() {
  const navigate = useNavigate();

  const API_BASE = import.meta.env.VITE_API_BASE;
  const KAKAO_CLIENT_ID = import.meta.env.VITE_KAKAO_CLIENT_ID;

  const kakaoLogin = () => {
    const kakaoUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${API_BASE}/user/kakao-login&response_type=code`;
    window.open(kakaoUrl, 'kakao-login', 'width=500,height=600,resizable=yes,scrollbars=yes');
  };

  const googleLogin = async () => {
    const popup = window.open(
      '',
      'google-login',
      'width=500,height=600,resizable=yes,scrollbars=yes'
    );

    try {
      const response = await ky.get(`${API_BASE}/user/google-login-view`).json<{ data: string }>();

      if (popup && response.data) {
        popup.location.href = response.data;
      }
    } catch (error) {
      console.error(error);

      popup?.close();
    }
  };

  function directLogin() {
    navigate('/main/home');
  }

  return {
    kakaoLogin,
    googleLogin,
    directLogin,
  };
}
