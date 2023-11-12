'use client';

import Button from '@/components/ui/Button';
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
  const cancelReservationWithId = cancelReservation.bind(null, reservationId);
  const [state, dispatch] = useFormState(cancelReservationWithId, {
    message: '',
  });

  // At the moment, this code cannot be reached
  // Because, when delete successfully, we revalidate '/trips' path
  // So, this component will be unmount
  if (state?.message) {
    toast(state.message);
  }

  return (
    <form action={dispatch}>
      <SubmitButton />
    </form>
  );
};

export default CancelReservationButton;
