'use client';

import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
  listingId: string;
};

const DeleteListingButton = ({ listingId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCancelReservation = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(`/api/listings/${listingId}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (!res.ok) {
        setIsLoading(false);
        throw Error(data.message);
      }
      toast.success('Delete listing successfully');
      router.refresh();
    } catch (error) {
      toast(
        error instanceof Error ? error.message : 'Failed to cancel reservation'
      );
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Button disabled={isLoading} onClick={handleCancelReservation}>
      Delete
    </Button>
  );
};

export default DeleteListingButton;
