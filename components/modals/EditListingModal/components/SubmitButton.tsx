'use client';

import Button from '@/components/ui/Button';
import { useModalStoreActions } from '@/store/useModalStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FieldValues, useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';

type Props = {
  buttonLabel?: string;
  listingId: string;
};

const SubmitButton = ({ buttonLabel = 'Submit', listingId }: Props) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const { setModalView } = useModalStoreActions();

  const { handleSubmit, reset } = useFormContext();

  const onSubmit = async (data: FieldValues) => {
    setIsLoading(true);

    try {
      const res = await fetch(`/api/listings/${listingId}`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const resData = await res.json();
      if (!res.ok) {
        throw Error(resData.message || 'Failed to edit listing');
      }
      toast.success('Edited listing successfully!');
      reset();
      router.refresh();
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
