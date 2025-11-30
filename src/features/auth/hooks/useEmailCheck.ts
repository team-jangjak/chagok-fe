import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { checkEmail } from '../api/check-Email';

export function useEmailCheck(email: string) {
  const [debouncedEmail, setDebouncedEmail] = useState(email);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedEmail(email), 500);
    return () => clearTimeout(timer);
  }, [email]);

  const { data, isError } = useQuery({
    queryKey: ['checkEmail', debouncedEmail],
    queryFn: () => checkEmail(debouncedEmail),
    enabled: !!debouncedEmail,
    retry: false,
    refetchOnWindowFocus: false,
  });

  return { data, isError };
}
