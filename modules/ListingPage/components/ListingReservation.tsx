'use client';

import Calendar from '@/components/shared/Calendar';
import Button from '@/components/ui/Button';
import { useModalStoreActions } from '@/store/useModalStore';
import { Listing, User } from '@prisma/client';
import { differenceInDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { Range } from 'react-date-range';
import toast from 'react-hot-toast';

interface Props {
  listing: Listing & { user: User };
  currentUser: User | null;
}

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
};

const ListingReservation = ({ listing, currentUser }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const { setModalView } = useModalStoreActions();

  // Calculate the totalPrice from selected dateRange.
  useEffect(() => {
    if (dateRange.startDate && dateRange.endDate) {
      const dayCount = differenceInDays(dateRange.endDate, dateRange.startDate);

      if (dayCount && listing.price) {
        setTotalPrice(dayCount * listing.price);
      } else {
        setTotalPrice(listing.price);
      }
    }
  }, [dateRange, listing.price]);

  const handleCreateReservation = () => {
    if (!currentUser) {
      return setModalView('LOGIN');
    }
    setIsLoading(true);

    fetch('/api/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        listingId: listing?.id,
      }),
    })
      .then(() => {
        toast.success('Listing reserved!');
        setDateRange(initialDateRange);
      })
      .catch(() => {
        toast.error('Something went wrong.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div
      className="
        rounded-xl
        border-[1px]
      border-neutral-200
      "
    >
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {listing.price}</div>
        <div className="font-light text-neutral-600">per night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        onChange={value => setDateRange(value.selection)}
      />
      <hr />
      <div
        className="
          p-4
          flex
          flex-row
          items-center
          justify-between
          flex-wrap
          font-semibold
          text-lg
        "
      >
        <div>Total</div>
        <div>$ {totalPrice}</div>
        <Button
          className="block my-4 w-full"
          disabled={isLoading}
          onClick={handleCreateReservation}
        >
          Reserve
        </Button>
      </div>
    </div>
  );
};

export default ListingReservation;
