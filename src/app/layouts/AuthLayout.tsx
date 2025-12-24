import { Outlet } from 'react-router';
import { SignupStoreProvider } from '@/features/auth/contexts/SignupStoreProvider';

function AuthLayout() {
  return (
    <SignupStoreProvider>
      <Outlet />
    </SignupStoreProvider>
  );
}

export default AuthLayout;
