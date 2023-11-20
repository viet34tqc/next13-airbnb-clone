'use client';

import Button from '@/components/ui/Button';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';
import { deleteListing } from '../actions';
import { useRouter } from 'next/navigation';

type Props = {
  listingId: string;
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} type="submit">
      {pending ? 'Deleting' : 'Delete'}
    </Button>
  );
};

const DeleteListingButton = ({ listingId }: Props) => {
  const router = useRouter();
  const deleteListingWithId = deleteListing.bind(null, listingId);
  const [state, dispatch] = useFormState(deleteListingWithId, {
    message: '',
  });

  useEffect(() => {
    if (state.error) {
      toast.error(state.message);
    } else {
      router.refresh();
      toast.success(state.message);
    }
  }, [state, router]);

  return (
    <form action={dispatch}>
      <SubmitButton />
    </form>
  );
};

export default DeleteListingButton;
