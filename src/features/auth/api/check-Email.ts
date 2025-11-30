import ky from 'ky';

const API_BASE = import.meta.env.VITE_API_BASE;

export const checkEmail = async (email: string) => {
  if (!email) return null;

  const response = await ky
    .get(`${API_BASE}/user/email-check`, {
      searchParams: { email },
    })
    .json<{
      status: number;
      message: string;
      data?: { available: boolean }; // ← 이게 핵심
    }>();

  return response;
};
