import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSignupStore } from '../contexts/useSignupStore';

export function useSocialLoginListener() {
  const navigate = useNavigate();
  const setBasicInfo = useSignupStore((s) => s.setBasicInfo);
  const setOauthId = useSignupStore((s) => s.setOauthId);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data;
      if (!data || !data.type) return;

      // 로그인 성공 시, home으로 이동
      if (data.type === 'OAUTH_SUCCESS') {
        navigate('/main/home', { replace: true });
        return;
      }

      // 회원가입시 signuploading 페이지로 이동 (이 떄, oauthId는 store에 저장)
      if (data.type === 'NEW_USER_SIGNUP') {
        if (data.oauthId) setOauthId(Number(data.oauthId));
        setBasicInfo({
          name: data.name ?? '',
          email: data.email ?? '',
          profileImage: data.profileImage ?? 'https://cdn.chagok.shop/avatars/default.png',
          gender: '',
          birthDate: '',
        });
        navigate(`/auth/signuploading`, { replace: true });
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [navigate, setOauthId, setBasicInfo]);
}
