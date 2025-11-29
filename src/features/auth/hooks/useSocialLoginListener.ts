import { useUserStore } from '@/store/userStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export function useSocialLoginListener() {
  const navigate = useNavigate();
  const setOauthId = useUserStore((set) => set.setOauthId);

  useEffect(() => {
    function onMessage(event: MessageEvent) {
      const data = event.data;

      if (!data || !data.type) return;

      if (data.type === 'OAUTH_SUCCESS') {
        navigate('/main/home', { replace: true });
      }

      if (data.type === 'NEW_USER_SIGNUP') {
        if (data.oauthId) setOauthId(Number(data.oauthId));
        navigate(`/auth/signuploading`);
      }
    }
    window.addEventListener('message', onMessage);
    return () => window.removeEventListener('message', onMessage);
  }, [navigate, setOauthId]);
}
