'use client';

import Button from '@/components/ui/Button';
import { useModalStoreActions } from '@/store/useModalStore';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import toast from 'react-hot-toast';
import { ListingFormValues } from '../../types';
import { createNewListing } from '../actions';

type Props = {
  buttonLabel?: string;
};

const SubmitButton = ({ buttonLabel = 'Submit' }: Props) => {
  const router = useRouter();
  const pathName = usePathname();

  const [isLoading, setIsLoading] = useState(false);
  const { setModalView } = useModalStoreActions();

  const { handleSubmit, reset } = useFormContext<ListingFormValues>();

  const onSubmit = async (data: ListingFormValues) => {
    setIsLoading(true);

    const res = await createNewListing(data);
    if (res.error) {
      toast.error(res.message);
    } else if (res.message) {
      toast.success(res.message);
    }
    // If we are on the properties page, refresh the properties page
    if (pathName !== '/properties') {
      router.replace('/');
    }
    setModalView(null);
    setIsLoading(false);
    reset();
  };
  return (
    <Button type="submit" disabled={isLoading} onClick={handleSubmit(onSubmit)}>
      {buttonLabel}
    </Button>
  );
};

export default SubmitButton;
