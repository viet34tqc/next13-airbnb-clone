'use client';

import Button from '@/components/ui/Button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

type Props = {
  reservationId: string;
};

const ReservationCancelButton = ({ reservationId }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCancelReservation = async () => {
    try {
      setIsLoading(true);

      const res = await fetch(`/api/reservations/${reservationId}`, {
        method: 'DELETE',
      });
      const data = await res.json();

      if (!res.ok) {
        setIsLoading(false);
        throw Error(data.message);
      }
      toast.success('Reservation cancelled');
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
      Cancel reservation
    </Button>
  );
};

export default ReservationCancelButton;
