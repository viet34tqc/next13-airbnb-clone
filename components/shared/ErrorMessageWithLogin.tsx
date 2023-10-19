'use client';

import { useModalStoreActions } from '@/store/useModalStore';
import Button from '../ui/Button';
import ErrorMessage from './ErrorMessage';

type Props = {
  title: string;
  subtitle: string;
};

// This component was used for protected routes
// I have replaced it with nextjs middleware to redirect unauthenticated users to homepage
const ErrorMessageWithLogin = ({
  title = 'Unauthorized',
  subtitle = 'Please login',
}: Props) => {
  const { setModalView } = useModalStoreActions();

  return (
    <ErrorMessage title={title} subtitle={subtitle}>
      <Button onClick={() => setModalView('LOGIN')}>Login</Button>
    </ErrorMessage>
  );
};

export default ErrorMessageWithLogin;
