'use client';

import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import toast from 'react-hot-toast';
import { cancelReservation } from '../actions';

type Props = {
  reservationId: string;
};

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'Canceling...' : 'Cancel reservation'}
    </Button>
  );
};

const CancelReservationButton = ({ reservationId }: Props) => {
  const router = useRouter();
  const cancelReservationWithId = cancelReservation.bind(null, reservationId);
  const [state, dispatch] = useFormState(cancelReservationWithId, {
    message: '',
  });

  useEffect(() => {
    if (state.error) {
      toast.error(state.message);
    } else if (state.message) {
      // This is like a workaround to display the toast when we submit the form
      // Normally, we can `revalidatePath` in the server action
      // However, that will make this button component unmount and the toast will never be shown
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

export default CancelReservationButton;
