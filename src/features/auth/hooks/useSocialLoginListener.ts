import { useUserStore } from '@/store/userStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function useSocialLoginListener() {
  const navigate = useNavigate();
  const { setBasicInfo, setOauthId } = useUserStore();

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data;

      if (!data || !data.type) return;

      if (data.type === 'OAUTH_SUCCESS') {
        navigate('/main/home', { replace: true });
      }

      if (data.type === 'NEW_USER_SIGNUP') {
        if (data.oauthId) setOauthId(Number(data.oauthId));
        setBasicInfo({
          name: data.name ?? '',
          gender: '',
          email: data.email ?? '',
          birthDate: '',
          profileImage: data.profileImage ?? 'https://cdn.chagok.shop/avatars/default.png',
        });
        navigate(`/auth/signuploading`);
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [navigate, setOauthId, setBasicInfo]);
}
