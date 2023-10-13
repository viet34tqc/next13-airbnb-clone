'use client';

import { useModalStoreActions } from '@/store/useModalStore';
import Button from '../ui/Button';
import ErrorMessage from './ErrorMessage';

type Props = {
  title: string;
  subtitle: string;
};

const ErrorMessageWithLogin = ({ title, subtitle }: Props) => {
  const { setModalView } = useModalStoreActions();

  return (
    <ErrorMessage title="Unauthorized" subtitle="Please login">
      <Button onClick={() => setModalView('LOGIN')}>Login</Button>
    </ErrorMessage>
  );
};

export default ErrorMessageWithLogin;
