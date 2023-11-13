'use client';

import Button from '@/components/ui/Button';
import { useFormState, useFormStatus } from 'react-dom';
import { deleteListing } from '../actions';

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
  const deleteListingWithId = deleteListing.bind(null, listingId);
  const [state, dispatch] = useFormState(deleteListingWithId, {
    message: '',
  });

  return (
    <form action={dispatch}>
      <SubmitButton />
    </form>
  );
};

export default DeleteListingButton;
