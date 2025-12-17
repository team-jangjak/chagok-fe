import { useUserStore } from '@/store/userStore';
import { useMutation } from '@tanstack/react-query';
import ky, { HTTPError } from 'ky';
import { useNavigate } from 'react-router';

export function useSignUpMutation() {
  const navigate = useNavigate();
  const { oauthId, name, gender, email, birthDate, profileImage, tendency } = useUserStore();
  const API_BASE = import.meta.env.VITE_API_BASE;

  const mutation = useMutation({
    mutationFn: async () => {
      const payload = {
        oauhId: oauthId,
        name,
        gender: gender === '남자' ? '남자' : '여성',
        email,
        birthDate,
        profileImage,
        tendency,
      };
      return ky
        .post(`${API_BASE}/user/sign-up`, {
          json: payload,
          credentials: 'include',
        })
        .json();
    },
    // 로그인 성공 시, home으로 이동
    onSuccess: (data) => {
      console.log('가입 성공!', data);
      navigate('/main/home');
    },
    onError: async (error: unknown) => {
      if (error instanceof HTTPError) {
        const status = error.response.status;

        try {
          const data = await error.response.json();

          if (status === 400) {
            console.error('필드 오류', data);
          } else if (status === 409) {
            console.error('이미 가입된 사용자입니다.');
          } else {
            console.error('알 수 없는 오류');
          }
        } catch {
          console.error('응답 파싱 실패');
        }
      } else {
        console.error('네트워트 오류');
      }
    },
  });
  return mutation;
}
