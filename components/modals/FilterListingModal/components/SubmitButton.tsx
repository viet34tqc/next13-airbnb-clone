'use client';

import Button from '@/components/ui/Button';
import { useModalStoreActions } from '@/store/useModalStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';

type Props = {
  buttonLabel?: string;
};

const SubmitButton = ({ buttonLabel = 'Submit' }: Props) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const { setModalView } = useModalStoreActions();

  const { handleSubmit, reset } = useFormContext();

  const onSubmit = async (data: FieldValues) => {
    console.log('dsads');
  };
  return (
    <Button type="button" disabled={isLoading} onClick={handleSubmit(onSubmit)}>
      {buttonLabel}
    </Button>
  );
};

export default SubmitButton;
