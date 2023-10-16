'use client';

import Button from '@/components/ui/Button';
import { useModalStoreActions } from '@/store/useModalStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';

type Props = {
  buttonLabel?: string;
};

const SubmitButton = ({ buttonLabel = 'Submit' }: Props) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const { setModalView } = useModalStoreActions();

  const { handleSubmit, reset } = useFormContext();

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      const res = await fetch('/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (!res.ok) {
        throw Error(resData.message || 'Failed to create listing');
      }
      toast.success('Created listing successfully!');
      reset();
      router.replace('/');
      setModalView(null);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button type="button" disabled={isLoading} onClick={handleSubmit(onSubmit)}>
      {buttonLabel}
    </Button>
  );
};

export default SubmitButton;
